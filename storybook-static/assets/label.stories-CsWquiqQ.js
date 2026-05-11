import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as i}from"./label-BCNIo0r_.js";import"./utils-BQHNewu7.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";const x={component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A label component for identifying form elements like inputs and textareas. Supports association via htmlFor attribute and required field indicators."}}}},r={args:{children:"Label text"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(i,{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"email@example.com",className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs(i,{htmlFor:"email-required",children:["Email ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{id:"email-required",type:"email",required:!0,className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5 group","data-disabled":"true",children:[e.jsx(i,{children:"Disabled Label"}),e.jsx("input",{disabled:!0,type:"text",placeholder:"Disabled input",className:"h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 opacity-50"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label text'
  }
}`,...r.parameters?.docs?.source},description:{story:"Default label with text content",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email</Label>
      <input id="email" type="email" placeholder="email@example.com" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" />
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Label associated with an input element via htmlFor",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1.5">
      <Label htmlFor="email-required">
        Email <span className="text-destructive">*</span>
      </Label>
      <input id="email-required" type="email" required className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs" />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Label with required field indicator",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1.5 group" data-disabled="true">
      <Label>Disabled Label</Label>
      <input disabled type="text" placeholder="Disabled input" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 opacity-50" />
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Disabled label with disabled input field",...t.parameters?.docs?.description}}};const h=["Default","WithInput","Required","Disabled"];export{r as Default,t as Disabled,s as Required,a as WithInput,h as __namedExportsOrder,x as default};
