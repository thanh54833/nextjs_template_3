import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{c as k}from"./index-D1SQP9Z-.js";import{c}from"./utils-BQHNewu7.js";const I=k("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function T({className:t,variant:r,..._}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:c(I({variant:r}),t),..._})}function a({className:t,...r}){return e.jsx("div",{"data-slot":"alert-title",className:c("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",t),...r})}function o({className:t,...r}){return e.jsx("div",{"data-slot":"alert-description",className:c("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",t),...r})}T.__docgenInfo={description:"",methods:[],displayName:"Alert"};a.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};o.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const b={component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Alert is a component used to display important messages and notifications. It supports different variants like `destructive` for error states and can contain `AlertTitle` and `AlertDescription` sub-components."}}}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Alert Title"}),e.jsx(o,{children:"This is a default alert message."})]})}},n={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Error"}),e.jsx(o,{children:"Something went wrong. Please try again."})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),e.jsx(a,{children:"Warning"}),e.jsx(o,{children:"This action could have unintended consequences."})]})}};var l,d,p,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </>
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"Default alert with informational message",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var g,x,h,v,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: <>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:"Destructive alert variant for error and warning states",...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var y,A,j,w,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(A=i.parameters)==null?void 0:A.docs)==null?void 0:j.source},description:{story:"Alert with custom icon element",...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.description}}};const E=["Default","Destructive","WithIcon"];export{s as Default,n as Destructive,i as WithIcon,E as __namedExportsOrder,b as default};
