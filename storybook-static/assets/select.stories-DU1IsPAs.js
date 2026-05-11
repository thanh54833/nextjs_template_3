import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as a,a as c,b as s,c as i,d as t,e as p,f as d}from"./select-WT1lNnaX.js";import"./icons-CJO6dUP8.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BQHNewu7.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-C4JN59vf.js";import"./index-BKV5D6oG.js";import"./index-DOER7VuF.js";import"./index-ofxjSrhS.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-DkJfsZhp.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-BmEHjAU8.js";import"./index-t4OVC0Wb.js";import"./index-D5FZlcEA.js";const W={component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A select dropdown component for choosing one option from a list. Supports grouped options, placeholder text, and disabled state."}}}},r={render:()=>e.jsxs(a,{defaultValue:"option-1",children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Select an option"})}),e.jsxs(i,{children:[e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"}),e.jsx(t,{value:"option-3",children:"Option 3"})]})]})},o={render:()=>e.jsxs(a,{defaultValue:"apple",children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsxs(p,{children:[e.jsx(d,{children:"Fruits"}),e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"orange",children:"Orange"})]}),e.jsxs(p,{children:[e.jsx(d,{children:"Vegetables"}),e.jsx(t,{value:"carrot",children:"Carrot"}),e.jsx(t,{value:"potato",children:"Potato"})]})]})]})},l={render:()=>e.jsxs(a,{defaultValue:"option-1",children:[e.jsx(c,{size:"sm",children:e.jsx(s,{placeholder:"Select"})}),e.jsxs(i,{children:[e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"})]})]})},n={render:()=>e.jsxs(a,{disabled:!0,children:[e.jsx(c,{children:e.jsx(s,{placeholder:"Disabled"})}),e.jsx(i,{children:e.jsx(t,{value:"option-1",children:"Option 1"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Default select dropdown",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Select with grouped options using SelectGroup",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Select defaultValue="option-1">
      <SelectTrigger size="sm">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
      </SelectContent>
    </Select>
}`,...l.parameters?.docs?.source},description:{story:"Small-sized select trigger",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
      </SelectContent>
    </Select>
}`,...n.parameters?.docs?.source},description:{story:"Disabled select that prevents interaction",...n.parameters?.docs?.description}}};const _=["Default","WithGroups","Small","Disabled"];export{r as Default,n as Disabled,l as Small,o as WithGroups,_ as __namedExportsOrder,W as default};
