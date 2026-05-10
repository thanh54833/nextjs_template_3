import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as _}from"./index-CAPI2NOD.js";import"./index-DvGSVeov.js";import{c as I}from"./index-C99FfTL5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";var M=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],U=M.reduce((r,t)=>{const d=I(`Primitive.${t}`),n=_.forwardRef((l,q)=>{const{asChild:O,...T}=l,B=O?d:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(B,{...T,ref:q})});return n.displayName=`Primitive.${t}`,{...r,[t]:n}},{}),k="AspectRatio",$=_.forwardRef((r,t)=>{const{ratio:d=1/1,style:n,...l}=r;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/d}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(U.div,{...l,ref:t,style:{...n,position:"absolute",top:0,right:0,bottom:0,left:0}})})});$.displayName=k;var z=$;function s({...r}){return e.jsx(z,{"data-slot":"aspect-ratio",...r})}s.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const V={component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A component that forces its content to maintain a specific aspect ratio. Useful for responsive images, video embeds, and iframe content."}}},argTypes:{ratio:{control:"number",description:"The desired aspect ratio (width/height)"}}},a={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(s,{ratio:16/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"16:9 Aspect Ratio"})})})})},i={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(s,{ratio:1/1,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"1:1"})})})})},o={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(s,{ratio:3/4,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"3:4"})})})})},c={render:()=>e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{ratio:21/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"21:9 Cinematic"})})})})};var m,p,u,f,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className='w-[300px]'>
      <AspectRatio ratio={16 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"Default 16:9 widescreen aspect ratio.",...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var v,N,h,j,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={1 / 1} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>1:1</span>
        </div>
      </AspectRatio>
    </div>
}`,...(h=(N=i.parameters)==null?void 0:N.docs)==null?void 0:h.source},description:{story:"Square 1:1 aspect ratio.",...(g=(j=i.parameters)==null?void 0:j.docs)==null?void 0:g.description}}};var w,y,R,A,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={3 / 4} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>3:4</span>
        </div>
      </AspectRatio>
    </div>
}`,...(R=(y=o.parameters)==null?void 0:y.docs)==null?void 0:R.source},description:{story:"Portrait 3:4 aspect ratio.",...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.description}}};var S,P,C,E,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className='w-[400px]'>
      <AspectRatio ratio={21 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>21:9 Cinematic</span>
        </div>
      </AspectRatio>
    </div>
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source},description:{story:"Cinematic 21:9 ultra-widescreen aspect ratio.",...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};const W=["Default","Square","Portrait","Cinematic"];export{c as Cinematic,a as Default,o as Portrait,i as Square,W as __namedExportsOrder,V as default};
