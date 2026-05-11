import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as l}from"./index-Br2IOmUs.js";import{B as t}from"./button-Cw1GWQ4G.js";import{D as s,a as c,b as p,c as d,d as g,e as u,f as D,g as w}from"./dialog-DP7cBLxp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-D58SrNf6.js";import"./index-B1gorirK.js";import"./icons-Bwb0mD-e.js";import"./index-BkoIuwaM.js";import"./index-DW48STyt.js";import"./index-BRlNe44M.js";import"./index-BBh8-vjY.js";import"./index-1oe2SjNl.js";import"./index-D7wzBi_S.js";import"./index-BpJryQGc.js";import"./index-Caz76J1-.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./index-DLhQgCaF.js";import"./index-c0GMlZpa.js";import"./index-CIbk3zPC.js";import"./index-EtsJrrfg.js";const ne={component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dialog component that overlays the page to capture user attention. Built on Radix UI primitives for accessibility and animation support."}}}},i={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(s,{open:o,onOpenChange:n,children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{children:"Open Dialog"})}),e.jsxs(p,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Dialog Title"}),e.jsx(u,{children:"This is a description of the dialog. It provides additional context about the content."})]}),e.jsx("p",{children:"Dialog content goes here. You can put any React content inside."}),e.jsxs(D,{children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})]})}},a={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(s,{open:o,onOpenChange:n,children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{children:"Open Dialog"})}),e.jsxs(p,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Are you sure?"}),e.jsx(u,{children:"This action cannot be undone. Please confirm to proceed."})]}),e.jsxs(D,{children:[e.jsx(w,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Cancel"})}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})]})}},r={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(s,{open:o,onOpenChange:n,children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"destructive",children:"Delete Account"})}),e.jsxs(p,{className:"sm:max-w-[425px]",children:[e.jsxs(d,{children:[e.jsx(g,{children:"Destructive Action"}),e.jsx(u,{className:"text-destructive",children:"This will permanently delete your account and remove all associated data."})]}),e.jsxs(D,{className:"gap-2 sm:gap-0",children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"destructive",onClick:()=>n(!1),children:"Delete"})]})]})]})}};var m,h,x,C,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
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
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Default dialog with title, description, and action buttons",...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};var j,v,O,T,B;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(v=a.parameters)==null?void 0:v.docs)==null?void 0:O.source},description:{story:"Dialog with trigger button that manages open state",...(B=(T=a.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var y,k,A,S,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Destructive Action</DialogTitle>
            <DialogDescription className="text-destructive">
              This will permanently delete your account and remove all associated data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...(A=(k=r.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"Alert-style dialog for destructive actions with red accent",...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};const te=["Default","WithTrigger","AlertDialog"];export{r as AlertDialog,i as Default,a as WithTrigger,te as __namedExportsOrder,ne as default};
