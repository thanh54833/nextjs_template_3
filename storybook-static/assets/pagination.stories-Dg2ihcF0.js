import{j as n}from"./jsx-runtime-u17CrQMm.js";import{I as m}from"./icons-CJO6dUP8.js";import{c as o}from"./utils-BQHNewu7.js";import{b as j}from"./button-Ch-BQGzE.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-LHNt3CwB.js";import"./index-DGP6o15j.js";import"./index-DOER7VuF.js";function r({className:e,...t}){return n.jsx("nav",{"aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",e),...t})}function s({className:e,...t}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",e),...t})}function i({...e}){return n.jsx("li",{"data-slot":"pagination-item",...e})}function a({className:e,isActive:t,size:p="icon",...f}){return n.jsx("a",{"aria-current":t?"page":void 0,"data-slot":"pagination-link","data-active":t,className:o(j({variant:t?"outline":"ghost",size:p}),e),...f})}function g({className:e,...t}){return n.jsxs(a,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 px-2.5 sm:pl-2.5",e),...t,children:[n.jsx(m.chevronLeft,{}),n.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function c({className:e,...t}){return n.jsxs(a,{"aria-label":"Go to next page",size:"default",className:o("gap-1 px-2.5 sm:pr-2.5",e),...t,children:[n.jsx("span",{className:"hidden sm:block",children:"Next"}),n.jsx(m.chevronRight,{})]})}function x({className:e,...t}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",e),...t,children:[n.jsx(m.moreHorizontal,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Pagination"};s.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};a.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:"'icon'",computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};x.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const C={component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A set of pagination controls for navigating through large sets of content or data. Each pagination group is built using the pagination components."}}}},P={render:()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(x,{})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"10"})}),n.jsx(i,{children:n.jsx(c,{href:"#"})})]})})},d={render:()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"4"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"5"})}),n.jsx(i,{children:n.jsx(x,{})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"20"})}),n.jsx(i,{children:n.jsx(c,{href:"#"})})]})})},l={render:()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(c,{href:"#"})})]})})},h={render:()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(c,{href:"#"})})]})})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  /** Default pagination with ellipsis showing intermediate pages */
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
}`,...P.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  /** Pagination showing many pages with ellipsis */
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  /** Pagination on the first page with next button enabled */
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
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  /** Pagination on the last page with previous button enabled */
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
}`,...h.parameters?.docs?.source}}};const w=["Default","ManyPages","FirstPage","LastPage"];export{P as Default,l as FirstPage,h as LastPage,d as ManyPages,w as __namedExportsOrder,C as default};
