import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r,a as l}from"./toggle-group-BkMcHXkP.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Czy_q_oT.js";import"./toggle-6SXreFCI.js";import"./index-koxbFvze.js";import"./index-Dc_FVRD7.js";import"./index-BmEHjAU8.js";import"./index-D1sqivKo.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";import"./index-BKV5D6oG.js";import"./index-BXQs120s.js";import"./index-C4JN59vf.js";import"./index-C1lvhlBT.js";import"./index-ByLlCQqU.js";import"./index-ofxjSrhS.js";const D={component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A toggle group component for managing multiple related toggle buttons. Supports single-selection (only one pressed at a time) and multiple-selection modes."}}}},a={render:()=>e.jsxs(r,{defaultValue:"bold",type:"single",children:[e.jsx(l,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(l,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(l,{value:"underline","aria-label":"Underline",children:"U"})]})},o={render:()=>e.jsxs(r,{type:"multiple",defaultValue:["bold","italic"],children:[e.jsx(l,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(l,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(l,{value:"underline","aria-label":"Underline",children:"U"})]})},t={render:()=>e.jsxs(r,{type:"single",defaultValue:"center",children:[e.jsx(l,{value:"left","aria-label":"Left",children:"Left"}),e.jsx(l,{value:"center","aria-label":"Center",children:"Center"}),e.jsx(l,{value:"right","aria-label":"Right",children:"Right"})]})},i={render:()=>e.jsxs(r,{defaultValue:"bold",variant:"outline",type:"single",children:[e.jsx(l,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(l,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(l,{value:"underline","aria-label":"Underline",children:"U"})]})},n={render:()=>e.jsxs(r,{defaultValue:"bold",size:"sm",type:"single",children:[e.jsx(l,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(l,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(l,{value:"underline","aria-label":"Underline",children:"U"})]})},s={render:()=>e.jsxs(r,{disabled:!0,defaultValue:"bold",type:"single",children:[e.jsx(l,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(l,{value:"italic","aria-label":"Italic",children:"I"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold" type="single">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
}`,...a.parameters?.docs?.source},description:{story:"Default toggle group with single selection",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
}`,...o.parameters?.docs?.source},description:{story:"Toggle group with multiple selection (multiple items can be pressed)",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
}`,...t.parameters?.docs?.source},description:{story:"Toggle group with single selection mode explicitly set",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold" variant="outline" type="single">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
}`,...i.parameters?.docs?.source},description:{story:"Toggle group with outline variant styling",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold" size="sm" type="single">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
}`,...n.parameters?.docs?.source},description:{story:"Small-sized toggle group",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup disabled defaultValue="bold" type="single">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
    </ToggleGroup>
}`,...s.parameters?.docs?.source},description:{story:"Disabled toggle group that prevents interaction",...s.parameters?.docs?.description}}};const R=["Default","Multiple","Single","Outline","Small","Disabled"];export{a as Default,s as Disabled,o as Multiple,i as Outline,t as Single,n as Small,R as __namedExportsOrder,D as default};
