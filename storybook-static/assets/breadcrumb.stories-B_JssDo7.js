import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{S as P}from"./index-D58SrNf6.js";import{I as v}from"./icons-Bwb0mD-e.js";import{c}from"./utils-BQHNewu7.js";import"./index-Br2IOmUs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B1gorirK.js";function t({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function m({className:e,...n}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:c("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...n})}function a({className:e,...n}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:c("inline-flex items-center gap-1.5",e),...n})}function d({asChild:e,className:n,...B}){const C=e?P:"a";return r.jsx(C,{"data-slot":"breadcrumb-link",className:c("hover:text-foreground transition-colors",n),...B})}function i({className:e,...n}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:c("text-foreground font-normal",e),...n})}function s({children:e,className:n,...B}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:c("[&>svg]:size-3.5",n),...B,children:e??r.jsx(v.chevronRight,{})})}function y({className:e,...n}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:c("flex size-9 items-center justify-center",e),...n,children:[r.jsx(v.moreHorizontal,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}t.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};y.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const q={component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A navigation component that displays the current location within a navigation hierarchy. Breadcrumbs help users understand where they are in the site structure and provide quick navigation to parent pages."}}}},o={render:()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"Components"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},u={render:()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(y,{})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},l={render:()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"Documents"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"UI Components"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Navigation"})})]})})},b={render:()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(d,{asChild:!0,children:r.jsx("a",{href:"#",children:"Home"})})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Using asChild"})})]})})};var p,h,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,g;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(g=(f=u.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var I,L,k;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var N,S,_;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(S=b.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const R=["Default","WithEllipsis","NestedLevels","AsChild"];export{b as AsChild,o as Default,l as NestedLevels,u as WithEllipsis,R as __namedExportsOrder,q as default};
