import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{c as t}from"./utils-BQHNewu7.js";function u({className:a,...l}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full",children:e.jsx("table",{"data-slot":"table",className:t("w-full caption-bottom text-sm",a),...l})})}function j({className:a,...l}){return e.jsx("thead",{"data-slot":"table-header",className:t("[&_tr]:border-b",a),...l})}function c({className:a,...l}){return e.jsx("tbody",{"data-slot":"table-body",className:t("[&_tr:last-child]:border-0",a),...l})}function f({className:a,...l}){return e.jsx("tfoot",{"data-slot":"table-footer",className:t("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...l})}function n({className:a,...l}){return e.jsx("tr",{"data-slot":"table-row",className:t("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...l})}function d({className:a,...l}){return e.jsx("th",{"data-slot":"table-head",className:t("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l})}function o({className:a,...l}){return e.jsx("td",{"data-slot":"table-cell",className:t("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l})}function g({className:a,...l}){return e.jsx("caption",{"data-slot":"table-caption",className:t("text-muted-foreground mt-4 text-sm",a),...l})}u.__docgenInfo={description:"",methods:[],displayName:"Table"};j.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};c.__docgenInfo={description:"",methods:[],displayName:"TableBody"};f.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};d.__docgenInfo={description:"",methods:[],displayName:"TableHead"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};o.__docgenInfo={description:"",methods:[],displayName:"TableCell"};g.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const _={component:u,tags:["autodocs"],parameters:{layout:"padded"}},i=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer"}],r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"A list of your recent users."}),e.jsx(j,{children:e.jsxs(n,{children:[e.jsx(d,{children:"Name"}),e.jsx(d,{children:"Email"}),e.jsx(d,{children:"Role"})]})}),e.jsx(c,{children:i.map(a=>e.jsxs(n,{children:[e.jsx(o,{children:a.name}),e.jsx(o,{children:a.email}),e.jsx(o,{children:a.role})]},a.id))}),e.jsx(f,{children:e.jsxs(n,{children:[e.jsx(o,{children:"Total"}),e.jsxs(o,{colSpan:2,children:[i.length," users"]})]})})]})}},s={args:{children:e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(o,{children:"Cell 1"}),e.jsx(o,{children:"Cell 2"})]})})}};var b,m,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell colSpan={2}>{mockData.length} users</TableCell>
          </TableRow>
        </TableFooter>
      </>
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var T,h,x;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const N=["Default","SimpleTable"];export{r as Default,s as SimpleTable,N as __namedExportsOrder,_ as default};
