import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{R as g,r as q}from"./index-CAPI2NOD.js";import{c as oe}from"./index-Da_hoYQ_.js";import{P as _}from"./index-C-szKJnO.js";import{c as H,I as ae,R as te}from"./index-BIZqRJav.js";import{a as ne,t as ie}from"./toggle-CpjL0Cdg.js";import{u as J}from"./index-DwArvr4q.js";import{u as ue}from"./index-Ux667dBy.js";import{c as K}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";import"./index-DW48STyt.js";import"./index-BUhLVj6P.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-B3CE9KsV.js";import"./index-D1SQP9Z-.js";var d="ToggleGroup",[Q]=oe(d,[H]),W=H(),C=g.forwardRef((l,r)=>{const{type:o,...a}=l;if(o==="single"){const t=a;return e.jsx(se,{...t,ref:r})}if(o==="multiple"){const t=a;return e.jsx(ge,{...t,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${d}\``)});C.displayName=d;var[X,Y]=Q(d),se=g.forwardRef((l,r)=>{const{value:o,defaultValue:a,onValueChange:t=()=>{},...i}=l,[s,u]=J({prop:o,defaultProp:a??"",onChange:t,caller:d});return e.jsx(X,{scope:l.__scopeToggleGroup,type:"single",value:g.useMemo(()=>s?[s]:[],[s]),onItemActivate:u,onItemDeactivate:g.useCallback(()=>u(""),[u]),children:e.jsx(Z,{...i,ref:r})})}),ge=g.forwardRef((l,r)=>{const{value:o,defaultValue:a,onValueChange:t=()=>{},...i}=l,[s,u]=J({prop:o,defaultProp:a??[],onChange:t,caller:d}),p=g.useCallback(m=>u((v=[])=>[...v,m]),[u]),j=g.useCallback(m=>u((v=[])=>v.filter(re=>re!==m)),[u]);return e.jsx(X,{scope:l.__scopeToggleGroup,type:"multiple",value:s,onItemActivate:p,onItemDeactivate:j,children:e.jsx(Z,{...i,ref:r})})});C.displayName=d;var[de,ce]=Q(d),Z=g.forwardRef((l,r)=>{const{__scopeToggleGroup:o,disabled:a=!1,rovingFocus:t=!0,orientation:i,dir:s,loop:u=!0,...p}=l,j=W(o),m=ue(s),v={role:"group",dir:m,...p};return e.jsx(de,{scope:o,rovingFocus:t,disabled:a,children:t?e.jsx(te,{asChild:!0,...j,orientation:i,dir:m,loop:u,children:e.jsx(_.div,{...v,ref:r})}):e.jsx(_.div,{...v,ref:r})})}),h="ToggleGroupItem",ee=g.forwardRef((l,r)=>{const o=Y(h,l.__scopeToggleGroup),a=ce(h,l.__scopeToggleGroup),t=W(l.__scopeToggleGroup),i=o.value.includes(l.value),s=a.disabled||l.disabled,u={...l,pressed:i,disabled:s},p=g.useRef(null);return a.rovingFocus?e.jsx(ae,{asChild:!0,...t,focusable:!s,active:i,ref:p,children:e.jsx(B,{...u,ref:r})}):e.jsx(B,{...u,ref:r})});ee.displayName=h;var B=g.forwardRef((l,r)=>{const{__scopeToggleGroup:o,value:a,...t}=l,i=Y(h,o),s={role:"radio","aria-checked":l.pressed,"aria-pressed":void 0},u=i.type==="single"?s:void 0;return e.jsx(ne,{...u,...t,ref:r,onPressedChange:p=>{p?i.onItemActivate(a):i.onItemDeactivate(a)}})}),pe=C,me=ee;const le=q.createContext({size:"default",variant:"default"});function c({className:l,variant:r,size:o,children:a,...t}){return e.jsx(pe,{"data-slot":"toggle-group","data-variant":r,"data-size":o,className:K("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",l),...t,children:e.jsx(le.Provider,{value:{variant:r,size:o},children:a})})}function n({className:l,children:r,variant:o,size:a,...t}){const i=q.useContext(le);return e.jsx(me,{"data-slot":"toggle-group-item","data-variant":i.variant||o,"data-size":i.size||a,className:K(ie({variant:i.variant||o,size:i.size||a}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",l),...t,children:r})}c.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup"};n.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem"};const De={component:c,tags:["autodocs"]},G={render:()=>e.jsxs(c,{defaultValue:"bold",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},I={render:()=>e.jsxs(c,{type:"multiple",defaultValue:["bold","italic"],children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},T={render:()=>e.jsxs(c,{type:"single",defaultValue:"center",children:[e.jsx(n,{value:"left","aria-label":"Left",children:"Left"}),e.jsx(n,{value:"center","aria-label":"Center",children:"Center"}),e.jsx(n,{value:"right","aria-label":"Right",children:"Right"})]})},b={render:()=>e.jsxs(c,{defaultValue:"bold",variant:"outline",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},f={render:()=>e.jsxs(c,{defaultValue:"bold",size:"sm",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},x={render:()=>e.jsxs(c,{disabled:!0,defaultValue:"bold",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"})]})};var P,V,S;G.parameters={...G.parameters,docs:{...(P=G.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(S=(V=G.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var R,U,y;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(y=(U=I.parameters)==null?void 0:U.docs)==null?void 0:y.source}}};var w,D,M;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(M=(D=T.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,z,E;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(E=(z=b.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var A,F,k;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold" size="sm">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(k=(F=f.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var L,O,$;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ToggleGroup disabled defaultValue="bold">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
    </ToggleGroup>
}`,...($=(O=x.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const Me=["Default","Multiple","Single","Outline","Small","Disabled"];export{G as Default,x as Disabled,I as Multiple,b as Outline,T as Single,f as Small,Me as __namedExportsOrder,De as default};
