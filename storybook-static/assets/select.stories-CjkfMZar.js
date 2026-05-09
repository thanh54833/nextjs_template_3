import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{S as a,a as c,b as s,c as i,d as t,e as p,f as d}from"./select-CUeg8EVw.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-BdQq_4o_.js";import"./index-CKUxhdB2.js";import"./index-BUhLVj6P.js";import"./index-Da_hoYQ_.js";import"./index-CJNorLC4.js";import"./index-Ux667dBy.js";import"./index-Dp8D8Mew.js";import"./index-C-szKJnO.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BAWfCZ5Z.js";import"./index-Ky1P1Yos.js";import"./index-B5M3RRgR.js";import"./index-DML2O0rb.js";import"./index-CxHADOAi.js";import"./index-Mrew0IH0.js";import"./index-CFXvuxOn.js";import"./icons-Bvzo9UON.js";import"./utils-BQHNewu7.js";const le={component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A select dropdown component for choosing one option from a list. Supports grouped options, placeholder text, and disabled state."}}}},r={render:()=>e.jsxs(a,{defaultValue:"option-1",children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Select an option"})}),e.jsxs(i,{children:[e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"}),e.jsx(t,{value:"option-3",children:"Option 3"})]})]})},l={render:()=>e.jsxs(a,{defaultValue:"apple",children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsxs(p,{children:[e.jsx(d,{children:"Fruits"}),e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"orange",children:"Orange"})]}),e.jsxs(p,{children:[e.jsx(d,{children:"Vegetables"}),e.jsx(t,{value:"carrot",children:"Carrot"}),e.jsx(t,{value:"potato",children:"Potato"})]})]})]})},o={render:()=>e.jsxs(a,{defaultValue:"option-1",children:[e.jsx(c,{size:"sm",children:e.jsx(s,{placeholder:"Select"})}),e.jsxs(i,{children:[e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"})]})]})},n={render:()=>e.jsxs(a,{disabled:!0,children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Disabled"})}),e.jsx(i,{children:e.jsx(t,{value:"option-1",children:"Option 1"})})]})};var m,S,u,h,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(S=r.parameters)==null?void 0:S.docs)==null?void 0:u.source},description:{story:"Default select dropdown",...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var g,j,v,I,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source},description:{story:"Select with grouped options using SelectGroup",...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.description}}};var f,O,V,C,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Select defaultValue="option-1">
      <SelectTrigger size="sm">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
      </SelectContent>
    </Select>
}`,...(V=(O=o.parameters)==null?void 0:O.docs)==null?void 0:V.source},description:{story:"Small-sized select trigger",...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var D,G,L,y,w;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
      </SelectContent>
    </Select>
}`,...(L=(G=n.parameters)==null?void 0:G.docs)==null?void 0:L.source},description:{story:"Disabled select that prevents interaction",...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};const oe=["Default","WithGroups","Small","Disabled"];export{r as Default,n as Disabled,o as Small,l as WithGroups,oe as __namedExportsOrder,le as default};
