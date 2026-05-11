import{j as C}from"./jsx-runtime-EKYJJIwR.js";import{S as E}from"./index-D58SrNf6.js";import{c as N}from"./index-D1SQP9Z-.js";import{c as T}from"./utils-BQHNewu7.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B1gorirK.js";const q=N("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function O({className:k,variant:j,asChild:V=!1,..._}){const B=V?E:"span";return C.jsx(B,{"data-slot":"badge",className:T(q({variant:j}),k),..._})}O.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={component:O,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A small label component for highlighting statuses, categories, or counts. Supports multiple variants like default, secondary, destructive, and outline."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"],description:"Visual style variant of the badge"}}},e={args:{children:"Default"}},r={args:{variant:"secondary",children:"Secondary"}},t={args:{variant:"destructive",children:"Destructive"}},a={args:{variant:"outline",children:"Outline"}};var s,o,n,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source},description:{story:"Default badge with primary styling.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};var d,u,l,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source},description:{story:"Secondary variant badge.",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var g,v,f,y,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:"Destructive variant for error or warning states.",...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var h,x,S,D,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:"Outline variant with border styling.",...(w=(D=a.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};const K=["Default","Secondary","Destructive","Outline"];export{e as Default,t as Destructive,a as Outline,r as Secondary,K as __namedExportsOrder,J as default};
