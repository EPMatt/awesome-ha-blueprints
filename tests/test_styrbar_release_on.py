"""Run with Python 3.14 and homeassistant==2026.10.0 installed.

Exercise the expanded blueprint with Home Assistant's real automation engine.
Actions emit test events only; no devices or external integrations are used.
"""
import asyncio
import copy
import os
from pathlib import Path
import tempfile
import unittest

import yaml
from homeassistant import bootstrap, loader, config_entries
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component

BLUEPRINT = Path(os.environ.get('STYRBAR_BLUEPRINT', Path(__file__).resolve().parents[1] / 'blueprints/controllers/ikea_e2001_e2002/ikea_e2001_e2002.yaml'))

class Input(str):
    pass

class Loader(yaml.SafeLoader):
    pass

Loader.add_constructor('!input', lambda loader, node: Input(loader.construct_scalar(node)))

class StyrbarTest(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.directory = tempfile.TemporaryDirectory()
        asyncio.get_running_loop().set_debug(False)
        self.hass = HomeAssistant(self.directory.name)
        loader.async_setup(self.hass)
        self.hass.config_entries = config_entries.ConfigEntries(self.hass, {})
        await bootstrap.async_load_base_functionality(self.hass)
        self.events = []
        self.hass.bus.async_listen('styrbar_test', lambda event: self.events.append(event.data['action']))
        self.helper = 'input_text.styrbar_test'
        self.hass.states.async_set(self.helper, '')
        async def store(call):
            self.hass.states.async_set(self.helper, call.data['value'])
        self.hass.services.async_register('input_text', 'set_value', store)
        await async_setup_component(self.hass, 'homeassistant', {})

    async def asyncTearDown(self):
        await self.hass.async_stop()
        self.directory.cleanup()

    async def setup_blueprint(self, double=False, integration='ZHA', debounce=0, window=200):
        source = yaml.load(BLUEPRINT.read_text(), Loader=Loader)
        inputs = {key: value.get('default') for key, value in source['blueprint']['input'].items()}
        inputs.update(integration=integration, controller_device='test-device',
                      helper_last_controller_event=self.helper, helper_release_on_delay=window,
                      helper_debounce_delay=debounce, button_up_double_press=double,
                      helper_double_press_delay=100)
        for key in inputs:
            if key.startswith('action_button_'):
                inputs[key] = [{'event': 'styrbar_test', 'event_data': {'action': key.removeprefix('action_')}}]
        def expand(value):
            if isinstance(value, Input):
                return copy.deepcopy(inputs[value])
            if isinstance(value, dict):
                return {key: expand(item) for key, item in value.items()}
            if isinstance(value, list):
                return [expand(item) for item in value]
            return value
        config = expand({key: value for key, value in source.items() if key != 'blueprint'})
        # Use the blueprint's event trigger; MQTT requires a paired device registry.
        trigger_key = 'triggers' if 'triggers' in config else 'trigger'
        config[trigger_key] = [item for item in config[trigger_key] if item.get('trigger', item.get('platform')) == 'event']
        config.update(id='styrbar-test', alias='Styrbar test')
        self.assertTrue(await async_setup_component(self.hass, 'automation', {'automation': [config]}))
        await self.hass.async_start()
        await asyncio.sleep(0.03)

    async def fire(self, command, args=(), pause=0.03):
        self.hass.bus.async_fire('zha_event', {'device_id': 'test-device', 'command': command, 'args': list(args)})
        await asyncio.sleep(pause)

    async def test_short_up_is_immediate(self):
        await self.setup_blueprint()
        await self.fire('on')
        self.assertEqual(self.events, ['button_up_short'])

    async def test_directional_hold_trailing_on_and_later_real_up(self):
        await self.setup_blueprint()
        await self.fire('hold', [3328, 0])
        await self.fire('press', [2, 0, 0])
        await self.fire('release', [0])
        await self.fire('on')
        await asyncio.sleep(0.25)
        self.assertEqual(self.events, ['button_right_long', 'button_right_release'])
        await self.fire('on')
        await asyncio.sleep(0.25)
        self.assertEqual(self.events[-1], 'button_up_short')

    async def test_left_hold_trailing_on(self):
        await self.setup_blueprint()
        await self.fire('hold', [3329, 0])
        await self.fire('release', [0])
        await self.fire('on')
        self.assertEqual(self.events, ['button_left_long', 'button_left_release'])

    async def test_other_release_does_not_suppress_up(self):
        await self.setup_blueprint()
        await self.fire('hold', [3328, 0])
        await self.fire('release', [9660])
        await self.fire('on')
        self.assertEqual(self.events, ['button_right_long', 'button_right_release', 'button_up_short'])

    async def test_old_release_does_not_swallow_up(self):
        await self.setup_blueprint()
        await self.fire('hold', [3329, 0])
        await self.fire('release', [0], pause=0.25)
        await self.fire('on')
        await asyncio.sleep(0.25)
        self.assertEqual(self.events, ['button_left_long', 'button_left_release', 'button_up_short'])

    async def test_double_up(self):
        await self.setup_blueprint(double=True)
        await self.fire('on')
        await self.fire('on')
        await asyncio.sleep(0.25)
        self.assertEqual(self.events, ['button_up_double'])

    async def test_down_and_directional_shorts(self):
        await self.setup_blueprint()
        await self.fire('off')
        await self.fire('press', [257, 13, 0])
        await self.fire('press', [256, 13, 0])
        self.assertEqual(self.events, ['button_down_short', 'button_left_short', 'button_right_short'])

    async def test_suppression_can_be_disabled(self):
        await self.setup_blueprint(window=0)
        await self.fire('hold', [3329, 0])
        await self.fire('release', [0])
        await self.fire('on')
        self.assertEqual(self.events[-1], 'button_up_short')

    async def test_trailing_on_with_double_enabled(self):
        await self.setup_blueprint(double=True)
        await self.fire('hold', [3328, 0])
        await self.fire('release', [0])
        await self.fire('on', pause=0.25)
        self.assertEqual(self.events, ['button_right_long', 'button_right_release'])

    async def test_deconz_up_is_immediate(self):
        await self.setup_blueprint(integration='deCONZ')
        self.hass.bus.async_fire('deconz_event', {'device_id': 'test-device', 'event': 1002})
        await asyncio.sleep(0.05)
        self.assertEqual(self.events, ['button_up_short'])

if __name__ == '__main__':
    unittest.main()
