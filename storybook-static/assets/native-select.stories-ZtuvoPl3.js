import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{I as B}from"./icons-Bwb0mD-e.js";import{c as d}from"./utils-BQHNewu7.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";function a({className:i,size:o="default",...V}){return e.jsxs("div",{className:"group/native-select relative w-fit has-[select:disabled]:opacity-50","data-slot":"native-select-wrapper",children:[e.jsx("select",{"data-slot":"native-select","data-size":o,className:d("h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1 dark:bg-input/30 dark:hover:bg-input/50","focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50","aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",i),...V}),e.jsx(B.chevronDown,{className:"pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground opacity-50 select-none","aria-hidden":"true","data-slot":"native-select-icon"})]})}function t({className:i,...o}){return e.jsx("option",{"data-slot":"native-select-option",className:d("bg-[Canvas] text-[CanvasText]",i),...o})}function c({className:i,...o}){return e.jsx("optgroup",{"data-slot":"native-select-optgroup",className:d("bg-[Canvas] text-[CanvasText]",i),...o})}a.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "default"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOptGroup"};t.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOption"};const M={component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A native HTML select element wrapper that provides better browser performance and accessibility. Supports options, optgroups, and all standard select attributes."}}}},n={render:()=>e.jsxs(a,{children:[e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"}),e.jsx(t,{value:"option-3",children:"Option 3"})]})},r={render:()=>e.jsxs(a,{children:[e.jsxs(c,{label:"Fruits",children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"})]}),e.jsxs(c,{label:"Vegetables",children:[e.jsx(t,{value:"carrot",children:"Carrot"}),e.jsx(t,{value:"potato",children:"Potato"})]})]})},s={render:()=>e.jsxs(a,{size:"sm",children:[e.jsx(t,{value:"option-1",children:"Small Option 1"}),e.jsx(t,{value:"option-2",children:"Small Option 2"})]})},l={render:()=>e.jsxs(a,{disabled:!0,children:[e.jsx(t,{value:"option-1",children:"Disabled Option 1"}),e.jsx(t,{value:"option-2",children:"Disabled Option 2"})]})},p={render:()=>e.jsxs(a,{children:[e.jsx(t,{value:"",children:"Select an option..."}),e.jsx(t,{value:"option-1",children:"Option 1"}),e.jsx(t,{value:"option-2",children:"Option 2"})]})};var v,u,m,S,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <NativeSelect>
      <NativeSelectOption value="option-1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option-3">Option 3</NativeSelectOption>
    </NativeSelect>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Default native select dropdown",...(N=(S=n.parameters)==null?void 0:S.docs)==null?void 0:N.description}}};var O,h,x,b,g;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Native select with grouped options using NativeSelectOptGroup",...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.description}}};var f,j,y,w,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <NativeSelect size="sm">
      <NativeSelectOption value="option-1">Small Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Small Option 2</NativeSelectOption>
    </NativeSelect>
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source},description:{story:"Small-sized native select",...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.description}}};var G,z,_,C,I;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <NativeSelect disabled>
      <NativeSelectOption value="option-1">Disabled Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Disabled Option 2</NativeSelectOption>
    </NativeSelect>
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:"Disabled native select that prevents interaction",...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};var P,T,W,k,A;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <NativeSelect>
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option-1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Option 2</NativeSelectOption>
    </NativeSelect>
}`,...(W=(T=p.parameters)==null?void 0:T.docs)==null?void 0:W.source},description:{story:"Native select with placeholder option",...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};const R=["Default","WithGroups","Small","Disabled","WithPlaceholder"];export{n as Default,l as Disabled,s as Small,r as WithGroups,p as WithPlaceholder,R as __namedExportsOrder,M as default};
