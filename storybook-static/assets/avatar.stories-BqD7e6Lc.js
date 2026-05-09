import{j as a}from"./jsx-runtime-EKYJJIwR.js";const G={title:"UI/Avatar",component:Avatar,subcomponents:{AvatarImage,AvatarFallback},tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A user avatar component that displays an image with a fallback text fallback when the image fails to load. Includes AvatarImage and AvatarFallback subcomponents."}}}},r={render:()=>a.jsxs(Avatar,{children:[a.jsx(AvatarImage,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(AvatarFallback,{children:"CN"})]})},e={render:()=>a.jsx(Avatar,{children:a.jsx(AvatarFallback,{children:"JD"})})},t={render:()=>a.jsx(Avatar,{children:a.jsx(AvatarFallback,{children:"Alexander The Great"})})},s={render:()=>a.jsx(Avatar,{className:"size-6",children:a.jsx(AvatarFallback,{className:"text-[10px]",children:"SM"})})},c={render:()=>a.jsx(Avatar,{className:"size-16",children:a.jsx(AvatarFallback,{className:"text-lg",children:"LG"})})};var n,o,l,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source},description:{story:"Default avatar showing an image with fallback initials.",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.description}}};var m,p,v,A,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...(v=(p=e.parameters)==null?void 0:p.docs)==null?void 0:v.source},description:{story:"Avatar without an image, showing only the fallback.",...(h=(A=e.parameters)==null?void 0:A.docs)==null?void 0:h.description}}};var u,g,b,x,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>Alexander The Great</AvatarFallback>
    </Avatar>
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:"Avatar with a long name in the fallback.",...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};var F,j,N,f,S;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Avatar className='size-6'>
      <AvatarFallback className='text-[10px]'>SM</AvatarFallback>
    </Avatar>
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:"Small sized avatar.",...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var y,I,w,L,z;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Avatar className='size-16'>
      <AvatarFallback className='text-lg'>LG</AvatarFallback>
    </Avatar>
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source},description:{story:"Large sized avatar.",...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.description}}};const C=["Default","WithoutImage","LongName","Small","Large"];export{r as Default,c as Large,t as LongName,s as Small,e as WithoutImage,C as __namedExportsOrder,G as default};
