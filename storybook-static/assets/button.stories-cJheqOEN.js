import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as S}from"./button-Ch-BQGzE.js";import{I as v}from"./icons-CJO6dUP8.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";const B={component:S,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A clickable button element with various styles and sizes. Supports multiple variants like default, secondary, destructive, outline, ghost, and link."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link"],description:"Visual style variant of the button"},size:{control:"select",options:["default","sm","lg","xs","icon","icon-sm","icon-xs","icon-lg"],description:"Size of the button"}}},e={args:{children:"Button"}},s={args:{variant:"secondary",children:"Secondary"}},a={args:{variant:"destructive",children:"Destructive"}},t={args:{variant:"outline",children:"Outline"}},n={args:{variant:"ghost",children:"Ghost"}},o={args:{variant:"link",children:"Link"}},c={args:{size:"xs",children:"Extra Small"}},i={args:{size:"sm",children:"Small"}},d={args:{size:"lg",children:"Large"}},l={args:{size:"icon",children:"🔔"}},p={args:{size:"icon-xs",children:"×"}},m={args:{size:"icon-sm",children:"★"}},u={args:{size:"icon-lg",children:"👍"}},g={args:{disabled:!0,children:"Disabled"}},h={render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsxs(S,{isLoading:!0,children:[r.jsx(v.spinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Loading"]}),r.jsxs(S,{variant:"default",children:[r.jsx(v.check,{className:"mr-2 h-4 w-4"}),"Success"]}),r.jsxs(S,{variant:"destructive",children:[r.jsx(v.close,{className:"mr-2 h-4 w-4"}),"Error"]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...e.parameters?.docs?.source},description:{story:"Default button with primary styling.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...s.parameters?.docs?.source},description:{story:"Secondary variant button.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...a.parameters?.docs?.source},description:{story:"Destructive variant for dangerous actions.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...t.parameters?.docs?.source},description:{story:"Outline variant with border styling.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}`,...n.parameters?.docs?.source},description:{story:"Ghost variant with transparent background.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link'
  }
}`,...o.parameters?.docs?.source},description:{story:"Link variant styled as hyperlink text.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    children: 'Extra Small'
  }
}`,...c.parameters?.docs?.source},description:{story:"Extra small size button.",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...i.parameters?.docs?.source},description:{story:"Small size button.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large'
  }
}`,...d.parameters?.docs?.source},description:{story:"Large size button.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    children: '🔔'
  }
}`,...l.parameters?.docs?.source},description:{story:"Icon-only button with default icon size.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon-xs',
    children: '×'
  }
}`,...p.parameters?.docs?.source},description:{story:"Icon-only button with extra small size.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon-sm',
    children: '★'
  }
}`,...m.parameters?.docs?.source},description:{story:"Icon-only button with small size.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon-lg',
    children: '👍'
  }
}`,...u.parameters?.docs?.source},description:{story:"Icon-only button with large size.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...g.parameters?.docs?.source},description:{story:"Disabled button that cannot be clicked.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className='flex gap-4'>
      <Button isLoading>
        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        Loading
      </Button>
      <Button variant='default'>
        <Icons.check className='mr-2 h-4 w-4' />
        Success
      </Button>
      <Button variant='destructive'>
        <Icons.close className='mr-2 h-4 w-4' />
        Error
      </Button>
    </div>
}`,...h.parameters?.docs?.source},description:{story:"Button status states: loading, success, error with left icon.",...h.parameters?.docs?.description}}};const D=["Default","Secondary","Destructive","Outline","Ghost","Link","XSmall","Small","Large","Icon","IconXSmall","IconSmall","IconLarge","Disabled","BtnStatus"];export{h as BtnStatus,e as Default,a as Destructive,g as Disabled,n as Ghost,l as Icon,u as IconLarge,m as IconSmall,p as IconXSmall,d as Large,o as Link,t as Outline,s as Secondary,i as Small,c as XSmall,D as __namedExportsOrder,B as default};
