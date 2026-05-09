import{j as e}from"./jsx-runtime-EKYJJIwR.js";const S={component:AspectRatio,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A component that forces its content to maintain a specific aspect ratio. Useful for responsive images, video embeds, and iframe content."}}},argTypes:{ratio:{control:"number",description:"The desired aspect ratio (width/height)"}}},s={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(AspectRatio,{ratio:16/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"16:9 Aspect Ratio"})})})})},t={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(AspectRatio,{ratio:1/1,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"1:1"})})})})},a={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(AspectRatio,{ratio:3/4,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"3:4"})})})})},r={render:()=>e.jsx("div",{className:"w-[400px]",children:e.jsx(AspectRatio,{ratio:21/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"21:9 Cinematic"})})})})};var c,i,n,o,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className='w-[300px]'>
      <AspectRatio ratio={16 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
}`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source},description:{story:"Default 16:9 widescreen aspect ratio.",...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.description}}};var l,m,p,u,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={1 / 1} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>1:1</span>
        </div>
      </AspectRatio>
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Square 1:1 aspect ratio.",...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var x,N,h,j,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={3 / 4} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>3:4</span>
        </div>
      </AspectRatio>
    </div>
}`,...(h=(N=a.parameters)==null?void 0:N.docs)==null?void 0:h.source},description:{story:"Portrait 3:4 aspect ratio.",...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};var g,w,A,R,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className='w-[400px]'>
      <AspectRatio ratio={21 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>21:9 Cinematic</span>
        </div>
      </AspectRatio>
    </div>
}`,...(A=(w=r.parameters)==null?void 0:w.docs)==null?void 0:A.source},description:{story:"Cinematic 21:9 ultra-widescreen aspect ratio.",...(y=(R=r.parameters)==null?void 0:R.docs)==null?void 0:y.description}}};const C=["Default","Square","Portrait","Cinematic"];export{r as Cinematic,s as Default,a as Portrait,t as Square,C as __namedExportsOrder,S as default};
