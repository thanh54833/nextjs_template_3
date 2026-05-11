import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./index-DYby6Z_P.js";import{B as t}from"./button-Ch-BQGzE.js";import{D as s,a as c,b as p,c as d,d as g,e as u,f as D,g as m}from"./dialog-BNZjk6qd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DGP6o15j.js";import"./index-DOER7VuF.js";import"./icons-CJO6dUP8.js";import"./index-CYD3ze5d.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-BmEHjAU8.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";const _={component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dialog component that overlays the page to capture user attention. Built on Radix UI primitives for accessibility and animation support."}}}},i={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(s,{open:o,onOpenChange:n,children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{children:"Open Dialog"})}),e.jsxs(p,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Dialog Title"}),e.jsx(u,{children:"This is a description of the dialog. It provides additional context about the content."})]}),e.jsx("p",{children:"Dialog content goes here. You can put any React content inside."}),e.jsxs(D,{children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})]})}},a={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(s,{open:o,onOpenChange:n,children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{children:"Open Dialog"})}),e.jsxs(p,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Are you sure?"}),e.jsx(u,{children:"This action cannot be undone. Please confirm to proceed."})]}),e.jsxs(D,{children:[e.jsx(m,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Cancel"})}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})]})}},r={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(s,{open:o,onOpenChange:n,children:[e.jsx(c,{asChild:!0,children:e.jsx(t,{variant:"destructive",children:"Delete Account"})}),e.jsxs(p,{className:"sm:max-w-[425px]",children:[e.jsxs(d,{children:[e.jsx(g,{children:"Destructive Action"}),e.jsx(u,{className:"text-destructive",children:"This will permanently delete your account and remove all associated data."})]}),e.jsxs(D,{className:"gap-2 sm:gap-0",children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"destructive",onClick:()=>n(!1),children:"Delete"})]})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Default dialog with title, description, and action buttons",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Dialog with trigger button that manages open state",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Alert-style dialog for destructive actions with red accent",...r.parameters?.docs?.description}}};const U=["Default","WithTrigger","AlertDialog"];export{r as AlertDialog,i as Default,a as WithTrigger,U as __namedExportsOrder,_ as default};
