import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as d}from"./index-CAPI2NOD.js";import{B as n}from"./button-B1qRRuul.js";import{S as o,a as l,b as p,c as S,d as m,e as u,f as g}from"./sheet-CWZPLhfi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";import"./index-Do-fIL6h.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./icons-Bvzo9UON.js";const pe={component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A sheet component for slide-out panels. Supports four sides (top, bottom, left, right) and is often used for mobile navigation, settings panels, and filters."}}}},r={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Sheet"})}),e.jsxs(p,{side:"right",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Sheet Title"}),e.jsx(u,{children:"This is a description of the sheet content."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content goes here. You can put any content inside."})}),e.jsxs(g,{children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Save"})]})]})]})}},i={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Sheet"})}),e.jsxs(p,{side:"right",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Edit Settings"}),e.jsx(u,{children:"Make changes to your settings here."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Settings form content..."})}),e.jsxs(g,{children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Save Changes"})]})]})]})}},h={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Top Sheet"})}),e.jsxs(p,{side:"top",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Top Sheet"}),e.jsx(u,{children:"This sheet slides in from the top."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})}),e.jsx(g,{children:e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Close"})})]})]})}},a={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Bottom Sheet"})}),e.jsxs(p,{side:"bottom",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Bottom Sheet"}),e.jsx(u,{children:"This sheet slides in from the bottom."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})}),e.jsx(g,{children:e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Close"})})]})]})}},c={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Left Sheet"})}),e.jsxs(p,{side:"left",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Left Sheet"}),e.jsx(u,{children:"This sheet slides in from the left."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})}),e.jsx(g,{children:e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Close"})})]})]})}};var f,x,j,C,O;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a description of the sheet content.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content goes here. You can put any content inside.</p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>;
  }
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source},description:{story:"Default sheet sliding from the right",...(O=(C=r.parameters)==null?void 0:C.docs)==null?void 0:O.description}}};var T,B,v,k,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Edit Settings</SheetTitle>
            <SheetDescription>
              Make changes to your settings here.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Settings form content...</p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>;
  }
}`,...(v=(B=i.parameters)==null?void 0:B.docs)==null?void 0:v.source},description:{story:"Sheet with trigger button for interactive open/close",...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var F,H,y,N,b;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Top Sheet</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the top.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>;
  }
}`,...(y=(H=h.parameters)==null?void 0:H.docs)==null?void 0:y.source},description:{story:"Sheet sliding from the top",...(b=(N=h.parameters)==null?void 0:N.docs)==null?void 0:b.description}}};var L,E,M,W,Y;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Bottom Sheet</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the bottom.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>;
  }
}`,...(M=(E=a.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Sheet sliding from the bottom",...(Y=(W=a.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var _,w,A,R,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Left Sheet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the left.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>;
  }
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source},description:{story:"Sheet sliding from the left",...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};const Se=["Default","WithTrigger","TopSide","BottomSide","LeftSide"];export{a as BottomSide,r as Default,c as LeftSide,h as TopSide,i as WithTrigger,Se as __namedExportsOrder,pe as default};
