import{j as e}from"./jsx-runtime-EKYJJIwR.js";const b={component:Separator,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A visual divider component for separating content sections. Supports both horizontal and vertical orientations with configurable spacing and styling."}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Direction of the separator line"}}},a={args:{orientation:"horizontal"}},r={render:()=>e.jsxs("div",{className:"flex h-[200px] gap-4",children:[e.jsx("div",{className:"w-24 bg-muted"}),e.jsx(Separator,{orientation:"vertical"}),e.jsx("div",{className:"w-24 bg-muted"})]})},o={render:()=>e.jsxs("div",{className:"w-[300px] space-y-4",children:[e.jsx("div",{className:"bg-muted h-8 w-full"}),e.jsx(Separator,{orientation:"horizontal"}),e.jsx("div",{className:"bg-muted h-8 w-full"})]})};var t,s,n,i,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:"Default horizontal separator.",...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};var d,l,p,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className='flex h-[200px] gap-4'>
      <div className='w-24 bg-muted' />
      <Separator orientation='vertical' />
      <div className='w-24 bg-muted' />
    </div>
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Vertical separator for side-by-side content.",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var g,v,h,x,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className='w-[300px] space-y-4'>
      <div className='bg-muted h-8 w-full' />
      <Separator orientation='horizontal' />
      <div className='bg-muted h-8 w-full' />
    </div>
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:"Horizontal separator for stacked content.",...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};const w=["Default","Vertical","Horizontal"];export{a as Default,o as Horizontal,r as Vertical,w as __namedExportsOrder,b as default};
