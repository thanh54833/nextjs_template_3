import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{B as i}from"./button-B1qRRuul.js";import{T as t,a as e,b as r}from"./tooltip-BMN2qtcx.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CJNorLC4.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-Cfs9WRo2.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-BnvOM56Y.js";import"./index-B69vM9co.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./index-DwArvr4q.js";import"./index-CFXvuxOn.js";const Q={component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A tooltip component for revealing content on hover. Positioned intelligently to stay within viewport bounds."}}}},n={render:()=>o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Hover me"})}),o.jsx(r,{sideOffset:0,children:"This is a tooltip"})]})},s={render:()=>o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"ghost",size:"icon",children:"?"})}),o.jsx(r,{sideOffset:5,children:o.jsx("p",{children:"Need help? Click to learn more."})})]})},l={render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Top"})}),o.jsx(r,{side:"top",children:"Tooltip on top"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Bottom"})}),o.jsx(r,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Left"})}),o.jsx(r,{side:"left",children:"Tooltip on left"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Right"})}),o.jsx(r,{side:"right",children:"Tooltip on right"})]})]})};var p,a,d,c,T;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={0}>
          This is a tooltip
        </TooltipContent>
      </Tooltip>;
  }
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source},description:{story:"Default tooltip with hover trigger",...(T=(c=n.parameters)==null?void 0:c.docs)==null?void 0:T.description}}};var m,h,u,g,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            ?
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p>Need help? Click to learn more.</p>
        </TooltipContent>
      </Tooltip>;
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:"Tooltip with longer text content",...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var j,C,f,v,B;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">Tooltip on top</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">Tooltip on left</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">Tooltip on right</TooltipContent>
        </Tooltip>
      </div>;
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source},description:{story:"Multiple tooltips showing all four positioning directions",...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.description}}};const U=["Default","WithText","Multiple"];export{n as Default,l as Multiple,s as WithText,U as __namedExportsOrder,Q as default};
