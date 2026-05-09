import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{R as g,r as le}from"./index-CAPI2NOD.js";import{c as ve}from"./index-Da_hoYQ_.js";import{P as y}from"./index-C-szKJnO.js";import{c as ae,I as Ge,R as Te}from"./index-BUH2vOft.js";import{a as Ie,t as be}from"./toggle-CXqQX9Rm.js";import{u as te}from"./index-CxHADOAi.js";import{u as fe}from"./index-Ux667dBy.js";import{c as ne}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";import"./index-CKUxhdB2.js";import"./index-BUhLVj6P.js";import"./index-BAWfCZ5Z.js";import"./index-B3CE9KsV.js";import"./index-D1SQP9Z-.js";var d="ToggleGroup",[ie]=ve(d,[ae]),se=ae(),C=g.forwardRef((o,r)=>{const{type:l,...a}=o;if(l==="single"){const t=a;return e.jsx(xe,{...t,ref:r})}if(l==="multiple"){const t=a;return e.jsx(he,{...t,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${d}\``)});C.displayName=d;var[ue,ge]=ie(d),xe=g.forwardRef((o,r)=>{const{value:l,defaultValue:a,onValueChange:t=()=>{},...i}=o,[u,s]=te({prop:l,defaultProp:a??"",onChange:t,caller:d});return e.jsx(ue,{scope:o.__scopeToggleGroup,type:"single",value:g.useMemo(()=>u?[u]:[],[u]),onItemActivate:s,onItemDeactivate:g.useCallback(()=>s(""),[s]),children:e.jsx(de,{...i,ref:r})})}),he=g.forwardRef((o,r)=>{const{value:l,defaultValue:a,onValueChange:t=()=>{},...i}=o,[u,s]=te({prop:l,defaultProp:a??[],onChange:t,caller:d}),c=g.useCallback(m=>s((v=[])=>[...v,m]),[s]),j=g.useCallback(m=>s((v=[])=>v.filter(me=>me!==m)),[s]);return e.jsx(ue,{scope:o.__scopeToggleGroup,type:"multiple",value:u,onItemActivate:c,onItemDeactivate:j,children:e.jsx(de,{...i,ref:r})})});C.displayName=d;var[je,Ce]=ie(d),de=g.forwardRef((o,r)=>{const{__scopeToggleGroup:l,disabled:a=!1,rovingFocus:t=!0,orientation:i,dir:u,loop:s=!0,...c}=o,j=se(l),m=fe(u),v={role:"group",dir:m,...c};return e.jsx(je,{scope:l,rovingFocus:t,disabled:a,children:t?e.jsx(Te,{asChild:!0,...j,orientation:i,dir:m,loop:s,children:e.jsx(y.div,{...v,ref:r})}):e.jsx(y.div,{...v,ref:r})})}),h="ToggleGroupItem",pe=g.forwardRef((o,r)=>{const l=ge(h,o.__scopeToggleGroup),a=Ce(h,o.__scopeToggleGroup),t=se(o.__scopeToggleGroup),i=l.value.includes(o.value),u=a.disabled||o.disabled,s={...o,pressed:i,disabled:u},c=g.useRef(null);return a.rovingFocus?e.jsx(Ge,{asChild:!0,...t,focusable:!u,active:i,ref:c,children:e.jsx(_,{...s,ref:r})}):e.jsx(_,{...s,ref:r})});pe.displayName=h;var _=g.forwardRef((o,r)=>{const{__scopeToggleGroup:l,value:a,...t}=o,i=ge(h,l),u={role:"radio","aria-checked":o.pressed,"aria-pressed":void 0},s=i.type==="single"?u:void 0;return e.jsx(Ie,{...s,...t,ref:r,onPressedChange:c=>{c?i.onItemActivate(a):i.onItemDeactivate(a)}})}),ye=C,_e=pe;const ce=le.createContext({size:"default",variant:"default"});function p({className:o,variant:r,size:l,children:a,...t}){return e.jsx(ye,{"data-slot":"toggle-group","data-variant":r,"data-size":l,className:ne("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",o),...t,children:e.jsx(ce.Provider,{value:{variant:r,size:l},children:a})})}function n({className:o,children:r,variant:l,size:a,...t}){const i=le.useContext(ce);return e.jsx(_e,{"data-slot":"toggle-group-item","data-variant":i.variant||l,"data-size":i.size||a,className:ne(be({variant:i.variant||l,size:i.size||a}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",o),...t,children:r})}p.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup"};n.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem"};const qe={component:p,tags:["autodocs"],parameters:{docs:{description:{component:"A toggle group component for managing multiple related toggle buttons. Supports single-selection (only one pressed at a time) and multiple-selection modes."}}}},G={render:()=>e.jsxs(p,{defaultValue:"bold",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},T={render:()=>e.jsxs(p,{type:"multiple",defaultValue:["bold","italic"],children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},I={render:()=>e.jsxs(p,{type:"single",defaultValue:"center",children:[e.jsx(n,{value:"left","aria-label":"Left",children:"Left"}),e.jsx(n,{value:"center","aria-label":"Center",children:"Center"}),e.jsx(n,{value:"right","aria-label":"Right",children:"Right"})]})},b={render:()=>e.jsxs(p,{defaultValue:"bold",variant:"outline",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},f={render:()=>e.jsxs(p,{defaultValue:"bold",size:"sm",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},x={render:()=>e.jsxs(p,{disabled:!0,defaultValue:"bold",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"})]})};var B,P,V,S,R;G.parameters={...G.parameters,docs:{...(B=G.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(P=G.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"Default toggle group with single selection",...(R=(S=G.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};var U,w,D,z,M;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(D=(w=T.parameters)==null?void 0:w.docs)==null?void 0:D.source},description:{story:"Toggle group with multiple selection (multiple items can be pressed)",...(M=(z=T.parameters)==null?void 0:z.docs)==null?void 0:M.description}}};var N,E,A,F,k;I.parameters={...I.parameters,docs:{...(N=I.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(E=I.parameters)==null?void 0:E.docs)==null?void 0:A.source},description:{story:"Toggle group with single selection mode explicitly set",...(k=(F=I.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};var L,O,$,q,H;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(O=b.parameters)==null?void 0:O.docs)==null?void 0:$.source},description:{story:"Toggle group with outline variant styling",...(H=(q=b.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var J,K,Q,W,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Small-sized toggle group",...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.description}}};var Y,Z,ee,oe,re;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ToggleGroup disabled defaultValue="bold">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Disabled toggle group that prevents interaction",...(re=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};const He=["Default","Multiple","Single","Outline","Small","Disabled"];export{G as Default,x as Disabled,T as Multiple,b as Outline,I as Single,f as Small,He as __namedExportsOrder,qe as default};
