import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as w}from"./index-CAPI2NOD.js";import{B as t}from"./button-B1qRRuul.js";import{D as a,a as r,b as s,c as l,d as c,e as d,f as F,g as H}from"./dialog-B_YFMKWs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";import"./index-wUS1JGU-.js";import"./index-CKUxhdB2.js";import"./index-Da_hoYQ_.js";import"./index-BAWfCZ5Z.js";import"./index-CxHADOAi.js";import"./index-Dp8D8Mew.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-DML2O0rb.js";import"./index-yuxTiXDJ.js";import"./icons-Bvzo9UON.js";const ee={component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dialog component that overlays the page to capture user attention. Built on Radix UI primitives for accessibility and animation support."}}}},o={render:()=>e.jsx(a,{open:!0,children:e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(l,{children:"Dialog Title"}),e.jsx(c,{children:"This is a description of the dialog. It provides additional context about the content."})]}),e.jsx("p",{children:"Dialog content goes here. You can put any React content inside."}),e.jsxs(d,{children:[e.jsx(t,{variant:"outline",children:"Cancel"}),e.jsx(t,{children:"Confirm"})]})]})})},n={render:()=>{const[b,p]=w.useState(!1);return e.jsxs(a,{open:b,onOpenChange:p,children:[e.jsx(F,{asChild:!0,children:e.jsx(t,{children:"Open Dialog"})}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(l,{children:"Are you sure?"}),e.jsx(c,{children:"This action cannot be undone. Please confirm to proceed."})]}),e.jsxs(d,{children:[e.jsx(H,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Cancel"})}),e.jsx(t,{onClick:()=>p(!1),children:"Confirm"})]})]})]})}},i={render:()=>e.jsx(a,{open:!0,children:e.jsxs(r,{className:"sm:max-w-[425px]",children:[e.jsxs(s,{children:[e.jsx(l,{children:"Destructive Action"}),e.jsx(c,{className:"text-destructive",children:"This will permanently delete your account and remove all associated data."})]}),e.jsx(d,{className:"gap-2 sm:gap-0",children:e.jsx(t,{variant:"destructive",children:"Delete Account"})})]})})};var g,u,m,D,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Default dialog with title, description, and action buttons",...(h=(D=o.parameters)==null?void 0:D.docs)==null?void 0:h.description}}};var x,j,C,f,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source},description:{story:"Dialog with trigger button that manages open state",...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.description}}};var v,y,B,A,O;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(y=i.parameters)==null?void 0:y.docs)==null?void 0:B.source},description:{story:"Alert-style dialog for destructive actions with red accent",...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.description}}};const te=["Default","WithTrigger","AlertDialog"];export{i as AlertDialog,o as Default,n as WithTrigger,te as __namedExportsOrder,ee as default};
