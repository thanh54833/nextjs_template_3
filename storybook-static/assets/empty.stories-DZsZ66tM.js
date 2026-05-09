import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{c as T}from"./index-D1SQP9Z-.js";import{c as o}from"./utils-BQHNewu7.js";function _({className:r,...t}){return e.jsx("div",{"data-slot":"empty",className:o("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",r),...t})}function i({className:r,...t}){return e.jsx("div",{"data-slot":"empty-header",className:o("flex max-w-sm flex-col items-center gap-2 text-center",r),...t})}const b=T("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",icon:"flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"}},defaultVariants:{variant:"default"}});function D({className:r,variant:t="default",...H}){return e.jsx("div",{"data-slot":"empty-icon","data-variant":t,className:o(b({variant:t,className:r})),...H})}function d({className:r,...t}){return e.jsx("div",{"data-slot":"empty-title",className:o("text-lg font-medium tracking-tight",r),...t})}function c({className:r,...t}){return e.jsx("div",{"data-slot":"empty-description",className:o("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",r),...t})}_.__docgenInfo={description:"",methods:[],displayName:"Empty"};i.__docgenInfo={description:"",methods:[],displayName:"EmptyHeader"};d.__docgenInfo={description:"",methods:[],displayName:"EmptyTitle"};c.__docgenInfo={description:"",methods:[],displayName:"EmptyDescription"};D.__docgenInfo={description:"",methods:[],displayName:"EmptyMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const z={component:_,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Empty state component for displaying when no content is available. It includes sub-components: `EmptyHeader`, `EmptyTitle`, `EmptyDescription`, `EmptyContent`, and `EmptyMedia` for flexible layouts."}}}},n={args:{children:e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsx(d,{children:"No items found"}),e.jsx(c,{children:"Try adjusting your search or filter to find what you're looking for."})]})})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(D,{variant:"icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),e.jsxs(i,{children:[e.jsx(d,{children:"No conversations"}),e.jsx(c,{children:"Start a new conversation to get started."})]})]})}},a={args:{children:e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsx(d,{children:"No data"}),e.jsxs(c,{children:[e.jsx("a",{href:"#",children:"Add your first item"})," to get started."]})]})})}};var p,m,l,y,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        <EmptyHeader>
          <EmptyTitle>No items found</EmptyTitle>
          <EmptyDescription>Try adjusting your search or filter to find what you're looking for.</EmptyDescription>
        </EmptyHeader>
      </>
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:"Default empty state with title and description",...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.description}}};var f,h,g,x,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:"Empty state with icon media variant",...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.description}}};var v,j,w,N,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"Empty state with action link",...(k=(N=a.parameters)==null?void 0:N.docs)==null?void 0:k.description}}};const S=["Default","WithIcon","WithAction"];export{n as Default,a as WithAction,s as WithIcon,S as __namedExportsOrder,z as default};
