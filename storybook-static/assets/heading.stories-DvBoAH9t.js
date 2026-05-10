import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{I}from"./info-button-DoPPR9pa.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icons-Bvzo9UON.js";import"./button-B1qRRuul.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";import"./infobar-omB16zuq.js";import"./input-BWjd11J0.js";import"./separator-BjUrQ461.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./sheet-CWZPLhfi.js";import"./index-Do-fIL6h.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./skeleton-CDhbiqWD.js";import"./tooltip-BMN2qtcx.js";import"./index-BnvOM56Y.js";import"./index-B69vM9co.js";import"./index-CFXvuxOn.js";import"./use-mobile-DILz8wSb.js";import"./index-C99FfTL5.js";import"./_interop_require_wildcard-BpaVepTj.js";function T({title:b,description:A,infoContent:o}){return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:b}),o&&e.jsx("div",{className:"pt-1",children:e.jsx(I,{content:o})})]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:A})]})}T.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},infoContent:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string;
  sections: DescriptiveSection[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  description: string;
  links?: HelpfulLink[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  url: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:"HelpfulLink[]",required:!1}}]}}],raw:"DescriptiveSection[]",required:!0}}]}},description:""}}};const le={component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A page heading component that displays a title with an optional description and info content. Used for page headers and section titles."}}}},t={args:{title:"Dashboard",description:"Overview of your metrics and activity."}},r={args:{title:"Analytics",description:"Detailed analytics for your workspace.",infoContent:{title:"Analytics Info",sections:[{title:"Overview",description:"This page shows detailed analytics about your workspace performance."}]}}},i={args:{title:"Settings",description:"Manage your account and workspace settings."}},n={args:{title:"Product Management",description:"Manage your products, inventory, and orders."}};var s,a,p,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:"Large heading variant.",...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.description}}};const ue=["Default","WithInfo","SmallTitle","LargeTitle"];export{t as Default,n as LargeTitle,i as SmallTitle,r as WithInfo,ue as __namedExportsOrder,le as default};
