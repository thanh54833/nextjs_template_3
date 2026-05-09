import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as y}from"./index-CAPI2NOD.js";import"./index-DvGSVeov.js";import{c as E}from"./index-C99FfTL5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";var _=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],$=_.reduce((a,s)=>{const l=E(`Primitive.${s}`),r=y.forwardRef((d,b)=>{const{asChild:S,...P}=d,C=S?l:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(C,{...P,ref:b})});return r.displayName=`Primitive.${s}`,{...a,[s]:r}},{}),D="AspectRatio",A=y.forwardRef((a,s)=>{const{ratio:l=1/1,style:r,...d}=a;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/l}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx($.div,{...d,ref:s,style:{...r,position:"absolute",top:0,right:0,bottom:0,left:0}})})});A.displayName=D;var q=A;function t({...a}){return e.jsx(q,{"data-slot":"aspect-ratio",...a})}t.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const G={component:t,tags:["autodocs"],parameters:{layout:"centered"}},i={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(t,{ratio:16/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"16:9 Aspect Ratio"})})})})},n={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(t,{ratio:1/1,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"1:1"})})})})},o={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(t,{ratio:3/4,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"3:4"})})})})},c={render:()=>e.jsx("div",{className:"w-[400px]",children:e.jsx(t,{ratio:21/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"21:9 Cinematic"})})})})};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className='w-[300px]'>
      <AspectRatio ratio={16 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,x,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={1 / 1} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>1:1</span>
        </div>
      </AspectRatio>
    </div>
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var N,h,j;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={3 / 4} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>3:4</span>
        </div>
      </AspectRatio>
    </div>
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var g,w,R;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className='w-[400px]'>
      <AspectRatio ratio={21 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>21:9 Cinematic</span>
        </div>
      </AspectRatio>
    </div>
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const H=["Default","Square","Portrait","Cinematic"];export{c as Cinematic,i as Default,o as Portrait,n as Square,H as __namedExportsOrder,G as default};
