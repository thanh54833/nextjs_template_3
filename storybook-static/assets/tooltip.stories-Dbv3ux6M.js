import{j as o}from"./jsx-runtime-u17CrQMm.js";import{B as i}from"./button-Ch-BQGzE.js";import{T as t,a as e,b as r}from"./tooltip-DElC3ZbC.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-ByLlCQqU.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-DkJfsZhp.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";import"./index-BmEHjAU8.js";import"./index-D5FZlcEA.js";const k={component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A tooltip component for revealing content on hover. Positioned intelligently to stay within viewport bounds."}}}},n={render:()=>o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Hover me"})}),o.jsx(r,{sideOffset:0,children:"This is a tooltip"})]})},s={render:()=>o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"ghost",size:"icon",children:"?"})}),o.jsx(r,{sideOffset:5,children:o.jsx("p",{children:"Need help? Click to learn more."})})]})},l={render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Top"})}),o.jsx(r,{side:"top",children:"Tooltip on top"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Bottom"})}),o.jsx(r,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Left"})}),o.jsx(r,{side:"left",children:"Tooltip on left"})]}),o.jsxs(t,{children:[o.jsx(e,{asChild:!0,children:o.jsx(i,{variant:"secondary",children:"Right"})}),o.jsx(r,{side:"right",children:"Tooltip on right"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Default tooltip with hover trigger",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Tooltip with longer text content",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Multiple tooltips showing all four positioning directions",...l.parameters?.docs?.description}}};const z=["Default","WithText","Multiple"];export{n as Default,l as Multiple,s as WithText,z as __namedExportsOrder,k as default};
