import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./badge-ARHUHlUB.js";import{I as d}from"./icons-BdTSAv6R.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";import"./index-koxbFvze.js";import"./utils-Czy_q_oT.js";const y={component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A small label component for highlighting statuses, categories, or counts. Supports multiple variants like default, secondary, destructive, and outline."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"],description:"Visual style variant of the badge"}}},a={args:{children:"Default"}},s={args:{variant:"secondary",children:"Secondary"}},t={args:{variant:"destructive",children:"Destructive"}},n={args:{variant:"outline",children:"Outline"}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(r,{variant:"default",children:[e.jsx(d.circleCheck,{className:"size-3"}),"Published"]}),e.jsxs(r,{variant:"secondary",children:[e.jsx(d.clock,{className:"size-3"}),"Scheduled"]}),e.jsxs(r,{variant:"outline",children:[e.jsx(d.edit,{className:"size-3"}),"Draft"]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(d.circleX,{className:"size-3"}),"Failed"]})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"default",children:"Live"}),e.jsx(r,{variant:"secondary",children:"Scheduled"}),e.jsx(r,{variant:"outline",children:"Draft"}),e.jsx(r,{variant:"destructive",children:"Error"})]})},o={render:()=>e.jsxs("div",{className:"flex items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold",children:"Instagram Post"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:"Scheduled for 9:00 AM"})]}),e.jsx(r,{variant:"secondary",children:"Scheduled"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...a.parameters?.docs?.source},description:{story:"Default badge with primary styling.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...s.parameters?.docs?.source},description:{story:"Secondary variant badge.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...t.parameters?.docs?.source},description:{story:"Destructive variant for error or warning states.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...n.parameters?.docs?.source},description:{story:"Outline variant with border styling.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default"><Icons.circleCheck className="size-3" />Published</Badge>
      <Badge variant="secondary"><Icons.clock className="size-3" />Scheduled</Badge>
      <Badge variant="outline"><Icons.edit className="size-3" />Draft</Badge>
      <Badge variant="destructive"><Icons.circleX className="size-3" />Failed</Badge>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Badge with an icon prefix, common in status indicators",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="default">Live</Badge>
      <Badge variant="secondary">Scheduled</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="destructive">Error</Badge>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Badges as post status labels in a social media context",...c.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-between rounded-lg border p-4">
      <div>
        <p className="text-sm font-semibold">Instagram Post</p>
        <p className="text-xs text-muted-foreground mt-0.5">Scheduled for 9:00 AM</p>
      </div>
      <Badge variant="secondary">Scheduled</Badge>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Badge inside a card header, the most common layout context",...o.parameters?.docs?.description}}};const j=["Default","Secondary","Destructive","Outline","WithIcon","PostStatuses","InCardHeader"];export{a as Default,t as Destructive,o as InCardHeader,n as Outline,c as PostStatuses,s as Secondary,i as WithIcon,j as __namedExportsOrder,y as default};
