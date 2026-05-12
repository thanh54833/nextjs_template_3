import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as d}from"./button-BQzN1lMO.js";import{I as h}from"./input-Dz4TUfxo.js";import{F as r,a,b as s,c as n,d as p,e as x}from"./frame-D9bzNsq6.js";import"./index-koxbFvze.js";import"./utils-Czy_q_oT.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";import"./icons-BdTSAv6R.js";const b={component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A frame component for creating panel-based layouts with header, content, and footer sections."}}}},t={render:()=>e.jsx(r,{className:"w-full max-w-lg",children:e.jsxs(a,{children:[e.jsxs(s,{children:[e.jsx(n,{children:"Panel Title"}),e.jsx(p,{children:"This is a description for the panel."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Panel content goes here. This is the main body of the panel where you can place any content."})}),e.jsx(x,{children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(d,{variant:"outline",size:"sm",children:"Cancel"}),e.jsx(d,{size:"sm",children:"Submit"})]})})]})})},l={render:()=>e.jsxs(r,{className:"w-full max-w-lg",stackedPanels:!0,children:[e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(n,{children:"First Panel"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm",children:"Content of the first panel."})})]}),e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(n,{children:"Second Panel"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm",children:"Content of the second panel."})})]}),e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(n,{children:"Third Panel"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm",children:"Content of the third panel."})})]})]})},i={render:()=>e.jsx(r,{className:"w-full max-w-lg",children:e.jsxs(a,{children:[e.jsxs(s,{children:[e.jsx(n,{children:"Recent Activity"}),e.jsx(p,{children:"Your latest transactions and updates."})]}),e.jsx("div",{className:"py-4 space-y-3",children:[1,2,3].map(o=>e.jsxs("div",{className:"flex items-center justify-between py-2 border-b last:border-0",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-medium",children:["Transaction #",o]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["May ",10+o,", 2024"]})]}),e.jsxs("span",{className:"text-sm font-medium",children:["$",(o*25).toFixed(2)]})]},o))}),e.jsx(x,{children:e.jsx(d,{variant:"ghost",size:"sm",className:"w-full",children:"View All Activity"})})]})})},m={render:()=>e.jsx(r,{className:"w-full max-w-lg",children:e.jsxs(a,{children:[e.jsxs(s,{children:[e.jsx(n,{children:"Account Settings"}),e.jsx(p,{children:"Update your account information."})]}),e.jsxs("div",{className:"py-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Display Name"}),e.jsx(h,{defaultValue:"John Doe"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx(h,{defaultValue:"john@example.com",type:"email"})]})]}),e.jsx(x,{children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(d,{variant:"outline",size:"sm",children:"Cancel"}),e.jsx(d,{size:"sm",children:"Save Changes"})]})})]})})},c={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{className:"flex-1",children:e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(n,{children:"Card One"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for card one."})})]})}),e.jsx(r,{className:"flex-1",children:e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(n,{children:"Card Two"})}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for card two."})})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Default frame with title, description, and action buttons.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Multiple stacked panels for list-based content.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Frame with list content and footer action.",...i.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Frame with form fields for settings pages.",...m.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Card-style frames for dashboard grid layouts.",...c.parameters?.docs?.description}}};const C=["Default","StackedPanels","WithList","WithForm","CardStyle"];export{c as CardStyle,t as Default,l as StackedPanels,m as WithForm,i as WithList,C as __namedExportsOrder,b as default};
