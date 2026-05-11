import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as t}from"./utils-BQHNewu7.js";function b({className:a,...l}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full",children:e.jsx("table",{"data-slot":"table",className:t("w-full caption-bottom text-sm",a),...l})})}function m({className:a,...l}){return e.jsx("thead",{"data-slot":"table-header",className:t("[&_tr]:border-b",a),...l})}function i({className:a,...l}){return e.jsx("tbody",{"data-slot":"table-body",className:t("[&_tr:last-child]:border-0",a),...l})}function p({className:a,...l}){return e.jsx("tfoot",{"data-slot":"table-footer",className:t("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...l})}function s({className:a,...l}){return e.jsx("tr",{"data-slot":"table-row",className:t("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...l})}function d({className:a,...l}){return e.jsx("th",{"data-slot":"table-head",className:t("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l})}function o({className:a,...l}){return e.jsx("td",{"data-slot":"table-cell",className:t("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l})}function T({className:a,...l}){return e.jsx("caption",{"data-slot":"table-caption",className:t("text-muted-foreground mt-4 text-sm",a),...l})}b.__docgenInfo={description:"",methods:[],displayName:"Table"};m.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};i.__docgenInfo={description:"",methods:[],displayName:"TableBody"};p.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};d.__docgenInfo={description:"",methods:[],displayName:"TableHead"};s.__docgenInfo={description:"",methods:[],displayName:"TableRow"};o.__docgenInfo={description:"",methods:[],displayName:"TableCell"};T.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const x={component:b,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table component for displaying structured data. It includes sub-components: `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, and `TableCaption`."}}}},c=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer"}],n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"A list of your recent users."}),e.jsx(m,{children:e.jsxs(s,{children:[e.jsx(d,{children:"Name"}),e.jsx(d,{children:"Email"}),e.jsx(d,{children:"Role"})]})}),e.jsx(i,{children:c.map(a=>e.jsxs(s,{children:[e.jsx(o,{children:a.name}),e.jsx(o,{children:a.email}),e.jsx(o,{children:a.role})]},a.id))}),e.jsx(p,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Total"}),e.jsxs(o,{colSpan:2,children:[c.length," users"]})]})})]})}},r={args:{children:e.jsx(i,{children:e.jsxs(s,{children:[e.jsx(o,{children:"Cell 1"}),e.jsx(o,{children:"Cell 2"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Default table with header, body, footer, and sample data",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
  }
}`,...r.parameters?.docs?.source},description:{story:"Simple table with just body and rows",...r.parameters?.docs?.description}}};const f=["Default","SimpleTable"];export{n as Default,r as SimpleTable,f as __namedExportsOrder,x as default};
