import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{B as m}from"./button-B1qRRuul.js";import{c as d}from"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./index-AnhkqxcL.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CJNorLC4.js";function l({className:a,stackedPanels:s=!1,...D}){return e.jsx("div",{className:d("bg-muted/50 relative flex flex-col rounded-2xl p-1",s?"*:has-[+[data-slot=frame-panel]]:rounded-b-none *:has-[+[data-slot=frame-panel]]:before:hidden dark:*:has-[+[data-slot=frame-panel]]:before:block *:[[data-slot=frame-panel]+[data-slot=frame-panel]]:rounded-t-none *:[[data-slot=frame-panel]+[data-slot=frame-panel]]:border-t-0 dark:*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:before:hidden":"*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:mt-1",a),"data-slot":"frame",...D})}function n({className:a,...s}){return e.jsx("div",{className:d("bg-background relative rounded-xl border bg-clip-padding p-5 shadow-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",a),"data-slot":"frame-panel",...s})}function r({className:a,...s}){return e.jsx("header",{className:d("flex flex-col px-5 py-4",a),"data-slot":"frame-panel-header",...s})}function t({className:a,...s}){return e.jsx("div",{className:d("text-sm font-semibold",a),"data-slot":"frame-panel-title",...s})}function u({className:a,...s}){return e.jsx("div",{className:d("text-muted-foreground text-sm",a),"data-slot":"frame-panel-description",...s})}function f({className:a,...s}){return e.jsx("footer",{className:d("flex flex-col gap-1 px-5 py-4",a),"data-slot":"frame-panel-footer",...s})}l.__docgenInfo={description:"",methods:[],displayName:"Frame",props:{stackedPanels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"FramePanel"};r.__docgenInfo={description:"",methods:[],displayName:"FrameHeader"};t.__docgenInfo={description:"",methods:[],displayName:"FrameTitle"};u.__docgenInfo={description:"",methods:[],displayName:"FrameDescription"};f.__docgenInfo={description:"",methods:[],displayName:"FrameFooter"};const O={component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A frame component for creating panel-based layouts with header, content, and footer sections."}}}},o={render:()=>e.jsx(l,{className:"w-full max-w-lg",children:e.jsxs(n,{children:[e.jsxs(r,{children:[e.jsx(t,{children:"Panel Title"}),e.jsx(u,{children:"This is a description for the panel."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Panel content goes here. This is the main body of the panel where you can place any content."})}),e.jsx(f,{children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(m,{variant:"outline",size:"sm",children:"Cancel"}),e.jsx(m,{size:"sm",children:"Submit"})]})})]})})},i={render:()=>e.jsxs(l,{className:"w-full max-w-lg",stackedPanels:!0,children:[e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{children:"First Panel"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm",children:"Content of the first panel."})})]}),e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{children:"Second Panel"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm",children:"Content of the second panel."})})]}),e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{children:"Third Panel"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm",children:"Content of the third panel."})})]})]})},c={render:()=>e.jsx(l,{className:"w-full max-w-lg",children:e.jsxs(n,{children:[e.jsxs(r,{children:[e.jsx(t,{children:"Recent Activity"}),e.jsx(u,{children:"Your latest transactions and updates."})]}),e.jsx("div",{className:"py-4 space-y-3",children:[1,2,3].map(a=>e.jsxs("div",{className:"flex items-center justify-between py-2 border-b last:border-0",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-medium",children:["Transaction #",a]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["May ",10+a,", 2024"]})]}),e.jsxs("span",{className:"text-sm font-medium",children:["$",(a*25).toFixed(2)]})]},a))}),e.jsx(f,{children:e.jsx(m,{variant:"ghost",size:"sm",className:"w-full",children:"View All Activity"})})]})})},p={render:()=>e.jsx(l,{className:"w-full max-w-lg",children:e.jsxs(n,{children:[e.jsxs(r,{children:[e.jsx(t,{children:"Account Settings"}),e.jsx(u,{children:"Update your account information."})]}),e.jsxs("div",{className:"py-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Display Name"}),e.jsx(Input,{defaultValue:"John Doe"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx(Input,{defaultValue:"john@example.com",type:"email"})]})]}),e.jsx(f,{children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(m,{variant:"outline",size:"sm",children:"Cancel"}),e.jsx(m,{size:"sm",children:"Save Changes"})]})})]})})},x={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{className:"flex-1",children:e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{children:"Card One"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for card one."})})]})}),e.jsx(l,{className:"flex-1",children:e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{children:"Card Two"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for card two."})})]})})]})};var h,F,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Frame className="w-full max-w-lg">
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Panel Title</FrameTitle>
          <FrameDescription>This is a description for the panel.</FrameDescription>
        </FrameHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Panel content goes here. This is the main body of the panel where you can place any content.
          </p>
        </div>
        <FrameFooter>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Submit</Button>
          </div>
        </FrameFooter>
      </FramePanel>
    </Frame>
}`,...(j=(F=o.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var N,v,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Frame className="w-full max-w-lg" stackedPanels>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>First Panel</FrameTitle>
        </FrameHeader>
        <div className="py-2">
          <p className="text-sm">Content of the first panel.</p>
        </div>
      </FramePanel>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Second Panel</FrameTitle>
        </FrameHeader>
        <div className="py-2">
          <p className="text-sm">Content of the second panel.</p>
        </div>
      </FramePanel>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Third Panel</FrameTitle>
        </FrameHeader>
        <div className="py-2">
          <p className="text-sm">Content of the third panel.</p>
        </div>
      </FramePanel>
    </Frame>
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,b,w;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Frame className="w-full max-w-lg">
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Recent Activity</FrameTitle>
          <FrameDescription>Your latest transactions and updates.</FrameDescription>
        </FrameHeader>
        <div className="py-4 space-y-3">
          {[1, 2, 3].map(i => <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <p className="text-sm font-medium">Transaction #{i}</p>
                <p className="text-xs text-muted-foreground">May {10 + i}, 2024</p>
              </div>
              <span className="text-sm font-medium">\${(i * 25).toFixed(2)}</span>
            </div>)}
        </div>
        <FrameFooter>
          <Button variant="ghost" size="sm" className="w-full">View All Activity</Button>
        </FrameFooter>
      </FramePanel>
    </Frame>
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var P,T,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Frame className="w-full max-w-lg">
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Account Settings</FrameTitle>
          <FrameDescription>Update your account information.</FrameDescription>
        </FrameHeader>
        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Display Name</label>
            <Input defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input defaultValue="john@example.com" type="email" />
          </div>
        </div>
        <FrameFooter>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Save Changes</Button>
          </div>
        </FrameFooter>
      </FramePanel>
    </Frame>
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var H,_,S;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Frame className="flex-1">
        <FramePanel>
          <FrameHeader>
            <FrameTitle>Card One</FrameTitle>
          </FrameHeader>
          <div className="py-2">
            <p className="text-sm text-muted-foreground">Content for card one.</p>
          </div>
        </FramePanel>
      </Frame>
      <Frame className="flex-1">
        <FramePanel>
          <FrameHeader>
            <FrameTitle>Card Two</FrameTitle>
          </FrameHeader>
          <div className="py-2">
            <p className="text-sm text-muted-foreground">Content for card two.</p>
          </div>
        </FramePanel>
      </Frame>
    </div>
}`,...(S=(_=x.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const R=["Default","StackedPanels","WithList","WithForm","CardStyle"];export{x as CardStyle,o as Default,i as StackedPanels,p as WithForm,c as WithList,R as __namedExportsOrder,O as default};
