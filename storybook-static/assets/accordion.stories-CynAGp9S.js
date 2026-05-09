import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{R as d}from"./index-CAPI2NOD.js";import{c as xe}from"./index-Da_hoYQ_.js";import{c as he}from"./index-BUhLVj6P.js";import{u as Ae}from"./index-CJNorLC4.js";import{c as fe}from"./index-DW48STyt.js";import{u as X}from"./index-DwArvr4q.js";import{P as Z}from"./index-C-szKJnO.js";import{c as ee,R as ge,T as ve,b as be}from"./index-Cig01SmZ.js";import{u as Ie}from"./index-BIKiyF7s.js";import{u as Ce}from"./index-Ux667dBy.js";import{I as je}from"./icons-Bvzo9UON.js";import{c as V}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FyZeRQcs.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CrsbsgJ0.js";var l="Accordion",ye=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[M,Te,Ne]=he(l),[N]=xe(l,[Ne,ee]),H=ee(),oe=d.forwardRef((o,r)=>{const{type:n,...c}=o,i=c,t=c;return e.jsx(M.Provider,{scope:o.__scopeAccordion,children:n==="multiple"?e.jsx(Se,{...t,ref:r}):e.jsx(Re,{...i,ref:r})})});oe.displayName=l;var[ne,we]=N(l),[te,_e]=N(l,{collapsible:!1}),Re=d.forwardRef((o,r)=>{const{value:n,defaultValue:c,onValueChange:i=()=>{},collapsible:t=!1,...a}=o,[s,x]=X({prop:n,defaultProp:c??"",onChange:i,caller:l});return e.jsx(ne,{scope:o.__scopeAccordion,value:d.useMemo(()=>s?[s]:[],[s]),onItemOpen:x,onItemClose:d.useCallback(()=>t&&x(""),[t,x]),children:e.jsx(te,{scope:o.__scopeAccordion,collapsible:t,children:e.jsx(re,{...a,ref:r})})})}),Se=d.forwardRef((o,r)=>{const{value:n,defaultValue:c,onValueChange:i=()=>{},...t}=o,[a,s]=X({prop:n,defaultProp:c??[],onChange:i,caller:l}),x=d.useCallback(g=>s((A=[])=>[...A,g]),[s]),f=d.useCallback(g=>s((A=[])=>A.filter(_=>_!==g)),[s]);return e.jsx(ne,{scope:o.__scopeAccordion,value:a,onItemOpen:x,onItemClose:f,children:e.jsx(te,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(re,{...t,ref:r})})})}),[Pe,w]=N(l),re=d.forwardRef((o,r)=>{const{__scopeAccordion:n,disabled:c,dir:i,orientation:t="vertical",...a}=o,s=d.useRef(null),x=Ae(s,r),f=Te(n),A=Ce(i)==="ltr",_=fe(o.onKeyDown,b=>{var K;if(!ye.includes(b.key))return;const pe=b.target,R=f().filter(O=>{var $;return!(($=O.ref.current)!=null&&$.disabled)}),I=R.findIndex(O=>O.ref.current===pe),Y=R.length;if(I===-1)return;b.preventDefault();let h=I;const S=0,P=Y-1,k=()=>{h=I+1,h>P&&(h=S)},E=()=>{h=I-1,h<S&&(h=P)};switch(b.key){case"Home":h=S;break;case"End":h=P;break;case"ArrowRight":t==="horizontal"&&(A?k():E());break;case"ArrowDown":t==="vertical"&&k();break;case"ArrowLeft":t==="horizontal"&&(A?E():k());break;case"ArrowUp":t==="vertical"&&E();break}const ue=h%Y;(K=R[ue].ref.current)==null||K.focus()});return e.jsx(Pe,{scope:n,disabled:c,direction:i,orientation:t,children:e.jsx(M.Slot,{scope:n,children:e.jsx(Z.div,{...a,"data-orientation":t,ref:x,onKeyDown:c?void 0:_})})})}),T="AccordionItem",[ke,U]=N(T),ce=d.forwardRef((o,r)=>{const{__scopeAccordion:n,value:c,...i}=o,t=w(T,n),a=we(T,n),s=H(n),x=Ie(),f=c&&a.value.includes(c)||!1,g=t.disabled||o.disabled;return e.jsx(ke,{scope:n,open:f,disabled:g,triggerId:x,children:e.jsx(ge,{"data-orientation":t.orientation,"data-state":me(f),...s,...i,ref:r,disabled:g,open:f,onOpenChange:A=>{A?a.onItemOpen(c):a.onItemClose(c)}})})});ce.displayName=T;var ie="AccordionHeader",se=d.forwardRef((o,r)=>{const{__scopeAccordion:n,...c}=o,i=w(l,n),t=U(ie,n);return e.jsx(Z.h3,{"data-orientation":i.orientation,"data-state":me(t.open),"data-disabled":t.disabled?"":void 0,...c,ref:r})});se.displayName=ie;var D="AccordionTrigger",ae=d.forwardRef((o,r)=>{const{__scopeAccordion:n,...c}=o,i=w(l,n),t=U(D,n),a=_e(D,n),s=H(n);return e.jsx(M.ItemSlot,{scope:n,children:e.jsx(ve,{"aria-disabled":t.open&&!a.collapsible||void 0,"data-orientation":i.orientation,id:t.triggerId,...s,...c,ref:r})})});ae.displayName=D;var de="AccordionContent",le=d.forwardRef((o,r)=>{const{__scopeAccordion:n,...c}=o,i=w(l,n),t=U(de,n),a=H(n);return e.jsx(be,{role:"region","aria-labelledby":t.triggerId,"data-orientation":i.orientation,...a,...c,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});le.displayName=de;function me(o){return o?"open":"closed"}var Ee=oe,Oe=ce,De=se,Ve=ae,Me=le;function v({...o}){return e.jsx(Ee,{"data-slot":"accordion",...o})}function m({className:o,...r}){return e.jsx(Oe,{"data-slot":"accordion-item",className:V("border-b last:border-b-0",o),...r})}function p({className:o,children:r,...n}){return e.jsx(De,{className:"flex",children:e.jsxs(Ve,{"data-slot":"accordion-trigger",className:V("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",o),...n,children:[r,e.jsx(je.chevronDown,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function u({className:o,children:r,...n}){return e.jsx(Me,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...n,children:e.jsx("div",{className:V("pt-0 pb-4",o),children:r})})}v.__docgenInfo={description:"",methods:[],displayName:"Accordion"};m.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};p.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const no={component:v,tags:["autodocs"],parameters:{layout:"padded"}},C={render:()=>e.jsxs(v,{type:"single",collapsible:!0,defaultValue:"item1",children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"What is shadcn/ui?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"shadcn/ui is a collection of re-usable components built using Radix UI primitives and Tailwind CSS. Unlike other component libraries, shadcn/ui is not a package you install. Instead, you can copy and paste the components into your project."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"How do I use these components?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"You can use the components by copying them into your project. Each component comes with all its styles and dependencies already configured."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Is it accessible?"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Yes! All components are built on top of Radix UI primitives, which provide accessibility out of the box. They support keyboard navigation and screen readers."})})]})]})},j={render:()=>e.jsxs(v,{type:"multiple",defaultValue:["item1","item2"],children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"First Item (open by default)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This content is visible because it is set as default open."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"Second Item (open by default)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This content is also visible because multiple items can be open."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Third Item (collapsed)"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This item is collapsed by default."})})]})]})},y={render:()=>e.jsxs(v,{type:"single",collapsible:!0,children:[e.jsxs(m,{value:"item1",children:[e.jsx(p,{children:"Item One"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item one."})})]}),e.jsxs(m,{value:"item2",children:[e.jsx(p,{children:"Item Two"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item two."})})]}),e.jsxs(m,{value:"item3",children:[e.jsx(p,{children:"Item Three"}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"Content for item three."})})]})]})};var z,L,F;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(L=C.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var G,W,q;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=(W=j.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var B,J,Q;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const to=["Default","MultipleOpen","AllCollapsed"];export{y as AllCollapsed,C as Default,j as MultipleOpen,to as __namedExportsOrder,no as default};
