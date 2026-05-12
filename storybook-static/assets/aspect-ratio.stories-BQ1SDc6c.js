import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./index-DYby6Z_P.js";import{P as u}from"./index-CraXK6NT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";var f="AspectRatio",c=p.forwardRef((o,n)=>{const{ratio:d=1/1,style:l,...m}=o;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/d}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(u.div,{...m,ref:n,style:{...l,position:"absolute",top:0,right:0,bottom:0,left:0}})})});c.displayName=f;var x=c;function t({...o}){return e.jsx(x,{"data-slot":"aspect-ratio",...o})}t.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const R={component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A component that forces its content to maintain a specific aspect ratio. Useful for responsive images, video embeds, and iframe content."}}},argTypes:{ratio:{control:"number",description:"The desired aspect ratio (width/height)"}}},s={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(t,{ratio:16/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"16:9 Aspect Ratio"})})})})},a={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(t,{ratio:1/1,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"1:1"})})})})},r={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(t,{ratio:3/4,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"3:4"})})})})},i={render:()=>e.jsx("div",{className:"w-[400px]",children:e.jsx(t,{ratio:21/9,className:"bg-muted",children:e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx("span",{className:"text-muted-foreground",children:"21:9 Cinematic"})})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-[300px]'>
      <AspectRatio ratio={16 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Default 16:9 widescreen aspect ratio.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={1 / 1} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>1:1</span>
        </div>
      </AspectRatio>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Square 1:1 aspect ratio.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-[200px]'>
      <AspectRatio ratio={3 / 4} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>3:4</span>
        </div>
      </AspectRatio>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"Portrait 3:4 aspect ratio.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className='w-[400px]'>
      <AspectRatio ratio={21 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>21:9 Cinematic</span>
        </div>
      </AspectRatio>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Cinematic 21:9 ultra-widescreen aspect ratio.",...i.parameters?.docs?.description}}};const A=["Default","Square","Portrait","Cinematic"];export{i as Cinematic,s as Default,r as Portrait,a as Square,A as __namedExportsOrder,R as default};
