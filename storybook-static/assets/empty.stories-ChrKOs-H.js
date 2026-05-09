import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{c as w}from"./index-D1SQP9Z-.js";import{c as n}from"./utils-BQHNewu7.js";function E({className:r,...t}){return e.jsx("div",{"data-slot":"empty",className:n("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",r),...t})}function i({className:r,...t}){return e.jsx("div",{"data-slot":"empty-header",className:n("flex max-w-sm flex-col items-center gap-2 text-center",r),...t})}const N=w("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",icon:"flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"}},defaultVariants:{variant:"default"}});function j({className:r,variant:t="default",...v}){return e.jsx("div",{"data-slot":"empty-icon","data-variant":t,className:n(N({variant:t,className:r})),...v})}function d({className:r,...t}){return e.jsx("div",{"data-slot":"empty-title",className:n("text-lg font-medium tracking-tight",r),...t})}function c({className:r,...t}){return e.jsx("div",{"data-slot":"empty-description",className:n("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",r),...t})}E.__docgenInfo={description:"",methods:[],displayName:"Empty"};i.__docgenInfo={description:"",methods:[],displayName:"EmptyHeader"};d.__docgenInfo={description:"",methods:[],displayName:"EmptyTitle"};c.__docgenInfo={description:"",methods:[],displayName:"EmptyDescription"};j.__docgenInfo={description:"",methods:[],displayName:"EmptyMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const H={component:E,tags:["autodocs"],parameters:{layout:"padded"}},s={args:{children:e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsx(d,{children:"No items found"}),e.jsx(c,{children:"Try adjusting your search or filter to find what you're looking for."})]})})}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(j,{variant:"icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),e.jsxs(i,{children:[e.jsx(d,{children:"No conversations"}),e.jsx(c,{children:"Start a new conversation to get started."})]})]})}},o={args:{children:e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsx(d,{children:"No data"}),e.jsxs(c,{children:[e.jsx("a",{href:"#",children:"Add your first item"})," to get started."]})]})})}};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        <EmptyHeader>
          <EmptyTitle>No items found</EmptyTitle>
          <EmptyDescription>Try adjusting your search or filter to find what you're looking for.</EmptyDescription>
        </EmptyHeader>
      </>
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,y,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <>
        <EmptyMedia variant="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No conversations</EmptyTitle>
          <EmptyDescription>Start a new conversation to get started.</EmptyDescription>
        </EmptyHeader>
      </>
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,g,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
        <EmptyHeader>
          <EmptyTitle>No data</EmptyTitle>
          <EmptyDescription>
            <a href="#">Add your first item</a> to get started.
          </EmptyDescription>
        </EmptyHeader>
      </>
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const T=["Default","WithIcon","WithAction"];export{s as Default,o as WithAction,a as WithIcon,T as __namedExportsOrder,H as default};
