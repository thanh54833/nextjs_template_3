import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{S as H}from"./index-C99FfTL5.js";import{I as C}from"./icons-Bvzo9UON.js";import{c}from"./utils-BQHNewu7.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CJNorLC4.js";function m({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function t({className:e,...n}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:c("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...n})}function a({className:e,...n}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:c("inline-flex items-center gap-1.5",e),...n})}function d({asChild:e,className:n,...B}){const P=e?H:"a";return r.jsx(P,{"data-slot":"breadcrumb-link",className:c("hover:text-foreground transition-colors",n),...B})}function i({className:e,...n}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:c("text-foreground font-normal",e),...n})}function s({children:e,className:n,...B}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:c("[&>svg]:size-3.5",n),...B,children:e??r.jsx(C.chevronRight,{})})}function y({className:e,...n}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:c("flex size-9 items-center justify-center",e),...n,children:[r.jsx(C.moreHorizontal,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};y.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const R={component:m,tags:["autodocs"],parameters:{layout:"padded"}},o={render:()=>r.jsx(m,{children:r.jsxs(t,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"Components"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},u={render:()=>r.jsx(m,{children:r.jsxs(t,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(y,{})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},l={render:()=>r.jsx(m,{children:r.jsxs(t,{children:[r.jsx(a,{children:r.jsx(d,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"Documents"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(d,{href:"#",children:"UI Components"})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Navigation"})})]})})},b={render:()=>r.jsx(m,{children:r.jsxs(t,{children:[r.jsx(a,{children:r.jsx(d,{asChild:!0,children:r.jsx("a",{href:"#",children:"Home"})})}),r.jsx(s,{}),r.jsx(a,{children:r.jsx(i,{children:"Using asChild"})})]})})};var p,h,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,I;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(f=u.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var g,L,k;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(S=b.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const W=["Default","WithEllipsis","NestedLevels","AsChild"];export{b as AsChild,o as Default,l as NestedLevels,u as WithEllipsis,W as __namedExportsOrder,R as default};
