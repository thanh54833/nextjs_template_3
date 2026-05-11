import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as v}from"./index-Br2IOmUs.js";import{C as a,a as o,b as r}from"./collapsible-DmGgyxid.js";import{B as p}from"./button-Cw1GWQ4G.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BEExBG21.js";import"./index-DW48STyt.js";import"./index-BRlNe44M.js";import"./index-D7wzBi_S.js";import"./index-1oe2SjNl.js";import"./index-B1gorirK.js";import"./index-Caz76J1-.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./index-EtsJrrfg.js";import"./index-BBh8-vjY.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-D58SrNf6.js";const Q={component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A component that allows content to be expanded or collapsed. Useful for FAQs, content sections, or any UI pattern where hiding/showing content is needed."}}},argTypes:{open:{control:"boolean",description:"Whether the collapsible is open"},disabled:{control:"boolean",description:"Whether the collapsible is disabled"}}},n={render:()=>{const[s,i]=v.useState(!1);return e.jsx(a,{open:s,onOpenChange:i,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{asChild:!0,children:e.jsx(p,{variant:"outline",size:"sm",children:s?"Collapse":"Expand"})}),e.jsx(r,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This is the collapsible content. It can be expanded and collapsed by clicking the trigger button above."})})})]})})}},l={render:()=>{const[s,i]=v.useState(!0);return e.jsx(a,{open:s,onOpenChange:i,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{asChild:!0,children:e.jsx(p,{variant:"outline",size:"sm",children:s?"Collapse":"Expand"})}),e.jsx(r,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This content is visible because the collapsible is open by default."})})})]})})}},t={render:()=>e.jsxs(a,{disabled:!0,children:[e.jsx(o,{asChild:!0,children:e.jsx(p,{variant:"outline",size:"sm",disabled:!0,children:"Disabled Trigger"})}),e.jsx(r,{children:e.jsx("div",{className:"rounded-md border p-4",children:e.jsx("p",{className:"text-sm",children:"This content is hidden because the collapsible is disabled."})})})]})};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,u,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,C,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(C=t.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const R=["Default","OpenByDefault","Disabled"];export{n as Default,t as Disabled,l as OpenByDefault,R as __namedExportsOrder,Q as default};
