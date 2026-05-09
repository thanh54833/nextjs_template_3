import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{B as n}from"./button-B1qRRuul.js";import{I as J}from"./input-BWjd11J0.js";import{S as Y}from"./select-DPMzUyE1.js";import{c as Z}from"./index-D1SQP9Z-.js";import{c as B}from"./utils-BQHNewu7.js";import{S as $}from"./separator-BjUrQ461.js";import{S as tt}from"./index-AnhkqxcL.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-BUhLVj6P.js";import"./index-Da_hoYQ_.js";import"./index-CJNorLC4.js";import"./index-Ux667dBy.js";import"./index-Cfs9WRo2.js";import"./index-C-szKJnO.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-BnvOM56Y.js";import"./index-B69vM9co.js";import"./index-BFmRr4y5.js";import"./index-DwArvr4q.js";import"./index-Mrew0IH0.js";import"./index-CFXvuxOn.js";import"./icons-Bvzo9UON.js";const nt=Z("flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",{variants:{orientation:{horizontal:"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",vertical:"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}});function e({className:r,orientation:o,...a}){return t.jsx("div",{role:"group","data-slot":"button-group","data-orientation":o,className:B(nt({orientation:o}),r),...a})}function x({className:r,asChild:o=!1,...a}){const X=o?tt:"div";return t.jsx(X,{className:B("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",r),...a})}function K({className:r,orientation:o="vertical",...a}){return t.jsx($,{"data-slot":"button-group-separator",orientation:o,className:B("bg-input relative m-0! self-stretch data-[orientation=vertical]:h-auto",r),...a})}e.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};K.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupSeparator",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};x.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupText",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Mt={component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A button group component for combining buttons, inputs, and text in a unified horizontal or vertical layout."}}}},i={render:()=>t.jsxs(e,{children:[t.jsx(n,{variant:"outline",children:"Left"}),t.jsx(n,{variant:"outline",children:"Center"}),t.jsx(n,{variant:"outline",children:"Right"})]})},s={render:()=>t.jsxs(e,{orientation:"horizontal",children:[t.jsx(n,{variant:"outline",children:"First"}),t.jsx(n,{variant:"outline",children:"Second"}),t.jsx(n,{variant:"outline",children:"Third"})]})},u={render:()=>t.jsxs(e,{orientation:"vertical",children:[t.jsx(n,{variant:"outline",children:"Top"}),t.jsx(n,{variant:"outline",children:"Middle"}),t.jsx(n,{variant:"outline",children:"Bottom"})]})},l={render:()=>t.jsxs(e,{className:"w-[400px]",children:[t.jsx(n,{variant:"outline",children:"Search"}),t.jsx(J,{placeholder:"Search...",className:"flex-1"})]})},c={render:()=>t.jsxs(e,{className:"w-[400px]",children:[t.jsx(n,{variant:"outline",children:"Filter"}),t.jsxs(Y,{className:"flex-1",children:[t.jsx("option",{children:"All Items"}),t.jsx("option",{children:"Active"}),t.jsx("option",{children:"Archived"})]})]})},d={render:()=>t.jsxs(e,{children:[t.jsx(n,{variant:"outline",children:"Bold"}),t.jsx(n,{variant:"outline",children:"Italic"}),t.jsx(x,{children:"Text formatting"}),t.jsx(n,{variant:"outline",children:"Underline"})]})},p={render:()=>t.jsxs(e,{children:[t.jsx(n,{variant:"outline",children:"Cut"}),t.jsx(n,{variant:"outline",children:"Copy"}),t.jsx(K,{orientation:"vertical"}),t.jsx(n,{variant:"outline",children:"Paste"}),t.jsx(n,{variant:"outline",children:"Delete"})]})},m={render:()=>t.jsxs(e,{orientation:"vertical",children:[t.jsx(n,{variant:"outline",children:"Bold"}),t.jsx(n,{variant:"outline",children:"Italic"}),t.jsx(x,{children:"Formatting"}),t.jsx(n,{variant:"outline",children:"Underline"})]})},h={render:()=>t.jsxs(e,{children:[t.jsx(n,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})})}),t.jsx(n,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})})}),t.jsx(n,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})},v={render:()=>t.jsxs(e,{className:"w-[500px]",children:[t.jsx(n,{variant:"outline",children:"Save"}),t.jsx(n,{variant:"outline",children:"Export"}),t.jsx(x,{children:"or"}),t.jsx(J,{placeholder:"Quick search...",className:"w-[200px]"}),t.jsx(n,{variant:"default",children:"Search"})]})};var j,f,g;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,G,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="horizontal">
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
}`,...(k=(G=s.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var w,L,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
}`,...(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var b,T,z;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[400px]">
      <Button variant="outline">Search</Button>
      <Input placeholder="Search..." className="flex-1" />
    </ButtonGroup>
}`,...(z=(T=l.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var I,C,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[400px]">
      <Button variant="outline">Filter</Button>
      <Select className="flex-1">
        <option>All Items</option>
        <option>Active</option>
        <option>Archived</option>
      </Select>
    </ButtonGroup>
}`,...(W=(C=c.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var M,V,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <ButtonGroupText>Text formatting</ButtonGroupText>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var y,A,H;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Cut</Button>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator orientation="vertical" />
      <Button variant="outline">Paste</Button>
      <Button variant="outline">Delete</Button>
    </ButtonGroup>
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var F,D,E;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical">
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <ButtonGroupText>Formatting</ButtonGroupText>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var U,R,q;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(R=h.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var P,Q,O;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[500px]">
      <Button variant="outline">Save</Button>
      <Button variant="outline">Export</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Input placeholder="Quick search..." className="w-[200px]" />
      <Button variant="default">Search</Button>
    </ButtonGroup>
}`,...(O=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:O.source}}};const Vt=["Default","Horizontal","Vertical","WithInput","WithSelect","WithTextLabel","WithSeparator","WithTextLabelVertical","IconButtons","MixedContent"];export{i as Default,s as Horizontal,h as IconButtons,v as MixedContent,u as Vertical,l as WithInput,c as WithSelect,p as WithSeparator,d as WithTextLabel,m as WithTextLabelVertical,Vt as __namedExportsOrder,Mt as default};
