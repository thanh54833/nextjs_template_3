import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as D}from"./index-Br2IOmUs.js";import{P as T}from"./index-Caz76J1-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./index-B1gorirK.js";var $="AspectRatio",P=D.forwardRef((o,C)=>{const{ratio:E=1/1,style:_,...q}=o;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/E}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(T.div,{...q,ref:C,style:{..._,position:"absolute",top:0,right:0,bottom:0,left:0}})})});P.displayName=$;var B=P;function t({...o}){return e.jsx(B,{"data-slot":"aspect-ratio",...o})}t.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const G={component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A component that forces its content to maintain a specific aspect ratio. Useful for responsive images, video embeds, and iframe content."}}},argTypes:{ratio:{control:"number",description:"The desired aspect ratio (width/height)"}}},s={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(t,{ratio:16/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"16:9 Aspect Ratio"})})})})},a={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(t,{ratio:1/1,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"1:1"})})})})},r={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(t,{ratio:3/4,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"3:4"})})})})},i={render:()=>e.jsx("div",{className:"w-[400px]",children:e.jsx(t,{ratio:21/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"21:9 Cinematic"})})})})};var c,n,d,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className='w-[300px]'>
      <AspectRatio ratio={16 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source},description:{story:"Default 16:9 widescreen aspect ratio.",...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,u,f,x,N;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={1 / 1} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>1:1</span>
        </div>
      </AspectRatio>
    </div>
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"Square 1:1 aspect ratio.",...(N=(x=a.parameters)==null?void 0:x.docs)==null?void 0:N.description}}};var h,v,j,g,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={3 / 4} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>3:4</span>
        </div>
      </AspectRatio>
    </div>
}`,...(j=(v=r.parameters)==null?void 0:v.docs)==null?void 0:j.source},description:{story:"Portrait 3:4 aspect ratio.",...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.description}}};var y,R,A,b,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className='w-[400px]'>
      <AspectRatio ratio={21 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>21:9 Cinematic</span>
        </div>
      </AspectRatio>
    </div>
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source},description:{story:"Cinematic 21:9 ultra-widescreen aspect ratio.",...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};const H=["Default","Square","Portrait","Cinematic"];export{i as Cinematic,s as Default,r as Portrait,a as Square,H as __namedExportsOrder,G as default};
