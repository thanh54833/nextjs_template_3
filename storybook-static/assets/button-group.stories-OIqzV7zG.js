import{j as t}from"./jsx-runtime-u17CrQMm.js";import{B as o}from"./button-Ch-BQGzE.js";import{I as f}from"./input-CFt1qv4K.js";import{S}from"./select-WT1lNnaX.js";import{c as G}from"./index-LHNt3CwB.js";import{S as w}from"./index-DGP6o15j.js";import{c as B}from"./utils-BQHNewu7.js";import{S as b}from"./separator-tXcssORl.js";import"./icons-CJO6dUP8.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-C4JN59vf.js";import"./index-BKV5D6oG.js";import"./index-DOER7VuF.js";import"./index-ofxjSrhS.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-DkJfsZhp.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-BmEHjAU8.js";import"./index-t4OVC0Wb.js";import"./index-D5FZlcEA.js";const k=G("flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",{variants:{orientation:{horizontal:"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",vertical:"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}});function e({className:n,orientation:r,...i}){return t.jsx("div",{role:"group","data-slot":"button-group","data-orientation":r,className:B(k({orientation:r}),n),...i})}function v({className:n,asChild:r=!1,...i}){const g=r?w:"div";return t.jsx(g,{className:B("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",n),...i})}function j({className:n,orientation:r="vertical",...i}){return t.jsx(b,{"data-slot":"button-group-separator",orientation:r,className:B("bg-input relative m-0! self-stretch data-[orientation=vertical]:h-auto",n),...i})}e.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};j.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupSeparator",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};v.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupText",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const rt={component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A button group component for combining buttons, inputs, and text in a unified horizontal or vertical layout."}}}},a={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Left"}),t.jsx(o,{variant:"outline",children:"Center"}),t.jsx(o,{variant:"outline",children:"Right"})]})},s={render:()=>t.jsxs(e,{orientation:"horizontal",children:[t.jsx(o,{variant:"outline",children:"First"}),t.jsx(o,{variant:"outline",children:"Second"}),t.jsx(o,{variant:"outline",children:"Third"})]})},u={render:()=>t.jsxs(e,{orientation:"vertical",children:[t.jsx(o,{variant:"outline",children:"Top"}),t.jsx(o,{variant:"outline",children:"Middle"}),t.jsx(o,{variant:"outline",children:"Bottom"})]})},l={render:()=>t.jsxs(e,{className:"w-[400px]",children:[t.jsx(o,{variant:"outline",children:"Search"}),t.jsx(f,{placeholder:"Search...",className:"flex-1"})]})},c={render:()=>t.jsxs(e,{className:"w-[400px]",children:[t.jsx(o,{variant:"outline",children:"Filter"}),t.jsxs(S,{children:[t.jsx("option",{children:"All Items"}),t.jsx("option",{children:"Active"}),t.jsx("option",{children:"Archived"})]})]})},d={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Bold"}),t.jsx(o,{variant:"outline",children:"Italic"}),t.jsx(v,{children:"Text formatting"}),t.jsx(o,{variant:"outline",children:"Underline"})]})},p={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Cut"}),t.jsx(o,{variant:"outline",children:"Copy"}),t.jsx(j,{orientation:"vertical"}),t.jsx(o,{variant:"outline",children:"Paste"}),t.jsx(o,{variant:"outline",children:"Delete"})]})},m={render:()=>t.jsxs(e,{orientation:"vertical",children:[t.jsx(o,{variant:"outline",children:"Bold"}),t.jsx(o,{variant:"outline",children:"Italic"}),t.jsx(v,{children:"Formatting"}),t.jsx(o,{variant:"outline",children:"Underline"})]})},h={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})})}),t.jsx(o,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})})}),t.jsx(o,{variant:"outline",size:"icon",children:t.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})},x={render:()=>t.jsxs(e,{className:"w-[500px]",children:[t.jsx(o,{variant:"outline",children:"Save"}),t.jsx(o,{variant:"outline",children:"Export"}),t.jsx(v,{children:"or"}),t.jsx(f,{placeholder:"Quick search...",className:"w-[200px]"}),t.jsx(o,{variant:"default",children:"Search"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
}`,...a.parameters?.docs?.source},description:{story:"Default horizontal button group with three buttons.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="horizontal">
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
}`,...s.parameters?.docs?.source},description:{story:"Explicit horizontal orientation.",...s.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
}`,...u.parameters?.docs?.source},description:{story:"Vertical orientation for narrow containers.",...u.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[400px]">
      <Button variant="outline">Search</Button>
      <Input placeholder="Search..." className="flex-1" />
    </ButtonGroup>
}`,...l.parameters?.docs?.source},description:{story:"Button group with text input for search patterns.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[400px]">
      <Button variant="outline">Filter</Button>
      <Select>
        <option>All Items</option>
        <option>Active</option>
        <option>Archived</option>
      </Select>
    </ButtonGroup>
}`,...c.parameters?.docs?.source},description:{story:"Button group with select dropdown for filter patterns.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <ButtonGroupText>Text formatting</ButtonGroupText>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
}`,...d.parameters?.docs?.source},description:{story:"Button group with text label for formatting toolbars.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Cut</Button>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator orientation="vertical" />
      <Button variant="outline">Paste</Button>
      <Button variant="outline">Delete</Button>
    </ButtonGroup>
}`,...p.parameters?.docs?.source},description:{story:"Button group with separator for grouped actions.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical">
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <ButtonGroupText>Formatting</ButtonGroupText>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
}`,...m.parameters?.docs?.source},description:{story:"Vertical button group with text label.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Icon-only buttons for compact toolbars.",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup className="w-[500px]">
      <Button variant="outline">Save</Button>
      <Button variant="outline">Export</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Input placeholder="Quick search..." className="w-[200px]" />
      <Button variant="default">Search</Button>
    </ButtonGroup>
}`,...x.parameters?.docs?.source},description:{story:"Mixed content with buttons, text, and input.",...x.parameters?.docs?.description}}};const nt=["Default","Horizontal","Vertical","WithInput","WithSelect","WithTextLabel","WithSeparator","WithTextLabelVertical","IconButtons","MixedContent"];export{a as Default,s as Horizontal,h as IconButtons,x as MixedContent,u as Vertical,l as WithInput,c as WithSelect,p as WithSeparator,d as WithTextLabel,m as WithTextLabelVertical,nt as __namedExportsOrder,rt as default};
