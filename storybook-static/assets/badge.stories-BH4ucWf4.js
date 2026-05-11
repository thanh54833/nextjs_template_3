import{j as u}from"./jsx-runtime-u17CrQMm.js";import{S as l}from"./index-DGP6o15j.js";import{c as p}from"./index-LHNt3CwB.js";import{c as m}from"./utils-BQHNewu7.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";const g=p("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function s({className:o,variant:n,asChild:i=!1,...c}){const d=i?l:"span";return u.jsx(d,{"data-slot":"badge",className:m(g({variant:n}),o),...c})}s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const D={component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A small label component for highlighting statuses, categories, or counts. Supports multiple variants like default, secondary, destructive, and outline."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"],description:"Visual style variant of the badge"}}},e={args:{children:"Default"}},r={args:{variant:"secondary",children:"Secondary"}},t={args:{variant:"destructive",children:"Destructive"}},a={args:{variant:"outline",children:"Outline"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...e.parameters?.docs?.source},description:{story:"Default badge with primary styling.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...r.parameters?.docs?.source},description:{story:"Secondary variant badge.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...t.parameters?.docs?.source},description:{story:"Destructive variant for error or warning states.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...a.parameters?.docs?.source},description:{story:"Outline variant with border styling.",...a.parameters?.docs?.description}}};const w=["Default","Secondary","Destructive","Outline"];export{e as Default,t as Destructive,a as Outline,r as Secondary,w as __namedExportsOrder,D as default};
