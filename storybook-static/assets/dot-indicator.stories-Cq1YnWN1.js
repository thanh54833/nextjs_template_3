import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./index-DYby6Z_P.js";import{c as y}from"./utils-Czy_q_oT.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s({className:P,color:t="default",size:r="md",pulse:n=!1,...h}){return e.jsx("span",{"data-slot":"dot-indicator","data-color":t,"data-size":r,"data-pulse":n,className:y("inline-block shrink-0 rounded-full bg-current",{"size-1.5":r==="sm","size-2":r==="md","size-2.5":r==="lg"},{"bg-primary text-primary":t==="default","bg-emerald-500 text-emerald-500":t==="success","bg-amber-500 text-amber-500":t==="warning","bg-destructive text-destructive":t==="destructive","bg-muted-foreground/40 text-muted-foreground/40":t==="muted"},n&&"animate-pulse",P),...h})}const a=w.forwardRef(({className:P,total:t=5,active:r=0,size:n="md",...h},b)=>e.jsx("div",{ref:b,"data-slot":"pagination-dots",className:y("inline-flex items-center gap-1.5",P),...h,children:Array.from({length:t}).map((I,S)=>e.jsx("span",{"data-active":S===r,className:y("rounded-full transition-all duration-200",{"size-1.5":n==="sm","size-2":n==="md","size-2.5":n==="lg"},S===r?"bg-primary":"bg-muted-foreground/30")},S))}));a.displayName="PaginationDots";s.__docgenInfo={description:"",methods:[],displayName:"DotIndicator",props:{color:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'destructive' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'muted'"}]},description:"Color variant of the dot",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the dot",defaultValue:{value:"'md'",computed:!1}},pulse:{required:!1,tsType:{name:"boolean"},description:"Pulse animation when true",defaultValue:{value:"false",computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"PaginationDots",props:{total:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},active:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const O={component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dot indicators for status, activity, or pagination states."}}}},o={args:{color:"default",size:"md",pulse:!1}},i={args:{color:"success",size:"md",pulse:!1}},c={args:{color:"warning",size:"md",pulse:!1}},l={args:{color:"destructive",size:"md",pulse:!1}},d={args:{color:"muted",size:"md",pulse:!1}},m={args:{color:"destructive",size:"md",pulse:!0}},u={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"md"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"lg"})]})]})},p={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"success"}),e.jsx("span",{className:"text-sm",children:"Online"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"warning"}),e.jsx("span",{className:"text-sm",children:"Away"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"destructive"}),e.jsx("span",{className:"text-sm",children:"Busy"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"muted"}),e.jsx("span",{className:"text-sm",children:"Offline"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{color:"default"}),e.jsx("span",{className:"text-sm",children:"Default"})]})]})},g={render:()=>e.jsxs("div",{className:"flex items-center gap-2 rounded-full border px-3 py-1.5",children:[e.jsx(s,{color:"destructive",size:"sm",pulse:!0}),e.jsx("span",{className:"text-sm font-medium",children:"New notifications"})]})},x={name:"PaginationDots/Default",render:()=>e.jsx(a,{total:5,active:0,size:"md"})},f={name:"PaginationDots/Active2",render:()=>e.jsx(a,{total:5,active:2,size:"md"})},v={name:"PaginationDots/Active4",render:()=>e.jsx(a,{total:5,active:4,size:"md"})},N={name:"PaginationDots/Small",render:()=>e.jsx(a,{total:4,active:1,size:"sm"})},D={name:"PaginationDots/Large",render:()=>e.jsx(a,{total:4,active:1,size:"lg"})},j={name:"PaginationDots/ManyDots",render:()=>e.jsx(a,{total:10,active:5,size:"md"})},z={name:"PaginationDots/Sizes",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{total:4,active:1,size:"sm"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{total:4,active:1,size:"md"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{total:4,active:1,size:"lg"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"lg"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'md',
    pulse: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'success',
    size: 'md',
    pulse: false
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    size: 'md',
    pulse: false
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'destructive',
    size: 'md',
    pulse: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'muted',
    size: 'md',
    pulse: false
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'destructive',
    size: 'md',
    pulse: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <DotIndicator size="sm" />
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DotIndicator size="md" />
        <span className="text-xs text-muted-foreground">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DotIndicator size="lg" />
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center gap-2">
        <DotIndicator color="success" />
        <span className="text-sm">Online</span>
      </div>
      <div className="flex items-center gap-2">
        <DotIndicator color="warning" />
        <span className="text-sm">Away</span>
      </div>
      <div className="flex items-center gap-2">
        <DotIndicator color="destructive" />
        <span className="text-sm">Busy</span>
      </div>
      <div className="flex items-center gap-2">
        <DotIndicator color="muted" />
        <span className="text-sm">Offline</span>
      </div>
      <div className="flex items-center gap-2">
        <DotIndicator color="default" />
        <span className="text-sm">Default</span>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 rounded-full border px-3 py-1.5">
      <DotIndicator color="destructive" size="sm" pulse />
      <span className="text-sm font-medium">New notifications</span>
    </div>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'PaginationDots/Default',
  render: () => <PaginationDots total={5} active={0} size="md" />
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'PaginationDots/Active2',
  render: () => <PaginationDots total={5} active={2} size="md" />
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'PaginationDots/Active4',
  render: () => <PaginationDots total={5} active={4} size="md" />
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'PaginationDots/Small',
  render: () => <PaginationDots total={4} active={1} size="sm" />
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'PaginationDots/Large',
  render: () => <PaginationDots total={4} active={1} size="lg" />
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'PaginationDots/ManyDots',
  render: () => <PaginationDots total={10} active={5} size="md" />
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'PaginationDots/Sizes',
  render: () => <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <PaginationDots total={4} active={1} size="sm" />
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PaginationDots total={4} active={1} size="md" />
        <span className="text-xs text-muted-foreground">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PaginationDots total={4} active={1} size="lg" />
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
    </div>
}`,...z.parameters?.docs?.source}}};const T=["Default","Success","Warning","Destructive","Muted","WithPulse","DotSizeComparison","DotStatusGrid","DotNotificationBadge","PaginationDefault","PaginationActive2","PaginationActive4","PaginationSmall","PaginationLarge","PaginationManyDots","PaginationSizes"];export{o as Default,l as Destructive,g as DotNotificationBadge,u as DotSizeComparison,p as DotStatusGrid,d as Muted,f as PaginationActive2,v as PaginationActive4,x as PaginationDefault,D as PaginationLarge,j as PaginationManyDots,z as PaginationSizes,N as PaginationSmall,i as Success,c as Warning,m as WithPulse,T as __namedExportsOrder,O as default};
