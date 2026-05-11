import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{B as i}from"./button-Cw1GWQ4G.js";import{T as t,a as e,b as r}from"./tooltip-Dx1rL3Zt.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-D58SrNf6.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B1gorirK.js";import"./index-DW48STyt.js";import"./index-BRlNe44M.js";import"./index-BpJryQGc.js";import"./index-Caz76J1-.js";import"./index-BI3c041M.js";import"./index-CGqftQ-p.js";import"./index-DLhQgCaF.js";import"./index-BBh8-vjY.js";import"./index-1oe2SjNl.js";import"./index-CHBxiihi.js";import"./index-B7w1hHoe.js";import"./index-CIbk3zPC.js";import"./index-EtsJrrfg.js";import"./index-D7wzBi_S.js";import"./index-Cu1ciEb7.js";const Q={component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A tooltip component for revealing content on hover. Positioned intelligently to stay within viewport bounds."}}}},n={render:()=>o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Hover me"})}),o.jsx(r,{sideOffset:0,children:"This is a tooltip"})]})},s={render:()=>o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"ghost",size:"icon",children:"?"})}),o.jsx(r,{sideOffset:5,children:o.jsx("p",{children:"Need help? Click to learn more."})})]})},l={render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Top"})}),o.jsx(r,{side:"top",children:"Tooltip on top"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Bottom"})}),o.jsx(r,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Left"})}),o.jsx(r,{side:"left",children:"Tooltip on left"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Right"})}),o.jsx(r,{side:"right",children:"Tooltip on right"})]})]})};var p,a,d,c,T;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
