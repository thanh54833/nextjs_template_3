import{j as d}from"./jsx-runtime-EKYJJIwR.js";import{r as c}from"./index-CAPI2NOD.js";import"./index-DvGSVeov.js";import{c as Q}from"./index-C99FfTL5.js";import{c as Y}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";function Z(r,e=[]){let s=[];function n(u,i){const o=c.createContext(i);o.displayName=u+"Context";const a=s.length;s=[...s,i];const p=m=>{var y;const{scope:l,children:b,...v}=m,g=((y=l==null?void 0:l[r])==null?void 0:y[a])||o,K=c.useMemo(()=>v,Object.values(v));return d.jsx(g.Provider,{value:K,children:b})};p.displayName=u+"Provider";function w(m,l){var g;const b=((g=l==null?void 0:l[r])==null?void 0:g[a])||o,v=c.useContext(b);if(v)return v;if(i!==void 0)return i;throw new Error(`\`${m}\` must be used within \`${u}\``)}return[p,w]}const t=()=>{const u=s.map(i=>c.createContext(i));return function(o){const a=(o==null?void 0:o[r])||u;return c.useMemo(()=>({[`__scope${r}`]:{...o,[r]:a}}),[o,a])}};return t.scopeName=r,[n,rr(t,...e)]}function rr(...r){const e=r[0];if(r.length===1)return e;const s=()=>{const n=r.map(t=>({useScope:t(),scopeName:t.scopeName}));return function(u){const i=n.reduce((o,{useScope:a,scopeName:p})=>{const m=a(u)[`__scope${p}`];return{...o,...m}},{});return c.useMemo(()=>({[`__scope${e.scopeName}`]:i}),[i])}};return s.scopeName=e.scopeName,s}var er=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],B=er.reduce((r,e)=>{const s=Q(`Primitive.${e}`),n=c.forwardRef((t,u)=>{const{asChild:i,...o}=t,a=i?s:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),d.jsx(a,{...o,ref:u})});return n.displayName=`Primitive.${e}`,{...r,[e]:n}},{}),$="Progress",_=100,[or]=Z($),[tr,ar]=or($),F=c.forwardRef((r,e)=>{const{__scopeProgress:s,value:n=null,max:t,getValueLabel:u=sr,...i}=r;(t||t===0)&&!C(t)&&console.error(nr(`${t}`,"Progress"));const o=C(t)?t:_;n!==null&&!E(n,o)&&console.error(ir(`${n}`,"Progress"));const a=E(n,o)?n:null,p=S(a)?u(a,o):void 0;return d.jsx(tr,{scope:s,value:a,max:o,children:d.jsx(B.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":S(a)?a:void 0,"aria-valuetext":p,role:"progressbar","data-state":z(a,o),"data-value":a??void 0,"data-max":o,...i,ref:e})})});F.displayName=$;var U="ProgressIndicator",q=c.forwardRef((r,e)=>{const{__scopeProgress:s,...n}=r,t=ar(U,s);return d.jsx(B.div,{"data-state":z(t.value,t.max),"data-value":t.value??void 0,"data-max":t.max,...n,ref:e})});q.displayName=U;function sr(r,e){return`${Math.round(r/e*100)}%`}function z(r,e){return r==null?"indeterminate":r===e?"complete":"loading"}function S(r){return typeof r=="number"}function C(r){return S(r)&&!isNaN(r)&&r>0}function E(r,e){return S(r)&&!isNaN(r)&&r<=e&&r>=0}function nr(r,e){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${_}\`.`}function ir(r,e){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${_} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var ur=F,cr=q;function J({className:r,value:e,...s}){return d.jsx(ur,{"data-slot":"progress",className:Y("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",r),...s,children:d.jsx(cr,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(e||0)}%)`}})})}J.__docgenInfo={description:"",methods:[],displayName:"Progress"};const Pr={component:J,tags:["autodocs"],parameters:{layout:"padded"}},f={args:{value:50}},x={args:{value:75}},P={args:{value:25}},h={args:{value:100}},N={args:{value:0}};var j,I,M;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...(M=(I=f.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var R,V,D;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 75
  }
}`,...(D=(V=x.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var L,O,A;P.parameters={...P.parameters,docs:{...(L=P.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 25
  }
}`,...(A=(O=P.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var H,T,G;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...(G=(T=h.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var W,X,k;N.parameters={...N.parameters,docs:{...(W=N.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(k=(X=N.parameters)==null?void 0:X.docs)==null?void 0:k.source}}};const hr=["Default","WithValue","LowProgress","HighProgress","NoProgress"];export{f as Default,h as HighProgress,P as LowProgress,N as NoProgress,x as WithValue,hr as __namedExportsOrder,Pr as default};
