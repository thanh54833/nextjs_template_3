import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./button-BQzN1lMO.js";import{I as s}from"./icons-BdTSAv6R.js";import"./index-koxbFvze.js";import"./utils-Czy_q_oT.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";const E={component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A clickable button element with various styles and sizes. Supports multiple variants like default, secondary, destructive, outline, ghost, and link."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link"],description:"Visual style variant of the button"},size:{control:"select",options:["default","sm","lg","xs","icon","icon-sm","icon-xs","icon-lg"],description:"Size of the button"}}},t={args:{children:"Button"}},a={args:{variant:"secondary",children:"Secondary"}},n={args:{variant:"destructive",children:"Destructive"}},o={args:{variant:"outline",children:"Outline"}},i={args:{variant:"ghost",children:"Ghost"}},c={args:{variant:"link",children:"Link"}},d={args:{size:"xs",children:"Extra Small"}},l={args:{size:"sm",children:"Small"}},p={args:{size:"lg",children:"Large"}},u={render:()=>e.jsx(r,{size:"icon","aria-label":"Notifications",children:e.jsx(s.notification,{})})},m={render:()=>e.jsx(r,{size:"icon-xs",variant:"ghost","aria-label":"Dismiss",children:e.jsx(s.close,{})})},g={render:()=>e.jsx(r,{size:"icon-sm",variant:"outline","aria-label":"Edit",children:e.jsx(s.edit,{})})},h={render:()=>e.jsx(r,{size:"icon-lg","aria-label":"Settings",children:e.jsx(s.settings,{})})},v={args:{disabled:!0,children:"Disabled"}},S={args:{isLoading:!0,children:"Loading"}},y={render:()=>e.jsxs(r,{variant:"default",children:[e.jsx(s.check,{}),"Success"]})},x={render:()=>e.jsxs(r,{variant:"destructive",children:[e.jsx(s.close,{}),"Error"]})},b={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(r,{children:[e.jsx(s.add,{}),"New Post"]}),e.jsxs(r,{variant:"outline",children:[e.jsx(s.search,{}),"Search"]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(s.trash,{}),"Delete"]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...t.parameters?.docs?.source},description:{story:"Default button with primary styling.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...a.parameters?.docs?.source},description:{story:"Secondary variant button.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...n.parameters?.docs?.source},description:{story:"Destructive variant for dangerous actions.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...o.parameters?.docs?.source},description:{story:"Outline variant with border styling.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}`,...i.parameters?.docs?.source},description:{story:"Ghost variant with transparent background.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link'
  }
}`,...c.parameters?.docs?.source},description:{story:"Link variant styled as hyperlink text.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    children: 'Extra Small'
  }
}`,...d.parameters?.docs?.source},description:{story:"Extra small size button.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...l.parameters?.docs?.source},description:{story:"Small size button.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large'
  }
}`,...p.parameters?.docs?.source},description:{story:"Large size button.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Button size="icon" aria-label="Notifications">
      <Icons.notification />
    </Button>
}`,...u.parameters?.docs?.source},description:{story:"Icon-only button, default size — always include aria-label",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Button size="icon-xs" variant="ghost" aria-label="Dismiss">
      <Icons.close />
    </Button>
}`,...m.parameters?.docs?.source},description:{story:"Icon-only button, extra-small — used in inline table actions",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Button size="icon-sm" variant="outline" aria-label="Edit">
      <Icons.edit />
    </Button>
}`,...g.parameters?.docs?.source},description:{story:"Icon-only button, small size",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Button size="icon-lg" aria-label="Settings">
      <Icons.settings />
    </Button>
}`,...h.parameters?.docs?.source},description:{story:"Icon-only button, large size",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...v.parameters?.docs?.source},description:{story:"Disabled button that cannot be clicked.",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: 'Loading'
  }
}`,...S.parameters?.docs?.source},description:{story:"Button in loading state with spinner icon.",...S.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant='default'>
      <Icons.check />
      Success
    </Button>
}`,...y.parameters?.docs?.source},description:{story:"Button showing success state with check icon.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant='destructive'>
      <Icons.close />
      Error
    </Button>
}`,...x.parameters?.docs?.source},description:{story:"Button showing error state with close icon.",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Button><Icons.add />New Post</Button>
      <Button variant="outline"><Icons.search />Search</Button>
      <Button variant="destructive"><Icons.trash />Delete</Button>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Button with leading icon, the most common pattern in this product",...b.parameters?.docs?.description}}};const N=["Default","Secondary","Destructive","Outline","Ghost","Link","XSmall","Small","Large","Icon","IconXSmall","IconSmall","IconLarge","Disabled","Loading","Success","Error","WithLeadingIcon"];export{t as Default,n as Destructive,v as Disabled,x as Error,i as Ghost,u as Icon,h as IconLarge,g as IconSmall,m as IconXSmall,p as Large,c as Link,S as Loading,o as Outline,a as Secondary,l as Small,y as Success,b as WithLeadingIcon,d as XSmall,N as __namedExportsOrder,E as default};
