"use strict";(self["webpackChunkpractices"]=self["webpackChunkpractices"]||[]).push([[261],{4261:(t,e,r)=>{r.r(e),r.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>c,OVERLAY_BACK_BUTTON_PRIORITY:()=>a,blockHardwareBackButton:()=>n,startHardwareBackButton:()=>i});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n=()=>{document.addEventListener("backbutton",(()=>{}))},i=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let r=0,n=[];const i=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){n.push({priority:t,handler:e,id:r++})}}});t.dispatchEvent(i);const a=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(c);null!=e&&await e}}catch(e){console.error(e)}},c=()=>{if(n.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};n.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,n=n.filter((e=>e.id!==t.id)),a(t).then((()=>e=!1))}};c()}))},a=100,c=99}}]);
//# sourceMappingURL=261.ce9f44db.js.map