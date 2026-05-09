import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as v}from"./index-CAPI2NOD.js";import{B as o}from"./button-B1qRRuul.js";import{D as r,a,b as s,c as l,d as c,e as d,f as B,g as y}from"./dialog-BnXBe5Lp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";import"./index-Do-fIL6h.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./icons-Bvzo9UON.js";const U={component:r,tags:["autodocs"],parameters:{layout:"centered"}},n={render:()=>e.jsx(r,{open:!0,children:e.jsxs(a,{children:[e.jsxs(s,{children:[e.jsx(l,{children:"Dialog Title"}),e.jsx(c,{children:"This is a description of the dialog. It provides additional context about the content."})]}),e.jsx("p",{children:"Dialog content goes here. You can put any React content inside."}),e.jsxs(d,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{children:"Confirm"})]})]})})},t={render:()=>{const[T,p]=v.useState(!1);return e.jsxs(r,{open:T,onOpenChange:p,children:[e.jsx(B,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(a,{children:[e.jsxs(s,{children:[e.jsx(l,{children:"Are you sure?"}),e.jsx(c,{children:"This action cannot be undone. Please confirm to proceed."})]}),e.jsxs(d,{children:[e.jsx(y,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Cancel"})}),e.jsx(o,{onClick:()=>p(!1),children:"Confirm"})]})]})]})}},i={render:()=>e.jsx(r,{open:!0,children:e.jsxs(a,{className:"sm:max-w-[425px]",children:[e.jsxs(s,{children:[e.jsx(l,{children:"Destructive Action"}),e.jsx(c,{className:"text-destructive",children:"This will permanently delete your account and remove all associated data."})]}),e.jsx(d,{className:"gap-2 sm:gap-0",children:e.jsx(o,{variant:"destructive",children:"Delete Account"})})]})})};var g,D,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog. It provides additional context about the
              content.
            </DialogDescription>
          </DialogHeader>
          <p>Dialog content goes here. You can put any React content inside.</p>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...(u=(D=n.parameters)==null?void 0:D.docs)==null?void 0:u.source}}};var m,h,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Please confirm to proceed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,C,f;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <Dialog open>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Destructive Action</DialogTitle>
            <DialogDescription className="text-destructive">
              This will permanently delete your account and remove all associated data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const V=["Default","WithTrigger","AlertDialog"];export{i as AlertDialog,n as Default,t as WithTrigger,V as __namedExportsOrder,U as default};
