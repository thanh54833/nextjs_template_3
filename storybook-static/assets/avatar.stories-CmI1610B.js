import{j as a}from"./jsx-runtime-u17CrQMm.js";import{A as r,a as i,b as e}from"./avatar-C0fnEVSm.js";import"./utils-Czy_q_oT.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BKV5D6oG.js";import"./index-ByLlCQqU.js";import"./index-D1sqivKo.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";import"./index-B1sArz3w.js";import"./index-VlTWTt8y.js";const F={title:"UI/Avatar",component:e,subcomponents:{AvatarImage:i,AvatarFallback:r},tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A user avatar component that displays an image with a fallback text fallback when the image fails to load. Includes AvatarImage and AvatarFallback subcomponents."}}}},t={render:()=>a.jsxs(e,{children:[a.jsx(i,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(r,{children:"CN"})]})},s={render:()=>a.jsx(e,{children:a.jsx(r,{children:"JD"})})},o={render:()=>a.jsx(e,{children:a.jsx(r,{children:"Alexander The Great"})})},c={render:()=>a.jsx(e,{className:"size-6",children:a.jsx(r,{className:"text-[10px]",children:"SM"})})},n={render:()=>a.jsx(e,{className:"size-16",children:a.jsx(r,{className:"text-lg",children:"LG"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...t.parameters?.docs?.source},description:{story:"Default avatar showing an image with fallback initials.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...s.parameters?.docs?.source},description:{story:"Avatar without an image, showing only the fallback.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>Alexander The Great</AvatarFallback>
    </Avatar>
}`,...o.parameters?.docs?.source},description:{story:"Avatar with a long name in the fallback.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar className='size-6'>
      <AvatarFallback className='text-[10px]'>SM</AvatarFallback>
    </Avatar>
}`,...c.parameters?.docs?.source},description:{story:"Small sized avatar.",...c.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar className='size-16'>
      <AvatarFallback className='text-lg'>LG</AvatarFallback>
    </Avatar>
}`,...n.parameters?.docs?.source},description:{story:"Large sized avatar.",...n.parameters?.docs?.description}}};const N=["Default","WithoutImage","LongName","Small","Large"];export{t as Default,n as Large,o as LongName,c as Small,s as WithoutImage,N as __namedExportsOrder,F as default};
