"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[180],{2478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"blueprints/controllers/philips_8718699693985","title":"Controller - Philips 8718699693985 Hue Smart Button","description":"Controller automation for executing any kind of action triggered by the provided Philips 8718699693985 Hue Smart Button. Supports Zigbee2MQTT, ZHA, deCONZ.","source":"@site/docs/blueprints/controllers/philips_8718699693985.mdx","sourceDirName":"blueprints/controllers","slug":"/blueprints/controllers/philips_8718699693985","permalink":"/awesome-ha-blueprints/docs/blueprints/controllers/philips_8718699693985","draft":false,"unlisted":false,"editUrl":"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/philips_8718699693985.mdx","tags":[],"version":"current","frontMatter":{"title":"Controller - Philips 8718699693985 Hue Smart Button","description":"Controller automation for executing any kind of action triggered by the provided Philips 8718699693985 Hue Smart Button. Supports Zigbee2MQTT, ZHA, deCONZ."}}');var i=n(7557),r=n(7389),s=n(5561);const l={title:"Controller - Philips 8718699693985 Hue Smart Button",description:"Controller automation for executing any kind of action triggered by the provided Philips 8718699693985 Hue Smart Button. Supports Zigbee2MQTT, ZHA, deCONZ."},a=void 0,d={},h=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Available Hooks",id:"available-hooks",level:2},{value:"Light",id:"light",level:3},{value:"Default Mapping",id:"default-mapping",level:4},{value:"Media Player",id:"media-player",level:3},{value:"Default Mapping",id:"default-mapping-1",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Helper - Last Controller Event",id:"helper---last-controller-event",level:3},{value:"Virtual double press events",id:"virtual-double-press-events",level:3},{value:"Changelog",id:"changelog",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s._x,{id:"philips_8718699693985",category:"controllers"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["This blueprint is part of the ",(0,i.jsx)(t.strong,{children:"Controllers-Hooks Ecosystem"}),". You can read more about this topic ",(0,i.jsx)(t.a,{href:"/docs/controllers-hooks-ecosystem",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This blueprint provides universal support for running any custom action when a button is pressed on the provided Philips 8718699693985 Hue Smart Button. Supports controllers integrated with Zigbee2MQTT, ZHA, deCONZ. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."}),"\n",(0,i.jsx)(t.p,{children:"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."}),"\n",(0,i.jsx)(t.p,{children:"The blueprint also adds support for virtual double button press events, which are not exposed by the controller itself."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Automations created with this blueprint can be connected with one or more ",(0,i.jsx)(t.a,{href:"/docs/blueprints/hooks",children:"Hooks"})," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,i.jsx)(t.a,{href:"/docs/blueprints/controllers/philips_8718699693985#available-hooks",children:"Hooks available for this controller"})," for additional details."]})}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(s.Kg,{id:"zigbee2mqtt"}),"\n",(0,i.jsx)(s.Kg,{id:"zha"}),"\n",(0,i.jsx)(s.Kg,{id:"deconz"}),"\n",(0,i.jsxs)(s.Kg,{name:"Input Text Integration",required:!0,children:[(0,i.jsxs)(t.p,{children:["This integration provides the entity which must be provided to the blueprint in the ",(0,i.jsx)(t.strong,{children:"Helper - Last Controller Event"})," input. Learn more about this helper by reading the dedicated section in the ",(0,i.jsx)(t.a,{href:"#helper---last-controller-event",children:"Additional Notes"}),"."]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/input_text/",children:"Input Text Integration Docs"})})]}),"\n",(0,i.jsx)(t.h2,{id:"inputs",children:"Inputs"}),"\n",(0,i.jsx)(s.G0,{category:"controllers",id:"philips_8718699693985"}),"\n",(0,i.jsx)(t.h2,{id:"available-hooks",children:"Available Hooks"}),"\n",(0,i.jsx)(t.admonition,{title:"Virtual double press actions",type:"note",children:(0,i.jsx)(t.p,{children:"Some of the following mappings might include actions for virtual double press events, which are disabled by default.\nIf you are using a hook mapping which provides an action for a virtual double press event, please make sure to enable support for virtual double press on the corresponding buttons with the corresponding blueprint input."})}),"\n",(0,i.jsx)(t.h3,{id:"light",children:"Light"}),"\n",(0,i.jsx)(t.p,{children:"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."}),"\n",(0,i.jsx)(t.h4,{id:"default-mapping",children:"Default Mapping"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Button short press -> Toggle"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/blueprints/hooks/light",children:"Light Hook docs"})}),"\n",(0,i.jsx)(t.h3,{id:"media-player",children:"Media Player"}),"\n",(0,i.jsx)(t.p,{children:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."}),"\n",(0,i.jsx)(t.h4,{id:"default-mapping-1",children:"Default Mapping"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Button short press -> Play/Pause"}),"\n",(0,i.jsxs)(t.li,{children:["Button double press ",(0,i.jsx)(t.code,{children:"Virtual"})," -> Next track"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/blueprints/hooks/media_player",children:"Media Player Hook docs"})}),"\n",(0,i.jsx)(t.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,i.jsx)(t.h3,{id:"helper---last-controller-event",children:"Helper - Last Controller Event"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"helper_last_controller_event"})," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,i.jsx)(t.a,{href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input",children:"Controllers-Hooks Ecosystem documentation"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"virtual-double-press-events",children:"Virtual double press events"}),"\n",(0,i.jsxs)(t.p,{children:["It's also important to note that the controller doesn't natively support double press events. Instead , this blueprint provides virtual double press events. You can read more about them in the ",(0,i.jsx)(t.a,{href:"/docs/controllers-hooks-ecosystem#virtual-events",children:"general Controllers-Hooks Ecosystem documentation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2021-07-14"}),": first blueprint version ","\ud83c\udf89"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2021-08-02"}),": Improve inputs documentation and organization"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2021-10-26"}),": Standardize blueprints structure and inputs naming across the whole collection. Improve blueprint documentation. No functionality change."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2022-08-08"}),": Optimize characters usage for the ",(0,i.jsx)(t.code,{children:"helper_last_controller_event"})," text input."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2025-01-05"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Added support for Zigbee2MQTT. (",(0,i.jsx)(t.a,{href:"https://github.com/alexdelprete",children:"@alexdelprete"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"Fix regex for updated helper JSON serialization starting from Home Assistant 2023.5.0."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2025-02-13"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:["\u26a0\ufe0f"," ",(0,i.jsx)(t.strong,{children:"Breaking Change"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:["Migrate to Zigbee2MQTT MQTT Device Triggers. (",(0,i.jsx)(t.a,{href:"https://github.com/yarafie",children:"@yarafie"}),")"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"controller_entity"})," input has been deprecated, and ",(0,i.jsx)(t.code,{children:"controller_device"})," is now mandatory.\nIf you are a Zigbee2MQTT user and plan to update this blueprint, please make sure to remove the ",(0,i.jsx)(t.code,{children:"controller_entity"})," input from your automation config and add the device ID of your controller to the ",(0,i.jsx)(t.code,{children:"controller_device"})," input.\nTo obtain the device ID from your controller, configure the automation from the UI and use the device selector dropdown on the ",(0,i.jsx)(t.code,{children:"controller_device"})," input to select your controller."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2025-03-20"}),": Standardized input naming format for controller devices and virtual button actions. No functionality changes."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);