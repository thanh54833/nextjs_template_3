import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{c as j}from"./utils-BQHNewu7.js";import{r as m}from"./index-Br2IOmUs.js";import{c as y}from"./index-DW48STyt.js";import{c as U}from"./index-BRlNe44M.js";import{c as M,R as J,I as Q}from"./index-x4TqUDAk.js";import{P as W}from"./index-EtsJrrfg.js";import{P as C}from"./index-Caz76J1-.js";import{u as X}from"./index-Bal2i3vH.js";import{u as Y}from"./index-D7wzBi_S.js";import{u as Z}from"./index-BBh8-vjY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-OvQM5fGA.js";import"./index-B1gorirK.js";import"./index-DLhQgCaF.js";import"./index-1oe2SjNl.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";var N="Tabs",[ee]=U(N,[M]),k=M(),[te,V]=ee(N),F=m.forwardRef((t,a)=>{const{__scopeTabs:b,value:n,onValueChange:o,defaultValue:d,orientation:s="horizontal",dir:u,activationMode:p="automatic",...g}=t,i=X(u),[r,T]=Y({prop:n,onChange:o,defaultProp:d??"",caller:N});return e.jsx(te,{scope:b,baseId:Z(),value:r,onValueChange:T,orientation:s,dir:i,activationMode:p,children:e.jsx(C.div,{dir:i,"data-orientation":s,...g,ref:a})})});F.displayName=N;var $="TabsList",G=m.forwardRef((t,a)=>{const{__scopeTabs:b,loop:n=!0,...o}=t,d=V($,b),s=k(b);return e.jsx(J,{asChild:!0,...s,orientation:d.orientation,dir:d.dir,loop:n,children:e.jsx(C.div,{role:"tablist","aria-orientation":d.orientation,...o,ref:a})})});G.displayName=$;var z="TabsTrigger",K=m.forwardRef((t,a)=>{const{__scopeTabs:b,value:n,disabled:o=!1,...d}=t,s=V(z,b),u=k(b),p=O(s.baseId,n),g=q(s.baseId,n),i=n===s.value;return e.jsx(Q,{asChild:!0,...u,focusable:!o,active:i,children:e.jsx(C.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":g,"data-state":i?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:p,...d,ref:a,onMouseDown:y(t.onMouseDown,r=>{!o&&r.button===0&&r.ctrlKey===!1?s.onValueChange(n):r.preventDefault()}),onKeyDown:y(t.onKeyDown,r=>{[" ","Enter"].includes(r.key)&&s.onValueChange(n)}),onFocus:y(t.onFocus,()=>{const r=s.activationMode!=="manual";!i&&!o&&r&&s.onValueChange(n)})})})});K.displayName=z;var B="TabsContent",H=m.forwardRef((t,a)=>{const{__scopeTabs:b,value:n,forceMount:o,children:d,...s}=t,u=V(B,b),p=O(u.baseId,n),g=q(u.baseId,n),i=n===u.value,r=m.useRef(i);return m.useEffect(()=>{const T=requestAnimationFrame(()=>r.current=!1);return()=>cancelAnimationFrame(T)},[]),e.jsx(W,{present:o||i,children:({present:T})=>e.jsx(C.div,{"data-state":i?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!T,id:g,tabIndex:0,...s,ref:a,style:{...t.style,animationDuration:r.current?"0s":void 0},children:T&&d})})});H.displayName=B;function O(t,a){return`${t}-trigger-${a}`}function q(t,a){return`${t}-content-${a}`}var ae=F,ne=G,se=K,re=H;function v({className:t,...a}){return e.jsx(ae,{"data-slot":"tabs",className:j("flex flex-col gap-2",t),...a})}function _({className:t,...a}){return e.jsx(ne,{"data-slot":"tabs-list",className:j("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",t),...a})}function c({className:t,...a}){return e.jsx(se,{"data-slot":"tabs-trigger",className:j("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...a})}function l({className:t,...a}){return e.jsx(re,{"data-slot":"tabs-content",className:j("flex-1 outline-none",t),...a})}v.__docgenInfo={description:"",methods:[],displayName:"Tabs"};_.__docgenInfo={description:"",methods:[],displayName:"TabsList"};c.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};l.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const _e={component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A set of tabbed sections that allow users to navigate between different content areas. Use tabs to organize content into logical groups that can be selected without navigating away from the page."}}},argTypes:{defaultValue:{control:"text",description:"The value of the tab that should be active by default"},orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the tabs"},activationMode:{control:"select",options:["automatic","manual"],description:"How tabs are activated"}}},f={render:t=>e.jsxs(v,{...t,defaultValue:"tab1",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Tab 1"}),e.jsx(c,{value:"tab2",children:"Tab 2"}),e.jsx(c,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 1"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 2"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 3"})})]})},x={render:t=>e.jsxs(v,{...t,defaultValue:"tab1",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Active Tab"}),e.jsx(c,{value:"tab2",disabled:!0,children:"Disabled Tab"}),e.jsx(c,{value:"tab3",children:"Another Tab"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Content for active tab"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"This content is disabled"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Content for another tab"})})]})},h={render:t=>e.jsxs(v,{...t,defaultValue:"tab1",orientation:"vertical",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Tab 1"}),e.jsx(c,{value:"tab2",children:"Tab 2"}),e.jsx(c,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 1"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 2"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 3"})})]})};var w,I,A;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  /** Default tabs with three tab items and their content */
  render: args => <Tabs {...args} defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p className='text-sm'>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p className='text-sm'>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p className='text-sm'>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
}`,...(A=(I=f.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var D,R,S;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  /** Tabs with one item disabled */
  render: args => <Tabs {...args} defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Active Tab</TabsTrigger>
        <TabsTrigger value='tab2' disabled>
          Disabled Tab
        </TabsTrigger>
        <TabsTrigger value='tab3'>Another Tab</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p className='text-sm'>Content for active tab</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p className='text-sm'>This content is disabled</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p className='text-sm'>Content for another tab</p>
      </TabsContent>
    </Tabs>
}`,...(S=(R=x.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var E,L,P;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  /** Tabs with vertical orientation */
  render: args => <Tabs {...args} defaultValue='tab1' orientation='vertical'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p className='text-sm'>Vertical content for Tab 1</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p className='text-sm'>Vertical content for Tab 2</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p className='text-sm'>Vertical content for Tab 3</p>
      </TabsContent>
    </Tabs>
}`,...(P=(L=h.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const ye=["Default","DisabledTabs","VerticalTabs"];export{f as Default,x as DisabledTabs,h as VerticalTabs,ye as __namedExportsOrder,_e as default};
