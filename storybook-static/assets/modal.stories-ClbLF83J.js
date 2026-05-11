import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./index-DYby6Z_P.js";import{B as n}from"./button-Ch-BQGzE.js";import{D as x,b as h,c as j,d as C,e as g}from"./dialog-BNZjk6qd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DGP6o15j.js";import"./index-DOER7VuF.js";import"./icons-CJO6dUP8.js";import"./index-CYD3ze5d.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-BmEHjAU8.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";function r({title:s,description:t,isOpen:d,onClose:p,children:m}){const u=f=>{f||p()};return e.jsx(x,{open:d,onOpenChange:u,children:e.jsxs(h,{children:[e.jsxs(j,{children:[e.jsx(C,{children:s}),e.jsx(g,{children:t})]}),e.jsx("div",{children:m})]})})}r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z={component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A simple modal dialog component built on Radix UI Dialog."}}}},o={render:()=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(r,{title:"Confirm Action",description:"Are you sure you want to proceed with this action? This cannot be undone.",isOpen:s,onClose:()=>t(!1),children:e.jsxs("div",{className:"flex gap-4 justify-end mt-4",children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Confirm"})]})})]})}},a={render:()=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Create Project"}),e.jsx(r,{title:"Create New Project",description:"Fill in the details below to create a new project.",isOpen:s,onClose:()=>t(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 py-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Project Name"}),e.jsx("input",{type:"text",className:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm",placeholder:"My Awesome Project"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Description"}),e.jsx("textarea",{className:"flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm",placeholder:"Describe your project..."})]}),e.jsxs("div",{className:"flex gap-4 justify-end",children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Create Project"})]})]})})]})}},i={render:()=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),e.jsx(r,{title:"Delete Item",description:"This will permanently delete the item and all associated data. This action cannot be undone.",isOpen:s,onClose:()=>t(!1),children:e.jsxs("div",{className:"flex gap-4 justify-end mt-4",children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{variant:"destructive",onClick:()=>t(!1),children:"Delete"})]})})]})}},l={render:()=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Success"}),e.jsx(r,{title:"Changes Saved",description:"Your changes have been saved successfully.",isOpen:s,onClose:()=>t(!1),children:e.jsx("div",{className:"flex justify-center mt-4",children:e.jsx(n,{onClick:()=>t(!1),children:"Continue"})})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal title="Confirm Action" description="Are you sure you want to proceed with this action? This cannot be undone." isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex gap-4 justify-end mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </>;
  }
}`,...o.parameters?.docs?.source},description:{story:"Default modal with title, description, and action buttons.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Create Project</Button>
        <Modal title="Create New Project" description="Fill in the details below to create a new project." isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Project Name</label>
              <input type="text" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" placeholder="My Awesome Project" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Description</label>
              <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm" placeholder="Describe your project..." />
            </div>
            <div className="flex gap-4 justify-end">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Create Project</Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...a.parameters?.docs?.source},description:{story:"Modal with form fields for data entry dialogs.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <>
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        <Modal title="Delete Item" description="This will permanently delete the item and all associated data. This action cannot be undone." isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex gap-4 justify-end mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsOpen(false)}>
              Delete
            </Button>
          </div>
        </Modal>
      </>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Destructive action modal with danger styling.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Success</Button>
        <Modal title="Changes Saved" description="Your changes have been saved successfully." isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex justify-center mt-4">
            <Button onClick={() => setIsOpen(false)}>Continue</Button>
          </div>
        </Modal>
      </>;
  }
}`,...l.parameters?.docs?.source},description:{story:"Success confirmation modal for completed actions.",...l.parameters?.docs?.description}}};const G=["Default","WithForm","AlertModal","SuccessModal"];export{i as AlertModal,o as Default,l as SuccessModal,a as WithForm,G as __namedExportsOrder,z as default};
