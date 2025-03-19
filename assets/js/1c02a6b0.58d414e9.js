"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[642],{4678:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(8225),o=i(3108),s=i.n(o),r=["color","size","title","className"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a.apply(null,arguments)}var c=(0,n.forwardRef)((function(e,t){var i=e.color,o=void 0===i?"currentColor":i,s=e.size,c=void 0===s?"1em":s,l=e.title,d=void 0===l?null:l,h=e.className,u=void 0===h?"":h,p=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;i[n]=e[n]}return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.includes(i)||{}.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,r);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:c,height:c,fill:o,className:["bi","bi-clipboard-plus",u].filter(Boolean).join(" ")},p),d?n.createElement("title",null,d):null,n.createElement("path",{fillRule:"evenodd",d:"M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"}),n.createElement("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"}),n.createElement("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"}))}));c.propTypes={color:s().string,size:s().oneOfType([s().string,s().number]),title:s().string,className:s().string};const l=c},5316:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(8225);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}},7471:(e,t,i)=>{i.d(t,{_x:()=>f,pd:()=>c,Kg:()=>u});var n=i(8225),o=i(7557);const s=e=>{let{variant:t,children:i}=e;return(0,o.jsx)("span",{className:`badge badge--${t}`,children:i})},r={action:{type:"Action"},addon:{type:"Add-on"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},virtual:{type:"Virtual"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},a={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};const c=function(e){let{selector:t,required:i,name:n,description:c,deprecated:l,virtual:d}=e;const h=t?r[t]:r.none;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("span",{style:a.inputName,children:[n," ",(0,o.jsx)(s,{variant:"primary",children:h.type})," ",i?(0,o.jsxs)(s,{variant:"warning",children:[i," Required"]}):(0,o.jsx)(s,{variant:"info",children:"Optional"})," ",d&&(0,o.jsx)(s,{variant:"secondary",children:"Virtual"}),l&&(0,o.jsx)(s,{variant:"danger",children:"Deprecated"})]}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{style:a.inputDescription,className:"margin-top--sm",children:c}),(0,o.jsx)("hr",{})]})},l={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}},d=e=>{let{name:t,required:i,children:n}=e;return(0,o.jsxs)("div",{className:"margin-bottom--lg",children:[(0,o.jsxs)("div",{style:l.requirementNameContainer,children:[(0,o.jsxs)("h3",{style:l.requirementName,children:[t," "]}),i?(0,o.jsxs)(s,{variant:"warning",children:[i," Required"]}):(0,o.jsx)(s,{variant:"info",children:"Optional"})]}),n]})};const h={zigbee2mqtt:function(e){let{required:t,refers:i,children:n}=e;return(0,o.jsxs)(d,{name:"Zigbee2MQTT Integration",required:t,children:[(0,o.jsxs)("p",{children:["If you plan to integrate the ",i," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."]}),(0,o.jsx)("p",{children:n}),(0,o.jsx)("a",{href:"https://www.zigbee2mqtt.io/",children:"Zigbee2MQTT Docs"})]})},zha:function(e){let{required:t,refers:i,children:n}=e;return(0,o.jsxs)(d,{name:"ZHA Integration",required:t,children:[(0,o.jsxs)("p",{children:["If you plan to integrate the ",i," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."]}),(0,o.jsx)("p",{children:n}),(0,o.jsx)("a",{href:"https://www.home-assistant.io/integrations/zha/",children:"ZHA Integration Docs"})]})},deconz:e=>{let{required:t,refers:i,children:n}=e;return(0,o.jsxs)(d,{name:"deCONZ Integration",required:t,children:[(0,o.jsxs)("p",{children:["If you plan to integrate the ",i," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."]}),(0,o.jsx)("p",{children:n}),(0,o.jsx)("a",{href:"https://www.home-assistant.io/integrations/deconz/",children:"deCONZ Integration Docs"})]})},controller:e=>{let{required:t,children:i}=e;return(0,o.jsxs)(d,{name:"Controller Automation",required:t,children:[(0,o.jsxs)("p",{children:["To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",(0,o.jsx)("b",{children:"making sure that you provide the same controller device used in the corresponding Controller blueprint"}),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."]}),(0,o.jsx)("p",{children:i}),(0,o.jsx)("a",{href:"#supported-controllers",children:"List of Supported Controllers"})," -"," ",(0,o.jsx)("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers",children:"Controllers Docs"})]})}},u=e=>{let{id:t,required:i,name:n,refers:s,children:r}=e;const a=t?h[t]:d;return(0,o.jsx)(a,{name:n,required:i,refers:s,children:r})};var p=i(4678);const m={myHomeAssistantImage:{width:"100%",maxWidth:212}};const f=function(e){let{category:t,id:i}=e;const[s,r]=(0,n.useState)(!1),a=`https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/${t}/${i}/${i}.yaml`;return(0,o.jsxs)("div",{className:"card item shadow--md",children:[(0,o.jsx)("div",{className:"card__header margin-bottom--md",children:(0,o.jsx)("h3",{children:"Import this blueprint"})}),(0,o.jsx)("div",{className:"card__body",children:(0,o.jsxs)("div",{className:"row row--no-gutters",children:[(0,o.jsxs)("div",{className:"col col--6",children:[(0,o.jsx)("h5",{children:"My Home Assistant"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("a",{href:`https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${escape(a)}`,target:"_blank",rel:"noreferrer",children:(0,o.jsx)("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:m.myHomeAssistantImage})}),(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"(Home Assistant 2024.10.0 or higher)"})]})]}),(0,o.jsxs)("div",{className:"col col--6",children:[(0,o.jsx)("h5",{children:"Direct Link"}),(0,o.jsx)("button",{type:"button",className:"button button--"+(s?"success":"primary"),onClick:async()=>{await navigator.clipboard.writeText(a),r(!0)},children:(0,o.jsxs)("span",{children:[(0,o.jsx)(p.A,{size:16}),(0,o.jsxs)("span",{children:[" ",s?"Link Copied!":"Copy Link"]})]})})]})]})})]})}},8539:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"blueprints/automation/persistent_notification_to_mobile","title":"Send Web UI persistent notifications to Mobile Devices","description":"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices.","source":"@site/docs/blueprints/automation/persistent_notification_to_mobile.mdx","sourceDirName":"blueprints/automation","slug":"/blueprints/automation/persistent_notification_to_mobile","permalink":"/awesome-ha-blueprints/docs/blueprints/automation/persistent_notification_to_mobile","draft":false,"unlisted":false,"editUrl":"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/automation/persistent_notification_to_mobile.mdx","tags":[],"version":"current","frontMatter":{"title":"Send Web UI persistent notifications to Mobile Devices","description":"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices."}}');var o=i(7557),s=i(5316),r=i(7471);const a={title:"Send Web UI persistent notifications to Mobile Devices",description:"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices."},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Changelog",id:"changelog",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r._x,{id:"persistent_notification_to_mobile",category:"automation"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["This blueprint enables to send Web UI persistent notifications, (ie. the ones created with the ",(0,o.jsx)(t.code,{children:"persistent_notification.create"})," service) to the specified mobile device or device group. It also provides the option to choose which notifications must be forwarded, based on the provided notification ID."]}),"\n",(0,o.jsx)(t.p,{children:"Working both on iOS and Android devices, mobile notifications can then be organized into a specific group. For Android devices, they can also be assigned to a specific channel (for applying custom notification settings such as sound, vibration, etc.)."}),"\n",(0,o.jsx)(t.p,{children:"This blueprint can be useful in all situations when a web interface persistent notification is desired but the event should be reported also on a mobile device."}),"\n",(0,o.jsxs)(t.p,{children:["Moreover, it can be handy in scenarios when a notification cannot be sent directly to a mobile device, for example for system generated persistent notifications (invalid login attempts, integration setup required, supervisor alerts, etc.) and for integrations/addons which, instead of providing a custom event for triggering automations, use the ",(0,o.jsx)(t.code,{children:"persistent_notification.create"})," service as an event report mechanism."]}),"\n",(0,o.jsx)(t.p,{children:"Once opened on the mobile device, the relative persistent notification in the web UI is not dismissed."}),"\n",(0,o.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(r.Kg,{name:"Persistent Notification Integration",required:!0,children:[(0,o.jsx)(t.p,{children:"You must have this integration enabled on your system to run the automation, since the notifications on the web interface are generated by this integration. This should be activated by default so unless you tweaked the default configuration you're good to go."}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/persistent_notification/",children:"Persistent Notification Integration Docs"})})]}),"\n",(0,o.jsxs)(r.Kg,{name:"Mobile App Integration",required:!0,children:[(0,o.jsx)(t.p,{children:"This integration provides the service to send notification to mobile devices. This should be activated by default so unless you tweaked the default configuration you're good to go."}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/mobile_app/",children:"Mobile App Integration Docs"})})]}),"\n",(0,o.jsxs)(r.Kg,{name:"Home Assistant Companion App",required:!0,children:[(0,o.jsx)(t.p,{children:"The official mobile app for Home Assistant. Make sure to have the Home Assistant Companion App installed and configured on mobile devices you plan to use for this automation."}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://companion.home-assistant.io/docs/notifications/notifications-basic#sending-notifications-to-multiple-devices",children:"Home Assistant Companion App Docs"})})]}),"\n",(0,o.jsxs)(r.Kg,{name:"Notify Group Integration",required:!0,children:[(0,o.jsxs)(t.p,{children:["If you want to simultaneously send the notification to multiple devices, you can define a notification group using this integration in your ",(0,o.jsx)(t.code,{children:"configuration.yaml"}),", then provide the service for the notification group in the ",(0,o.jsx)(t.a,{href:"#mobile-devices-notification-service",children:"Mobile devices notification service input"}),". This integration should be enabled by default. More on how to setup notification groups in the official docs."]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/notify.group/",children:"Notify Group Integration Docs"})})]}),"\n",(0,o.jsx)(t.h2,{id:"inputs",children:"Inputs"}),"\n",(0,o.jsx)(r.pd,{name:"Notification ID",description:"The notification ID of persistent notifications which must be sent to mobile devices. Empty for all notifications. This allows to filter notifications based on their ID before it gets created on the mobile device. For example, if you want to receive notifications on your mobile device for all invalid login attempts, you could set this input to `http-login`, the ID of such persistent notifications.",selector:"text"}),"\n",(0,o.jsx)(r.pd,{name:"Mobile devices notification service",description:"The notification service for mobile devices (eg. service.mobile_app_<your_device_id_here>). You can provide both a notify group or a single notify device here.",selector:"text",required:!0}),"\n",(0,o.jsx)(r.pd,{name:"Replace notifications with same ID",description:"Replace existing notifications with the same notification ID.",selector:"boolean"}),"\n",(0,o.jsx)(r.pd,{name:"(Android only) Notification channel",description:"Android notification channel. Allows to group notifications to then apply custom settings for sound, vibration, etc. Leave blank if you do not want to use this feature.",selector:"text"}),"\n",(0,o.jsx)(r.pd,{name:"Notification group",description:"Notification group for the notifications sent with this automation. Use this to group notifications in the notification tray. Leave blank if you do not want to use this feature.",selector:"text"}),"\n",(0,o.jsx)(t.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,o.jsxs)(t.p,{children:["Please be aware that if you use notification groups which include both iOS and Android devices, some features (like Android Channels and notification groups) don't work. More details in the ",(0,o.jsx)(t.a,{href:"https://companion.home-assistant.io/docs/notifications/notifications-basic#sending-notifications-to-multiple-devices",children:"Home Assistant Companion App Docs"})]}),"\n",(0,o.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"2021-02-01"}),": first blueprint version ","\ud83c\udf89"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"2021-10-26"}),": Standardize blueprints structure and inputs naming across the whole collection. Improve blueprint documentation. No functionality change."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);