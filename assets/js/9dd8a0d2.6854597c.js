/*! For license information please see 9dd8a0d2.6854597c.js.LICENSE.txt */
(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[617],{6120:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var o=n(8225),i=n(3372),s=n(1947),r=n(7343),c=n(4983),a=n(9876);const l={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO"};var u=n(8484),p=n.n(u),d=function(e){var t=e.condition,n=e.wrapper,o=e.children;return t?n(o):o};function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}var f,m="top",y="bottom";!function(e){e.STRICT="strict",e.LAX="lax",e.NONE="none"}(f||(f={}));var v="hidden",g="byCookieValue",C="CookieConsent",x=["children"],k={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:y,visible:g,onAccept:function(e){},onDecline:function(){},cookieName:C,cookieValue:"true",declineCookieValue:"false",setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:f.LAX,ButtonComponent:function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,x);return o.createElement("button",Object.assign({},n),t)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{},customButtonProps:{},customDeclineButtonProps:{},customButtonWrapperAttributes:{},style:{},buttonStyle:{},declineButtonStyle:{},contentStyle:{},overlayStyle:{}},S={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},O=function(e){return e+"-legacy"},w=function(e){var t,n;function i(){var t;return(t=e.apply(this,arguments)||this).state=S,t.handleScroll=function(){var e=b({},k,t.props).acceptOnScrollPercentage,n=document.documentElement,o=document.body,i="scrollTop",s="scrollHeight";(n[i]||o[i])/((n[s]||o[s])-n.clientHeight)*100>e&&t.accept(!0)},t.removeScrollListener=function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,h(t,n);var s=i.prototype;return s.componentDidMount=function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))},s.componentWillUnmount=function(){this.removeScrollListener()},s.accept=function(e){var t;void 0===e&&(e=!1);var n=b({},k,this.props),o=n.cookieName,i=n.cookieValue,s=n.hideOnAccept,r=n.onAccept;this.setCookie(o,i),r(null!=(t=e)&&t),s&&(this.setState({visible:!1}),this.removeScrollListener())},s.overlayClick=function(){var e=b({},k,this.props),t=e.acceptOnOverlayClick,n=e.onOverlayClick;t&&this.accept(),n()},s.decline=function(){var e=b({},k,this.props),t=e.cookieName,n=e.declineCookieValue,o=e.hideOnDecline,i=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),i(),o&&this.setState({visible:!1})},s.setCookie=function(e,t){var n=this.props,o=n.extraCookieOptions,i=n.expires,s=n.sameSite,r=this.props.cookieSecurity;void 0===r&&(r=!window.location||"https:"===window.location.protocol);var c=b({expires:i},o,{sameSite:s,secure:r});s===f.NONE&&p().set(O(e),t,c),p().set(e,t,c)},s.getCookieValue=function(){return function(e){void 0===e&&(e=C);var t=p().get(e);return void 0===t?p().get(O(e)):t}(this.props.cookieName)},s.render=function(){var e=this;switch(this.props.visible){case v:return null;case g:if(!this.state.visible)return null}var t=this.props,n=t.location,i=t.style,s=t.buttonStyle,r=t.declineButtonStyle,c=t.contentStyle,a=t.disableStyles,l=t.buttonText,u=t.declineButtonText,p=t.containerClasses,h=t.contentClasses,f=t.buttonClasses,C=t.buttonWrapperClasses,x=t.declineButtonClasses,k=t.buttonId,S=t.declineButtonId,O=t.disableButtonStyles,w=t.enableDeclineButton,j=t.flipButtons,B=t.ButtonComponent,A=t.overlay,N=t.overlayClasses,D=t.overlayStyle,E=t.ariaAcceptLabel,_=t.ariaDeclineLabel,I=t.customContainerAttributes,L=t.customContentAttributes,T=t.customButtonProps,P=t.customDeclineButtonProps,R=t.customButtonWrapperAttributes,z={},U={},V={},W={},H={};switch(a?(z=Object.assign({},i),U=Object.assign({},s),V=Object.assign({},r),W=Object.assign({},c),H=Object.assign({},D)):(z=Object.assign({},b({},this.state.style,i)),W=Object.assign({},b({},this.state.contentStyle,c)),H=Object.assign({},b({},this.state.overlayStyle,D)),O?(U=Object.assign({},s),V=Object.assign({},r)):(U=Object.assign({},b({},this.state.buttonStyle,s)),V=Object.assign({},b({},this.state.declineButtonStyle,r)))),n){case m:z.top="0";break;case y:z.bottom="0"}var J=[];return w&&J.push(o.createElement(B,Object.assign({key:"declineButton",style:V,className:x,id:S,"aria-label":_,onClick:function(){e.decline()}},P),u)),J.push(o.createElement(B,Object.assign({key:"acceptButton",style:U,className:f,id:k,"aria-label":E,onClick:function(){e.accept()}},T),l)),j&&J.reverse(),o.createElement(d,{condition:A,wrapper:function(t){return o.createElement("div",{style:H,className:N,onClick:function(){e.overlayClick()}},t)}},o.createElement("div",Object.assign({className:""+p,style:z},I),o.createElement("div",Object.assign({style:W,className:h},L),this.props.children),o.createElement("div",Object.assign({className:""+C},R),J.map((function(e){return e})))))},i}(o.Component);w.defaultProps=k;const j=w;var B=n(1654),A=n(7557);function N(){const[e,t]=o.useState(!1),n=(0,B.zy)();o.useEffect((()=>{e&&"undefined"!=typeof dataLayer&&dataLayer.push({event:"pageview"})}),[n]);const u=(0,c.A)(),{siteConfig:p={}}=u;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(j,{location:"bottom",buttonText:"Accept cookies",cookieName:"AnalyticsConsent",style:{background:"#2B373B"},buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150,enableDeclineButton:!0,declineButtonText:"Reject cookies",onAccept:()=>t(!0),children:"This website uses cookies to improve the user experience."}),(0,A.jsx)(s.A,{title:`${p.title}`,description:`${p.tagline}`,children:(0,A.jsx)("header",{className:(0,i.A)("hero hero--primary",l.heroBanner),style:{minHeight:"70vh"},children:(0,A.jsxs)("div",{className:"container",children:[(0,A.jsx)("img",{alt:"Awesome HA Blueprints logo",src:(0,a.Ay)("img/logo.svg"),className:"margin-bottom--lg",style:{width:80}}),(0,A.jsx)("h1",{className:"hero__title",style:{color:"white"},children:p.title}),(0,A.jsxs)("p",{className:"hero__subtitle",style:{color:"white"},children:["A curated collection of blueprints for Home Assistant.",(0,A.jsx)("br",{}),"Reliable, customizable, fully tested by the community."]}),(0,A.jsxs)("div",{className:`row margin-top--xl ${l.buttons}`,children:[(0,A.jsx)("div",{className:"col margin-bottom--lg",children:(0,A.jsx)(r.A,{className:(0,i.A)("button button button--secondary button--lg margin-horiz--sm",l.getStarted),to:(0,a.Ay)("docs/introduction"),children:"Get Started"})}),(0,A.jsx)("div",{className:"col margin-bottom--lg",children:(0,A.jsx)(r.A,{className:(0,i.A)("button button button--secondary button--lg margin-horiz--sm",l.getStarted),to:(0,a.Ay)("docs/blueprints"),children:"Browse Blueprints"})})]})]})})})]})}},8484:(e,t,n)=>{var o,i;!function(s){if(void 0===(i="function"==typeof(o=s)?o.call(t,n,t,e):o)||(e.exports=i),e.exports=s(),!!0){var r=window.Cookies,c=window.Cookies=s();c.noConflict=function(){return window.Cookies=r,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function i(){}function s(t,n,s){if("undefined"!=typeof document){"number"==typeof(s=e({path:"/"},i.defaults,s)).expires&&(s.expires=new Date(1*new Date+864e5*s.expires)),s.expires=s.expires?s.expires.toUTCString():"";try{var r=JSON.stringify(n);/^[\{\[]/.test(r)&&(n=r)}catch(l){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var a in s)s[a]&&(c+="; "+a,!0!==s[a]&&(c+="="+s[a].split(";")[0]));return document.cookie=t+"="+n+c}}function r(e,n){if("undefined"!=typeof document){for(var i={},s=document.cookie?document.cookie.split("; "):[],r=0;r<s.length;r++){var c=s[r].split("="),a=c.slice(1).join("=");n||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var l=t(c[0]);if(a=(o.read||o)(a,l)||t(a),n)try{a=JSON.parse(a)}catch(u){}if(i[l]=a,e===l)break}catch(u){}}return e?i[e]:i}}return i.set=s,i.get=function(e){return r(e,!1)},i.getJSON=function(e){return r(e,!0)},i.remove=function(t,n){s(t,"",e(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}((function(){}))}))}}]);