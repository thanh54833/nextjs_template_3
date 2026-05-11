import{j as a}from"./jsx-runtime-EKYJJIwR.js";import{A as r,a as C,b as e}from"./avatar-rQQdDtrr.js";import"./utils-BQHNewu7.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BRlNe44M.js";import"./index-DLhQgCaF.js";import"./index-1oe2SjNl.js";import"./index-Caz76J1-.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./index-B1gorirK.js";import"./index-Ct3AHzWU.js";const P={title:"UI/Avatar",component:e,subcomponents:{AvatarImage:C,AvatarFallback:r},tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A user avatar component that displays an image with a fallback text fallback when the image fails to load. Includes AvatarImage and AvatarFallback subcomponents."}}}},t={render:()=>a.jsxs(e,{children:[a.jsx(C,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(r,{children:"CN"})]})},s={render:()=>a.jsx(e,{children:a.jsx(r,{children:"JD"})})},o={render:()=>a.jsx(e,{children:a.jsx(r,{children:"Alexander The Great"})})},c={render:()=>a.jsx(e,{className:"size-6",children:a.jsx(r,{className:"text-[10px]",children:"SM"})})},n={render:()=>a.jsx(e,{className:"size-16",children:a.jsx(r,{className:"text-lg",children:"LG"})})};var i,l,m,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Default avatar showing an image with fallback initials.",...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};var h,v,A,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source},description:{story:"Avatar without an image, showing only the fallback.",...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var x,b,k,j,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>Alexander The Great</AvatarFallback>
    </Avatar>
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:"Avatar with a long name in the fallback.",...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.description}}};var F,N,S,y,w;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Avatar className='size-6'>
      <AvatarFallback className='text-[10px]'>SM</AvatarFallback>
    </Avatar>
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source},description:{story:"Small sized avatar.",...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};var I,L,z,D,G;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Avatar className='size-16'>
      <AvatarFallback className='text-lg'>LG</AvatarFallback>
    </Avatar>
}`,...(z=(L=n.parameters)==null?void 0:L.docs)==null?void 0:z.source},description:{story:"Large sized avatar.",...(G=(D=n.parameters)==null?void 0:D.docs)==null?void 0:G.description}}};const Q=["Default","WithoutImage","LongName","Small","Large"];export{t as Default,n as Large,o as LongName,c as Small,s as WithoutImage,Q as __namedExportsOrder,P as default};
