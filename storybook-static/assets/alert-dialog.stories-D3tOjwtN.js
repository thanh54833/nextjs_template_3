import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./index-DYby6Z_P.js";import{B as a}from"./button-BQzN1lMO.js";import{A as i,a as s,b as c,c as d,d as p,e as u,f as g,g as A,h as D}from"./alert-dialog-DBIjruTC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-koxbFvze.js";import"./utils-Czy_q_oT.js";import"./index-DGP6o15j.js";import"./index-DOER7VuF.js";import"./icons-BdTSAv6R.js";import"./index-BKV5D6oG.js";import"./index-DCxO6YQ3.js";import"./index-Dc_FVRD7.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-BmEHjAU8.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-ByLlCQqU.js";import"./index-CZLUcR6N.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";const z={component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An alert dialog component for actions that require explicit user confirmation. Use for destructive or irreversible operations."}}}},r={render:()=>{const[n,t]=l.useState(!1);return e.jsxs(i,{open:n,onOpenChange:t,children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{variant:"destructive",children:"Delete Account"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Are you absolutely sure?"}),e.jsx(u,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(g,{children:[e.jsx(A,{onClick:()=>t(!1),children:"Cancel"}),e.jsx(D,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",onClick:()=>t(!1),children:"Continue"})]})]})]})}},o={render:()=>{const[n,t]=l.useState(!1);return e.jsxs(i,{open:n,onOpenChange:t,children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{variant:"destructive",children:"Delete Account"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Delete Account"}),e.jsx(u,{children:"Are you sure you want to delete your account? This action is permanent and cannot be reversed."})]}),e.jsxs(g,{children:[e.jsx(A,{onClick:()=>t(!1),children:"Cancel"}),e.jsx(D,{onClick:()=>t(!1),children:"Delete"})]})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={() => setOpen(false)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...r.parameters?.docs?.source},description:{story:"Default alert dialog with destructive action styling",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Account</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete your account? This action is permanent and cannot be
              reversed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setOpen(false)}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...o.parameters?.docs?.source},description:{story:"Alert dialog with trigger button for destructive actions",...o.parameters?.docs?.description}}};const G=["Default","WithTrigger"];export{r as Default,o as WithTrigger,G as __namedExportsOrder,z as default};
