import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{L as i}from"./label-UzqpTrrA.js";import"./utils-BQHNewu7.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";const A={component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A label component for identifying form elements like inputs and textareas. Supports association via htmlFor attribute and required field indicators."}}}},r={args:{children:"Label text"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(i,{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"email@example.com",className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs(i,{htmlFor:"email-required",children:["Email ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{id:"email-required",type:"email",required:!0,className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5 group","data-disabled":"true",children:[e.jsx(i,{children:"Disabled Label"}),e.jsx("input",{disabled:!0,type:"text",placeholder:"Disabled input",className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 opacity-50"})]})};var o,l,d,n,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Label text'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"Default label with text content",...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.description}}};var c,m,u,b,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email</Label>
      <input id="email" type="email" placeholder="email@example.com" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" />
    </div>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Label associated with an input element via htmlFor",...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var h,f,g,y,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1.5">
      <Label htmlFor="email-required">
        Email <span className="text-destructive">*</span>
      </Label>
      <input id="email-required" type="email" required className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs" />
    </div>
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"Label with required field indicator",...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var w,L,N,j,q;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1.5 group" data-disabled="true">
      <Label>Disabled Label</Label>
      <input disabled type="text" placeholder="Disabled input" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 opacity-50" />
    </div>
}`,...(N=(L=t.parameters)==null?void 0:L.docs)==null?void 0:N.source},description:{story:"Disabled label with disabled input field",...(q=(j=t.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};const O=["Default","WithInput","Required","Disabled"];export{r as Default,t as Disabled,s as Required,a as WithInput,O as __namedExportsOrder,A as default};
