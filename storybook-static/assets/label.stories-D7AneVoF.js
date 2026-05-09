import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{L as i}from"./label-UzqpTrrA.js";import"./utils-BQHNewu7.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";const E={component:i,tags:["autodocs"]},r={args:{children:"Label text"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(i,{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"email@example.com",className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"})]})},s={args:{children:"Email",htmlFor:"email-required"},render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs(i,{htmlFor:"email-required",children:["Email ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{id:"email-required",type:"email",required:!0,className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs"})]})},l={args:{children:"Disabled label"},render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5 group","data-disabled":"true",children:[e.jsx(i,{children:"Disabled Label"}),e.jsx("input",{disabled:!0,type:"text",placeholder:"Disabled input",className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 opacity-50"})]})};var t,d,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Label text'
  }
}`,...(o=(d=r.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var n,p,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email</Label>
      <input id="email" type="email" placeholder="email@example.com" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" />
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Email',
    htmlFor: 'email-required'
  },
  render: () => <div className="flex flex-col gap-1.5">
      <Label htmlFor="email-required">
        Email <span className="text-destructive">*</span>
      </Label>
      <input id="email-required" type="email" required className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs" />
    </div>
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,h,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Disabled label'
  },
  render: () => <div className="flex flex-col gap-1.5 group" data-disabled="true">
      <Label>Disabled Label</Label>
      <input disabled type="text" placeholder="Disabled input" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 opacity-50" />
    </div>
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const F=["Default","WithInput","Required","Disabled"];export{r as Default,l as Disabled,s as Required,a as WithInput,F as __namedExportsOrder,E as default};
