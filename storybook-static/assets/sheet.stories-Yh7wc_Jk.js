import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as R}from"./index-CAPI2NOD.js";import{B as h}from"./button-B1qRRuul.js";import{S as t,a,b as d,c,d as p,e as w,f as q}from"./sheet-DZf-ms4B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";import"./index-wUS1JGU-.js";import"./index-CKUxhdB2.js";import"./index-Da_hoYQ_.js";import"./index-BAWfCZ5Z.js";import"./index-CxHADOAi.js";import"./index-Dp8D8Mew.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-DML2O0rb.js";import"./index-yuxTiXDJ.js";import"./icons-Bvzo9UON.js";const pe={component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A sheet component for slide-out panels. Supports four sides (top, bottom, left, right) and is often used for mobile navigation, settings panels, and filters."}}}},n={render:()=>e.jsx(t,{open:!0,children:e.jsxs(a,{side:"right",children:[e.jsxs(d,{children:[e.jsx(c,{children:"Sheet Title"}),e.jsx(p,{children:"This is a description of the sheet content."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content goes here. You can put any content inside."})}),e.jsxs(w,{children:[e.jsx(h,{variant:"outline",children:"Cancel"}),e.jsx(h,{children:"Save"})]})]})})},r={render:()=>{const[A,l]=R.useState(!1);return e.jsxs(t,{open:A,onOpenChange:l,children:[e.jsx(q,{asChild:!0,children:e.jsx(h,{children:"Open Sheet"})}),e.jsxs(a,{side:"right",children:[e.jsxs(d,{children:[e.jsx(c,{children:"Edit Settings"}),e.jsx(p,{children:"Make changes to your settings here."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Settings form content..."})}),e.jsxs(w,{children:[e.jsx(h,{variant:"outline",onClick:()=>l(!1),children:"Cancel"}),e.jsx(h,{onClick:()=>l(!1),children:"Save Changes"})]})]})]})}},s={render:()=>e.jsx(t,{open:!0,children:e.jsxs(a,{side:"top",children:[e.jsxs(d,{children:[e.jsx(c,{children:"Top Sheet"}),e.jsx(p,{children:"This sheet slides in from the top."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})})]})})},o={render:()=>e.jsx(t,{open:!0,children:e.jsxs(a,{side:"bottom",children:[e.jsxs(d,{children:[e.jsx(c,{children:"Bottom Sheet"}),e.jsx(p,{children:"This sheet slides in from the bottom."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})})]})})},i={render:()=>e.jsx(t,{open:!0,children:e.jsxs(a,{side:"left",children:[e.jsxs(d,{children:[e.jsx(c,{children:"Left Sheet"}),e.jsx(p,{children:"This sheet slides in from the left."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})})]})})};var S,m,u,x,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Default sheet sliding from the right",...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var j,g,T,v,C;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source},description:{story:"Sheet with trigger button for interactive open/close",...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};var B,D,H,y,N;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(D=s.parameters)==null?void 0:D.docs)==null?void 0:H.source},description:{story:"Sheet sliding from the top",...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.description}}};var O,b,k,E,F;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:"Sheet sliding from the bottom",...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.description}}};var L,M,W,Y,_;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source},description:{story:"Sheet sliding from the left",...(_=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:_.description}}};const le=["Default","WithTrigger","TopSide","BottomSide","LeftSide"];export{o as BottomSide,n as Default,i as LeftSide,s as TopSide,r as WithTrigger,le as __namedExportsOrder,pe as default};
