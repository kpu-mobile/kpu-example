
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{d as h,b0 as b,r as C,k as n,o as l,p as i,a as g,q as o,u as a,s as r,C as c,e as v,t as y,c as k,_,w,b as z,f as B,Z as x}from"./index-CEhcQr1Q.js";const V=h({name:"KmPageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""},class:{},titleClass:{},mainClass:{}},setup(f){const s=f,d=b(),t=C(s.collaspe);function p(){t.value=!t.value}return(e,N)=>{const m=B,u=_;return l(),n("div",{class:o(a(r)("m-4 flex flex-col border rounded-lg bg-card transition-[background-color,border-color]",{"overflow-hidden":e.collaspe},s.class))},[d.title||e.title?(l(),n("div",{key:0,class:o(a(r)("border-b px-5 py-4 transition-border-color",s.titleClass))},[c(e.$slots,"title",{},()=>[v(y(e.title),1)])],2)):i("",!0),g("div",{class:o(a(r)("relative h-[calc-size(auto,size)] p-5 transition-height after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-1 after:h-12 after:max-h-full after:w-full after:from-transparent after:to-[hsl(var(--card))] after:bg-gradient-to-b after:opacity-0 after:transition-opacity after:content-empty",{"overflow-hidden":e.collaspe,"after:opacity-100":a(t)},s.mainClass)),style:x({height:a(t)?e.height:""})},[c(e.$slots,"default"),e.collaspe?(l(),k(u,{key:0,variant:"link",size:"icon",class:o(["absolute inset-b-0 inset-s-1/2 transition-all -translate-x-1/2",{"rotate-x-180":!a(t)}]),onClick:p},{default:w(()=>[z(m,{name:"i-ep:arrow-down",class:"text-xl"})]),_:1},8,["class"])):i("",!0)],6)],2)}}});export{V as _};
