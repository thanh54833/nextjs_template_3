import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-koxbFvze.js";import{c as u}from"./utils-Czy_q_oT.js";import{I as p}from"./icons-BdTSAv6R.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f=g("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",success:"bg-card border-[oklch(0.75_0.12_175)] text-[oklch(0.35_0.1_175)] [&>svg]:text-[oklch(0.45_0.15_175)] *:data-[slot=alert-description]:text-[oklch(0.45_0.1_175)]",warning:"bg-card border-[oklch(0.82_0.12_85)] text-[oklch(0.40_0.1_85)] [&>svg]:text-[oklch(0.55_0.15_85)] *:data-[slot=alert-description]:text-[oklch(0.50_0.1_85)]",info:"bg-card border-[oklch(0.70_0.09_210)] text-[oklch(0.35_0.08_210)] [&>svg]:text-[oklch(0.50_0.12_210)] *:data-[slot=alert-description]:text-[oklch(0.45_0.08_210)]"}},defaultVariants:{variant:"default"}});function h({className:s,variant:n,...m}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:u(f({variant:n}),s),...m})}function r({className:s,as:n="div",...m}){return e.jsx(n,{"data-slot":"alert-title",className:u("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",s),...m})}function t({className:s,...n}){return e.jsx("div",{"data-slot":"alert-description",className:u("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",s),...n})}h.__docgenInfo={description:"",methods:[],displayName:"Alert"};r.__docgenInfo={description:"",methods:[],displayName:"AlertTitle",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const j={component:h,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Alert is a component used to display important messages and notifications. It supports different variants like `destructive` for error states and can contain `AlertTitle` and `AlertDescription` sub-components."}}}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Alert Title"}),e.jsx(t,{children:"This is a default alert message."})]})}},i={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Error"}),e.jsx(t,{children:"Something went wrong. Please try again."})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(p.alertCircle,{"aria-hidden":!0}),e.jsx(r,{children:"Warning"}),e.jsx(t,{children:"This action could have unintended consequences."})]})}},c={args:{variant:"success",children:e.jsxs(e.Fragment,{children:[e.jsx(p.circleCheck,{"aria-hidden":!0}),e.jsx(r,{children:"Post published"}),e.jsx(t,{children:"Your Instagram post went live successfully. Reach is updating now."})]})}},l={args:{variant:"warning",children:e.jsxs(e.Fragment,{children:[e.jsx(p.warning,{"aria-hidden":!0}),e.jsx(r,{children:"Scheduled in less than 15 minutes"}),e.jsx(t,{children:"This post is scheduled for 9:45 AM. Changes made now may not propagate in time."})]})}},d={args:{variant:"info",children:e.jsxs(e.Fragment,{children:[e.jsx(p.info,{"aria-hidden":!0}),e.jsx(r,{children:"Twitter API rate limit at 80%"}),e.jsx(t,{children:"Scheduled posts will continue normally. Analytics refresh will slow after 5 PM."})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </>
  }
}`,...a.parameters?.docs?.source},description:{story:"Default alert with informational message",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: <>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
  }
}`,...i.parameters?.docs?.source},description:{story:"Destructive alert variant for error and warning states",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Icons.alertCircle aria-hidden />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This action could have unintended consequences.</AlertDescription>
      </>
  }
}`,...o.parameters?.docs?.source},description:{story:"Alert with icon for informational warnings",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: <>
        <Icons.circleCheck aria-hidden />
        <AlertTitle>Post published</AlertTitle>
        <AlertDescription>
          Your Instagram post went live successfully. Reach is updating now.
        </AlertDescription>
      </>
  }
}`,...c.parameters?.docs?.source},description:{story:"Success state — confirms a completed action",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: <>
        <Icons.warning aria-hidden />
        <AlertTitle>Scheduled in less than 15 minutes</AlertTitle>
        <AlertDescription>
          This post is scheduled for 9:45 AM. Changes made now may not propagate in time.
        </AlertDescription>
      </>
  }
}`,...l.parameters?.docs?.source},description:{story:"Warning state — caution before a risky or time-sensitive action",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: <>
        <Icons.info aria-hidden />
        <AlertTitle>Twitter API rate limit at 80%</AlertTitle>
        <AlertDescription>
          Scheduled posts will continue normally. Analytics refresh will slow after 5 PM.
        </AlertDescription>
      </>
  }
}`,...d.parameters?.docs?.source},description:{story:"Info state — non-critical context or system notice",...d.parameters?.docs?.description}}};const T=["Default","Destructive","WithIcon","Success","Warning","Info"];export{a as Default,i as Destructive,d as Info,c as Success,l as Warning,o as WithIcon,T as __namedExportsOrder,j as default};
