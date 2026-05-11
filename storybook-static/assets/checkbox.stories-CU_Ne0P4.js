import{j as i}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./checkbox-BB5KK0tZ.js";import"./icons-CJO6dUP8.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BQHNewu7.js";import"./index-DOER7VuF.js";import"./index-BKV5D6oG.js";import"./index-Dc_FVRD7.js";import"./index-BmEHjAU8.js";import"./index-D1sqivKo.js";import"./index-t4OVC0Wb.js";import"./index-Doocx2sM.js";import"./index-CcuSeV1x.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";const w={component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A checkbox component for selecting or deselecting options. Supports checked, unchecked, and indeterminate states, as well as disabled and error states."}}}},e={args:{children:"Accept terms and conditions"}},r={args:{checked:!0,children:"I agree to receive marketing emails"}},s={args:{disabled:!0,children:"Disabled checkbox"}},o={args:{disabled:!0,checked:!0,children:"Disabled checked"}},a={args:{"aria-invalid":!0,children:"Checkbox with error state"}},c={render:()=>i.jsx(t,{"aria-label":"Standalone checkbox"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Accept terms and conditions'
  }
}`,...e.parameters?.docs?.source},description:{story:"Default unchecked checkbox",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    children: 'I agree to receive marketing emails'
  }
}`,...r.parameters?.docs?.source},description:{story:"Checked checkbox for pre-selected options",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled checkbox'
  }
}`,...s.parameters?.docs?.source},description:{story:"Disabled unchecked checkbox",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    children: 'Disabled checked'
  }
}`,...o.parameters?.docs?.source},description:{story:"Disabled checked checkbox",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    children: 'Checkbox with error state'
  }
}`,...a.parameters?.docs?.source},description:{story:"Checkbox with error state for validation feedback",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Checkbox aria-label="Standalone checkbox" />
}`,...c.parameters?.docs?.source},description:{story:"Standalone checkbox without visible label text",...c.parameters?.docs?.description}}};const E=["Default","Checked","Disabled","DisabledChecked","WithError","Standalone"];export{r as Checked,e as Default,s as Disabled,o as DisabledChecked,c as Standalone,a as WithError,E as __namedExportsOrder,w as default};
