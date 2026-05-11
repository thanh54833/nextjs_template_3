import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as t}from"./separator-tXcssORl.js";import"./utils-BQHNewu7.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";const g={component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A visual divider component for separating content sections. Supports both horizontal and vertical orientations with configurable spacing and styling."}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Direction of the separator line"}}},r={args:{orientation:"horizontal"}},a={render:()=>e.jsxs("div",{className:"flex h-[200px] gap-4",children:[e.jsx("div",{className:"w-24 bg-muted"}),e.jsx(t,{orientation:"vertical"}),e.jsx("div",{className:"w-24 bg-muted"})]})},o={render:()=>e.jsxs("div",{className:"w-[300px] space-y-4",children:[e.jsx("div",{className:"bg-muted h-8 w-full"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("div",{className:"bg-muted h-8 w-full"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...r.parameters?.docs?.source},description:{story:"Default horizontal separator.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className='flex h-[200px] gap-4'>
      <div className='w-24 bg-muted' />
      <Separator orientation='vertical' />
      <div className='w-24 bg-muted' />
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Vertical separator for side-by-side content.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-[300px] space-y-4'>
      <div className='bg-muted h-8 w-full' />
      <Separator orientation='horizontal' />
      <div className='bg-muted h-8 w-full' />
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Horizontal separator for stacked content.",...o.parameters?.docs?.description}}};const v=["Default","Vertical","Horizontal"];export{r as Default,o as Horizontal,a as Vertical,v as __namedExportsOrder,g as default};
