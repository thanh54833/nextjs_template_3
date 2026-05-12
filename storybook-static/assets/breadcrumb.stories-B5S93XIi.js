import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as j}from"./index-DGP6o15j.js";import{I as p}from"./icons-BdTSAv6R.js";import{c}from"./utils-Czy_q_oT.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";function t({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function m({className:e,...n}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:c("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...n})}function a({className:e,...n}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:c("inline-flex items-center gap-1.5",e),...n})}function d({asChild:e,className:n,...B}){const x=e?j:"a";return r.jsx(x,{"data-slot":"breadcrumb-link",className:c("hover:text-foreground transition-colors",n),...B})}function i({className:e,...n}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:c("text-foreground font-normal",e),...n})}function s({children:e,className:n,...B}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:c("[&>svg]:size-3.5",n),...B,children:e??r.jsx(p.chevronRight,{})})}function h({className:e,...n}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:c("flex size-9 items-center justify-center",e),...n,children:[r.jsx(p.moreHorizontal,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}t.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};h.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const _={component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A navigation component that displays the current location within a navigation hierarchy. Breadcrumbs help users understand where they are in the site structure and provide quick navigation to parent pages."}}}},o={render:()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"Components"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},u={render:()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(h,{})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},l={render:()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"Documents"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"UI Components"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Navigation"})})]})})},b={render:()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(d,{asChild:!0,children:r.jsx("a",{href:"#",children:"Home"})})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Using asChild"})})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  /** Default breadcrumb with three items */
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  /** Breadcrumb with ellipsis for truncated navigation */
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  /** Breadcrumb showing deep nested navigation levels */
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>UI Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Navigation</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  /** Breadcrumb using asChild to render custom link elements */
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href='#'>Home</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Using asChild</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...b.parameters?.docs?.source}}};const v=["Default","WithEllipsis","NestedLevels","AsChild"];export{b as AsChild,o as Default,l as NestedLevels,u as WithEllipsis,v as __namedExportsOrder,_ as default};
