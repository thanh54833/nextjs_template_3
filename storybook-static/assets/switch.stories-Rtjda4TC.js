import{j as o}from"./jsx-runtime-u17CrQMm.js";import{S as a}from"./switch-C4S7R9io.js";import"./utils-Czy_q_oT.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dc_FVRD7.js";import"./index-DOER7VuF.js";import"./index-BKV5D6oG.js";import"./index-BmEHjAU8.js";import"./index-D1sqivKo.js";import"./index-t4OVC0Wb.js";import"./index-Doocx2sM.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";const D={component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A switch component (also known as a toggle) for binary on/off decisions. Often used for enabling or disabling features like notifications or settings."}}}},e={render:()=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(a,{id:"notifications"}),o.jsx("label",{htmlFor:"notifications",className:"text-sm font-medium",children:"Enable notifications"})]})},r={args:{checked:!0}},s={args:{disabled:!0}},t={args:{disabled:!0,checked:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Switch id="notifications" />
      <label htmlFor="notifications" className="text-sm font-medium">
        Enable notifications
      </label>
    </div>
}`,...e.parameters?.docs?.source},description:{story:"Default switch with label",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Pre-checked switch for pre-enabled options",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Disabled switch that prevents interaction",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Disabled and checked switch",...t.parameters?.docs?.description}}};const S=["Default","Checked","Disabled","DisabledChecked"];export{r as Checked,e as Default,s as Disabled,t as DisabledChecked,S as __namedExportsOrder,D as default};
