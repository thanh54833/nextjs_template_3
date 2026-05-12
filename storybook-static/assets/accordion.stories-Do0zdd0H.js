import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as te}from"./icons-BdTSAv6R.js";import{c as V}from"./utils-Czy_q_oT.js";import{R as l}from"./index-DYby6Z_P.js";import{c as re}from"./index-BKV5D6oG.js";import{c as ie}from"./index-C4JN59vf.js";import{u as ce}from"./index-DOER7VuF.js";import{c as se}from"./index-Dc_FVRD7.js";import{u as K}from"./index-BmEHjAU8.js";import{P as W}from"./index-CraXK6NT.js";import{R as ae,T as le,C as de,c as $}from"./index-BBfAomOV.js";import{u as me}from"./index-C1lvhlBT.js";import{u as pe}from"./index-ofxjSrhS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1sqivKo.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-CcuSeV1x.js";var d="Accordion",ue=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[M,he,xe]=ie(d),[N]=re(d,[xe,$]),U=$(),z=l.forwardRef((o,r)=>{const{type:n,...i}=o,c=i,t=i;return e.jsx(M.Provider,{scope:o.__scopeAccordion,children:n==="multiple"?e.jsx(ve,{...t,ref:r}):e.jsx(ge,{...c,ref:r})})});z.displayName=d;var[L,fe]=N(d),[F,Ae]=N(d,{collapsible:!1}),ge=l.forwardRef((o,r)=>{const{value:n,defaultValue:i,onValueChange:c=()=>{},collapsible:t=!1,...a}=o,[s,h]=K({prop:n,defaultProp:i??"",onChange:c,caller:d});return e.jsx(L,{scope:o.__scopeAccordion,value:l.useMemo(()=>s?[s]:[],[s]),onItemOpen:h,onItemClose:l.useCallback(()=>t&&h(""),[t,h]),children:e.jsx(F,{scope:o.__scopeAccordion,collapsible:t,children:e.jsx(G,{...a,ref:r})})})}),ve=l.forwardRef((o,r)=>{const{value:n,defaultValue:i,onValueChange:c=()=>{},...t}=o,[a,s]=K({prop:n,defaultProp:i??[],onChange:c,caller:d}),h=l.useCallback(g=>s((f=[])=>[...f,g]),[s]),A=l.useCallback(g=>s((f=[])=>f.filter(_=>_!==g)),[s]);return e.jsx(L,{scope:o.__scopeAccordion,value:a,onItemOpen:h,onItemClose:A,children:e.jsx(F,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(G,{...t,ref:r})})})}),[be,w]=N(d),G=l.forwardRef((o,r)=>{const{__scopeAccordion:n,disabled:i,dir:c,orientation:t="vertical",...a}=o,s=l.useRef(null),h=ce(s,r),A=he(n),f=pe(c)==="ltr",_=se(o.onKeyDown,j=>{if(!ue.includes(j.key))return;const oe=j.target,R=A().filter(D=>!D.ref.current?.disabled),y=R.findIndex(D=>D.ref.current===oe),Y=R.length;if(y===-1)return;j.preventDefault();let x=y;const S=0,P=Y-1,k=()=>{x=y+1,x>P&&(x=S)},E=()=>{x=y-1,x<S&&(x=P)};switch(j.key){case"Home":x=S;break;case"End":x=P;break;case"ArrowRight":t==="horizontal"&&(f?k():E());break;case"ArrowDown":t==="vertical"&&k();break;case"ArrowLeft":t==="horizontal"&&(f?E():k());break;case"ArrowUp":t==="vertical"&&E();break}const ne=x%Y;R[ne].ref.current?.focus()});return e.jsx(be,{scope:n,disabled:i,direction:c,orientation:t,children:e.jsx(M.Slot,{scope:n,children:e.jsx(W.div,{...a,"data-orientation":t,ref:h,onKeyDown:i?void 0:_})})})}),T="AccordionItem",[Ie,H]=N(T),B=l.forwardRef((o,r)=>{const{__scopeAccordion:n,value:i,...c}=o,t=w(T,n),a=fe(T,n),s=U(n),h=me(),A=i&&a.value.includes(i)||!1,g=t.disabled||o.disabled;return e.jsx(Ie,{scope:n,open:A,disabled:g,triggerId:h,children:e.jsx(ae,{"data-orientation":t.orientation,"data-state":ee(A),...s,...c,ref:r,disabled:g,open:A,onOpenChange:f=>{f?a.onItemOpen(i):a.onItemClose(i)}})})});B.displayName=T;var q="AccordionHeader",J=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(q,n);return e.jsx(W.h3,{"data-orientation":c.orientation,"data-state":ee(t.open),"data-disabled":t.disabled?"":void 0,...i,ref:r})});J.displayName=q;var O="AccordionTrigger",Q=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(O,n),a=Ae(O,n),s=U(n);return e.jsx(M.ItemSlot,{scope:n,children:e.jsx(le,{"aria-disabled":t.open&&!a.collapsible||void 0,"data-orientation":c.orientation,id:t.triggerId,...s,...i,ref:r})})});Q.displayName=O;var X="AccordionContent",Z=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(X,n),a=U(n);return e.jsx(de,{role:"region","aria-labelledby":t.triggerId,"data-orientation":c.orientation,...a,...i,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});Z.displayName=X;function ee(o){return o?"open":"closed"}var Ce=z,je=B,ye=J,Te=Q,Ne=Z;function C({...o}){return e.jsx(Ce,{"data-slot":"accordion",...o})}function m({className:o,...r}){return e.jsx(je,{"data-slot":"accordion-item",className:V("border-b last:border-b-0",o),...r})}function p({className:o,children:r,...n}){return e.jsx(ye,{className:"flex",children:e.jsxs(Te,{"data-slot":"accordion-trigger",className:V("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[1px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",o),...n,children:[r,e.jsx(te.chevronDown,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function u({className:o,children:r,...n}){return e.jsx(Ne,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...n,children:e.jsx("div",{className:V("pt-0 pb-4",o),children:r})})}C.__docgenInfo={description:"",methods:[],displayName:"Accordion"};m.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};p.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const Le={component:C,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A vertically stacked set of interactive headings that expand or collapse to reveal their associated sections of content. Built on Radix UI primitives for accessibility."}}},argTypes:{type:{control:"select",options:["single","multiple"],description:"Whether single or multiple items can be open at once"},collapsible:{control:"boolean",description:'Whether items can be closed once opened (for type="single")'},defaultValue:{control:"text",description:"The default open item value(s)"}}},v={render:()=>e.jsxs(C,{type:"single",collapsible:!0,defaultValue:"item1",children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"What is shadcn/ui?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"shadcn/ui is a collection of re-usable components built using Radix UI primitives and Tailwind CSS. Unlike other component libraries, shadcn/ui is not a package you install. Instead, you can copy and paste the components into your project."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"How do I use these components?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"You can use the components by copying them into your project. Each component comes with all its styles and dependencies already configured."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Is it accessible?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Yes! All components are built on top of Radix UI primitives, which provide accessibility out of the box. They support keyboard navigation and screen readers."})})]})]})},b={render:()=>e.jsxs(C,{type:"multiple",defaultValue:["item1","item2"],children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"First Item (open by default)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This content is visible because it is set as default open."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"Second Item (open by default)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This content is also visible because multiple items can be open."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Third Item (collapsed)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This item is collapsed by default."})})]})]})},I={render:()=>e.jsxs(C,{type:"single",collapsible:!0,children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"Item One"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item one."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"Item Two"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item two."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Item Three"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item three."})})]})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type='single' collapsible defaultValue='item1'>
      <AccordionItem value='item1'>
        <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>
            shadcn/ui is a collection of re-usable components built using Radix UI primitives and Tailwind CSS.
            Unlike other component libraries, shadcn/ui is not a package you install. Instead, you can copy and paste
            the components into your project.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item2'>
        <AccordionTrigger>How do I use these components?</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>
            You can use the components by copying them into your project. Each component comes with all its styles
            and dependencies already configured.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item3'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>
            Yes! All components are built on top of Radix UI primitives, which provide accessibility out of the box.
            They support keyboard navigation and screen readers.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...v.parameters?.docs?.source},description:{story:`Default accordion with single selection mode.
The first item is open by default and can be collapsed.`,...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type='multiple' defaultValue={['item1', 'item2']}>
      <AccordionItem value='item1'>
        <AccordionTrigger>First Item (open by default)</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>This content is visible because it is set as default open.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item2'>
        <AccordionTrigger>Second Item (open by default)</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>This content is also visible because multiple items can be open.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item3'>
        <AccordionTrigger>Third Item (collapsed)</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>This item is collapsed by default.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...b.parameters?.docs?.source},description:{story:`Accordion with multiple selection mode enabled.
Multiple items can be open at the same time.`,...b.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type='single' collapsible>
      <AccordionItem value='item1'>
        <AccordionTrigger>Item One</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>Content for item one.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item2'>
        <AccordionTrigger>Item Two</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>Content for item two.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item3'>
        <AccordionTrigger>Item Three</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>Content for item three.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...I.parameters?.docs?.source},description:{story:`All items collapsed by default.
User must click to expand any section.`,...I.parameters?.docs?.description}}};const Fe=["Default","MultipleOpen","AllCollapsed"];export{I as AllCollapsed,v as Default,b as MultipleOpen,Fe as __namedExportsOrder,Le as default};
