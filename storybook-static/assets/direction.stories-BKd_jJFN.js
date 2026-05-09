import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{D as j,u as R}from"./index-Ux667dBy.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";function i({dir:o,direction:n,children:D}){return e.jsx(j,{dir:n??o,children:D})}const T=R;i.__docgenInfo={description:"",methods:[],displayName:"DirectionProvider",props:{direction:{required:!1,tsType:{name:'ReactComponentProps["dir"]',raw:'React.ComponentProps<typeof Direction.DirectionProvider>["dir"]'},description:""}}};const w={component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A direction provider component built on Radix UI Direction for RTL/LTR text direction support."}}}},r={render:()=>e.jsx(i,{direction:"ltr",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",children:"This text is displayed left-to-right (LTR)."}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Most languages like English, French, and German are LTR."})]})})},t={render:()=>e.jsx(i,{direction:"rtl",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",dir:"rtl",children:"هذا النص يتم عرضه من اليمين إلى اليسار (RTL)."}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Languages like Arabic, Hebrew, and Persian are RTL."})]})})},s={render:()=>{function o(){const n=T();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-sm",children:["Current direction: ",e.jsx("strong",{children:n})]}),e.jsxs("div",{dir:n,className:"space-y-2",children:[e.jsx("input",{type:"text",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",placeholder:"Text input"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm",children:"Button"}),e.jsx("button",{className:"rounded-md border border-input bg-background px-4 py-2 text-sm",children:"Another Button"})]})]})]})}return e.jsx(i,{direction:"ltr",children:e.jsx(o,{})})}};var a,d,c,p,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <DirectionProvider direction="ltr">
      <div className="space-y-4">
        <p className="text-sm">This text is displayed left-to-right (LTR).</p>
        <p className="text-sm text-muted-foreground">
          Most languages like English, French, and German are LTR.
        </p>
      </div>
    </DirectionProvider>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:"Left-to-right direction for most languages (English, French, German).",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var l,u,x,g,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source},description:{story:"Right-to-left direction for Arabic, Hebrew, Persian languages.",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var b,y,f,N,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"Using useDirection hook to read and apply direction programmatically.",...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.description}}};const A=["LTR","RTL","WithUseDirection"];export{r as LTR,t as RTL,s as WithUseDirection,A as __namedExportsOrder,w as default};
