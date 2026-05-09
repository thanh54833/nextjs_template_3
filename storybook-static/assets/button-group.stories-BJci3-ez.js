import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{B as o}from"./button-B1qRRuul.js";import{I as ht}from"./input-BWjd11J0.js";import{S as Bt}from"./select-CUeg8EVw.js";import{c as ft}from"./index-D1SQP9Z-.js";import{c as B}from"./utils-BQHNewu7.js";import{S as jt}from"./separator-BjUrQ461.js";import{S as gt}from"./index-AnhkqxcL.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-BdQq_4o_.js";import"./index-CKUxhdB2.js";import"./index-BUhLVj6P.js";import"./index-Da_hoYQ_.js";import"./index-CJNorLC4.js";import"./index-Ux667dBy.js";import"./index-Dp8D8Mew.js";import"./index-C-szKJnO.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BAWfCZ5Z.js";import"./index-Ky1P1Yos.js";import"./index-B5M3RRgR.js";import"./index-DML2O0rb.js";import"./index-CxHADOAi.js";import"./index-Mrew0IH0.js";import"./index-CFXvuxOn.js";import"./icons-Bvzo9UON.js";const St=ft("flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",{variants:{orientation:{horizontal:"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",vertical:"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}});function e({className:n,orientation:r,...i}){return t.jsx("div",{role:"group","data-slot":"button-group","data-orientation":r,className:B(St({orientation:r}),n),...i})}function v({className:n,asChild:r=!1,...i}){const vt=r?gt:"div";return t.jsx(vt,{className:B("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",n),...i})}function xt({className:n,orientation:r="vertical",...i}){return t.jsx(jt,{"data-slot":"button-group-separator",orientation:r,className:B("bg-input relative m-0! self-stretch data-[orientation=vertical]:h-auto",n),...i})}e.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};xt.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupSeparator",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};v.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupText",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Zt={component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A button group component for combining buttons, inputs, and text in a unified horizontal or vertical layout."}}}},a={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Left"}),t.jsx(o,{variant:"outline",children:"Center"}),t.jsx(o,{variant:"outline",children:"Right"})]})},s={render:()=>t.jsxs(e,{orientation:"horizontal",children:[t.jsx(o,{variant:"outline",children:"First"}),t.jsx(o,{variant:"outline",children:"Second"}),t.jsx(o,{variant:"outline",children:"Third"})]})},u={render:()=>t.jsxs(e,{orientation:"vertical",children:[t.jsx(o,{variant:"outline",children:"Top"}),t.jsx(o,{variant:"outline",children:"Middle"}),t.jsx(o,{variant:"outline",children:"Bottom"})]})},l={render:()=>t.jsxs(e,{className:"w-[400px]",children:[t.jsx(o,{variant:"outline",children:"Search"}),t.jsx(ht,{placeholder:"Search...",className:"flex-1"})]})},c={render:()=>t.jsxs(e,{className:"w-[400px]",children:[t.jsx(o,{variant:"outline",children:"Filter"}),t.jsxs(Bt,{className:"flex-1",children:[t.jsx("option",{children:"All Items"}),t.jsx("option",{children:"Active"}),t.jsx("option",{children:"Archived"})]})]})},d={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Bold"}),t.jsx(o,{variant:"outline",children:"Italic"}),t.jsx(v,{children:"Text formatting"}),t.jsx(o,{variant:"outline",children:"Underline"})]})},p={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Cut"}),t.jsx(o,{variant:"outline",children:"Copy"}),t.jsx(xt,{orientation:"vertical"}),t.jsx(o,{variant:"outline",children:"Paste"}),t.jsx(o,{variant:"outline",children:"Delete"})]})},m={render:()=>t.jsxs(e,{orientation:"vertical",children:[t.jsx(o,{variant:"outline",children:"Bold"}),t.jsx(o,{variant:"outline",children:"Italic"}),t.jsx(v,{children:"Formatting"}),t.jsx(o,{variant:"outline",children:"Underline"})]})},h={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})})}),t.jsx(o,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})})}),t.jsx(o,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})},x={render:()=>t.jsxs(e,{className:"w-[500px]",children:[t.jsx(o,{variant:"outline",children:"Save"}),t.jsx(o,{variant:"outline",children:"Export"}),t.jsx(v,{children:"or"}),t.jsx(ht,{placeholder:"Quick search...",className:"w-[200px]"}),t.jsx(o,{variant:"default",children:"Search"})]})};var f,j,g,S,G;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
}`,...(g=(j=a.parameters)==null?void 0:j.docs)==null?void 0:g.source},description:{story:"Default horizontal button group with three buttons.",...(G=(S=a.parameters)==null?void 0:S.docs)==null?void 0:G.description}}};var w,b,k,L,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="horizontal">
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:"Explicit horizontal orientation.",...(N=(L=s.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};var y,z,T,I,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
}`,...(T=(z=u.parameters)==null?void 0:z.docs)==null?void 0:T.source},description:{story:"Vertical orientation for narrow containers.",...(C=(I=u.parameters)==null?void 0:I.docs)==null?void 0:C.description}}};var W,M,V,_,A;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[400px]">
      <Button variant="outline">Search</Button>
      <Input placeholder="Search..." className="flex-1" />
    </ButtonGroup>
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source},description:{story:"Button group with text input for search patterns.",...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.description}}};var H,F,D,E,U;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[400px]">
      <Button variant="outline">Filter</Button>
      <Select className="flex-1">
        <option>All Items</option>
        <option>Active</option>
        <option>Archived</option>
      </Select>
    </ButtonGroup>
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source},description:{story:"Button group with select dropdown for filter patterns.",...(U=(E=c.parameters)==null?void 0:E.docs)==null?void 0:U.description}}};var R,q,P,Q,O;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <ButtonGroupText>Text formatting</ButtonGroupText>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
}`,...(P=(q=d.parameters)==null?void 0:q.docs)==null?void 0:P.source},description:{story:"Button group with text label for formatting toolbars.",...(O=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:O.description}}};var J,K,X,Y,Z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Cut</Button>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator orientation="vertical" />
      <Button variant="outline">Paste</Button>
      <Button variant="outline">Delete</Button>
    </ButtonGroup>
}`,...(X=(K=p.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:"Button group with separator for grouped actions.",...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,tt,ot,et,rt;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical">
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <ButtonGroupText>Formatting</ButtonGroupText>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
}`,...(ot=(tt=m.parameters)==null?void 0:tt.docs)==null?void 0:ot.source},description:{story:"Vertical button group with text label.",...(rt=(et=m.parameters)==null?void 0:et.docs)==null?void 0:rt.description}}};var nt,it,at,st,ut;h.parameters={...h.parameters,docs:{...(nt=h.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline" size="icon">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </Button>
      <Button variant="outline" size="icon">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </Button>
      <Button variant="outline" size="icon">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </Button>
    </ButtonGroup>
}`,...(at=(it=h.parameters)==null?void 0:it.docs)==null?void 0:at.source},description:{story:"Icon-only buttons for compact toolbars.",...(ut=(st=h.parameters)==null?void 0:st.docs)==null?void 0:ut.description}}};var lt,ct,dt,pt,mt;x.parameters={...x.parameters,docs:{...(lt=x.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[500px]">
      <Button variant="outline">Save</Button>
      <Button variant="outline">Export</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Input placeholder="Quick search..." className="w-[200px]" />
      <Button variant="default">Search</Button>
    </ButtonGroup>
}`,...(dt=(ct=x.parameters)==null?void 0:ct.docs)==null?void 0:dt.source},description:{story:"Mixed content with buttons, text, and input.",...(mt=(pt=x.parameters)==null?void 0:pt.docs)==null?void 0:mt.description}}};const $t=["Default","Horizontal","Vertical","WithInput","WithSelect","WithTextLabel","WithSeparator","WithTextLabelVertical","IconButtons","MixedContent"];export{a as Default,s as Horizontal,h as IconButtons,x as MixedContent,u as Vertical,l as WithInput,c as WithSelect,p as WithSeparator,d as WithTextLabel,m as WithTextLabelVertical,$t as __namedExportsOrder,Zt as default};
