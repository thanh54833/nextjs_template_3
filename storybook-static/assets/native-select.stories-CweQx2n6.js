import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as u}from"./icons-CJO6dUP8.js";import{c as d}from"./utils-BQHNewu7.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";function a({className:i,size:o="default",...v}){return e.jsxs("div",{className:"group/native-select relative w-fit has-[select:disabled]:opacity-50","data-slot":"native-select-wrapper",children:[e.jsx("select",{"data-slot":"native-select","data-size":o,className:d("h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1 dark:bg-input/30 dark:hover:bg-input/50","focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50","aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",i),...v}),e.jsx(u.chevronDown,{className:"pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground opacity-50 select-none","aria-hidden":"true","data-slot":"native-select-icon"})]})}function t({className:i,...o}){return e.jsx("option",{"data-slot":"native-select-option",className:d("bg-[Canvas] text-[CanvasText]",i),...o})}function c({className:i,...o}){return e.jsx("optgroup",{"data-slot":"native-select-optgroup",className:d("bg-[Canvas] text-[CanvasText]",i),...o})}a.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "default"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOptGroup"};t.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOption"};const x={component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A native HTML select element wrapper that provides better browser performance and accessibility. Supports options, optgroups, and all standard select attributes."}}}},n={render:()=>e.jsxs(a,{children:[e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"}),e.jsx(t,{value:"option-3",children:"Option 3"})]})},r={render:()=>e.jsxs(a,{children:[e.jsxs(c,{label:"Fruits",children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"})]}),e.jsxs(c,{label:"Vegetables",children:[e.jsx(t,{value:"carrot",children:"Carrot"}),e.jsx(t,{value:"potato",children:"Potato"})]})]})},s={render:()=>e.jsxs(a,{size:"sm",children:[e.jsx(t,{value:"option-1",children:"Small Option 1"}),e.jsx(t,{value:"option-2",children:"Small Option 2"})]})},l={render:()=>e.jsxs(a,{disabled:!0,children:[e.jsx(t,{value:"option-1",children:"Disabled Option 1"}),e.jsx(t,{value:"option-2",children:"Disabled Option 2"})]})},p={render:()=>e.jsxs(a,{children:[e.jsx(t,{value:"",children:"Select an option..."}),e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect>
      <NativeSelectOption value="option-1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option-3">Option 3</NativeSelectOption>
    </NativeSelect>
}`,...n.parameters?.docs?.source},description:{story:"Default native select dropdown",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="potato">Potato</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
}`,...r.parameters?.docs?.source},description:{story:"Native select with grouped options using NativeSelectOptGroup",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect size="sm">
      <NativeSelectOption value="option-1">Small Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Small Option 2</NativeSelectOption>
    </NativeSelect>
}`,...s.parameters?.docs?.source},description:{story:"Small-sized native select",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect disabled>
      <NativeSelectOption value="option-1">Disabled Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Disabled Option 2</NativeSelectOption>
    </NativeSelect>
}`,...l.parameters?.docs?.source},description:{story:"Disabled native select that prevents interaction",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect>
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option-1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Option 2</NativeSelectOption>
    </NativeSelect>
}`,...p.parameters?.docs?.source},description:{story:"Native select with placeholder option",...p.parameters?.docs?.description}}};const b=["Default","WithGroups","Small","Disabled","WithPlaceholder"];export{n as Default,l as Disabled,s as Small,r as WithGroups,p as WithPlaceholder,b as __namedExportsOrder,x as default};
