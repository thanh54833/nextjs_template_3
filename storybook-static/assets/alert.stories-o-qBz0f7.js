import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{c as y}from"./index-D1SQP9Z-.js";import{c}from"./utils-BQHNewu7.js";const A=y("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function f({className:r,variant:t,...j}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:c(A({variant:t}),r),...j})}function i({className:r,...t}){return e.jsx("div",{"data-slot":"alert-title",className:c("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",r),...t})}function o({className:r,...t}){return e.jsx("div",{"data-slot":"alert-description",className:c("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",r),...t})}f.__docgenInfo={description:"",methods:[],displayName:"Alert"};i.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};o.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const _={component:f,tags:["autodocs"],parameters:{layout:"padded"}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Alert Title"}),e.jsx(o,{children:"This is a default alert message."})]})}},n={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Error"}),e.jsx(o,{children:"Something went wrong. Please try again."})]})}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),e.jsx(i,{children:"Warning"}),e.jsx(o,{children:"This action could have unintended consequences."})]})}};var l,d,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </>
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: <>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,h,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const k=["Default","Destructive","WithIcon"];export{s as Default,n as Destructive,a as WithIcon,k as __namedExportsOrder,_ as default};
