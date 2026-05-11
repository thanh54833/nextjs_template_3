import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{I as be}from"./icons-Bwb0mD-e.js";import{c as V}from"./utils-BQHNewu7.js";import{R as l}from"./index-Br2IOmUs.js";import{c as Ie}from"./index-BRlNe44M.js";import{c as Ce}from"./index-OvQM5fGA.js";import{u as je}from"./index-B1gorirK.js";import{c as ye}from"./index-DW48STyt.js";import{u as re}from"./index-D7wzBi_S.js";import{P as ie}from"./index-Caz76J1-.js";import{c as ce,R as Te,T as Ne,C as we}from"./index-BEExBG21.js";import{u as _e}from"./index-BBh8-vjY.js";import{u as Re}from"./index-Bal2i3vH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-1oe2SjNl.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./index-EtsJrrfg.js";var d="Accordion",Se=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[M,Pe,ke]=Ce(d),[N]=Ie(d,[ke,ce]),U=ce(),se=l.forwardRef((o,r)=>{const{type:n,...i}=o,c=i,t=i;return e.jsx(M.Provider,{scope:o.__scopeAccordion,children:n==="multiple"?e.jsx(Ve,{...t,ref:r}):e.jsx(Oe,{...c,ref:r})})});se.displayName=d;var[ae,Ee]=N(d),[le,De]=N(d,{collapsible:!1}),Oe=l.forwardRef((o,r)=>{const{value:n,defaultValue:i,onValueChange:c=()=>{},collapsible:t=!1,...a}=o,[s,h]=re({prop:n,defaultProp:i??"",onChange:c,caller:d});return e.jsx(ae,{scope:o.__scopeAccordion,value:l.useMemo(()=>s?[s]:[],[s]),onItemOpen:h,onItemClose:l.useCallback(()=>t&&h(""),[t,h]),children:e.jsx(le,{scope:o.__scopeAccordion,collapsible:t,children:e.jsx(de,{...a,ref:r})})})}),Ve=l.forwardRef((o,r)=>{const{value:n,defaultValue:i,onValueChange:c=()=>{},...t}=o,[a,s]=re({prop:n,defaultProp:i??[],onChange:c,caller:d}),h=l.useCallback(g=>s((f=[])=>[...f,g]),[s]),A=l.useCallback(g=>s((f=[])=>f.filter(_=>_!==g)),[s]);return e.jsx(ae,{scope:o.__scopeAccordion,value:a,onItemOpen:h,onItemClose:A,children:e.jsx(le,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(de,{...t,ref:r})})})}),[Me,w]=N(d),de=l.forwardRef((o,r)=>{const{__scopeAccordion:n,disabled:i,dir:c,orientation:t="vertical",...a}=o,s=l.useRef(null),h=je(s,r),A=Pe(n),f=Re(c)==="ltr",_=ye(o.onKeyDown,j=>{var K;if(!Se.includes(j.key))return;const ge=j.target,R=A().filter(D=>{var W;return!((W=D.ref.current)!=null&&W.disabled)}),y=R.findIndex(D=>D.ref.current===ge),Y=R.length;if(y===-1)return;j.preventDefault();let x=y;const S=0,P=Y-1,k=()=>{x=y+1,x>P&&(x=S)},E=()=>{x=y-1,x<S&&(x=P)};switch(j.key){case"Home":x=S;break;case"End":x=P;break;case"ArrowRight":t==="horizontal"&&(f?k():E());break;case"ArrowDown":t==="vertical"&&k();break;case"ArrowLeft":t==="horizontal"&&(f?E():k());break;case"ArrowUp":t==="vertical"&&E();break}const ve=x%Y;(K=R[ve].ref.current)==null||K.focus()});return e.jsx(Me,{scope:n,disabled:i,direction:c,orientation:t,children:e.jsx(M.Slot,{scope:n,children:e.jsx(ie.div,{...a,"data-orientation":t,ref:h,onKeyDown:i?void 0:_})})})}),T="AccordionItem",[Ue,H]=N(T),me=l.forwardRef((o,r)=>{const{__scopeAccordion:n,value:i,...c}=o,t=w(T,n),a=Ee(T,n),s=U(n),h=_e(),A=i&&a.value.includes(i)||!1,g=t.disabled||o.disabled;return e.jsx(Ue,{scope:n,open:A,disabled:g,triggerId:h,children:e.jsx(Te,{"data-orientation":t.orientation,"data-state":Ae(A),...s,...c,ref:r,disabled:g,open:A,onOpenChange:f=>{f?a.onItemOpen(i):a.onItemClose(i)}})})});me.displayName=T;var pe="AccordionHeader",ue=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(pe,n);return e.jsx(ie.h3,{"data-orientation":c.orientation,"data-state":Ae(t.open),"data-disabled":t.disabled?"":void 0,...i,ref:r})});ue.displayName=pe;var O="AccordionTrigger",he=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(O,n),a=De(O,n),s=U(n);return e.jsx(M.ItemSlot,{scope:n,children:e.jsx(Ne,{"aria-disabled":t.open&&!a.collapsible||void 0,"data-orientation":c.orientation,id:t.triggerId,...s,...i,ref:r})})});he.displayName=O;var xe="AccordionContent",fe=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(xe,n),a=U(n);return e.jsx(we,{role:"region","aria-labelledby":t.triggerId,"data-orientation":c.orientation,...a,...i,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});fe.displayName=xe;function Ae(o){return o?"open":"closed"}var He=se,Ye=me,Ke=ue,We=he,$e=fe;function C({...o}){return e.jsx(He,{"data-slot":"accordion",...o})}function m({className:o,...r}){return e.jsx(Ye,{"data-slot":"accordion-item",className:V("border-b last:border-b-0",o),...r})}function p({className:o,children:r,...n}){return e.jsx(Ke,{className:"flex",children:e.jsxs(We,{"data-slot":"accordion-trigger",className:V("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",o),...n,children:[r,e.jsx(be.chevronDown,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function u({className:o,children:r,...n}){return e.jsx($e,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...n,children:e.jsx("div",{className:V("pt-0 pb-4",o),children:r})})}C.__docgenInfo={description:"",methods:[],displayName:"Accordion"};m.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};p.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const ao={component:C,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A vertically stacked set of interactive headings that expand or collapse to reveal their associated sections of content. Built on Radix UI primitives for accessibility."}}},argTypes:{type:{control:"select",options:["single","multiple"],description:"Whether single or multiple items can be open at once"},collapsible:{control:"boolean",description:'Whether items can be closed once opened (for type="single")'},defaultValue:{control:"text",description:"The default open item value(s)"}}},v={render:()=>e.jsxs(C,{type:"single",collapsible:!0,defaultValue:"item1",children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"What is shadcn/ui?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"shadcn/ui is a collection of re-usable components built using Radix UI primitives and Tailwind CSS. Unlike other component libraries, shadcn/ui is not a package you install. Instead, you can copy and paste the components into your project."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"How do I use these components?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"You can use the components by copying them into your project. Each component comes with all its styles and dependencies already configured."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Is it accessible?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Yes! All components are built on top of Radix UI primitives, which provide accessibility out of the box. They support keyboard navigation and screen readers."})})]})]})},b={render:()=>e.jsxs(C,{type:"multiple",defaultValue:["item1","item2"],children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"First Item (open by default)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This content is visible because it is set as default open."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"Second Item (open by default)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This content is also visible because multiple items can be open."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Third Item (collapsed)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This item is collapsed by default."})})]})]})},I={render:()=>e.jsxs(C,{type:"single",collapsible:!0,children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"Item One"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item one."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"Item Two"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item two."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Item Three"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item three."})})]})]})};var $,z,L,F,G;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(z=v.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:`Default accordion with single selection mode.
The first item is open by default and can be collapsed.`,...(G=(F=v.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var B,q,J,Q,X;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(q=b.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:`Accordion with multiple selection mode enabled.
Multiple items can be open at the same time.`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,oe,ne,te;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(oe=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:oe.source},description:{story:`All items collapsed by default.
User must click to expand any section.`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.description}}};const lo=["Default","MultipleOpen","AllCollapsed"];export{I as AllCollapsed,v as Default,b as MultipleOpen,lo as __namedExportsOrder,ao as default};
