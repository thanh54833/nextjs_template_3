import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as d,u as c}from"./index-ofxjSrhS.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";function i({dir:o,direction:n,children:a}){return e.jsx(d,{dir:n??o,children:a})}const p=c;i.__docgenInfo={description:"",methods:[],displayName:"DirectionProvider",props:{direction:{required:!1,tsType:{name:'ReactComponentProps["dir"]',raw:'React.ComponentProps<typeof Direction.DirectionProvider>["dir"]'},description:""}}};const g={component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A direction provider component built on Radix UI Direction for RTL/LTR text direction support."}}}},r={render:()=>e.jsx(i,{dir:"ltr",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",children:"This text is displayed left-to-right (LTR)."}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Most languages like English, French, and German are LTR."})]})})},t={render:()=>e.jsx(i,{dir:"rtl",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",dir:"rtl",children:"هذا النص يتم عرضه من اليمين إلى اليسار (RTL)."}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Languages like Arabic, Hebrew, and Persian are RTL."})]})})},s={render:()=>{function o(){const n=p();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-sm",children:["Current direction: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{dir:n,className:"space-y-2",children:[e.jsx("input",{type:"text",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",placeholder:"Text input"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm",children:"Button"}),e.jsx("button",{className:"rounded-md border border-input bg-background px-4 py-2 text-sm",children:"Another Button"})]})]})]})}return e.jsx(i,{dir:"ltr",children:e.jsx(o,{})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <DirectionProvider dir="ltr">
      <div className="space-y-4">
        <p className="text-sm">This text is displayed left-to-right (LTR).</p>
        <p className="text-sm text-muted-foreground">
          Most languages like English, French, and German are LTR.
        </p>
      </div>
    </DirectionProvider>
}`,...r.parameters?.docs?.source},description:{story:"Left-to-right direction for most languages (English, French, German).",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <DirectionProvider dir="rtl">
      <div className="space-y-4">
        <p className="text-sm" dir="rtl">
          هذا النص يتم عرضه من اليمين إلى اليسار (RTL).
        </p>
        <p className="text-sm text-muted-foreground">
          Languages like Arabic, Hebrew, and Persian are RTL.
        </p>
      </div>
    </DirectionProvider>
}`,...t.parameters?.docs?.source},description:{story:"Right-to-left direction for Arabic, Hebrew, Persian languages.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    function DirectionExample() {
      const dir = useDirection();
      return <div className="space-y-4">
          <p className="text-sm">Current direction: <strong>{dir || 'ltr'}</strong></p>
          <div dir={dir || 'ltr'} className="space-y-2">
            <input type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Text input" />
            <div className="flex gap-2">
              <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm">
                Button
              </button>
              <button className="rounded-md border border-input bg-background px-4 py-2 text-sm">
                Another Button
              </button>
            </div>
          </div>
        </div>;
    }
    return <DirectionProvider dir="ltr">
        <DirectionExample />
      </DirectionProvider>;
  }
}`,...s.parameters?.docs?.source},description:{story:"Using useDirection hook to read and apply direction programmatically.",...s.parameters?.docs?.description}}};const h=["LTR","RTL","WithUseDirection"];export{r as LTR,t as RTL,s as WithUseDirection,h as __namedExportsOrder,g as default};
