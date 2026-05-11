import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as c}from"./info-button-CFibo3s5.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icons-CJO6dUP8.js";import"./button-Ch-BQGzE.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DGP6o15j.js";import"./index-DOER7VuF.js";import"./infobar-BPn8QQBJ.js";import"./input-CFt1qv4K.js";import"./separator-tXcssORl.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./sheet-CJ-scKL4.js";import"./index-CYD3ze5d.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-BmEHjAU8.js";import"./index-D3yKPjIL.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";import"./skeleton-P1jhn00l.js";import"./tooltip-DElC3ZbC.js";import"./index-DkJfsZhp.js";import"./index-Doocx2sM.js";import"./index-D5FZlcEA.js";import"./use-mobile-BBRID8vO.js";function o({title:a,description:p,infoContent:s}){return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:a}),s&&e.jsx("div",{className:"pt-1",children:e.jsx(c,{content:s})})]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:p})]})}o.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},infoContent:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string;
  sections: DescriptiveSection[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  description: string;
  links?: HelpfulLink[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  url: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:"HelpfulLink[]",required:!1}}]}}],raw:"DescriptiveSection[]",required:!0}}]}},description:""}}};const F={component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A page heading component that displays a title with an optional description and info content. Used for page headers and section titles."}}}},t={args:{title:"Dashboard",description:"Overview of your metrics and activity."}},r={args:{title:"Analytics",description:"Detailed analytics for your workspace.",infoContent:{title:"Analytics Info",sections:[{title:"Overview",description:"This page shows detailed analytics about your workspace performance."}]}}},i={args:{title:"Settings",description:"Manage your account and workspace settings."}},n={args:{title:"Product Management",description:"Manage your products, inventory, and orders."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    description: 'Overview of your metrics and activity.'
  }
}`,...t.parameters?.docs?.source},description:{story:"Default heading with title and description.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Analytics',
    description: 'Detailed analytics for your workspace.',
    infoContent: {
      title: 'Analytics Info',
      sections: [{
        title: 'Overview',
        description: 'This page shows detailed analytics about your workspace performance.'
      }]
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Heading with info content for contextual help.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    description: 'Manage your account and workspace settings.'
  }
}`,...i.parameters?.docs?.source},description:{story:"Small heading variant.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Product Management',
    description: 'Manage your products, inventory, and orders.'
  }
}`,...n.parameters?.docs?.source},description:{story:"Large heading variant.",...n.parameters?.docs?.description}}};const G=["Default","WithInfo","SmallTitle","LargeTitle"];export{t as Default,n as LargeTitle,i as SmallTitle,r as WithInfo,G as __namedExportsOrder,F as default};
