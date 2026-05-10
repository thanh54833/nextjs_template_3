import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{S as t}from"./separator-BjUrQ461.js";import"./utils-BQHNewu7.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";const E={component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A visual divider component for separating content sections. Supports both horizontal and vertical orientations with configurable spacing and styling."}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Direction of the separator line"}}},r={args:{orientation:"horizontal"}},a={render:()=>e.jsxs("div",{className:"flex h-[200px] gap-4",children:[e.jsx("div",{className:"w-24 bg-muted"}),e.jsx(t,{orientation:"vertical"}),e.jsx("div",{className:"w-24 bg-muted"})]})},o={render:()=>e.jsxs("div",{className:"w-[300px] space-y-4",children:[e.jsx("div",{className:"bg-muted h-8 w-full"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("div",{className:"bg-muted h-8 w-full"})]})};var s,i,n,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source},description:{story:"Default horizontal separator.",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var p,l,m,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className='flex h-[200px] gap-4'>
      <div className='w-24 bg-muted' />
      <Separator orientation='vertical' />
      <div className='w-24 bg-muted' />
    </div>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Vertical separator for side-by-side content.",...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var v,h,x,f,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className='w-[300px] space-y-4'>
      <div className='bg-muted h-8 w-full' />
      <Separator orientation='horizontal' />
      <div className='bg-muted h-8 w-full' />
    </div>
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Horizontal separator for stacked content.",...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.description}}};const _=["Default","Vertical","Horizontal"];export{r as Default,o as Horizontal,a as Vertical,_ as __namedExportsOrder,E as default};
