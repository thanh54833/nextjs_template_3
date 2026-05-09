import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{I as x}from"./info-button-ChenDkme.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icons-Bvzo9UON.js";import"./button-B1qRRuul.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";import"./infobar-0GRZo-Hj.js";import"./input-BWjd11J0.js";import"./separator-BjUrQ461.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./sheet-B6buQ7I-.js";import"./index-Do-fIL6h.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./skeleton-CDhbiqWD.js";import"./tooltip-BMN2qtcx.js";import"./index-BnvOM56Y.js";import"./index-B69vM9co.js";import"./index-CFXvuxOn.js";import"./use-mobile-DILz8wSb.js";import"./index-C99FfTL5.js";import"./_interop_require_wildcard-BpaVepTj.js";function k({title:w,description:h,infoContent:s}){return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:w}),s&&e.jsx("div",{className:"pt-1",children:e.jsx(x,{content:s})})]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:h})]})}k.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},infoContent:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string;
  sections: DescriptiveSection[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  description: string;
  links?: HelpfulLink[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  url: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:"HelpfulLink[]",required:!1}}]}}],raw:"DescriptiveSection[]",required:!0}}]}},description:""}}};const ne={component:k,tags:["autodocs"],parameters:{layout:"padded"}},t={args:{title:"Dashboard",description:"Overview of your metrics and activity."}},r={args:{title:"Analytics",description:"Detailed analytics for your workspace.",infoContent:{title:"Analytics Info",sections:[{title:"Overview",description:"This page shows detailed analytics about your workspace performance."}]}}},i={args:{title:"Settings",description:"Manage your account and workspace settings."}},n={args:{title:"Product Management",description:"Manage your products, inventory, and orders."}};var o,a,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    description: 'Overview of your metrics and activity.'
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    description: 'Manage your account and workspace settings.'
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Product Management',
    description: 'Manage your products, inventory, and orders.'
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const se=["Default","WithInfo","SmallTitle","LargeTitle"];export{t as Default,n as LargeTitle,i as SmallTitle,r as WithInfo,se as __namedExportsOrder,ne as default};
