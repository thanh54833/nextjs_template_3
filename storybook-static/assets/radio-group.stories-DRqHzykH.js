import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as i,a as t}from"./radio-group-B5s5vgz5.js";import"./icons-BdTSAv6R.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Czy_q_oT.js";import"./index-Dc_FVRD7.js";import"./index-DOER7VuF.js";import"./index-BKV5D6oG.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-BXQs120s.js";import"./index-C4JN59vf.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-ByLlCQqU.js";import"./index-BmEHjAU8.js";import"./index-ofxjSrhS.js";import"./index-Doocx2sM.js";import"./index-t4OVC0Wb.js";import"./index-CcuSeV1x.js";const D={component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A radio group component that allows users to select a single option from a list of mutually exclusive options. Supports horizontal and vertical orientations, plus disabled state."}}}},o={render:()=>e.jsxs(i,{defaultValue:"option-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-1",id:"r1"}),e.jsx("label",{htmlFor:"r1",className:"text-sm font-medium",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-2",id:"r2"}),e.jsx("label",{htmlFor:"r2",className:"text-sm font-medium",children:"Option 2"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-3",id:"r3"}),e.jsx("label",{htmlFor:"r3",className:"text-sm font-medium",children:"Option 3"})]})]})},a={render:()=>e.jsxs(i,{defaultValue:"option-1",orientation:"horizontal",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-1",id:"hr1"}),e.jsx("label",{htmlFor:"hr1",className:"text-sm font-medium",children:"Small"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-2",id:"hr2"}),e.jsx("label",{htmlFor:"hr2",className:"text-sm font-medium",children:"Medium"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-3",id:"hr3"}),e.jsx("label",{htmlFor:"hr3",className:"text-sm font-medium",children:"Large"})]})]})},r={render:()=>e.jsxs(i,{defaultValue:"option-2",disabled:!0,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-1",id:"dr1"}),e.jsx("label",{htmlFor:"dr1",className:"text-sm font-medium",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-2",id:"dr2"}),e.jsx("label",{htmlFor:"dr2",className:"text-sm font-medium",children:"Option 2"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="r1" />
        <label htmlFor="r1" className="text-sm font-medium">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="r2" />
        <label htmlFor="r2" className="text-sm font-medium">
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="r3" />
        <label htmlFor="r3" className="text-sm font-medium">
          Option 3
        </label>
      </div>
    </RadioGroup>
}`,...o.parameters?.docs?.source},description:{story:"Default vertical radio group",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-1" orientation="horizontal">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="hr1" />
        <label htmlFor="hr1" className="text-sm font-medium">
          Small
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="hr2" />
        <label htmlFor="hr2" className="text-sm font-medium">
          Medium
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="hr3" />
        <label htmlFor="hr3" className="text-sm font-medium">
          Large
        </label>
      </div>
    </RadioGroup>
}`,...a.parameters?.docs?.source},description:{story:"Horizontal radio group for inline options like size selection",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-2" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="dr1" />
        <label htmlFor="dr1" className="text-sm font-medium">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="dr2" />
        <label htmlFor="dr2" className="text-sm font-medium">
          Option 2
        </label>
      </div>
    </RadioGroup>
}`,...r.parameters?.docs?.source},description:{story:"Disabled radio group that prevents user interaction",...r.parameters?.docs?.description}}};const S=["Default","Horizontal","Disabled"];export{o as Default,r as Disabled,a as Horizontal,S as __namedExportsOrder,D as default};
