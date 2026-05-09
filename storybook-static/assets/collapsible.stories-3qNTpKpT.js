import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as f}from"./index-CAPI2NOD.js";import{R as j,C as v,a as O}from"./index-Cig01SmZ.js";import{B as d}from"./button-B1qRRuul.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-DwArvr4q.js";import"./index-FyZeRQcs.js";import"./index-CJNorLC4.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CrsbsgJ0.js";import"./index-BIKiyF7s.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";function n({...s}){return e.jsx(j,{"data-slot":"collapsible",...s})}function t({...s}){return e.jsx(v,{"data-slot":"collapsible-trigger",...s})}function o({...s}){return e.jsx(O,{"data-slot":"collapsible-content",...s})}n.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};t.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};o.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const H={component:n,tags:["autodocs"],parameters:{layout:"padded"}},l={render:()=>{const[s,r]=f.useState(!1);return e.jsx(n,{open:s,onOpenChange:r,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{asChild:!0,children:e.jsx(d,{variant:"outline",size:"sm",children:s?"Collapse":"Expand"})}),e.jsx(o,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This is the collapsible content. It can be expanded and collapsed by clicking the trigger button above."})})})]})})}},a={render:()=>{const[s,r]=f.useState(!0);return e.jsx(n,{open:s,onOpenChange:r,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{asChild:!0,children:e.jsx(d,{variant:"outline",size:"sm",children:s?"Collapse":"Expand"})}),e.jsx(o,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This content is visible because the collapsible is open by default."})})})]})})}},i={render:()=>e.jsxs(n,{disabled:!0,children:[e.jsx(t,{asChild:!0,children:e.jsx(d,{variant:"outline",size:"sm",disabled:!0,children:"Disabled Trigger"})}),e.jsx(o,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This content is hidden because the collapsible is disabled."})})})]})};var p,c,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className='flex flex-col gap-4'>
          <CollapsibleTrigger asChild>
            <Button variant='outline' size='sm'>
              {isOpen ? 'Collapse' : 'Expand'}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='rounded-md border p-4'>
              <p className='text-sm'>
                This is the collapsible content. It can be expanded and collapsed by clicking the trigger button above.
              </p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>;
  }
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,u,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className='flex flex-col gap-4'>
          <CollapsibleTrigger asChild>
            <Button variant='outline' size='sm'>
              {isOpen ? 'Collapse' : 'Expand'}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='rounded-md border p-4'>
              <p className='text-sm'>
                This content is visible because the collapsible is open by default.
              </p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>;
  }
}`,...(C=(u=a.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Collapsible disabled>
      <CollapsibleTrigger asChild>
        <Button variant='outline' size='sm' disabled>
          Disabled Trigger
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className='rounded-md border p-4'>
          <p className='text-sm'>This content is hidden because the collapsible is disabled.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const J=["Default","OpenByDefault","Disabled"];export{l as Default,i as Disabled,a as OpenByDefault,J as __namedExportsOrder,H as default};
