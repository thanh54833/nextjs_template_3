import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{I}from"./info-button-ba-8-WjK.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icons-Bwb0mD-e.js";import"./button-Cw1GWQ4G.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-D58SrNf6.js";import"./index-B1gorirK.js";import"./infobar-m7Tv0vcv.js";import"./input-BWjd11J0.js";import"./separator-D06F4YFP.js";import"./index-Caz76J1-.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./sheet-D5RNmZE3.js";import"./index-BkoIuwaM.js";import"./index-DW48STyt.js";import"./index-BRlNe44M.js";import"./index-BBh8-vjY.js";import"./index-1oe2SjNl.js";import"./index-D7wzBi_S.js";import"./index-BpJryQGc.js";import"./index-DLhQgCaF.js";import"./index-c0GMlZpa.js";import"./index-CIbk3zPC.js";import"./index-EtsJrrfg.js";import"./skeleton-CDhbiqWD.js";import"./tooltip-Dx1rL3Zt.js";import"./index-CHBxiihi.js";import"./index-B7w1hHoe.js";import"./index-Cu1ciEb7.js";import"./use-mobile-CY7-0w2r.js";import"./_interop_require_wildcard-BpaVepTj.js";function T({title:b,description:A,infoContent:s}){return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:b}),s&&e.jsx("div",{className:"pt-1",children:e.jsx(I,{content:s})})]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:A})]})}T.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},infoContent:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string;
  sections: DescriptiveSection[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  description: string;
  links?: HelpfulLink[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  url: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:"HelpfulLink[]",required:!1}}]}}],raw:"DescriptiveSection[]",required:!0}}]}},description:""}}};const me={component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A page heading component that displays a title with an optional description and info content. Used for page headers and section titles."}}}},t={args:{title:"Dashboard",description:"Overview of your metrics and activity."}},r={args:{title:"Analytics",description:"Detailed analytics for your workspace.",infoContent:{title:"Analytics Info",sections:[{title:"Overview",description:"This page shows detailed analytics about your workspace performance."}]}}},i={args:{title:"Settings",description:"Manage your account and workspace settings."}},n={args:{title:"Product Management",description:"Manage your products, inventory, and orders."}};var o,a,p,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    description: 'Overview of your metrics and activity.'
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source},description:{story:"Default heading with title and description.",...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var m,l,u,g,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Heading with info content for contextual help.",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var f,h,v,w,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    description: 'Manage your account and workspace settings.'
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Small heading variant.",...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var x,j,S,q,D;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Product Management',
    description: 'Manage your products, inventory, and orders.'
  }
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:"Large heading variant.",...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.description}}};const le=["Default","WithInfo","SmallTitle","LargeTitle"];export{t as Default,n as LargeTitle,i as SmallTitle,r as WithInfo,le as __namedExportsOrder,me as default};
