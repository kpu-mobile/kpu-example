
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as h}from"./index-Czg9Ols8.js";import{_ as g}from"./index.vue_vue_type_script_setup_true_lang-CRNsUM8k.js";import{_ as m,a as x}from"./index.vue_vue_type_script_setup_true_lang-_rsAMn4L.js";import{d as r,r as c,c as d,o as i,u as t,k as v,b as e,w as s,q as y}from"./index-CEhcQr1Q.js";import"./index.vue_vue_type_script_setup_true_lang-CIWwt91K.js";const M=r({__name:"_demo1",setup(u){const n=c(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(o,l)=>{const a=m;return i(),d(a,{value:t(n),"will-change":"",class:"text-4xl font-bold"},null,8,["value"])}}}),C=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <KmAnimatedCountTo :value will-change class="text-4xl font-bold" />
</template>
`,w=r({__name:"_demo2",setup(u){const n=c(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(o,l)=>{const a=m;return i(),d(a,{value:t(n),prefix:"￥",suffix:"元","will-change":"",class:"text-4xl font-bold"},null,8,["value"])}}}),b=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <KmAnimatedCountTo :value prefix="￥" suffix="元" will-change class="text-4xl font-bold" />
</template>
`,A={class:"flex flex-col gap-2"},D=r({__name:"_demo3",setup(u){const n=c(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(o,l)=>{const a=m;return i(),v("div",A,[e(a,{value:t(n),trend:1,"will-change":"",class:"text-4xl font-bold"},null,8,["value"]),e(a,{value:t(n),trend:0,"will-change":"",class:"text-4xl font-bold"},null,8,["value"]),e(a,{value:t(n),trend:-1,"will-change":"",class:"text-4xl font-bold"},null,8,["value"])])}}}),S=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <KmAnimatedCountTo :value :trend="1" will-change class="text-4xl font-bold" />
    <KmAnimatedCountTo :value :trend="0" will-change class="text-4xl font-bold" />
    <KmAnimatedCountTo :value :trend="-1" will-change class="text-4xl font-bold" />
  </div>
</template>
`,T=r({__name:"_demo4",setup(u){const n=c(0),o=c(0),l=["en-US","en-US","fr-FR","en-US","en-US","zh-CN","en-US","en-US","fr-FR"],a=[{},{minimumFractionDigits:2},{style:"currency",currency:"USD",currencySign:"accounting",signDisplay:"always"},{style:"percent",signDisplay:"always"},{style:"unit",unit:"meter",notation:"compact",minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:"never"},{style:"currency",currency:"CNY"},{signDisplay:"always"}];return setInterval(()=>{o.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),n.value+=1},2e3),(_,p)=>{const f=m;return i(),d(f,{value:t(o),format:a[t(n)%a.length],locales:l[t(n)%l.length],"will-change":"",class:"text-4xl font-bold"},null,8,["value","format","locales"])}}}),K=`<script setup lang="ts">
const index = ref(0)
const value = ref(0)

const LOCALES = ['en-US', 'en-US', 'fr-FR', 'en-US', 'en-US', 'zh-CN', 'en-US', 'en-US', 'fr-FR']
const FORMATS = [
  {},
  {
    minimumFractionDigits: 2,
  },
  {
    style: 'currency',
    currency: 'USD',
    currencySign: 'accounting',
    signDisplay: 'always',
  },
  {
    style: 'percent',
    signDisplay: 'always',
  },
  {
    style: 'unit',
    unit: 'meter',
    notation: 'compact',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'never',
  },
  {
    style: 'currency',
    currency: 'CNY',
  },
  {
    signDisplay: 'always',
  },
]

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  index.value += 1
}, 2000)
<\/script>

<template>
  <KmAnimatedCountTo
    :value
    :format="FORMATS[index % FORMATS.length] as any"
    :locales="LOCALES[index % LOCALES.length]"
    will-change
    class="text-4xl font-bold"
  />
</template>
`,F=r({__name:"_demo5",setup(u){const n=c(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1)},2e3),(o,l)=>{const a=m;return i(),d(a,{value:t(n),"transform-timing":{duration:750,easing:"ease-out"},"spin-timing":{duration:750,easing:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"},"opacity-timing":{duration:350,easing:"ease-out"},"will-change":"",class:"text-4xl font-bold"},null,8,["value"])}}}),U=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <KmAnimatedCountTo :value :transform-timing="{ duration: 750, easing: 'ease-out' }" :spin-timing="{ duration: 750, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }" :opacity-timing="{ duration: 350, easing: 'ease-out' }" will-change class="text-4xl font-bold" />
</template>
`,I={class:"flex-center-start gap-2"},N=r({__name:"_demo6",setup(u){const n=c(0),o=c(0);return setInterval(()=>{n.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),o.value+=Math.random()*(Math.random()>.5?1:-1)},2e3),(l,a)=>{const _=m,p=x;return i(),v("div",I,[e(p,null,{default:s(()=>[e(_,{value:t(n),locales:"zh-CN",format:{style:"currency",currency:"CNY"},"will-change":"",class:"text-4xl font-bold"},null,8,["value"]),e(_,{value:t(o),locales:"zh-CN",format:{style:"percent",maximumFractionDigits:2,signDisplay:"always"},"will-change":"",class:y(["text-2xl text-green-500 font-bold",{"text-red-500":t(o)<0}])},null,8,["value","class"])]),_:1})])}}}),$=`<script setup lang="ts">
const value1 = ref(0)
const value2 = ref(0)

setInterval(() => {
  value1.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  value2.value += Math.random() * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex-center-start gap-2">
    <KmAnimatedCountToGroup>
      <KmAnimatedCountTo :value="value1" locales="zh-CN" :format="{ style: 'currency', currency: 'CNY' }" will-change class="text-4xl font-bold" />
      <KmAnimatedCountTo :value="value2" locales="zh-CN" :format="{ style: 'percent', maximumFractionDigits: 2, signDisplay: 'always' }" will-change class="text-2xl text-green-500 font-bold" :class="{ 'text-red-500': value2 < 0 }" />
    </KmAnimatedCountToGroup>
  </div>
</template>
`,E=r({__name:"index",setup(u){return(n,o)=>{const l=g,a=h;return i(),d(a,{navbar:"","navbar-start-side":"back"},{default:s(()=>[e(l,{code:t(C)},{default:s(()=>[e(M)]),_:1},8,["code"]),e(l,{title:"前缀/后缀",code:t(b)},{default:s(()=>[e(w)]),_:1},8,["code"]),e(l,{title:"方向",code:t(S)},{default:s(()=>[e(D)]),_:1},8,["code"]),e(l,{title:"格式化",code:t(K)},{default:s(()=>[e(T)]),_:1},8,["code"]),e(l,{title:"时机",code:t(U)},{default:s(()=>[e(F)]),_:1},8,["code"]),e(l,{title:"组",code:t($)},{default:s(()=>[e(N)]),_:1},8,["code"])]),_:1})}}});export{E as default};
