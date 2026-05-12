import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as x}from"./index-koxbFvze.js";import{c as s}from"./utils-Czy_q_oT.js";import{B as h}from"./button-BQzN1lMO.js";import{I as m}from"./icons-BdTSAv6R.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";function f({className:n,...t}){return e.jsx("div",{"data-slot":"empty",className:s("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",n),...t})}function d({className:n,...t}){return e.jsx("div",{"data-slot":"empty-header",className:s("flex max-w-sm flex-col items-center gap-2 text-center",n),...t})}const E=x("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",icon:"flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"}},defaultVariants:{variant:"default"}});function u({className:n,variant:t="default",...l}){return e.jsx("div",{"data-slot":"empty-icon","data-variant":t,className:s(E({variant:t,className:n})),...l})}function c({className:n,as:t="h2",...l}){return e.jsx(t,{"data-slot":"empty-title",className:s("text-lg font-medium tracking-tight",n),...l})}function p({className:n,...t}){return e.jsx("div",{"data-slot":"empty-description",className:s("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",n),...t})}function y({className:n,...t}){return e.jsx("div",{"data-slot":"empty-content",className:s("flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",n),...t})}f.__docgenInfo={description:"",methods:[],displayName:"Empty"};d.__docgenInfo={description:"",methods:[],displayName:"EmptyHeader"};c.__docgenInfo={description:"",methods:[],displayName:"EmptyTitle",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'h2'",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"EmptyDescription"};y.__docgenInfo={description:"",methods:[],displayName:"EmptyContent"};u.__docgenInfo={description:"",methods:[],displayName:"EmptyMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const D={component:f,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Empty state component for displaying when no content is available. It includes sub-components: `EmptyHeader`, `EmptyTitle`, `EmptyDescription`, `EmptyContent`, and `EmptyMedia` for flexible layouts."}}}},r={args:{children:e.jsx(e.Fragment,{children:e.jsxs(d,{children:[e.jsx(c,{children:"No items found"}),e.jsx(p,{children:"Try adjusting your search or filter to find what you're looking for."})]})})}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"icon",children:e.jsx(m.messageSquare,{"aria-hidden":!0})}),e.jsxs(d,{children:[e.jsx(c,{children:"No conversations"}),e.jsx(p,{children:"Start a new conversation to get started."})]})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(c,{children:"No posts scheduled"}),e.jsx(p,{children:"You have no posts scheduled for this week. Start planning your content."})]}),e.jsx(y,{children:e.jsxs(h,{children:[e.jsx(m.add,{}),"Schedule a post"]})})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"icon",children:e.jsx(m.calendar,{"aria-hidden":!0})}),e.jsxs(d,{children:[e.jsx(c,{children:"No posts this week"}),e.jsx(p,{children:"Your content calendar is clear. Schedule posts to start building your pipeline."})]}),e.jsx(y,{children:e.jsxs(h,{children:[e.jsx(m.add,{}),"Schedule a post"]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <EmptyHeader>
          <EmptyTitle>No items found</EmptyTitle>
          <EmptyDescription>Try adjusting your search or filter to find what you're looking for.</EmptyDescription>
        </EmptyHeader>
      </>
  }
}`,...r.parameters?.docs?.source},description:{story:"Default empty state with title and description",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <EmptyMedia variant="icon">
          <Icons.messageSquare aria-hidden />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No conversations</EmptyTitle>
          <EmptyDescription>Start a new conversation to get started.</EmptyDescription>
        </EmptyHeader>
      </>
  }
}`,...a.parameters?.docs?.source},description:{story:"Empty state with icon media variant",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <EmptyHeader>
          <EmptyTitle>No posts scheduled</EmptyTitle>
          <EmptyDescription>
            You have no posts scheduled for this week. Start planning your content.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <Icons.add />
            Schedule a post
          </Button>
        </EmptyContent>
      </>
  }
}`,...o.parameters?.docs?.source},description:{story:"Empty state with a primary action button",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <EmptyMedia variant="icon">
          <Icons.calendar aria-hidden />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No posts this week</EmptyTitle>
          <EmptyDescription>
            Your content calendar is clear. Schedule posts to start building your pipeline.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <Icons.add />
            Schedule a post
          </Button>
        </EmptyContent>
      </>
  }
}`,...i.parameters?.docs?.source},description:{story:"Scheduled posts empty state — the most common empty state in this product",...i.parameters?.docs?.description}}};const b=["Default","WithIcon","WithAction","ScheduledPostsEmpty"];export{r as Default,i as ScheduledPostsEmpty,o as WithAction,a as WithIcon,b as __namedExportsOrder,D as default};
