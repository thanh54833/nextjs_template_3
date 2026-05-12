import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./index-DYby6Z_P.js";import{C as a,a as o,b as r}from"./collapsible-B45PKLov.js";import{B as p}from"./button-BQzN1lMO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BBfAomOV.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-BmEHjAU8.js";import"./index-D1sqivKo.js";import"./index-DOER7VuF.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-CcuSeV1x.js";import"./index-C1lvhlBT.js";import"./index-koxbFvze.js";import"./utils-Czy_q_oT.js";import"./index-DGP6o15j.js";import"./icons-BdTSAv6R.js";const z={component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A component that allows content to be expanded or collapsed. Useful for FAQs, content sections, or any UI pattern where hiding/showing content is needed."}}},argTypes:{open:{control:"boolean",description:"Whether the collapsible is open"},disabled:{control:"boolean",description:"Whether the collapsible is disabled"}}},n={render:()=>{const[s,i]=d.useState(!1);return e.jsx(a,{open:s,onOpenChange:i,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{asChild:!0,children:e.jsx(p,{variant:"outline",size:"sm",children:s?"Collapse":"Expand"})}),e.jsx(r,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This is the collapsible content. It can be expanded and collapsed by clicking the trigger button above."})})})]})})}},l={render:()=>{const[s,i]=d.useState(!0);return e.jsx(a,{open:s,onOpenChange:i,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{asChild:!0,children:e.jsx(p,{variant:"outline",size:"sm",children:s?"Collapse":"Expand"})}),e.jsx(r,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This content is visible because the collapsible is open by default."})})})]})})}},t={render:()=>e.jsxs(a,{disabled:!0,children:[e.jsx(o,{asChild:!0,children:e.jsx(p,{variant:"outline",size:"sm",disabled:!0,children:"Disabled Trigger"})}),e.jsx(r,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This content is hidden because the collapsible is disabled."})})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  /** Default collapsible that starts in collapsed state */
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  /** Collapsible that starts in open state */
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  /** Collapsible in disabled state */
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
}`,...t.parameters?.docs?.source}}};const w=["Default","OpenByDefault","Disabled"];export{n as Default,t as Disabled,l as OpenByDefault,w as __namedExportsOrder,z as default};
