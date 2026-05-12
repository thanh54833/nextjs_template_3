import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as n}from"./button-BQzN1lMO.js";import{P as t,a as s,b as a}from"./popover-DBMmlqna.js";import"./index-koxbFvze.js";import"./utils-Czy_q_oT.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";import"./icons-BdTSAv6R.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-ByLlCQqU.js";import"./index-CZLUcR6N.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-DQn26SIZ.js";import"./floating-ui.react-dom-DZ6WtPqY.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";import"./index-BmEHjAU8.js";const L={component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A popover component for displaying floating content anchored to a trigger element. Built on Radix UI for accessibility and smooth animations."}}}},r={render:()=>e.jsxs(t,{children:[e.jsx(s,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Open Popover"})}),e.jsx(a,{align:"center",sideOffset:4,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Popover Title"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This is popover content. It can contain any React elements."})]})})]})},o={render:()=>e.jsxs(t,{children:[e.jsx(s,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Quick Links"})}),e.jsx(a,{align:"start",sideOffset:4,className:"w-52",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("a",{href:"#",className:"block px-2 py-1.5 text-sm hover:bg-accent rounded",children:"Documentation"}),e.jsx("a",{href:"#",className:"block px-2 py-1.5 text-sm hover:bg-accent rounded",children:"API Reference"}),e.jsx("a",{href:"#",className:"block px-2 py-1.5 text-sm hover:bg-accent rounded",children:"Support"})]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent align="center" sideOffset={4}>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Popover Title</h4>
            <p className="text-sm text-muted-foreground">
              This is popover content. It can contain any React elements.
            </p>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...r.parameters?.docs?.source},description:{story:"Default popover with trigger and content",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Quick Links</Button>
        </PopoverTrigger>
        <PopoverContent align="start" sideOffset={4} className="w-52">
          <div className="space-y-1">
            <a href="#" className="block px-2 py-1.5 text-sm hover:bg-accent rounded">
              Documentation
            </a>
            <a href="#" className="block px-2 py-1.5 text-sm hover:bg-accent rounded">
              API Reference
            </a>
            <a href="#" className="block px-2 py-1.5 text-sm hover:bg-accent rounded">
              Support
            </a>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...o.parameters?.docs?.source},description:{story:"Popover with a list of clickable links",...o.parameters?.docs?.description}}};const S=["Default","WithLink"];export{r as Default,o as WithLink,S as __namedExportsOrder,L as default};
