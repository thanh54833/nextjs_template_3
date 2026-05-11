import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-LHNt3CwB.js";import{c}from"./utils-BQHNewu7.js";const m=p("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function l({className:t,variant:r,...d}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:c(m({variant:r}),t),...d})}function a({className:t,...r}){return e.jsx("div",{"data-slot":"alert-title",className:c("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",t),...r})}function o({className:t,...r}){return e.jsx("div",{"data-slot":"alert-description",className:c("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",t),...r})}l.__docgenInfo={description:"",methods:[],displayName:"Alert"};a.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};o.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const h={component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Alert is a component used to display important messages and notifications. It supports different variants like `destructive` for error states and can contain `AlertTitle` and `AlertDescription` sub-components."}}}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Alert Title"}),e.jsx(o,{children:"This is a default alert message."})]})}},n={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Error"}),e.jsx(o,{children:"Something went wrong. Please try again."})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),e.jsx(a,{children:"Warning"}),e.jsx(o,{children:"This action could have unintended consequences."})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </>
  }
}`,...s.parameters?.docs?.source},description:{story:"Default alert with informational message",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: <>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
  }
}`,...n.parameters?.docs?.source},description:{story:"Destructive alert variant for error and warning states",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This action could have unintended consequences.</AlertDescription>
      </>
  }
}`,...i.parameters?.docs?.source},description:{story:"Alert with custom icon element",...i.parameters?.docs?.description}}};const v=["Default","Destructive","WithIcon"];export{s as Default,n as Destructive,i as WithIcon,v as __namedExportsOrder,h as default};
