import{j as o}from"./jsx-runtime-u17CrQMm.js";import{S as i}from"./slider-cwZHwJ5b.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Czy_q_oT.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-DOER7VuF.js";import"./index-BKV5D6oG.js";import"./index-BmEHjAU8.js";import"./index-D1sqivKo.js";import"./index-ofxjSrhS.js";import"./index-t4OVC0Wb.js";import"./index-Doocx2sM.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-C4JN59vf.js";const D={component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A slider component for selecting a value or range from a min/max boundary. Supports single values, ranges with two handles, and vertical orientation."}}}},e={args:{defaultValue:[50]}},r={args:{defaultValue:[25,75],min:0,max:100}},a={args:{defaultValue:[30],max:50}},t={args:{disabled:!0,defaultValue:[60]}},s={parameters:{layout:"padded"},render:()=>o.jsxs("div",{className:"flex h-44 gap-4",children:[o.jsx(i,{defaultValue:[25],orientation:"vertical"}),o.jsx(i,{defaultValue:[50],orientation:"vertical"}),o.jsx(i,{defaultValue:[75],orientation:"vertical"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [50]
  }
}`,...e.parameters?.docs?.source},description:{story:"Default slider with single value",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100
  }
}`,...r.parameters?.docs?.source},description:{story:"Slider with range selection (two handles)",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [30],
    max: 50
  }
}`,...a.parameters?.docs?.source},description:{story:"Small slider with limited range",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: [60]
  }
}`,...t.parameters?.docs?.source},description:{story:"Disabled slider that prevents interaction",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="flex h-44 gap-4">
      <Slider defaultValue={[25]} orientation="vertical" />
      <Slider defaultValue={[50]} orientation="vertical" />
      <Slider defaultValue={[75]} orientation="vertical" />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Vertical slider variant for chart-like displays",...s.parameters?.docs?.description}}};const R=["Default","WithRange","Small","Disabled","Vertical"];export{e as Default,t as Disabled,a as Small,s as Vertical,r as WithRange,R as __namedExportsOrder,D as default};
