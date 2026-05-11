import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./utils-BQHNewu7.js";import{r as m}from"./index-DYby6Z_P.js";import{c as y}from"./index-Dc_FVRD7.js";import{c as F}from"./index-BKV5D6oG.js";import{c as w,R as $,I as G}from"./index-BXQs120s.js";import{P as z}from"./index-CcuSeV1x.js";import{P as C}from"./index-CraXK6NT.js";import{u as K}from"./index-ofxjSrhS.js";import{u as B}from"./index-BmEHjAU8.js";import{u as H}from"./index-C1lvhlBT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C4JN59vf.js";import"./index-DOER7VuF.js";import"./index-ByLlCQqU.js";import"./index-D1sqivKo.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";var N="Tabs",[O]=F(N,[w]),I=w(),[q,V]=O(N),A=m.forwardRef((t,a)=>{const{__scopeTabs:b,value:n,onValueChange:o,defaultValue:d,orientation:s="horizontal",dir:u,activationMode:p="automatic",...g}=t,i=K(u),[r,T]=B({prop:n,onChange:o,defaultProp:d??"",caller:N});return e.jsx(q,{scope:b,baseId:H(),value:r,onValueChange:T,orientation:s,dir:i,activationMode:p,children:e.jsx(C.div,{dir:i,"data-orientation":s,...g,ref:a})})});A.displayName=N;var D="TabsList",R=m.forwardRef((t,a)=>{const{__scopeTabs:b,loop:n=!0,...o}=t,d=V(D,b),s=I(b);return e.jsx($,{asChild:!0,...s,orientation:d.orientation,dir:d.dir,loop:n,children:e.jsx(C.div,{role:"tablist","aria-orientation":d.orientation,...o,ref:a})})});R.displayName=D;var S="TabsTrigger",E=m.forwardRef((t,a)=>{const{__scopeTabs:b,value:n,disabled:o=!1,...d}=t,s=V(S,b),u=I(b),p=M(s.baseId,n),g=k(s.baseId,n),i=n===s.value;return e.jsx(G,{asChild:!0,...u,focusable:!o,active:i,children:e.jsx(C.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":g,"data-state":i?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:p,...d,ref:a,onMouseDown:y(t.onMouseDown,r=>{!o&&r.button===0&&r.ctrlKey===!1?s.onValueChange(n):r.preventDefault()}),onKeyDown:y(t.onKeyDown,r=>{[" ","Enter"].includes(r.key)&&s.onValueChange(n)}),onFocus:y(t.onFocus,()=>{const r=s.activationMode!=="manual";!i&&!o&&r&&s.onValueChange(n)})})})});E.displayName=S;var L="TabsContent",P=m.forwardRef((t,a)=>{const{__scopeTabs:b,value:n,forceMount:o,children:d,...s}=t,u=V(L,b),p=M(u.baseId,n),g=k(u.baseId,n),i=n===u.value,r=m.useRef(i);return m.useEffect(()=>{const T=requestAnimationFrame(()=>r.current=!1);return()=>cancelAnimationFrame(T)},[]),e.jsx(z,{present:o||i,children:({present:T})=>e.jsx(C.div,{"data-state":i?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!T,id:g,tabIndex:0,...s,ref:a,style:{...t.style,animationDuration:r.current?"0s":void 0},children:T&&d})})});P.displayName=L;function M(t,a){return`${t}-trigger-${a}`}function k(t,a){return`${t}-content-${a}`}var U=A,J=R,Q=E,W=P;function v({className:t,...a}){return e.jsx(U,{"data-slot":"tabs",className:j("flex flex-col gap-2",t),...a})}function _({className:t,...a}){return e.jsx(J,{"data-slot":"tabs-list",className:j("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",t),...a})}function c({className:t,...a}){return e.jsx(Q,{"data-slot":"tabs-trigger",className:j("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...a})}function l({className:t,...a}){return e.jsx(W,{"data-slot":"tabs-content",className:j("flex-1 outline-none",t),...a})}v.__docgenInfo={description:"",methods:[],displayName:"Tabs"};_.__docgenInfo={description:"",methods:[],displayName:"TabsList"};c.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};l.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const pe={component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A set of tabbed sections that allow users to navigate between different content areas. Use tabs to organize content into logical groups that can be selected without navigating away from the page."}}},argTypes:{defaultValue:{control:"text",description:"The value of the tab that should be active by default"},orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the tabs"},activationMode:{control:"select",options:["automatic","manual"],description:"How tabs are activated"}}},f={render:t=>e.jsxs(v,{...t,defaultValue:"tab1",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Tab 1"}),e.jsx(c,{value:"tab2",children:"Tab 2"}),e.jsx(c,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 1"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 2"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 3"})})]})},x={render:t=>e.jsxs(v,{...t,defaultValue:"tab1",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Active Tab"}),e.jsx(c,{value:"tab2",disabled:!0,children:"Disabled Tab"}),e.jsx(c,{value:"tab3",children:"Another Tab"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Content for active tab"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"This content is disabled"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Content for another tab"})})]})},h={render:t=>e.jsxs(v,{...t,defaultValue:"tab1",orientation:"vertical",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Tab 1"}),e.jsx(c,{value:"tab2",children:"Tab 2"}),e.jsx(c,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 1"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 2"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 3"})})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const ge=["Default","DisabledTabs","VerticalTabs"];export{f as Default,x as DisabledTabs,h as VerticalTabs,ge as __namedExportsOrder,pe as default};
