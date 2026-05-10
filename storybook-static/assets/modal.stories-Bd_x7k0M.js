import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as c}from"./index-CAPI2NOD.js";import{B as n}from"./button-B1qRRuul.js";import{D as A,b as F,c as q,d as _,e as E}from"./dialog-DeXfgiUS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";import"./index-Do-fIL6h.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./icons-Bvzo9UON.js";function r({title:s,description:t,isOpen:M,onClose:S,children:T}){const P=R=>{R||S()};return e.jsx(A,{open:M,onOpenChange:P,children:e.jsxs(F,{children:[e.jsxs(q,{children:[e.jsx(_,{children:s}),e.jsx(E,{children:t})]}),e.jsx("div",{children:T})]})})}r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const de={component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A simple modal dialog component built on Radix UI Dialog."}}}},o={render:()=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(r,{title:"Confirm Action",description:"Are you sure you want to proceed with this action? This cannot be undone.",isOpen:s,onClose:()=>t(!1),children:e.jsxs("div",{className:"flex gap-4 justify-end mt-4",children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Confirm"})]})})]})}},a={render:()=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Create Project"}),e.jsx(r,{title:"Create New Project",description:"Fill in the details below to create a new project.",isOpen:s,onClose:()=>t(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 py-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Project Name"}),e.jsx("input",{type:"text",className:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm",placeholder:"My Awesome Project"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Description"}),e.jsx("textarea",{className:"flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm",placeholder:"Describe your project..."})]}),e.jsxs("div",{className:"flex gap-4 justify-end",children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Create Project"})]})]})})]})}},i={render:()=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),e.jsx(r,{title:"Delete Item",description:"This will permanently delete the item and all associated data. This action cannot be undone.",isOpen:s,onClose:()=>t(!1),children:e.jsxs("div",{className:"flex gap-4 justify-end mt-4",children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{variant:"destructive",onClick:()=>t(!1),children:"Delete"})]})})]})}},l={render:()=>{const[s,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Success"}),e.jsx(r,{title:"Changes Saved",description:"Your changes have been saved successfully.",isOpen:s,onClose:()=>t(!1),children:e.jsx("div",{className:"flex justify-center mt-4",children:e.jsx(n,{onClick:()=>t(!1),children:"Continue"})})})]})}};var d,p,m,u,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Default modal with title, description, and action buttons.",...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var x,h,j,C,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source},description:{story:"Modal with form fields for data entry dialogs.",...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.description}}};var v,O,y,b,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(O=i.parameters)==null?void 0:O.docs)==null?void 0:y.source},description:{story:"Destructive action modal with danger styling.",...(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.description}}};var N,w,B,k,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"Success confirmation modal for completed actions.",...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};const pe=["Default","WithForm","AlertModal","SuccessModal"];export{i as AlertModal,o as Default,l as SuccessModal,a as WithForm,pe as __namedExportsOrder,de as default};
