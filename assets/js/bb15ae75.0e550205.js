"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[495],{1044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"blueprints/controllers/ikea_ictc_g_1","title":"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer","description":"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports Zigbee2MQTT, ZHA, deCONZ.","source":"@site/docs/blueprints/controllers/ikea_ictc_g_1.mdx","sourceDirName":"blueprints/controllers","slug":"/blueprints/controllers/ikea_ictc_g_1","permalink":"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_ictc_g_1","draft":false,"unlisted":false,"editUrl":"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_ictc_g_1.mdx","tags":[],"version":"current","frontMatter":{"title":"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer","description":"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports Zigbee2MQTT, ZHA, deCONZ."}}');var o=n(7557),r=n(7389),s=n(5561);const l={title:"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports Zigbee2MQTT, ZHA, deCONZ."},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Available Hooks",id:"available-hooks",level:2},{value:"Light",id:"light",level:3},{value:"Default Mapping",id:"default-mapping",level:4},{value:"Media Player",id:"media-player",level:3},{value:"Default Mapping",id:"default-mapping-1",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Helper - Last Controller Event",id:"helper---last-controller-event",level:3},{value:"Changelog",id:"changelog",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s._x,{id:"ikea_ictc_g_1",category:"controllers"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["This blueprint is part of the ",(0,o.jsx)(t.strong,{children:"Controllers-Hooks Ecosystem"}),". You can read more about this topic ",(0,o.jsx)(t.a,{href:"/docs/controllers-hooks-ecosystem",children:"here"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports controllers integrated with Zigbee2MQTT, ZHA, deCONZ. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."}),"\n",(0,o.jsx)(t.p,{children:"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to optionally loop the rotate actions while the remote is rotating either left or right. Once the remote stops rotating, the loop stops as well. This is useful when rotating the controller should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Automations created with this blueprint can be connected with one or more ",(0,o.jsx)(t.a,{href:"/docs/blueprints/hooks",children:"Hooks"})," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,o.jsx)(t.a,{href:"/docs/blueprints/controllers/ikea_ictc_g_1#available-hooks",children:"Hooks available for this controller"})," for additional details."]})}),"\n",(0,o.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(s.Kg,{id:"zigbee2mqtt",children:[(0,o.jsx)(s.Kg,{id:"zha"}),(0,o.jsx)(s.Kg,{id:"deconz"}),(0,o.jsxs)(t.p,{children:["When configuring the remote with Zigbee2MQTT make sure to disable the legacy integration for it, as reported ",(0,o.jsx)(t.a,{href:"https://www.zigbee2mqtt.io/devices/ICTC-G-1.html#legacy-integration",children:"here"}),". This blueprint won't work with controllers with a legacy integration due to their instability and fundamental problems."]})]}),"\n",(0,o.jsxs)(s.Kg,{name:"Input Text Integration",required:!0,children:[(0,o.jsxs)(t.p,{children:["This integration provides the entity which must be provided to the blueprint in the ",(0,o.jsx)(t.strong,{children:"Helper - Last Controller Event"})," input. Learn more about this helper by reading the dedicated section in the ",(0,o.jsx)(t.a,{href:"#helper---last-controller-event",children:"Additional Notes"}),"."]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/input_text/",children:"Input Text Integration Docs"})})]}),"\n",(0,o.jsx)(t.h2,{id:"inputs",children:"Inputs"}),"\n",(0,o.jsx)(s.G0,{category:"controllers",id:"ikea_ictc_g_1"}),"\n",(0,o.jsx)(t.h2,{id:"available-hooks",children:"Available Hooks"}),"\n",(0,o.jsx)(t.h3,{id:"light",children:"Light"}),"\n",(0,o.jsx)(t.p,{children:"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."}),"\n",(0,o.jsx)(t.h4,{id:"default-mapping",children:"Default Mapping"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Rotate left -> Brightness down (continuous, until stop)"}),"\n",(0,o.jsx)(t.li,{children:"Rotate right -> Brightness up (continuous, until stop)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/blueprints/hooks/light",children:"Light Hook docs"})}),"\n",(0,o.jsx)(t.h3,{id:"media-player",children:"Media Player"}),"\n",(0,o.jsx)(t.p,{children:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."}),"\n",(0,o.jsx)(t.h4,{id:"default-mapping-1",children:"Default Mapping"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Rotate left -> Volume down (continuous, until stop)"}),"\n",(0,o.jsx)(t.li,{children:"Rotate right -> Volume up (continuous, until stop)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/blueprints/hooks/media_player",children:"Media Player Hook docs"})}),"\n",(0,o.jsx)(t.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,o.jsx)(t.h3,{id:"helper---last-controller-event",children:"Helper - Last Controller Event"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"helper_last_controller_event"})," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,o.jsx)(t.a,{href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input",children:"Controllers-Hooks Ecosystem documentation"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The helper is used to determine stop rotation events when the controller is integrated with Zigbee2MQTT, ZHA, because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different rotation events, so the blueprint must store the previous rotation."}),"\n",(0,o.jsxs)(t.p,{children:["This blueprint provides beta support for controllers integrated with deCONZ, since not all the supported events are mapped for this integration. If you are using the IKEA ICTC-G-1 with deCONZ and would like to help, you can reach out ",(0,o.jsx)(t.a,{href:"https://community.home-assistant.io/t/awesome-ha-blueprints-a-curated-list-of-blueprints-easily-create-controller-based-automations-remotes-switches-for-controlling-lights-media-players-and-more/256687",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2021-03-26"}),": first blueprint version ","\ud83c\udf89"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2021-04-19"}),": Fix stop rotation events not being detected with deCONZ"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2021-04-23"}),": Fix deCONZ events not being recognized"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2021-05-26"}),":"]}),"\n",(0,o.jsxs)(t.p,{children:["\u26a0\ufe0f"," ",(0,o.jsx)(t.strong,{children:"Breaking Change"}),":"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"helper_last_controller_event"})," is now a mandatory input. It also simplifies the blueprint setup (reducing issues due to improper configuration missing the helper, which was required only in certain conditions as was stated in the docs), and provides support for advanced features which might be developed in the future."]}),"\n",(0,o.jsxs)(t.p,{children:["If you plan to update this blueprint, please make sure to provide a valid ",(0,o.jsx)(t.code,{children:"input_text"})," entity for the ",(0,o.jsx)(t.code,{children:"helper_last_controller_event"})," input. You should create a separate ",(0,o.jsx)(t.code,{children:"input_text"})," for each Controller blueprint you're configuring, since using the same for multiple automation could lead to inconsistencies and undefined behaviour."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Other changes:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\ud83c\udf89"," Add Debouncing support. Debouncing avoids duplicate action runs which might occur with certain controllers and integrations. The feature is disabled by default, check the documentation to find out how to enable it"]}),"\n",(0,o.jsx)(t.li,{children:"Prevent undesired endless loops, which might occur in rare cases when the corresponding stop event is not received, by running loop actions a finite number of times, customizable with two new blueprint inputs"}),"\n",(0,o.jsx)(t.li,{children:"Use any RAW stop event (left/right) to identify the stop event corresponding to the current remote rotation"}),"\n",(0,o.jsx)(t.li,{children:"Fix inputs wrongly marked as required"}),"\n",(0,o.jsx)(t.li,{children:"Fix for Zigbee2MQTT reporting null state changes"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2021-07-04"}),": Fix deCONZ rotation stop events not being properly recognized"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2021-08-02"}),": Improve inputs documentation and organization"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2021-10-26"}),": Standardize blueprints structure and inputs naming across the whole collection. Improve blueprint documentation. No functionality change."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2022-08-08"}),": Optimize characters usage for the ",(0,o.jsx)(t.code,{children:"helper_last_controller_event"})," text input."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2025-02-13"}),":"]}),"\n",(0,o.jsxs)(t.p,{children:["\u26a0\ufe0f"," ",(0,o.jsx)(t.strong,{children:"Breaking Change"}),":"]}),"\n",(0,o.jsxs)(t.p,{children:["Migrate to Zigbee2MQTT MQTT Device Triggers. (",(0,o.jsx)(t.a,{href:"https://github.com/yarafie",children:"@yarafie"}),")"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"controller_entity"})," input has been deprecated, and ",(0,o.jsx)(t.code,{children:"controller_device"})," is now mandatory.\nIf you are a Zigbee2MQTT user and plan to update this blueprint, please make sure to remove the ",(0,o.jsx)(t.code,{children:"controller_entity"})," input from your automation config and add the device ID of your controller to the ",(0,o.jsx)(t.code,{children:"controller_device"})," input.\nTo obtain the device ID from your controller, configure the automation from the UI and use the device selector dropdown on the ",(0,o.jsx)(t.code,{children:"controller_device"})," input to select your controller."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2025-03-20"}),": Standardized input naming format for controller devices and virtual button actions. No functionality changes."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);