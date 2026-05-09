import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{R as l}from"./index-CAPI2NOD.js";import{c as ve}from"./index-Da_hoYQ_.js";import{c as Ie}from"./index-BUhLVj6P.js";import{u as Ce}from"./index-CJNorLC4.js";import{c as ye}from"./index-CKUxhdB2.js";import{u as re}from"./index-CxHADOAi.js";import{P as ie}from"./index-C-szKJnO.js";import{c as ce,R as je,T as Te,b as Ne}from"./index-BMP9iOCV.js";import{u as we}from"./index-BAWfCZ5Z.js";import{u as _e}from"./index-Ux667dBy.js";import{I as Re}from"./icons-Bvzo9UON.js";import{c as O}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-yuxTiXDJ.js";var d="Accordion",Se=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[M,Pe,ke]=Ie(d),[N]=ve(d,[ke,ce]),U=ce(),se=l.forwardRef((o,r)=>{const{type:n,...i}=o,c=i,t=i;return e.jsx(M.Provider,{scope:o.__scopeAccordion,children:n==="multiple"?e.jsx(Oe,{...t,ref:r}):e.jsx(De,{...c,ref:r})})});se.displayName=d;var[ae,Ee]=N(d),[le,Ve]=N(d,{collapsible:!1}),De=l.forwardRef((o,r)=>{const{value:n,defaultValue:i,onValueChange:c=()=>{},collapsible:t=!1,...a}=o,[s,h]=re({prop:n,defaultProp:i??"",onChange:c,caller:d});return e.jsx(ae,{scope:o.__scopeAccordion,value:l.useMemo(()=>s?[s]:[],[s]),onItemOpen:h,onItemClose:l.useCallback(()=>t&&h(""),[t,h]),children:e.jsx(le,{scope:o.__scopeAccordion,collapsible:t,children:e.jsx(de,{...a,ref:r})})})}),Oe=l.forwardRef((o,r)=>{const{value:n,defaultValue:i,onValueChange:c=()=>{},...t}=o,[a,s]=re({prop:n,defaultProp:i??[],onChange:c,caller:d}),h=l.useCallback(A=>s((x=[])=>[...x,A]),[s]),g=l.useCallback(A=>s((x=[])=>x.filter(_=>_!==A)),[s]);return e.jsx(ae,{scope:o.__scopeAccordion,value:a,onItemOpen:h,onItemClose:g,children:e.jsx(le,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(de,{...t,ref:r})})})}),[Me,w]=N(d),de=l.forwardRef((o,r)=>{const{__scopeAccordion:n,disabled:i,dir:c,orientation:t="vertical",...a}=o,s=l.useRef(null),h=Ce(s,r),g=Pe(n),x=_e(c)==="ltr",_=ye(o.onKeyDown,y=>{var K;if(!Se.includes(y.key))return;const Ae=y.target,R=g().filter(V=>{var W;return!((W=V.ref.current)!=null&&W.disabled)}),j=R.findIndex(V=>V.ref.current===Ae),Y=R.length;if(j===-1)return;y.preventDefault();let f=j;const S=0,P=Y-1,k=()=>{f=j+1,f>P&&(f=S)},E=()=>{f=j-1,f<S&&(f=P)};switch(y.key){case"Home":f=S;break;case"End":f=P;break;case"ArrowRight":t==="horizontal"&&(x?k():E());break;case"ArrowDown":t==="vertical"&&k();break;case"ArrowLeft":t==="horizontal"&&(x?E():k());break;case"ArrowUp":t==="vertical"&&E();break}const be=f%Y;(K=R[be].ref.current)==null||K.focus()});return e.jsx(Me,{scope:n,disabled:i,direction:c,orientation:t,children:e.jsx(M.Slot,{scope:n,children:e.jsx(ie.div,{...a,"data-orientation":t,ref:h,onKeyDown:i?void 0:_})})})}),T="AccordionItem",[Ue,H]=N(T),pe=l.forwardRef((o,r)=>{const{__scopeAccordion:n,value:i,...c}=o,t=w(T,n),a=Ee(T,n),s=U(n),h=we(),g=i&&a.value.includes(i)||!1,A=t.disabled||o.disabled;return e.jsx(Ue,{scope:n,open:g,disabled:A,triggerId:h,children:e.jsx(je,{"data-orientation":t.orientation,"data-state":ge(g),...s,...c,ref:r,disabled:A,open:g,onOpenChange:x=>{x?a.onItemOpen(i):a.onItemClose(i)}})})});pe.displayName=T;var me="AccordionHeader",ue=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(me,n);return e.jsx(ie.h3,{"data-orientation":c.orientation,"data-state":ge(t.open),"data-disabled":t.disabled?"":void 0,...i,ref:r})});ue.displayName=me;var D="AccordionTrigger",he=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(D,n),a=Ve(D,n),s=U(n);return e.jsx(M.ItemSlot,{scope:n,children:e.jsx(Te,{"aria-disabled":t.open&&!a.collapsible||void 0,"data-orientation":c.orientation,id:t.triggerId,...s,...i,ref:r})})});he.displayName=D;var fe="AccordionContent",xe=l.forwardRef((o,r)=>{const{__scopeAccordion:n,...i}=o,c=w(d,n),t=H(fe,n),a=U(n);return e.jsx(Ne,{role:"region","aria-labelledby":t.triggerId,"data-orientation":c.orientation,...a,...i,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});xe.displayName=fe;function ge(o){return o?"open":"closed"}var He=se,Ye=pe,Ke=ue,We=he,$e=xe;function C({...o}){return e.jsx(He,{"data-slot":"accordion",...o})}function p({className:o,...r}){return e.jsx(Ye,{"data-slot":"accordion-item",className:O("border-b last:border-b-0",o),...r})}function m({className:o,children:r,...n}){return e.jsx(Ke,{className:"flex",children:e.jsxs(We,{"data-slot":"accordion-trigger",className:O("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",o),...n,children:[r,e.jsx(Re.chevronDown,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function u({className:o,children:r,...n}){return e.jsx($e,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...n,children:e.jsx("div",{className:O("pt-0 pb-4",o),children:r})})}C.__docgenInfo={description:"",methods:[],displayName:"Accordion"};p.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};m.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const so={component:C,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A vertically stacked set of interactive headings that expand or collapse to reveal their associated sections of content. Built on Radix UI primitives for accessibility."}}},argTypes:{type:{control:"select",options:["single","multiple"],description:"Whether single or multiple items can be open at once"},collapsible:{control:"boolean",description:'Whether items can be closed once opened (for type="single")'},defaultValue:{control:"text",description:"The default open item value(s)"}}},b={render:()=>e.jsxs(C,{type:"single",collapsible:!0,defaultValue:"item1",children:[e.jsxs(p,{value:"item1",children:[e.jsx(m,{children:"What is shadcn/ui?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"shadcn/ui is a collection of re-usable components built using Radix UI primitives and Tailwind CSS. Unlike other component libraries, shadcn/ui is not a package you install. Instead, you can copy and paste the components into your project."})})]}),e.jsxs(p,{value:"item2",children:[e.jsx(m,{children:"How do I use these components?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"You can use the components by copying them into your project. Each component comes with all its styles and dependencies already configured."})})]}),e.jsxs(p,{value:"item3",children:[e.jsx(m,{children:"Is it accessible?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Yes! All components are built on top of Radix UI primitives, which provide accessibility out of the box. They support keyboard navigation and screen readers."})})]})]})},v={args:{type:"multiple",defaultValue:["item1","item2"]},render:o=>e.jsxs(C,{type:"multiple",defaultValue:o.defaultValue,children:[e.jsxs(p,{value:"item1",children:[e.jsx(m,{children:"First Item (open by default)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This content is visible because it is set as default open."})})]}),e.jsxs(p,{value:"item2",children:[e.jsx(m,{children:"Second Item (open by default)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This content is also visible because multiple items can be open."})})]}),e.jsxs(p,{value:"item3",children:[e.jsx(m,{children:"Third Item (collapsed)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This item is collapsed by default."})})]})]})},I={args:{type:"single",collapsible:!0},render:o=>e.jsxs(C,{type:o.type,collapsible:o.collapsible,children:[e.jsxs(p,{value:"item1",children:[e.jsx(m,{children:"Item One"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item one."})})]}),e.jsxs(p,{value:"item2",children:[e.jsx(m,{children:"Item Two"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item two."})})]}),e.jsxs(p,{value:"item3",children:[e.jsx(m,{children:"Item Three"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item three."})})]})]})};var $,z,L,F,G;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(z=b.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:`Default accordion with single selection mode.
The first item is open by default and can be collapsed.`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var B,q,J,Q,X;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    defaultValue: ['item1', 'item2']
  },
  render: args => <Accordion type='multiple' defaultValue={args.defaultValue as string[]}>
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
}`,...(J=(q=v.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:`Accordion with multiple selection mode enabled.
Multiple items can be open at the same time.`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,oe,ne,te;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: args => <Accordion type={args.type} collapsible={args.collapsible}>
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
User must click to expand any section.`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.description}}};const ao=["Default","MultipleOpen","AllCollapsed"];export{I as AllCollapsed,b as Default,v as MultipleOpen,ao as __namedExportsOrder,so as default};
