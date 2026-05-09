import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{I as h}from"./icons-Bvzo9UON.js";import{c as o}from"./utils-BQHNewu7.js";import{b as E}from"./button-B1qRRuul.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./index-AnhkqxcL.js";import"./index-CJNorLC4.js";function r({className:e,...t}){return n.jsx("nav",{"aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",e),...t})}function s({className:e,...t}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",e),...t})}function i({...e}){return n.jsx("li",{"data-slot":"pagination-item",...e})}function a({className:e,isActive:t,size:b="icon",...z}){return n.jsx("a",{"aria-current":t?"page":void 0,"data-slot":"pagination-link","data-active":t,className:o(E({variant:t?"outline":"ghost",size:b}),e),...z})}function g({className:e,...t}){return n.jsxs(a,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 px-2.5 sm:pl-2.5",e),...t,children:[n.jsx(h.chevronLeft,{}),n.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function c({className:e,...t}){return n.jsxs(a,{"aria-label":"Go to next page",size:"default",className:o("gap-1 px-2.5 sm:pr-2.5",e),...t,children:[n.jsx("span",{className:"hidden sm:block",children:"Next"}),n.jsx(h.chevronRight,{})]})}function x({className:e,...t}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",e),...t,children:[n.jsx(h.moreHorizontal,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Pagination"};s.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};a.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:"'icon'",computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};x.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const V={component:r,tags:["autodocs"],parameters:{layout:"padded"}},P={render:()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(x,{})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"10"})}),n.jsx(i,{children:n.jsx(c,{href:"#"})})]})})},d={render:()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"4"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"5"})}),n.jsx(i,{children:n.jsx(x,{})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"20"})}),n.jsx(i,{children:n.jsx(c,{href:"#"})})]})})},l={render:()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(c,{href:"#"})})]})})},m={render:()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(c,{href:"#"})})]})})};var f,j,p;P.parameters={...P.parameters,docs:{...(f=P.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(p=(j=P.parameters)==null?void 0:j.docs)==null?void 0:p.source}}};var I,u,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>20</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(k=(u=d.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var L,N,v;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var _,y,C;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(C=(y=m.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const H=["Default","ManyPages","FirstPage","LastPage"];export{P as Default,l as FirstPage,m as LastPage,d as ManyPages,H as __namedExportsOrder,V as default};
