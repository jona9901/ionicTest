"use strict";(self["webpackChunkpractices"]=self["webpackChunkpractices"]||[]).push([[753],{4753:(e,n,i)=>{i.r(n),i.d(n,{mdTransitionAnimation:()=>o});var t=i(5980),a=i(5026);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(e,n)=>{var i,o,r;const s="40px",l="0px",c="back"===n.direction,d=n.enteringEl,u=n.leavingEl,m=(0,a.g)(d),b=m.querySelector("ion-toolbar"),f=(0,t.c)();if(f.addElement(m).fill("both").beforeRemoveClass("ion-page-invisible"),c?f.duration((null!==(i=n.duration)&&void 0!==i?i:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):f.duration((null!==(o=n.duration)&&void 0!==o?o:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${s})`,`translateY(${l})`).fromTo("opacity",.01,1),b){const e=(0,t.c)();e.addElement(b),f.addAnimation(e)}if(u&&c){f.duration((null!==(r=n.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const e=(0,t.c)();e.addElement((0,a.g)(u)).onFinish((n=>{1===n&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")})).fromTo("transform",`translateY(${l})`,`translateY(${s})`).fromTo("opacity",1,0),f.addAnimation(e)}return f}}}]);
//# sourceMappingURL=753-legacy.10eb5dc3.js.map