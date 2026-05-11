import{j as d}from"./jsx-runtime-EKYJJIwR.js";import{c as Z}from"./utils-BQHNewu7.js";import{r as k}from"./index-Br2IOmUs.js";import{c as rr}from"./index-BRlNe44M.js";import{P as F}from"./index-Caz76J1-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./index-B1gorirK.js";var g="Progress",v=100,[er]=rr(g),[ar,sr]=er(g),U=k.forwardRef((r,e)=>{const{__scopeProgress:n,value:s=null,max:a,getValueLabel:K=or,...Q}=r;(a||a===0)&&!f(a)&&console.error(tr(`${a}`,"Progress"));const o=f(a)?a:v;s!==null&&!P(s,o)&&console.error(nr(`${s}`,"Progress"));const t=P(s,o)?s:null,Y=m(t)?K(t,o):void 0;return d.jsx(ar,{scope:n,value:t,max:o,children:d.jsx(F.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":m(t)?t:void 0,"aria-valuetext":Y,role:"progressbar","data-state":B(t,o),"data-value":t??void 0,"data-max":o,...Q,ref:e})})});U.displayName=g;var q="ProgressIndicator",z=k.forwardRef((r,e)=>{const{__scopeProgress:n,...s}=r,a=sr(q,n);return d.jsx(F.div,{"data-state":B(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...s,ref:e})});z.displayName=q;function or(r,e){return`${Math.round(r/e*100)}%`}function B(r,e){return r==null?"indeterminate":r===e?"complete":"loading"}function m(r){return typeof r=="number"}function f(r){return m(r)&&!isNaN(r)&&r>0}function P(r,e){return m(r)&&!isNaN(r)&&r<=e&&r>=0}function tr(r,e){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`}function nr(r,e){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var ir=U,lr=z;function J({className:r,value:e,...n}){return d.jsx(ir,{"data-slot":"progress",className:Z("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",r),...n,children:d.jsx(lr,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(e||0)}%)`}})})}J.__docgenInfo={description:"",methods:[],displayName:"Progress"};const xr={component:J,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Progress component displays the progress of an operation or task. It shows a filled bar that represents a percentage value from 0 to 100."}}}},i={args:{value:50}},l={args:{value:75}},c={args:{value:25}},p={args:{value:100}},u={args:{value:0}};var x,h,b,N,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"Default progress bar at 50% completion",...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.description}}};var w,I,_,$,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 75
  }
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source},description:{story:"Progress bar showing 75% completion",...(E=($=l.parameters)==null?void 0:$.docs)==null?void 0:E.description}}};var S,V,j,D,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 25
  }
}`,...(j=(V=c.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:"Progress bar showing low progress at 25%",...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};var L,M,A,C,O;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source},description:{story:"Progress bar showing full completion at 100%",...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.description}}};var T,G,H,W,X;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"Progress bar with no progress at 0%",...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.description}}};const hr=["Default","WithValue","LowProgress","HighProgress","NoProgress"];export{i as Default,p as HighProgress,c as LowProgress,u as NoProgress,l as WithValue,hr as __namedExportsOrder,xr as default};
