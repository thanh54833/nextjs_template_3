import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-CAPI2NOD.js";import{c as y}from"./index-DW48STyt.js";import{c as J}from"./index-Da_hoYQ_.js";import{c as M,R as Q,I as U}from"./index-BIZqRJav.js";import{P as W}from"./index-CrsbsgJ0.js";import{P as j}from"./index-C-szKJnO.js";import{u as X}from"./index-Ux667dBy.js";import{u as Y}from"./index-DwArvr4q.js";import{u as Z}from"./index-BIKiyF7s.js";import{c as C}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BUhLVj6P.js";import"./index-CJNorLC4.js";import"./index-B3CE9KsV.js";import"./index-FyZeRQcs.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";var N="Tabs",[ee]=J(N,[M]),k=M(),[ae,I]=ee(N),F=m.forwardRef((a,t)=>{const{__scopeTabs:b,value:s,onValueChange:o,defaultValue:d,orientation:n="horizontal",dir:u,activationMode:p="automatic",...g}=a,i=X(u),[r,T]=Y({prop:s,onChange:o,defaultProp:d??"",caller:N});return e.jsx(ae,{scope:b,baseId:Z(),value:r,onValueChange:T,orientation:n,dir:i,activationMode:p,children:e.jsx(j.div,{dir:i,"data-orientation":n,...g,ref:t})})});F.displayName=N;var $="TabsList",G=m.forwardRef((a,t)=>{const{__scopeTabs:b,loop:s=!0,...o}=a,d=I($,b),n=k(b);return e.jsx(Q,{asChild:!0,...n,orientation:d.orientation,dir:d.dir,loop:s,children:e.jsx(j.div,{role:"tablist","aria-orientation":d.orientation,...o,ref:t})})});G.displayName=$;var z="TabsTrigger",K=m.forwardRef((a,t)=>{const{__scopeTabs:b,value:s,disabled:o=!1,...d}=a,n=I(z,b),u=k(b),p=q(n.baseId,s),g=H(n.baseId,s),i=s===n.value;return e.jsx(U,{asChild:!0,...u,focusable:!o,active:i,children:e.jsx(j.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":g,"data-state":i?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:p,...d,ref:t,onMouseDown:y(a.onMouseDown,r=>{!o&&r.button===0&&r.ctrlKey===!1?n.onValueChange(s):r.preventDefault()}),onKeyDown:y(a.onKeyDown,r=>{[" ","Enter"].includes(r.key)&&n.onValueChange(s)}),onFocus:y(a.onFocus,()=>{const r=n.activationMode!=="manual";!i&&!o&&r&&n.onValueChange(s)})})})});K.displayName=z;var B="TabsContent",O=m.forwardRef((a,t)=>{const{__scopeTabs:b,value:s,forceMount:o,children:d,...n}=a,u=I(B,b),p=q(u.baseId,s),g=H(u.baseId,s),i=s===u.value,r=m.useRef(i);return m.useEffect(()=>{const T=requestAnimationFrame(()=>r.current=!1);return()=>cancelAnimationFrame(T)},[]),e.jsx(W,{present:o||i,children:({present:T})=>e.jsx(j.div,{"data-state":i?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!T,id:g,tabIndex:0,...n,ref:t,style:{...a.style,animationDuration:r.current?"0s":void 0},children:T&&d})})});O.displayName=B;function q(a,t){return`${a}-trigger-${t}`}function H(a,t){return`${a}-content-${t}`}var te=F,se=G,ne=K,re=O;function v({className:a,...t}){return e.jsx(te,{"data-slot":"tabs",className:C("flex flex-col gap-2",a),...t})}function _({className:a,...t}){return e.jsx(se,{"data-slot":"tabs-list",className:C("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",a),...t})}function c({className:a,...t}){return e.jsx(ne,{"data-slot":"tabs-trigger",className:C("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...t})}function l({className:a,...t}){return e.jsx(re,{"data-slot":"tabs-content",className:C("flex-1 outline-none",a),...t})}v.__docgenInfo={description:"",methods:[],displayName:"Tabs"};_.__docgenInfo={description:"",methods:[],displayName:"TabsList"};c.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};l.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const _e={component:v,tags:["autodocs"],parameters:{layout:"padded"}},f={render:a=>e.jsxs(v,{...a,defaultValue:"tab1",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Tab 1"}),e.jsx(c,{value:"tab2",children:"Tab 2"}),e.jsx(c,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 1"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 2"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Content for Tab 3"})})]})},x={render:a=>e.jsxs(v,{...a,defaultValue:"tab1",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Active Tab"}),e.jsx(c,{value:"tab2",disabled:!0,children:"Disabled Tab"}),e.jsx(c,{value:"tab3",children:"Another Tab"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Content for active tab"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"This content is disabled"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Content for another tab"})})]})},h={render:a=>e.jsxs(v,{...a,defaultValue:"tab1",orientation:"vertical",children:[e.jsxs(_,{children:[e.jsx(c,{value:"tab1",children:"Tab 1"}),e.jsx(c,{value:"tab2",children:"Tab 2"}),e.jsx(c,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 1"})}),e.jsx(l,{value:"tab2",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 2"})}),e.jsx(l,{value:"tab3",children:e.jsx("p",{className:"text-sm",children:"Vertical content for Tab 3"})})]})};var V,A,R;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(A=f.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var w,D,S;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(D=x.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var E,L,P;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
