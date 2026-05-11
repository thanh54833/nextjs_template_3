import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g,r as B}from"./index-DYby6Z_P.js";import{c as P}from"./utils-BQHNewu7.js";import{a as A,t as F}from"./toggle-B0BWsr76.js";import{c as k}from"./index-BKV5D6oG.js";import{P as C}from"./index-CraXK6NT.js";import{c as V,I as L,R as O}from"./index-BXQs120s.js";import{u as S}from"./index-BmEHjAU8.js";import{u as $}from"./index-ofxjSrhS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-LHNt3CwB.js";import"./index-Dc_FVRD7.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";import"./index-C4JN59vf.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-ByLlCQqU.js";var p="ToggleGroup",[R]=k(p,[V]),U=V(),y=g.forwardRef((o,l)=>{const{type:r,...a}=o;if(r==="single"){const t=a;return e.jsx(q,{...t,ref:l})}if(r==="multiple"){const t=a;return e.jsx(H,{...t,ref:l})}throw new Error(`Missing prop \`type\` expected on \`${p}\``)});y.displayName=p;var[w,D]=R(p),q=g.forwardRef((o,l)=>{const{value:r,defaultValue:a,onValueChange:t=()=>{},...i}=o,[u,s]=S({prop:r,defaultProp:a??"",onChange:t,caller:p});return e.jsx(w,{scope:o.__scopeToggleGroup,type:"single",value:g.useMemo(()=>u?[u]:[],[u]),onItemActivate:s,onItemDeactivate:g.useCallback(()=>s(""),[s]),children:e.jsx(z,{...i,ref:l})})}),H=g.forwardRef((o,l)=>{const{value:r,defaultValue:a,onValueChange:t=()=>{},...i}=o,[u,s]=S({prop:r,defaultProp:a??[],onChange:t,caller:p}),c=g.useCallback(m=>s((v=[])=>[...v,m]),[s]),j=g.useCallback(m=>s((v=[])=>v.filter(E=>E!==m)),[s]);return e.jsx(w,{scope:o.__scopeToggleGroup,type:"multiple",value:u,onItemActivate:c,onItemDeactivate:j,children:e.jsx(z,{...i,ref:l})})});y.displayName=p;var[J,K]=R(p),z=g.forwardRef((o,l)=>{const{__scopeToggleGroup:r,disabled:a=!1,rovingFocus:t=!0,orientation:i,dir:u,loop:s=!0,...c}=o,j=U(r),m=$(u),v={role:"group",dir:m,...c};return e.jsx(J,{scope:r,rovingFocus:t,disabled:a,children:t?e.jsx(O,{asChild:!0,...j,orientation:i,dir:m,loop:s,children:e.jsx(C.div,{...v,ref:l})}):e.jsx(C.div,{...v,ref:l})})}),h="ToggleGroupItem",M=g.forwardRef((o,l)=>{const r=D(h,o.__scopeToggleGroup),a=K(h,o.__scopeToggleGroup),t=U(o.__scopeToggleGroup),i=r.value.includes(o.value),u=a.disabled||o.disabled,s={...o,pressed:i,disabled:u},c=g.useRef(null);return a.rovingFocus?e.jsx(L,{asChild:!0,...t,focusable:!u,active:i,ref:c,children:e.jsx(_,{...s,ref:l})}):e.jsx(_,{...s,ref:l})});M.displayName=h;var _=g.forwardRef((o,l)=>{const{__scopeToggleGroup:r,value:a,...t}=o,i=D(h,r),u={role:"radio","aria-checked":o.pressed,"aria-pressed":void 0},s=i.type==="single"?u:void 0;return e.jsx(A,{...s,...t,ref:l,onPressedChange:c=>{c?i.onItemActivate(a):i.onItemDeactivate(a)}})}),Q=y,W=M;const N=B.createContext({size:"default",variant:"default"});function d({className:o,variant:l,size:r,children:a,...t}){return e.jsx(Q,{"data-slot":"toggle-group","data-variant":l,"data-size":r,className:P("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",o),...t,children:e.jsx(N.Provider,{value:{variant:l,size:r},children:a})})}function n({className:o,children:l,variant:r,size:a,...t}){const i=B.useContext(N);return e.jsx(W,{"data-slot":"toggle-group-item","data-variant":i.variant||r,"data-size":i.size||a,className:P(F({variant:i.variant||r,size:i.size||a}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",o),...t,children:l})}d.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup"};n.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem"};const Ge={component:d,tags:["autodocs"],parameters:{docs:{description:{component:"A toggle group component for managing multiple related toggle buttons. Supports single-selection (only one pressed at a time) and multiple-selection modes."}}}},G={render:()=>e.jsxs(d,{defaultValue:"bold",type:"single",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},T={render:()=>e.jsxs(d,{type:"multiple",defaultValue:["bold","italic"],children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},I={render:()=>e.jsxs(d,{type:"single",defaultValue:"center",children:[e.jsx(n,{value:"left","aria-label":"Left",children:"Left"}),e.jsx(n,{value:"center","aria-label":"Center",children:"Center"}),e.jsx(n,{value:"right","aria-label":"Right",children:"Right"})]})},b={render:()=>e.jsxs(d,{defaultValue:"bold",variant:"outline",type:"single",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},f={render:()=>e.jsxs(d,{defaultValue:"bold",size:"sm",type:"single",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"}),e.jsx(n,{value:"underline","aria-label":"Underline",children:"U"})]})},x={render:()=>e.jsxs(d,{disabled:!0,defaultValue:"bold",type:"single",children:[e.jsx(n,{value:"bold","aria-label":"Bold",children:"B"}),e.jsx(n,{value:"italic","aria-label":"Italic",children:"I"})]})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold" type="single">
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
}`,...G.parameters?.docs?.source},description:{story:"Default toggle group with single selection",...G.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Toggle group with multiple selection (multiple items can be pressed)",...T.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"Toggle group with single selection mode explicitly set",...I.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold" variant="outline" type="single">
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
}`,...b.parameters?.docs?.source},description:{story:"Toggle group with outline variant styling",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup defaultValue="bold" size="sm" type="single">
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
}`,...f.parameters?.docs?.source},description:{story:"Small-sized toggle group",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleGroup disabled defaultValue="bold" type="single">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
    </ToggleGroup>
}`,...x.parameters?.docs?.source},description:{story:"Disabled toggle group that prevents interaction",...x.parameters?.docs?.description}}};const Te=["Default","Multiple","Single","Outline","Small","Disabled"];export{G as Default,x as Disabled,T as Multiple,b as Outline,I as Single,f as Small,Te as __namedExportsOrder,Ge as default};
