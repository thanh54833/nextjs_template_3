import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as y}from"./index-CAPI2NOD.js";import{B as n}from"./button-B1qRRuul.js";import{S as t,a as r,b as s,c as i,d as o,e as k,f as E}from"./sheet-B6buQ7I-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";import"./index-Do-fIL6h.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./icons-Bvzo9UON.js";const ne={component:t,tags:["autodocs"],parameters:{layout:"padded"}},h={render:()=>e.jsx(t,{open:!0,children:e.jsxs(r,{side:"right",children:[e.jsxs(s,{children:[e.jsx(i,{children:"Sheet Title"}),e.jsx(o,{children:"This is a description of the sheet content."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content goes here. You can put any content inside."})}),e.jsxs(k,{children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{children:"Save"})]})]})})},a={render:()=>{const[b,l]=y.useState(!1);return e.jsxs(t,{open:b,onOpenChange:l,children:[e.jsx(E,{asChild:!0,children:e.jsx(n,{children:"Open Sheet"})}),e.jsxs(r,{side:"right",children:[e.jsxs(s,{children:[e.jsx(i,{children:"Edit Settings"}),e.jsx(o,{children:"Make changes to your settings here."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Settings form content..."})}),e.jsxs(k,{children:[e.jsx(n,{variant:"outline",onClick:()=>l(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>l(!1),children:"Save Changes"})]})]})]})}},c={render:()=>e.jsx(t,{open:!0,children:e.jsxs(r,{side:"top",children:[e.jsxs(s,{children:[e.jsx(i,{children:"Top Sheet"}),e.jsx(o,{children:"This sheet slides in from the top."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})})]})})},d={render:()=>e.jsx(t,{open:!0,children:e.jsxs(r,{side:"bottom",children:[e.jsxs(s,{children:[e.jsx(i,{children:"Bottom Sheet"}),e.jsx(o,{children:"This sheet slides in from the bottom."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})})]})})},p={render:()=>e.jsx(t,{open:!0,children:e.jsxs(r,{side:"left",children:[e.jsxs(s,{children:[e.jsx(i,{children:"Left Sheet"}),e.jsx(o,{children:"This sheet slides in from the left."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})})]})})};var S,m,u;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <Sheet open>
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
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>;
  }
}`,...(u=(m=h.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,j,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(j=a.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var f,T,C;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <Sheet open>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the top.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
        </SheetContent>
      </Sheet>;
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var v,B,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <Sheet open>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the bottom.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
        </SheetContent>
      </Sheet>;
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,N,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    return <Sheet open>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the left.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
        </SheetContent>
      </Sheet>;
  }
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const re=["Default","WithTrigger","TopSide","BottomSide","LeftSide"];export{d as BottomSide,h as Default,p as LeftSide,c as TopSide,a as WithTrigger,re as __namedExportsOrder,ne as default};
