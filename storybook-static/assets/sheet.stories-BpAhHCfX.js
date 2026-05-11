import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./index-DYby6Z_P.js";import{B as n}from"./button-Ch-BQGzE.js";import{S as o,a as l,b as p,c as S,d as m,e as u,f as g}from"./sheet-CJ-scKL4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DGP6o15j.js";import"./index-DOER7VuF.js";import"./icons-CJO6dUP8.js";import"./index-CYD3ze5d.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-BmEHjAU8.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";const q={component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A sheet component for slide-out panels. Supports four sides (top, bottom, left, right) and is often used for mobile navigation, settings panels, and filters."}}}},r={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Sheet"})}),e.jsxs(p,{side:"right",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Sheet Title"}),e.jsx(u,{children:"This is a description of the sheet content."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content goes here. You can put any content inside."})}),e.jsxs(g,{children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Save"})]})]})]})}},i={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Sheet"})}),e.jsxs(p,{side:"right",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Edit Settings"}),e.jsx(u,{children:"Make changes to your settings here."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Settings form content..."})}),e.jsxs(g,{children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Save Changes"})]})]})]})}},h={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Top Sheet"})}),e.jsxs(p,{side:"top",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Top Sheet"}),e.jsx(u,{children:"This sheet slides in from the top."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})}),e.jsx(g,{children:e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Close"})})]})]})}},a={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Bottom Sheet"})}),e.jsxs(p,{side:"bottom",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Bottom Sheet"}),e.jsx(u,{children:"This sheet slides in from the bottom."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})}),e.jsx(g,{children:e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Close"})})]})]})}},c={render:()=>{const[s,t]=d.useState(!1);return e.jsxs(o,{open:s,onOpenChange:t,children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{children:"Open Left Sheet"})}),e.jsxs(p,{side:"left",children:[e.jsxs(S,{children:[e.jsx(m,{children:"Left Sheet"}),e.jsx(u,{children:"This sheet slides in from the left."})]}),e.jsx("div",{className:"mt-4",children:e.jsx("p",{children:"Sheet content..."})}),e.jsx(g,{children:e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Close"})})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Default sheet sliding from the right",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Sheet with trigger button for interactive open/close",...i.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Sheet sliding from the top",...h.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Sheet sliding from the bottom",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Sheet sliding from the left",...c.parameters?.docs?.description}}};const z=["Default","WithTrigger","TopSide","BottomSide","LeftSide"];export{a as BottomSide,r as Default,c as LeftSide,h as TopSide,i as WithTrigger,z as __namedExportsOrder,q as default};
