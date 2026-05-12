import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as T}from"./index-DYby6Z_P.js";import{c}from"./utils-Czy_q_oT.js";import{I as L}from"./icons-BdTSAv6R.js";import{b as y}from"./button-BQzN1lMO.js";import{S as F,a as _,b as k,c as z,d as D}from"./select-B12i0HQj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-koxbFvze.js";import"./index-DGP6o15j.js";import"./index-DOER7VuF.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-C4JN59vf.js";import"./index-BKV5D6oG.js";import"./index-ofxjSrhS.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-ByLlCQqU.js";import"./index-CZLUcR6N.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-DQn26SIZ.js";import"./floating-ui.react-dom-DZ6WtPqY.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-BmEHjAU8.js";import"./index-t4OVC0Wb.js";import"./index-D5FZlcEA.js";function q({className:M,currentPage:n,totalPages:a,onPageChange:S,siblingCount:i=1,perPage:N,perPageOptions:O=[8,12,24,48],onPerPageChange:w,showPrevNext:j=!0,showPerPageSelect:V=!1,perPageLabel:I="per page",...A}){const t=T.useCallback((r,s)=>Array.from({length:s-r+1},(o,g)=>r+g),[]),W=T.useMemo(()=>{const r=i+5;if(a<=r)return t(1,a);const s=Math.max(n-i,1),o=Math.min(n+i,a),g=s>3,v=o<a-2;return!g&&v?[...t(1,4),"...",a-1,a]:g&&!v?[1,2,"...",...t(a-3,a)]:g&&v?[1,"...",...t(s,o),"...",a]:t(1,a)},[n,a,i,t]);return a<=1?null:e.jsxs("nav",{className:c("flex items-center justify-between",M),"aria-label":"Pagination",...A,children:[V&&(N||w)&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsxs(F,{value:String(N),onValueChange:r=>w?.(parseInt(r)),disabled:!w,children:[e.jsx(_,{className:"h-8 w-16 text-xs",children:e.jsx(k,{})}),e.jsx(z,{children:O.map(r=>e.jsx(D,{value:String(r),children:r},r))})]}),e.jsx("span",{className:"text-xs text-muted-foreground",children:I})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[j&&e.jsx(e.Fragment,{children:e.jsx("button",{onClick:()=>S(n-1),disabled:n<=1,className:c(y({variant:"outline",size:"sm"}),"h-11 w-11 p-0"),"aria-label":"Previous page",children:e.jsx(L.chevronLeft,{className:"h-4 w-4"})})}),W.map((r,s)=>{if(r==="...")return e.jsx("span",{className:"flex size-9 items-center justify-center",children:"..."},`ellipsis-${s}`);const o=r===n;return e.jsx("button",{onClick:()=>S(r),className:c(y({variant:o?"default":"outline",size:"sm"}),"h-11 w-11 p-0 text-xs"),"aria-current":o?"page":void 0,children:r},r)}),j&&e.jsx("button",{onClick:()=>S(n+1),disabled:n>=a,className:c(y({variant:"outline",size:"sm"}),"h-11 w-11 p-0"),"aria-label":"Next page",children:e.jsx(L.chevronRight,{className:"h-4 w-4"})})]})]})}q.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},perPage:{required:!1,tsType:{name:"number"},description:""},perPageOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[8, 12, 24, 48]",computed:!1}},onPerPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(perPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"perPage"}],return:{name:"void"}}},description:""},showPrevNext:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPerPageSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},perPageLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'per page'",computed:!1}}}};const fe={component:q,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A comprehensive pagination component with page numbers, ellipsis, prev/next buttons, and optional per-page selector. Controlled component supporting multiple variants."}}},argTypes:{currentPage:{control:{type:"number",min:1},description:"Current active page"},totalPages:{control:{type:"number",min:1},description:"Total number of pages"},siblingCount:{control:{type:"number",min:0,max:3},description:"Number of sibling pages on each side of current page"},perPage:{control:{type:"number",min:1},description:"Number of items per page (used with showPerPageSelect)"},perPageOptions:{control:!1,description:"Options for per-page selector"},showPrevNext:{control:"boolean",description:"Show previous/next buttons"},showPerPageSelect:{control:"boolean",description:"Show per-page selector on left side"},perPageLabel:{control:"text",description:"Label text after per-page selector"},onPageChange:{action:"page changed"},onPerPageChange:{action:"per page changed"}}},p={args:{currentPage:2,totalPages:9,onPageChange:()=>{}}},l={args:{currentPage:2,totalPages:9,perPage:12,showPerPageSelect:!0,onPageChange:()=>{},onPerPageChange:()=>{}}},u={args:{currentPage:1,totalPages:5,onPageChange:()=>{}}},m={args:{currentPage:10,totalPages:10,onPageChange:()=>{}}},P={args:{currentPage:5,totalPages:20,siblingCount:1,onPageChange:()=>{}}},d={args:{currentPage:2,totalPages:3,onPageChange:()=>{}}},h={args:{currentPage:3,totalPages:15,perPage:24,showPerPageSelect:!0,showPrevNext:!0,onPageChange:()=>{},onPerPageChange:()=>{}}},f={args:{currentPage:1,totalPages:25,perPage:12,showPerPageSelect:!0,onPageChange:()=>{},onPerPageChange:()=>{}}},x={args:{currentPage:13,totalPages:25,siblingCount:2,perPage:48,showPerPageSelect:!0,showPrevNext:!0,onPageChange:()=>{},onPerPageChange:()=>{}}},b={args:{currentPage:3,totalPages:7,showPrevNext:!1,onPageChange:()=>{}}},C={args:{currentPage:2,totalPages:10,perPage:50,showPerPageSelect:!0,perPageLabel:"items per page",onPageChange:()=>{},onPerPageChange:()=>{}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 9,
    onPageChange: () => {}
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 9,
    perPage: 12,
    showPerPageSelect: true,
    onPageChange: () => {},
    onPerPageChange: () => {}
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => {}
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 10,
    totalPages: 10,
    onPageChange: () => {}
  }
}`,...m.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    siblingCount: 1,
    onPageChange: () => {}
  }
}`,...P.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 3,
    onPageChange: () => {}
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 15,
    perPage: 24,
    showPerPageSelect: true,
    showPrevNext: true,
    onPageChange: () => {},
    onPerPageChange: () => {}
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 25,
    perPage: 12,
    showPerPageSelect: true,
    onPageChange: () => {},
    onPerPageChange: () => {}
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 13,
    totalPages: 25,
    siblingCount: 2,
    perPage: 48,
    showPerPageSelect: true,
    showPrevNext: true,
    onPageChange: () => {},
    onPerPageChange: () => {}
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 7,
    showPrevNext: false,
    onPageChange: () => {}
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 10,
    perPage: 50,
    showPerPageSelect: true,
    perPageLabel: 'items per page',
    onPageChange: () => {},
    onPerPageChange: () => {}
  }
}`,...C.parameters?.docs?.source}}};const xe=["Default","WithPerPageSelect","FirstPage","LastPage","ManyPages","FewPages","WithAllControls","PageOneOfMany","MiddlePage","WithoutPrevNext","CustomPerPageLabel"];export{C as CustomPerPageLabel,p as Default,d as FewPages,u as FirstPage,m as LastPage,P as ManyPages,x as MiddlePage,f as PageOneOfMany,h as WithAllControls,l as WithPerPageSelect,b as WithoutPrevNext,xe as __namedExportsOrder,fe as default};
