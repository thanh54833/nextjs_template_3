import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{D as b,u as N}from"./index-Ux667dBy.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";function r({dir:o,direction:t,children:h}){return e.jsx(b,{dir:t??o,children:h})}const v=N;r.__docgenInfo={description:"",methods:[],displayName:"DirectionProvider",props:{direction:{required:!1,tsType:{name:'ReactComponentProps["dir"]',raw:'React.ComponentProps<typeof Direction.DirectionProvider>["dir"]'},description:""}}};const T={component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A direction provider component built on Radix UI Direction for RTL/LTR text direction support."}}}},s={render:()=>e.jsx(r,{direction:"ltr",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",children:"This text is displayed left-to-right (LTR)."}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Most languages like English, French, and German are LTR."})]})})},i={render:()=>e.jsx(r,{direction:"rtl",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",dir:"rtl",children:"هذا النص يتم عرضه من اليمين إلى اليسار (RTL)."}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Languages like Arabic, Hebrew, and Persian are RTL."})]})})},n={render:()=>{function o(){const t=v();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-sm",children:["Current direction: ",e.jsx("strong",{children:t})]}),e.jsxs("div",{dir:t,className:"space-y-2",children:[e.jsx("input",{type:"text",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",placeholder:"Text input"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm",children:"Button"}),e.jsx("button",{className:"rounded-md border border-input bg-background px-4 py-2 text-sm",children:"Another Button"})]})]})]})}return e.jsx(r,{direction:"ltr",children:e.jsx(o,{})})}};var a,d,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <DirectionProvider direction="ltr">
      <div className="space-y-4">
        <p className="text-sm">This text is displayed left-to-right (LTR).</p>
        <p className="text-sm text-muted-foreground">
          Most languages like English, French, and German are LTR.
        </p>
      </div>
    </DirectionProvider>
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DirectionProvider direction="rtl">
      <div className="space-y-4">
        <p className="text-sm" dir="rtl">
          هذا النص يتم عرضه من اليمين إلى اليسار (RTL).
        </p>
        <p className="text-sm text-muted-foreground">
          Languages like Arabic, Hebrew, and Persian are RTL.
        </p>
      </div>
    </DirectionProvider>
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,x,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    return <DirectionProvider direction="ltr">
        <DirectionExample />
      </DirectionProvider>;
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const R=["LTR","RTL","WithUseDirection"];export{s as LTR,i as RTL,n as WithUseDirection,R as __namedExportsOrder,T as default};
