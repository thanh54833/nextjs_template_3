import{j as d}from"./jsx-runtime-u17CrQMm.js";import{c as S}from"./utils-BQHNewu7.js";import{r as x}from"./index-DYby6Z_P.js";import{c as V}from"./index-BKV5D6oG.js";import{P as h}from"./index-CraXK6NT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";var g="Progress",v=100,[j]=V(g),[D,R]=j(g),b=x.forwardRef((r,e)=>{const{__scopeProgress:n,value:s=null,max:a,getValueLabel:_=L,...$}=r;(a||a===0)&&!f(a)&&console.error(M(`${a}`,"Progress"));const o=f(a)?a:v;s!==null&&!P(s,o)&&console.error(A(`${s}`,"Progress"));const t=P(s,o)?s:null,E=m(t)?_(t,o):void 0;return d.jsx(D,{scope:n,value:t,max:o,children:d.jsx(h.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":m(t)?t:void 0,"aria-valuetext":E,role:"progressbar","data-state":w(t,o),"data-value":t??void 0,"data-max":o,...$,ref:e})})});b.displayName=g;var N="ProgressIndicator",y=x.forwardRef((r,e)=>{const{__scopeProgress:n,...s}=r,a=R(N,n);return d.jsx(h.div,{"data-state":w(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...s,ref:e})});y.displayName=N;function L(r,e){return`${Math.round(r/e*100)}%`}function w(r,e){return r==null?"indeterminate":r===e?"complete":"loading"}function m(r){return typeof r=="number"}function f(r){return m(r)&&!isNaN(r)&&r>0}function P(r,e){return m(r)&&!isNaN(r)&&r<=e&&r>=0}function M(r,e){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`}function A(r,e){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var C=b,O=y;function I({className:r,value:e,...n}){return d.jsx(C,{"data-slot":"progress",className:S("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",r),...n,children:d.jsx(O,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(e||0)}%)`}})})}I.__docgenInfo={description:"",methods:[],displayName:"Progress"};const z={component:I,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Progress component displays the progress of an operation or task. It shows a filled bar that represents a percentage value from 0 to 100."}}}},i={args:{value:50}},l={args:{value:75}},c={args:{value:25}},p={args:{value:100}},u={args:{value:0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...i.parameters?.docs?.source},description:{story:"Default progress bar at 50% completion",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75
  }
}`,...l.parameters?.docs?.source},description:{story:"Progress bar showing 75% completion",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 25
  }
}`,...c.parameters?.docs?.source},description:{story:"Progress bar showing low progress at 25%",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...p.parameters?.docs?.source},description:{story:"Progress bar showing full completion at 100%",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...u.parameters?.docs?.source},description:{story:"Progress bar with no progress at 0%",...u.parameters?.docs?.description}}};const B=["Default","WithValue","LowProgress","HighProgress","NoProgress"];export{i as Default,p as HighProgress,c as LowProgress,u as NoProgress,l as WithValue,B as __namedExportsOrder,z as default};
