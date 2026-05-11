import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{S as a,a as c,b as s,c as i,d as t,e as p,f as d}from"./select-BM1FUw-s.js";import"./icons-Bwb0mD-e.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BQHNewu7.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-OvQM5fGA.js";import"./index-BRlNe44M.js";import"./index-B1gorirK.js";import"./index-Bal2i3vH.js";import"./index-BpJryQGc.js";import"./index-Caz76J1-.js";import"./index-DLhQgCaF.js";import"./index-c0GMlZpa.js";import"./index-BBh8-vjY.js";import"./index-1oe2SjNl.js";import"./index-CHBxiihi.js";import"./index-B7w1hHoe.js";import"./index-CIbk3zPC.js";import"./index-D7wzBi_S.js";import"./index-B_pGI_cq.js";import"./index-Cu1ciEb7.js";const le={component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A select dropdown component for choosing one option from a list. Supports grouped options, placeholder text, and disabled state."}}}},r={render:()=>e.jsxs(a,{defaultValue:"option-1",children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Select an option"})}),e.jsxs(i,{children:[e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"}),e.jsx(t,{value:"option-3",children:"Option 3"})]})]})},o={render:()=>e.jsxs(a,{defaultValue:"apple",children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsxs(p,{children:[e.jsx(d,{children:"Fruits"}),e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"orange",children:"Orange"})]}),e.jsxs(p,{children:[e.jsx(d,{children:"Vegetables"}),e.jsx(t,{value:"carrot",children:"Carrot"}),e.jsx(t,{value:"potato",children:"Potato"})]})]})]})},l={render:()=>e.jsxs(a,{defaultValue:"option-1",children:[e.jsx(c,{size:"sm",children:e.jsx(s,{placeholder:"Select"})}),e.jsxs(i,{children:[e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"})]})]})},n={render:()=>e.jsxs(a,{disabled:!0,children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Disabled"})}),e.jsx(i,{children:e.jsx(t,{value:"option-1",children:"Option 1"})})]})};var m,S,u,h,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Select defaultValue="option-1">
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
        <SelectItem value="option-3">Option 3</SelectItem>
      </SelectContent>
    </Select>
}`,...(u=(S=r.parameters)==null?void 0:S.docs)==null?void 0:u.source},description:{story:"Default select dropdown",...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var g,j,v,I,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Select defaultValue="apple">
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source},description:{story:"Select with grouped options using SelectGroup",...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.description}}};var f,O,V,C,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Select defaultValue="option-1">
      <SelectTrigger size="sm">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
      </SelectContent>
    </Select>
}`,...(V=(O=l.parameters)==null?void 0:O.docs)==null?void 0:V.source},description:{story:"Small-sized select trigger",...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var D,G,L,y,w;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
      </SelectContent>
    </Select>
}`,...(L=(G=n.parameters)==null?void 0:G.docs)==null?void 0:L.source},description:{story:"Disabled select that prevents interaction",...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};const ne=["Default","WithGroups","Small","Disabled"];export{r as Default,n as Disabled,l as Small,o as WithGroups,ne as __namedExportsOrder,le as default};
