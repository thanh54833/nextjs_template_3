import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{R as i,a as t}from"./radio-group-D42cSUmk.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CKUxhdB2.js";import"./index-CJNorLC4.js";import"./index-Da_hoYQ_.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-BUH2vOft.js";import"./index-BUhLVj6P.js";import"./index-BAWfCZ5Z.js";import"./index-B3CE9KsV.js";import"./index-CxHADOAi.js";import"./index-Ux667dBy.js";import"./index-B5M3RRgR.js";import"./index-Mrew0IH0.js";import"./index-yuxTiXDJ.js";import"./icons-Bvzo9UON.js";import"./utils-BQHNewu7.js";const C={component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A radio group component that allows users to select a single option from a list of mutually exclusive options. Supports horizontal and vertical orientations, plus disabled state."}}}},o={render:()=>e.jsxs(i,{defaultValue:"option-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-1",id:"r1"}),e.jsx("label",{htmlFor:"r1",className:"text-sm font-medium",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-2",id:"r2"}),e.jsx("label",{htmlFor:"r2",className:"text-sm font-medium",children:"Option 2"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-3",id:"r3"}),e.jsx("label",{htmlFor:"r3",className:"text-sm font-medium",children:"Option 3"})]})]})},a={render:()=>e.jsxs(i,{defaultValue:"option-1",orientation:"horizontal",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-1",id:"hr1"}),e.jsx("label",{htmlFor:"hr1",className:"text-sm font-medium",children:"Small"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-2",id:"hr2"}),e.jsx("label",{htmlFor:"hr2",className:"text-sm font-medium",children:"Medium"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-3",id:"hr3"}),e.jsx("label",{htmlFor:"hr3",className:"text-sm font-medium",children:"Large"})]})]})},r={render:()=>e.jsxs(i,{defaultValue:"option-2",disabled:!0,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-1",id:"dr1"}),e.jsx("label",{htmlFor:"dr1",className:"text-sm font-medium",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{value:"option-2",id:"dr2"}),e.jsx("label",{htmlFor:"dr2",className:"text-sm font-medium",children:"Option 2"})]})]})};var s,l,n,m,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source},description:{story:"Default vertical radio group",...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.description}}};var p,c,u,x,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:"Horizontal radio group for inline options like size selection",...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var f,v,N,b,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.source},description:{story:"Disabled radio group that prevents user interaction",...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};const J=["Default","Horizontal","Disabled"];export{o as Default,r as Disabled,a as Horizontal,J as __namedExportsOrder,C as default};
