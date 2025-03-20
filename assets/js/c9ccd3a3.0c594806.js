"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[78],{4678:(e,n,r)=>{r.d(n,{A:()=>d});var t=r(8225),i=r(3108),o=r.n(i),s=["color","size","title","className"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l.apply(null,arguments)}var a=(0,t.forwardRef)((function(e,n){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,a=void 0===o?"1em":o,d=e.title,c=void 0===d?null:d,h=e.className,p=void 0===h?"":h,u=function(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.includes(t))continue;r[t]=e[t]}return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,s);return t.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:i,className:["bi","bi-clipboard-plus",p].filter(Boolean).join(" ")},u),c?t.createElement("title",null,c):null,t.createElement("path",{fillRule:"evenodd",d:"M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"}),t.createElement("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"}),t.createElement("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"}))}));a.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),title:o().string,className:o().string};const d=a},5058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"blueprints/hooks/media_player","title":"Hook - Media Player","description":"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection.","source":"@site/docs/blueprints/hooks/media_player.mdx","sourceDirName":"blueprints/hooks","slug":"/blueprints/hooks/media_player","permalink":"/awesome-ha-blueprints/docs/blueprints/hooks/media_player","draft":false,"unlisted":false,"editUrl":"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/hooks/media_player.mdx","tags":[],"version":"current","frontMatter":{"title":"Hook - Media Player","description":"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."}}');var i=r(7557),o=r(7389),s=r(7471);const l={title:"Hook - Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Supported Controllers",id:"supported-controllers",level:2},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Changelog",id:"changelog",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s._x,{id:"media_player",category:"hooks"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["This blueprint is part of the ",(0,i.jsx)(n.strong,{children:"Controllers-Hooks Ecosystem"}),". You can read more about this topic ",(0,i.jsx)(n.a,{href:"/docs/controllers-hooks-ecosystem",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["An automation created with this blueprint must be linked to a ",(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers",children:"Controller"})," automation. Controllers are blueprints which allow to easily integrate a wide range of controllers and use them to run a set of actions when interacting with them. They expose an abstract interface used by Hooks to create controller-based automations."]}),(0,i.jsxs)(n.p,{children:["See the list of ",(0,i.jsx)(n.a,{href:"#supported-controllers",children:"Controllers supported by this Hook"})," for additional details."]})]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(s.Kg,{id:"controller",required:!0}),"\n",(0,i.jsxs)(s.Kg,{name:"Media Player Integration",required:!0,children:[(0,i.jsx)(n.p,{children:"This integration provides the entity which represents a media player in Home Assistant. It should be activated by default so unless you tweaked the default configuration you're good to go."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.home-assistant.io/integrations/media_player/",children:"Media Player Integration Docs"})})]}),"\n",(0,i.jsx)(n.h2,{id:"inputs",children:"Inputs"}),"\n",(0,i.jsx)(s.pd,{name:"Controller Device",description:"The controller device which will control the Media Player. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as a Device. This value should match the one specified in the corresponding Controller automation.",selector:"device",required:!0}),"\n",(0,i.jsx)(s.pd,{name:"Controller model",description:"The model for the controller used in this automation. Choose a value from the list of supported controllers.",selector:"select",required:!0}),"\n",(0,i.jsx)(s.pd,{name:"Media Player",description:"Media player which will be controlled with this automation.",selector:"entity",required:!0}),"\n",(0,i.jsx)(s.pd,{name:"Volume steps - short actions",description:"Number of steps from min to max volume when controlling volume with short actions (eg. button press), if the media player supports it.",selector:"number"}),"\n",(0,i.jsx)(s.pd,{name:"Volume steps - long actions",description:"Number of steps from min to max volume when controlling volume with long actions (eg. button hold or controller rotation), if the media player supports it.",selector:"number"}),"\n",(0,i.jsx)(n.h2,{id:"supported-controllers",children:"Supported Controllers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/xiaomi_wxkg11lm",children:"Aqara WXKG11LM Wireless Mini Switch"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/ikea_e1524_e1810",children:"IKEA E1524/E1810 TR\xc5DFRI Wireless 5-Button Remote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/ikea_e1743",children:"IKEA E1743 TR\xc5DFRI On/Off Switch & Dimmer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/ikea_e1744",children:"IKEA E1744 SYMFONISK Rotary Remote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/ikea_e1766",children:"IKEA E1766 TR\xc5DFRI Open/Close Remote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/ikea_e1812",children:"IKEA E1812 TR\xc5DFRI Shortcut button"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/ikea_e2001_e2002",children:"IKEA E2001/E2002 STYRBAR Remote control"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/ikea_e2201",children:"IKEA E2201 RODRET Dimmer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/ikea_ictc_g_1",children:"IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/osram_ac025xx00nj",children:"OSRAM AC025XX00NJ SMART+ Switch Mini"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/philips_324131092621",children:"Philips 324131092621 Hue Dimmer switch"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/philips_8718699693985",children:"Philips 8718699693985 Hue Smart Button"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/philips_929002398602",children:"Philips 929002398602 Hue Dimmer switch v2"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/sonoff_snzb01",children:"SONOFF SNZB-01 Wireless Switch"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/xiaomi_wxcjkg11lm",children:"Xiaomi WXCJKG11LM Aqara Opple 2 button remote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/xiaomi_wxcjkg12lm",children:"Xiaomi WXCJKG12LM Aqara Opple 4 button remote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/xiaomi_wxcjkg13lm",children:"Xiaomi WXCJKG13LM Aqara Opple 6 button remote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/blueprints/controllers/xiaomi_wxkg11lm",children:"Xiaomi WXKG01LM Mi Wireless Switch"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,i.jsxs)(n.p,{children:["Not all media players support the customization of the number of steps for volume control, due to the fact that some of them do not expose their current volume level to Home Assistant. In these situations, the automation will fallback to the ",(0,i.jsx)(n.code,{children:"media_player.volume_up"})," and ",(0,i.jsx)(n.code,{children:"media_player.volume_down"})," services."]}),"\n",(0,i.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-03-04"}),": first blueprint version ","\ud83c\udf89"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-03-07"}),": add support for IKEA E1744 SYMFONISK rotary remote"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-03-14"}),": add support for IKEA E1812 Shortcut button, fix E1743 naming"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-03-25"}),": update action mapping for IKEA E1744. If you're using this Hook with an IKEA E1744, please update also the corresponding Controller blueprint"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-03-26"}),": add the ability to specify number of steps from min to max volume, both for short and long actions, when controlling the media player"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-03-27"}),": Add support for Philips Hue dimmer switch"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-04-19"}),": remove unused variable, fix warnings for undefined variables in Home Assistant Core >=2021.4.0"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-05-16"}),": Add support for Osram SMART+ Switch Mini"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-07-03"}),": Add support for Philips Hue Smart Button"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-08-02"}),": Improve inputs documentation and organization"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-10-26"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Standardize blueprints structure and inputs naming across the whole collection."}),"\n",(0,i.jsx)(n.li,{children:"Improve blueprint documentation."}),"\n",(0,i.jsxs)(n.li,{children:["\ud83c\udf89"," Add support for alternate mappings. Additional mappings for currently supported controllers will be added from now on. Refer to the documentation of your controller for more details."]}),"\n",(0,i.jsxs)(n.li,{children:["\u26a0\ufe0f"," ",(0,i.jsx)(n.strong,{children:"Breaking Change"}),": update controller names in the ",(0,i.jsx)(n.code,{children:"Controller Model"})," input, to match the full name of controllers, prevent ambiguities and enable support for alternate mappings. After updating this blueprint, please reconfigure your automations by selecting again the value for the ",(0,i.jsx)(n.code,{children:"Controller Model"})," input, matching the full name of the controller you're using with this hook."]}),"\n",(0,i.jsx)(n.li,{children:"Fix typo for IKEA E1524/E1810 center button long press action in mapping definition."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-10-29"}),": Add support for IKEA E1766 TR\xc5DFRI Open/Close Remote."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-11-07"}),": Add support for IKEA E2001/E2002 STYRBAR Remote control."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-11-21"}),": Add support for Philips 929002398602 Hue Dimmer switch v2."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2021-12-03"}),": Add support for Xiaomi WXCJKG11LM, WXCJKG12LM, WXCJKG13LM."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2022-07-22"}),": Add support for Xiaomi WXKG11LM."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2022-07-30"}),": Add support for SONOFF SNZB-01."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2025-02-13"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,i.jsx)(n.strong,{children:"Breaking Change"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["Migrate to Zigbee2MQTT MQTT Device Triggers. (",(0,i.jsx)(n.a,{href:"https://github.com/yarafie",children:"@yarafie"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"controller_entity"})," input has been deprecated, and ",(0,i.jsx)(n.code,{children:"controller_device"})," is now mandatory.\nIf you are a Zigbee2MQTT user and plan to update this blueprint, please make sure to remove the ",(0,i.jsx)(n.code,{children:"controller_entity"})," input from your automation config and add the device ID of your controller to the ",(0,i.jsx)(n.code,{children:"controller_device"})," input.\nTo obtain the device ID from your controller, configure the automation from the UI and use the device selector dropdown on the ",(0,i.jsx)(n.code,{children:"controller_device"})," input to select your controller."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2025-02-16"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,i.jsx)(n.strong,{children:"Breaking Change"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"Add support for Xiaomi WXKG01LM Mi Wireless Switch, rename Xiaomi WXKG11LM Aqara Wireless Switch Mini to Aqara WXKG11LM Wireless Mini Switch"}),"\n",(0,i.jsxs)(n.p,{children:["If you had configured the ",(0,i.jsx)(n.code,{children:"controller_model"})," input to ",(0,i.jsx)(n.code,{children:"Xiaomi WXKG11LM Aqara Wireless Switch Mini"}),", please change it to ",(0,i.jsx)(n.code,{children:"Aqara WXKG11LM Wireless Mini Switch"}),".\nThe change has been implemented to match the controller with the correct manufacturer name (Aqara)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2025-03-20"}),": Added support for IKEA E2201 RODRET Dimmer. (",(0,i.jsx)(n.a,{href:"https://github.com/yarafie",children:"@yarafie"}),")"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7389:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(8225);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}},7471:(e,n,r)=>{r.d(n,{_x:()=>x,pd:()=>a,Kg:()=>p});var t=r(8225),i=r(7557);const o=e=>{let{variant:n,children:r}=e;return(0,i.jsx)("span",{className:`badge badge--${n}`,children:r})},s={action:{type:"Action"},addon:{type:"Add-on"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},virtual:{type:"Virtual"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},l={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};const a=function(e){let{selector:n,required:r,name:t,description:a,deprecated:d,virtual:c}=e;const h=n?s[n]:s.none;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("span",{style:l.inputName,children:[t," ",(0,i.jsx)(o,{variant:"primary",children:h.type})," ",r?(0,i.jsxs)(o,{variant:"warning",children:[r," Required"]}):(0,i.jsx)(o,{variant:"info",children:"Optional"})," ",c&&(0,i.jsx)(o,{variant:"secondary",children:"Virtual"}),d&&(0,i.jsx)(o,{variant:"danger",children:"Deprecated"})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{style:l.inputDescription,className:"margin-top--sm",children:a}),(0,i.jsx)("hr",{})]})},d={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}},c=e=>{let{name:n,required:r,children:t}=e;return(0,i.jsxs)("div",{className:"margin-bottom--lg",children:[(0,i.jsxs)("div",{style:d.requirementNameContainer,children:[(0,i.jsxs)("h3",{style:d.requirementName,children:[n," "]}),r?(0,i.jsxs)(o,{variant:"warning",children:[r," Required"]}):(0,i.jsx)(o,{variant:"info",children:"Optional"})]}),t]})};const h={zigbee2mqtt:function(e){let{required:n,refers:r,children:t}=e;return(0,i.jsxs)(c,{name:"Zigbee2MQTT Integration",required:n,children:[(0,i.jsxs)("p",{children:["If you plan to integrate the ",r," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."]}),(0,i.jsx)("p",{children:t}),(0,i.jsx)("a",{href:"https://www.zigbee2mqtt.io/",children:"Zigbee2MQTT Docs"})]})},zha:function(e){let{required:n,refers:r,children:t}=e;return(0,i.jsxs)(c,{name:"ZHA Integration",required:n,children:[(0,i.jsxs)("p",{children:["If you plan to integrate the ",r," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."]}),(0,i.jsx)("p",{children:t}),(0,i.jsx)("a",{href:"https://www.home-assistant.io/integrations/zha/",children:"ZHA Integration Docs"})]})},deconz:e=>{let{required:n,refers:r,children:t}=e;return(0,i.jsxs)(c,{name:"deCONZ Integration",required:n,children:[(0,i.jsxs)("p",{children:["If you plan to integrate the ",r," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."]}),(0,i.jsx)("p",{children:t}),(0,i.jsx)("a",{href:"https://www.home-assistant.io/integrations/deconz/",children:"deCONZ Integration Docs"})]})},controller:e=>{let{required:n,children:r}=e;return(0,i.jsxs)(c,{name:"Controller Automation",required:n,children:[(0,i.jsxs)("p",{children:["To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",(0,i.jsx)("b",{children:"making sure that you provide the same controller device used in the corresponding Controller blueprint"}),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."]}),(0,i.jsx)("p",{children:r}),(0,i.jsx)("a",{href:"#supported-controllers",children:"List of Supported Controllers"})," -"," ",(0,i.jsx)("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers",children:"Controllers Docs"})]})}},p=e=>{let{id:n,required:r,name:t,refers:o,children:s}=e;const l=n?h[n]:c;return(0,i.jsx)(l,{name:t,required:r,refers:o,children:s})};var u=r(4678);const m={myHomeAssistantImage:{width:"100%",maxWidth:212}};const x=function(e){let{category:n,id:r}=e;const[o,s]=(0,t.useState)(!1),l=`https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/${n}/${r}/${r}.yaml`;return(0,i.jsxs)("div",{className:"card item shadow--md",children:[(0,i.jsx)("div",{className:"card__header margin-bottom--md",children:(0,i.jsx)("h3",{children:"Import this blueprint"})}),(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)("div",{className:"row row--no-gutters",children:[(0,i.jsxs)("div",{className:"col col--6",children:[(0,i.jsx)("h5",{children:"My Home Assistant"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("a",{href:`https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${escape(l)}`,target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:m.myHomeAssistantImage})}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{children:"(Home Assistant 2024.10.0 or higher)"})]})]}),(0,i.jsxs)("div",{className:"col col--6",children:[(0,i.jsx)("h5",{children:"Direct Link"}),(0,i.jsx)("button",{type:"button",className:"button button--"+(o?"success":"primary"),onClick:async()=>{await navigator.clipboard.writeText(l),s(!0)},children:(0,i.jsxs)("span",{children:[(0,i.jsx)(u.A,{size:16}),(0,i.jsxs)("span",{children:[" ",o?"Link Copied!":"Copy Link"]})]})})]})]})})]})}}}]);