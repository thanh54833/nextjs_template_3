import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./index-DYby6Z_P.js";import{c as D}from"./utils-Czy_q_oT.js";import{c as M}from"./index-Dc_FVRD7.js";import{c as Y}from"./index-BKV5D6oG.js";import{R as U,I as J,c as _}from"./index-BXQs120s.js";import{P as Q}from"./index-CcuSeV1x.js";import{P as I}from"./index-CraXK6NT.js";import{u as X}from"./index-ofxjSrhS.js";import{u as Z}from"./index-BmEHjAU8.js";import{u as ee}from"./index-C1lvhlBT.js";import{B as v}from"./badge-ARHUHlUB.js";import{B as A}from"./button-BQzN1lMO.js";import{C as se,a as te,b as ae,c as ne,d as re}from"./card-Lxv0GXrn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C4JN59vf.js";import"./index-DOER7VuF.js";import"./index-ByLlCQqU.js";import"./index-D1sqivKo.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DGP6o15j.js";import"./index-koxbFvze.js";import"./icons-BdTSAv6R.js";var R="Tabs",[ie]=Y(R,[_]),E=_(),[oe,P]=ie(R),z=g.forwardRef((s,n)=>{const{__scopeTabs:i,value:r,onValueChange:u,defaultValue:x,orientation:o="horizontal",dir:p,activationMode:h="automatic",...f}=s,m=X(p),[d,b]=Z({prop:r,onChange:u,defaultProp:x??"",caller:R});return e.jsx(oe,{scope:i,baseId:ee(),value:d,onValueChange:b,orientation:o,dir:m,activationMode:h,children:e.jsx(I.div,{dir:m,"data-orientation":o,...f,ref:n})})});z.displayName=R;var F="TabsList",W=g.forwardRef((s,n)=>{const{__scopeTabs:i,loop:r=!0,...u}=s,x=P(F,i),o=E(i);return e.jsx(U,{asChild:!0,...o,orientation:x.orientation,dir:x.dir,loop:r,children:e.jsx(I.div,{role:"tablist","aria-orientation":x.orientation,...u,ref:n})})});W.displayName=F;var H="TabsTrigger",O=g.forwardRef((s,n)=>{const{__scopeTabs:i,value:r,disabled:u=!1,...x}=s,o=P(H,i),p=E(i),h=q(o.baseId,r),f=K(o.baseId,r),m=r===o.value;return e.jsx(J,{asChild:!0,...p,focusable:!u,active:m,children:e.jsx(I.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":u?"":void 0,disabled:u,id:h,...x,ref:n,onMouseDown:M(s.onMouseDown,d=>{!u&&d.button===0&&d.ctrlKey===!1?o.onValueChange(r):d.preventDefault()}),onKeyDown:M(s.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&o.onValueChange(r)}),onFocus:M(s.onFocus,()=>{const d=o.activationMode!=="manual";!m&&!u&&d&&o.onValueChange(r)})})})});O.displayName=H;var G="TabsContent",$=g.forwardRef((s,n)=>{const{__scopeTabs:i,value:r,forceMount:u,children:x,...o}=s,p=P(G,i),h=q(p.baseId,r),f=K(p.baseId,r),m=r===p.value,d=g.useRef(m);return g.useEffect(()=>{const b=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(b)},[]),e.jsx(Q,{present:u||m,children:({present:b})=>e.jsx(I.div,{"data-state":m?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":h,hidden:!b,id:f,tabIndex:0,...o,ref:n,style:{...s.style,animationDuration:d.current?"0s":void 0},children:b&&x})})});$.displayName=G;function q(s,n){return`${s}-trigger-${n}`}function K(s,n){return`${s}-content-${n}`}var le=z,de=W,ce=O,ue=$;function l({className:s,...n}){return e.jsx(le,{"data-slot":"tabs",className:D("flex flex-col gap-2",s),...n})}function c({className:s,...n}){return e.jsx(de,{"data-slot":"tabs-list",className:D("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",s),...n})}function t({className:s,...n}){return e.jsx(ce,{"data-slot":"tabs-trigger",className:D("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[1px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",s),...n})}function a({className:s,...n}){return e.jsx(ue,{"data-slot":"tabs-content",className:D("flex-1 outline-none",s),...n})}l.__docgenInfo={description:"",methods:[],displayName:"Tabs"};c.__docgenInfo={description:"",methods:[],displayName:"TabsList"};t.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};a.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const Pe={component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A set of tabbed sections that allow users to navigate between different content areas. Use tabs to organize content into logical groups that can be selected without navigating away from the page."}}},argTypes:{defaultValue:{control:"text",description:"The value of the tab that should be active by default"},orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the tabs"},activationMode:{control:"select",options:["automatic","manual"],description:"How tabs are activated"}}},T={args:{defaultValue:"overview"},render:s=>e.jsxs(l,{...s,defaultValue:"overview",children:[e.jsxs(c,{children:[e.jsx(t,{value:"overview",children:"Overview"}),e.jsx(t,{value:"analytics",children:"Analytics"}),e.jsx(t,{value:"reports",children:"Reports"})]}),e.jsx(a,{value:"overview",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Overview content displayed here."})}),e.jsx(a,{value:"analytics",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Analytics data shown in this tab."})}),e.jsx(a,{value:"reports",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Reports content goes here."})})]})},N={args:{defaultValue:"active"},render:s=>e.jsxs(l,{...s,defaultValue:"active",children:[e.jsxs(c,{children:[e.jsx(t,{value:"active",children:"Active Tab"}),e.jsx(t,{value:"disabled",disabled:!0,children:"Disabled Tab"}),e.jsx(t,{value:"another",children:"Another Tab"})]}),e.jsx(a,{value:"active",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for active tab."})}),e.jsx(a,{value:"disabled",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is disabled."})}),e.jsx(a,{value:"another",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for another tab."})})]})},j={args:{defaultValue:"details",orientation:"vertical"},render:s=>e.jsxs(l,{...s,defaultValue:"details",orientation:"vertical",children:[e.jsxs(c,{children:[e.jsx(t,{value:"details",children:"Details"}),e.jsx(t,{value:"settings",children:"Settings"}),e.jsx(t,{value:"history",children:"History"})]}),e.jsx(a,{value:"details",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Vertical details content."})}),e.jsx(a,{value:"settings",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Settings panel with configuration options."})}),e.jsx(a,{value:"history",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Historical records and activity log."})})]})},y={args:{defaultValue:"first",activationMode:"manual"},render:s=>e.jsxs(l,{...s,defaultValue:"first",activationMode:"manual",children:[e.jsxs(c,{children:[e.jsx(t,{value:"first",children:"Step 1"}),e.jsx(t,{value:"second",children:"Step 2"}),e.jsx(t,{value:"third",children:"Step 3"})]}),e.jsx(a,{value:"first",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Step 1 content - click next to proceed."})}),e.jsx(a,{value:"second",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Step 2 content - continue to final step."})}),e.jsx(a,{value:"third",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Final step - wizard completed."})})]})},w={args:{defaultValue:"notifications"},render:s=>e.jsxs(l,{...s,defaultValue:"notifications",children:[e.jsxs(c,{children:[e.jsx(t,{value:"overview",children:"Overview"}),e.jsxs(t,{value:"notifications",children:["Notifications",e.jsx(v,{variant:"secondary",className:"ml-2",children:"3"})]}),e.jsxs(t,{value:"messages",children:["Messages",e.jsx(v,{variant:"destructive",className:"ml-2",children:"12"})]})]}),e.jsx(a,{value:"overview",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Dashboard overview with key metrics."})}),e.jsx(a,{value:"notifications",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between rounded-lg border p-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium",children:"New user registered"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"2 minutes ago"})]}),e.jsx(v,{variant:"secondary",children:"New"})]}),e.jsxs("div",{className:"flex items-center justify-between rounded-lg border p-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium",children:"Payment received"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"1 hour ago"})]}),e.jsx(v,{variant:"secondary",children:"Done"})]})]})}),e.jsx(a,{value:"messages",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"12 unread messages in your inbox."})})]})},C={args:{defaultValue:"overview"},render:s=>e.jsxs(se,{children:[e.jsxs(te,{children:[e.jsx(ae,{children:"Project Dashboard"}),e.jsx(ne,{children:"Monitor your project metrics and activities"})]}),e.jsx(re,{children:e.jsxs(l,{...s,defaultValue:"overview",children:[e.jsxs(c,{className:"w-full",children:[e.jsx(t,{value:"overview",className:"flex-1",children:"Overview"}),e.jsx(t,{value:"tasks",className:"flex-1",children:"Tasks"}),e.jsx(t,{value:"team",className:"flex-1",children:"Team"})]}),e.jsx(a,{value:"overview",className:"mt-4",children:e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx("p",{className:"text-2xl font-bold",children:"248"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Total Tasks"})]}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx("p",{className:"text-2xl font-bold",children:"156"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Completed"})]}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx("p",{className:"text-2xl font-bold",children:"92"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"In Progress"})]})]})}),e.jsx(a,{value:"tasks",className:"mt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Task list with 248 items."})}),e.jsx(a,{value:"team",className:"mt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Team members and assignments."})})]})})]})},k={args:{defaultValue:"description"},render:s=>e.jsxs(l,{...s,defaultValue:"description",children:[e.jsxs(c,{children:[e.jsx(t,{value:"description",children:"Description"}),e.jsx(t,{value:"specifications",children:"Specifications"}),e.jsx(t,{value:"reviews",children:"Reviews"})]}),e.jsxs(a,{value:"description",className:"space-y-3",children:[e.jsx("p",{className:"text-sm",children:"This product offers a comprehensive solution for modern web applications. Built with scalability in mind, it provides robust APIs and intuitive interfaces."}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Perfect for teams looking to streamline their workflow and improve productivity."})]}),e.jsx(a,{value:"specifications",className:"space-y-3",children:e.jsxs("div",{className:"grid gap-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between border-b py-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"Weight"}),e.jsx("span",{className:"font-medium",children:"2.5 kg"})]}),e.jsxs("div",{className:"flex justify-between border-b py-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"Dimensions"}),e.jsx("span",{className:"font-medium",children:"30 x 20 x 5 cm"})]}),e.jsxs("div",{className:"flex justify-between border-b py-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"Material"}),e.jsx("span",{className:"font-medium",children:"Aluminum Alloy"})]}),e.jsxs("div",{className:"flex justify-between py-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"Warranty"}),e.jsx("span",{className:"font-medium",children:"2 Years"})]})]})}),e.jsxs(a,{value:"reviews",className:"space-y-4",children:[e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-medium",children:"Sarah Chen"}),e.jsx(v,{variant:"outline",children:"Verified"})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Excellent product quality and customer service. Highly recommended for teams of all sizes."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"Posted 3 days ago"})]}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-medium",children:"Michael Park"}),e.jsx(v,{variant:"outline",children:"Verified"})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Great value for money. The build quality exceeds expectations."}),e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"Posted 1 week ago"})]})]})]})},V={args:{defaultValue:"count"},render:s=>{const[n,i]=g.useState(0);return e.jsxs(l,{...s,defaultValue:"count",children:[e.jsxs(c,{children:[e.jsx(t,{value:"count",children:"Counter"}),e.jsx(t,{value:"form",children:"Form"}),e.jsx(t,{value:"result",children:"Result"})]}),e.jsxs(a,{value:"count",className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between rounded-lg border p-6",children:[e.jsxs("span",{className:"text-lg font-medium",children:["Count: ",n]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(A,{variant:"outline",size:"sm",onClick:()=>i(r=>r-1),children:"Decrement"}),e.jsx(A,{variant:"outline",size:"sm",onClick:()=>i(r=>r+1),children:"Increment"}),e.jsx(A,{variant:"ghost",size:"sm",onClick:()=>i(0),children:"Reset"})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Navigate to Result tab to see the final count value."})]}),e.jsx(a,{value:"form",className:"space-y-4",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-sm font-medium",children:"Name"}),e.jsx("input",{type:"text",placeholder:"Enter your name",className:"h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",placeholder:"Enter your email",className:"h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50"})]}),e.jsx(A,{className:"w-full",children:"Submit Form"})]})}),e.jsx(a,{value:"result",className:"space-y-4",children:e.jsxs("div",{className:"rounded-lg border bg-green-500/10 p-6 text-center",children:[e.jsx("p",{className:"text-2xl font-bold text-green-600 dark:text-green-400",children:n}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Final counter value"})]})})]})}},S={args:{defaultValue:"tab1"},render:s=>e.jsxs(l,{...s,defaultValue:"tab1",children:[e.jsxs(c,{children:[e.jsx(t,{value:"tab1",children:"Tab 1"}),e.jsx(t,{value:"tab2",children:"Tab 2"}),e.jsx(t,{value:"tab3",children:"Tab 3"}),e.jsx(t,{value:"tab4",children:"Tab 4"})]}),e.jsx(a,{value:"tab1",children:e.jsx("div",{className:"space-y-3",children:Array.from({length:10},(n,i)=>e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsxs("p",{className:"font-medium",children:["Item ",i+1]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["This is some content for item ",i+1," in the first tab panel."]})]},i))})}),e.jsx(a,{value:"tab2",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for tab 2."})}),e.jsx(a,{value:"tab3",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for tab 3."})}),e.jsx(a,{value:"tab4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for tab 4."})})]})},L={args:{defaultValue:"section1"},render:s=>e.jsx("div",{className:"w-64",children:e.jsxs(l,{...s,defaultValue:"section1",children:[e.jsxs(c,{className:"flex-col h-auto w-full",children:[e.jsx(t,{value:"section1",className:"w-full justify-start",children:"Section One"}),e.jsx(t,{value:"section2",className:"w-full justify-start",children:"Section Two"}),e.jsx(t,{value:"section3",className:"w-full justify-start",children:"Section Three"})]}),e.jsx(a,{value:"section1",className:"mt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for section 1."})}),e.jsx(a,{value:"section2",className:"mt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for section 2."})}),e.jsx(a,{value:"section3",className:"mt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for section 3."})})]})})},B={args:{defaultValue:"dashboard"},render:s=>e.jsxs(l,{...s,defaultValue:"dashboard",children:[e.jsxs(c,{children:[e.jsxs(t,{value:"dashboard",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-2",children:[e.jsx("rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}),e.jsx("rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}),e.jsx("rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}),e.jsx("rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"})]}),"Dashboard"]}),e.jsxs(t,{value:"analytics",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-2",children:[e.jsx("path",{d:"M3 3v18h18"}),e.jsx("path",{d:"m19 9-5 5-4-4-3 3"})]}),"Analytics"]}),e.jsxs(t,{value:"reports",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-2",children:[e.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{width:"2",x1:"16",x2:"8",y1:"13",y2:"13"}),e.jsx("line",{width:"2",x1:"16",x2:"8",y1:"17",y2:"17"}),e.jsx("line",{width:"2",x1:"10",x2:"8",y1:"9",y2:"9"})]}),"Reports"]})]}),e.jsx(a,{value:"dashboard",className:"mt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Dashboard overview content."})}),e.jsx(a,{value:"analytics",className:"mt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Analytics charts and metrics."})}),e.jsx(a,{value:"reports",className:"mt-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Generated reports and exports."})})]})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview'
  },
  render: args => <Tabs {...args} defaultValue='overview'>
      <TabsList>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
      </TabsList>
      <TabsContent value='overview'>
        <p className='text-sm text-muted-foreground'>Overview content displayed here.</p>
      </TabsContent>
      <TabsContent value='analytics'>
        <p className='text-sm text-muted-foreground'>Analytics data shown in this tab.</p>
      </TabsContent>
      <TabsContent value='reports'>
        <p className='text-sm text-muted-foreground'>Reports content goes here.</p>
      </TabsContent>
    </Tabs>
}`,...T.parameters?.docs?.source},description:{story:"Default tabs with three tab items and their content",...T.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'active'
  },
  render: args => <Tabs {...args} defaultValue='active'>
      <TabsList>
        <TabsTrigger value='active'>Active Tab</TabsTrigger>
        <TabsTrigger value='disabled' disabled>
          Disabled Tab
        </TabsTrigger>
        <TabsTrigger value='another'>Another Tab</TabsTrigger>
      </TabsList>
      <TabsContent value='active'>
        <p className='text-sm text-muted-foreground'>Content for active tab.</p>
      </TabsContent>
      <TabsContent value='disabled'>
        <p className='text-sm text-muted-foreground'>This content is disabled.</p>
      </TabsContent>
      <TabsContent value='another'>
        <p className='text-sm text-muted-foreground'>Content for another tab.</p>
      </TabsContent>
    </Tabs>
}`,...N.parameters?.docs?.source},description:{story:"Tabs with one item disabled",...N.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'details',
    orientation: 'vertical'
  },
  render: args => <Tabs {...args} defaultValue='details' orientation='vertical'>
      <TabsList>
        <TabsTrigger value='details'>Details</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
        <TabsTrigger value='history'>History</TabsTrigger>
      </TabsList>
      <TabsContent value='details'>
        <p className='text-sm text-muted-foreground'>Vertical details content.</p>
      </TabsContent>
      <TabsContent value='settings'>
        <p className='text-sm text-muted-foreground'>Settings panel with configuration options.</p>
      </TabsContent>
      <TabsContent value='history'>
        <p className='text-sm text-muted-foreground'>Historical records and activity log.</p>
      </TabsContent>
    </Tabs>
}`,...j.parameters?.docs?.source},description:{story:"Tabs with vertical orientation",...j.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'first',
    activationMode: 'manual'
  },
  render: args => <Tabs {...args} defaultValue='first' activationMode='manual'>
      <TabsList>
        <TabsTrigger value='first'>Step 1</TabsTrigger>
        <TabsTrigger value='second'>Step 2</TabsTrigger>
        <TabsTrigger value='third'>Step 3</TabsTrigger>
      </TabsList>
      <TabsContent value='first'>
        <p className='text-sm text-muted-foreground'>Step 1 content - click next to proceed.</p>
      </TabsContent>
      <TabsContent value='second'>
        <p className='text-sm text-muted-foreground'>Step 2 content - continue to final step.</p>
      </TabsContent>
      <TabsContent value='third'>
        <p className='text-sm text-muted-foreground'>Final step - wizard completed.</p>
      </TabsContent>
    </Tabs>
}`,...y.parameters?.docs?.source},description:{story:"Tabs with manual activation mode - requires click to switch",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'notifications'
  },
  render: args => <Tabs {...args} defaultValue='notifications'>
      <TabsList>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='notifications'>
          Notifications
          <Badge variant='secondary' className='ml-2'>3</Badge>
        </TabsTrigger>
        <TabsTrigger value='messages'>
          Messages
          <Badge variant='destructive' className='ml-2'>12</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='overview'>
        <p className='text-sm text-muted-foreground'>Dashboard overview with key metrics.</p>
      </TabsContent>
      <TabsContent value='notifications'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between rounded-lg border p-3'>
            <div>
              <p className='text-sm font-medium'>New user registered</p>
              <p className='text-xs text-muted-foreground'>2 minutes ago</p>
            </div>
            <Badge variant='secondary'>New</Badge>
          </div>
          <div className='flex items-center justify-between rounded-lg border p-3'>
            <div>
              <p className='text-sm font-medium'>Payment received</p>
              <p className='text-xs text-muted-foreground'>1 hour ago</p>
            </div>
            <Badge variant='secondary'>Done</Badge>
          </div>
        </div>
      </TabsContent>
      <TabsContent value='messages'>
        <p className='text-sm text-muted-foreground'>12 unread messages in your inbox.</p>
      </TabsContent>
    </Tabs>
}`,...w.parameters?.docs?.source},description:{story:"Tabs with Badge indicators showing counts",...w.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview'
  },
  render: args => <Card>
      <CardHeader>
        <CardTitle>Project Dashboard</CardTitle>
        <CardDescription>Monitor your project metrics and activities</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs {...args} defaultValue='overview'>
          <TabsList className='w-full'>
            <TabsTrigger value='overview' className='flex-1'>Overview</TabsTrigger>
            <TabsTrigger value='tasks' className='flex-1'>Tasks</TabsTrigger>
            <TabsTrigger value='team' className='flex-1'>Team</TabsTrigger>
          </TabsList>
          <TabsContent value='overview' className='mt-4'>
            <div className='grid gap-4 md:grid-cols-3'>
              <div className='rounded-lg border p-4'>
                <p className='text-2xl font-bold'>248</p>
                <p className='text-xs text-muted-foreground'>Total Tasks</p>
              </div>
              <div className='rounded-lg border p-4'>
                <p className='text-2xl font-bold'>156</p>
                <p className='text-xs text-muted-foreground'>Completed</p>
              </div>
              <div className='rounded-lg border p-4'>
                <p className='text-2xl font-bold'>92</p>
                <p className='text-xs text-muted-foreground'>In Progress</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='tasks' className='mt-4'>
            <p className='text-sm text-muted-foreground'>Task list with 248 items.</p>
          </TabsContent>
          <TabsContent value='team' className='mt-4'>
            <p className='text-sm text-muted-foreground'>Team members and assignments.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
}`,...C.parameters?.docs?.source},description:{story:"Tabs inside a Card container for dashboard-style layouts",...C.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'description'
  },
  render: args => <Tabs {...args} defaultValue='description'>
      <TabsList>
        <TabsTrigger value='description'>Description</TabsTrigger>
        <TabsTrigger value='specifications'>Specifications</TabsTrigger>
        <TabsTrigger value='reviews'>Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value='description' className='space-y-3'>
        <p className='text-sm'>
          This product offers a comprehensive solution for modern web applications. Built with
          scalability in mind, it provides robust APIs and intuitive interfaces.
        </p>
        <p className='text-sm text-muted-foreground'>
          Perfect for teams looking to streamline their workflow and improve productivity.
        </p>
      </TabsContent>
      <TabsContent value='specifications' className='space-y-3'>
        <div className='grid gap-2 text-sm'>
          <div className='flex justify-between border-b py-2'>
            <span className='text-muted-foreground'>Weight</span>
            <span className='font-medium'>2.5 kg</span>
          </div>
          <div className='flex justify-between border-b py-2'>
            <span className='text-muted-foreground'>Dimensions</span>
            <span className='font-medium'>30 x 20 x 5 cm</span>
          </div>
          <div className='flex justify-between border-b py-2'>
            <span className='text-muted-foreground'>Material</span>
            <span className='font-medium'>Aluminum Alloy</span>
          </div>
          <div className='flex justify-between py-2'>
            <span className='text-muted-foreground'>Warranty</span>
            <span className='font-medium'>2 Years</span>
          </div>
        </div>
      </TabsContent>
      <TabsContent value='reviews' className='space-y-4'>
        <div className='rounded-lg border p-4'>
          <div className='flex items-center justify-between mb-2'>
            <span className='font-medium'>Sarah Chen</span>
            <Badge variant='outline'>Verified</Badge>
          </div>
          <p className='text-sm text-muted-foreground'>
            Excellent product quality and customer service. Highly recommended for teams of all sizes.
          </p>
          <p className='text-xs text-muted-foreground mt-2'>Posted 3 days ago</p>
        </div>
        <div className='rounded-lg border p-4'>
          <div className='flex items-center justify-between mb-2'>
            <span className='font-medium'>Michael Park</span>
            <Badge variant='outline'>Verified</Badge>
          </div>
          <p className='text-sm text-muted-foreground'>
            Great value for money. The build quality exceeds expectations.
          </p>
          <p className='text-xs text-muted-foreground mt-2'>Posted 1 week ago</p>
        </div>
      </TabsContent>
    </Tabs>
}`,...k.parameters?.docs?.source},description:{story:"Tabs with rich content including images and text",...k.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'count'
  },
  render: args => {
    const [count, setCount] = useState(0);
    return <Tabs {...args} defaultValue='count'>
        <TabsList>
          <TabsTrigger value='count'>Counter</TabsTrigger>
          <TabsTrigger value='form'>Form</TabsTrigger>
          <TabsTrigger value='result'>Result</TabsTrigger>
        </TabsList>
        <TabsContent value='count' className='space-y-4'>
          <div className='flex items-center justify-between rounded-lg border p-6'>
            <span className='text-lg font-medium'>Count: {count}</span>
            <div className='flex gap-2'>
              <Button variant='outline' size='sm' onClick={() => setCount(c => c - 1)}>
                Decrement
              </Button>
              <Button variant='outline' size='sm' onClick={() => setCount(c => c + 1)}>
                Increment
              </Button>
              <Button variant='ghost' size='sm' onClick={() => setCount(0)}>
                Reset
              </Button>
            </div>
          </div>
          <p className='text-sm text-muted-foreground'>
            Navigate to Result tab to see the final count value.
          </p>
        </TabsContent>
        <TabsContent value='form' className='space-y-4'>
          <div className='space-y-3'>
            <div className='space-y-1.5'>
              <label className='text-sm font-medium'>Name</label>
              <input type='text' placeholder='Enter your name' className='h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50' />
            </div>
            <div className='space-y-1.5'>
              <label className='text-sm font-medium'>Email</label>
              <input type='email' placeholder='Enter your email' className='h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50' />
            </div>
            <Button className='w-full'>Submit Form</Button>
          </div>
        </TabsContent>
        <TabsContent value='result' className='space-y-4'>
          <div className='rounded-lg border bg-green-500/10 p-6 text-center'>
            <p className='text-2xl font-bold text-green-600 dark:text-green-400'>{count}</p>
            <p className='text-sm text-muted-foreground'>Final counter value</p>
          </div>
        </TabsContent>
      </Tabs>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Stateful tabs with interactive content that changes",...V.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1'
  },
  render: args => <Tabs {...args} defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
        <TabsTrigger value='tab4'>Tab 4</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <div className='space-y-3'>
          {Array.from({
          length: 10
        }, (_, i) => <div key={i} className='rounded-lg border p-4'>
              <p className='font-medium'>Item {i + 1}</p>
              <p className='text-sm text-muted-foreground'>
                This is some content for item {i + 1} in the first tab panel.
              </p>
            </div>)}
        </div>
      </TabsContent>
      <TabsContent value='tab2'>
        <p className='text-sm text-muted-foreground'>Content for tab 2.</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p className='text-sm text-muted-foreground'>Content for tab 3.</p>
      </TabsContent>
      <TabsContent value='tab4'>
        <p className='text-sm text-muted-foreground'>Content for tab 4.</p>
      </TabsContent>
    </Tabs>
}`,...S.parameters?.docs?.source},description:{story:"Long content with scrollable tabs panel",...S.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'section1'
  },
  render: args => <div className='w-64'>
      <Tabs {...args} defaultValue='section1'>
        <TabsList className='flex-col h-auto w-full'>
          <TabsTrigger value='section1' className='w-full justify-start'>
            Section One
          </TabsTrigger>
          <TabsTrigger value='section2' className='w-full justify-start'>
            Section Two
          </TabsTrigger>
          <TabsTrigger value='section3' className='w-full justify-start'>
            Section Three
          </TabsTrigger>
        </TabsList>
        <TabsContent value='section1' className='mt-4'>
          <p className='text-sm text-muted-foreground'>Content for section 1.</p>
        </TabsContent>
        <TabsContent value='section2' className='mt-4'>
          <p className='text-sm text-muted-foreground'>Content for section 2.</p>
        </TabsContent>
        <TabsContent value='section3' className='mt-4'>
          <p className='text-sm text-muted-foreground'>Content for section 3.</p>
        </TabsContent>
      </Tabs>
    </div>
}`,...L.parameters?.docs?.source},description:{story:"Compact tabs for sidebar or dense layouts",...L.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'dashboard'
  },
  render: args => <Tabs {...args} defaultValue='dashboard'>
      <TabsList>
        <TabsTrigger value='dashboard'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='mr-2'>
            <rect width='7' height='9' x='3' y='3' rx='1' />
            <rect width='7' height='5' x='14' y='3' rx='1' />
            <rect width='7' height='9' x='14' y='12' rx='1' />
            <rect width='7' height='5' x='3' y='16' rx='1' />
          </svg>
          Dashboard
        </TabsTrigger>
        <TabsTrigger value='analytics'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='mr-2'>
            <path d='M3 3v18h18' />
            <path d='m19 9-5 5-4-4-3 3' />
          </svg>
          Analytics
        </TabsTrigger>
        <TabsTrigger value='reports'>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='mr-2'>
            <path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' />
            <polyline points='14 2 14 8 20 8' />
            <line width='2' x1='16' x2='8' y1='13' y2='13' />
            <line width='2' x1='16' x2='8' y1='17' y2='17' />
            <line width='2' x1='10' x2='8' y1='9' y2='9' />
          </svg>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value='dashboard' className='mt-4'>
        <p className='text-sm text-muted-foreground'>Dashboard overview content.</p>
      </TabsContent>
      <TabsContent value='analytics' className='mt-4'>
        <p className='text-sm text-muted-foreground'>Analytics charts and metrics.</p>
      </TabsContent>
      <TabsContent value='reports' className='mt-4'>
        <p className='text-sm text-muted-foreground'>Generated reports and exports.</p>
      </TabsContent>
    </Tabs>
}`,...B.parameters?.docs?.source},description:{story:"Tabs with icons in triggers",...B.parameters?.docs?.description}}};const _e=["Default","DisabledTabs","VerticalTabs","ManualActivation","WithBadges","CardContainer","RichContent","InteractiveTabs","ScrollableContent","CompactTabs","WithIcons"];export{C as CardContainer,L as CompactTabs,T as Default,N as DisabledTabs,V as InteractiveTabs,y as ManualActivation,k as RichContent,S as ScrollableContent,j as VerticalTabs,w as WithBadges,B as WithIcons,_e as __namedExportsOrder,Pe as default};
