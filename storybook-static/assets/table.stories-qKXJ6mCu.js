import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as i}from"./utils-Czy_q_oT.js";import{B as y}from"./badge-ARHUHlUB.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";import"./index-koxbFvze.js";function w({className:a,...t}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full",children:e.jsx("table",{"data-slot":"table",className:i("w-full caption-bottom text-sm",a),...t})})}function o({className:a,...t}){return e.jsx("thead",{"data-slot":"table-header",className:i("[&_tr]:border-b",a),...t})}function d({className:a,...t}){return e.jsx("tbody",{"data-slot":"table-body",className:i("[&_tr:last-child]:border-0",a),...t})}function C({className:a,...t}){return e.jsx("tfoot",{"data-slot":"table-footer",className:i("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...t})}function r({className:a,...t}){return e.jsx("tr",{"data-slot":"table-row",className:i("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...t})}function s({className:a,...t}){return e.jsx("th",{"data-slot":"table-head",className:i("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...t})}function l({className:a,...t}){return e.jsx("td",{"data-slot":"table-cell",className:i("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...t})}w.__docgenInfo={description:"",methods:[],displayName:"Table"};o.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};d.__docgenInfo={description:"",methods:[],displayName:"TableBody"};C.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};s.__docgenInfo={description:"",methods:[],displayName:"TableHead"};r.__docgenInfo={description:"",methods:[],displayName:"TableRow"};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};const _={component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table component for displaying structured data. It includes sub-components: `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, and `TableCaption`."}}}},N=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer"}],H=[{id:1,image:"https://picsum.photos/seed/product1/80/80",name:"Wireless Headphones",category:"active",price:"$99.99",description:"High-quality wireless headphones with noise cancellation"},{id:2,image:"https://picsum.photos/seed/product2/80/80",name:"Smart Watch",category:"active",price:"$199.99",description:"Fitness tracking smartwatch with heart rate monitor"},{id:3,image:null,name:"Bluetooth Speaker",category:"inactive",price:"$49.99",description:"Portable Bluetooth speaker with 10-hour battery life"}],n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{children:"IMAGE"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Category"}),e.jsx(s,{children:"PRICE"}),e.jsx(s,{children:"DESCRIPTION"}),e.jsx(s,{className:"text-right",children:"ACTIONS"})]})}),e.jsx(d,{children:H.map(a=>e.jsxs(r,{children:[e.jsx(l,{children:e.jsx("div",{className:"relative aspect-square w-20",children:a.image?e.jsx("img",{src:a.image,alt:a.name,className:"rounded-lg object-cover"}):e.jsx("div",{className:"flex h-full items-center justify-center rounded-lg bg-muted",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"-"})})})}),e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:e.jsxs(y,{variant:"outline",className:`capitalize ${a.category==="active"?"text-green-600":"text-red-600"}`,children:[a.category==="active"?"●":"○",a.category]})}),e.jsx(l,{children:a.price}),e.jsx(l,{className:"text-muted-foreground max-w-[200px] truncate",children:a.description}),e.jsx(l,{className:"text-right",children:e.jsx("button",{className:"rounded-md border px-2 py-1 text-xs hover:bg-accent",children:"⋮"})})]},a.id))})]})}},c={name:"Simple Table",args:{children:e.jsx(d,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Cell 1"}),e.jsx(l,{children:"Cell 2"})]})})}},m={name:"With Badges",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Status"})]})}),e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:e.jsx(y,{variant:"default",children:"Active"})})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:e.jsx(y,{variant:"secondary",children:"Pending"})})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{children:e.jsx(y,{variant:"destructive",children:"Inactive"})})]}),e.jsxs(r,{children:[e.jsx(l,{children:"Alice Williams"}),e.jsx(l,{children:e.jsx(y,{variant:"outline",children:"Draft"})})]})]})]})}},b={name:"Empty State",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Email"})]})}),e.jsx(d,{children:e.jsx(r,{children:e.jsx(l,{colSpan:2,className:"h-24 text-center",children:"No results."})})})]})}},h={name:"Striped Rows",parameters:{backgrounds:{default:"white"}},args:{className:"[&_tbody_tr:nth-child(odd)]:bg-muted/30",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Email"}),e.jsx(s,{children:"Role"})]})}),e.jsx(d,{children:N.map(a=>e.jsxs(r,{children:[e.jsx(l,{children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role})]},a.id))})]})}},p={name:"Hover Highlight",parameters:{docs:{description:{story:"Rows highlight on hover with hover:bg-muted/50 from the base TableRow component."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Email"}),e.jsx(s,{children:"Role"})]})}),e.jsx(d,{children:N.map(a=>e.jsxs(r,{children:[e.jsx(l,{children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role})]},a.id))})]})}},T={name:"Selectable Rows",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{className:"w-10",children:e.jsx("input",{type:"checkbox",className:"rounded border-input"})}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Email"}),e.jsx(s,{children:"Role"})]})}),e.jsx(d,{children:N.map(a=>e.jsxs(r,{"data-state":"selected",children:[e.jsx(l,{children:e.jsx("input",{type:"checkbox",className:"rounded border-input",defaultChecked:!0})}),e.jsx(l,{children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role})]},a.id))})]})}},x={name:"Compact Table",parameters:{docs:{description:{story:"Table with compact spacing for data-dense displays using smaller padding classes."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{className:"h-8 px-2",children:"ID"}),e.jsx(s,{className:"h-8 px-2",children:"Name"}),e.jsx(s,{className:"h-8 px-2",children:"Email"})]})}),e.jsx(d,{children:[{id:1,name:"John Doe",email:"john@example.com"},{id:2,name:"Jane Smith",email:"jane@example.com"},{id:3,name:"Bob Johnson",email:"bob@example.com"}].map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"p-2",children:a.id}),e.jsx(l,{className:"p-2",children:a.name}),e.jsx(l,{className:"p-2",children:a.email})]},a.id))})]})}},u={name:"With Footer",args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{children:"Item"}),e.jsx(s,{className:"text-right",children:"Quantity"}),e.jsx(s,{className:"text-right",children:"Price"})]})}),e.jsx(d,{children:[{item:"Wireless Headphones",qty:2,price:"$199.98"},{item:"Smart Watch",qty:1,price:"$199.99"},{item:"Bluetooth Speaker",qty:3,price:"$149.97"}].map((a,t)=>e.jsxs(r,{children:[e.jsx(l,{children:a.item}),e.jsx(l,{className:"text-right",children:a.qty}),e.jsx(l,{className:"text-right",children:a.price})]},t))}),e.jsx(C,{children:e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:"Total"}),e.jsx(l,{className:"text-right font-medium",children:"6"}),e.jsx(l,{className:"text-right font-medium",children:"$549.94"})]})})]})}},g={name:"With Actions",parameters:{docs:{description:{story:"Table with action buttons (edit/delete) in the last column, commonly used in admin interfaces."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Email"}),e.jsx(s,{className:"text-right",children:"Actions"})]})}),e.jsx(d,{children:N.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{className:"text-right",children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx("button",{className:"rounded-md border px-3 py-1.5 text-xs hover:bg-accent",children:"Edit"}),e.jsx("button",{className:"rounded-md border border-destructive/30 px-3 py-1.5 text-xs text-destructive hover:bg-destructive/5",children:"Delete"})]})})]},a.id))})]})}},j={name:"Sortable Columns",parameters:{docs:{description:{story:"Table with sortable column indicators (▲▼) typically used with TanStack Table."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{children:e.jsxs("button",{className:"flex items-center gap-1 hover:underline",children:["Name",e.jsx("span",{className:"text-muted-foreground",children:"▲"})]})}),e.jsx(s,{children:e.jsxs("button",{className:"flex items-center gap-1 hover:underline",children:["Email",e.jsx("span",{className:"text-muted-foreground",children:"▲"})]})}),e.jsx(s,{children:e.jsxs("button",{className:"flex items-center gap-1 hover:underline",children:["Role",e.jsx("span",{className:"text-muted-foreground",children:"▼"})]})})]})}),e.jsx(d,{children:N.map(a=>e.jsxs(r,{children:[e.jsx(l,{children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role})]},a.id))})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead>IMAGE</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>DESCRIPTION</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProducts.map(product => <TableRow key={product.id}>
              <TableCell>
                <div className="relative aspect-square w-20">
                  {product.image ? <img src={product.image} alt={product.name} className="rounded-lg object-cover" /> : <div className="flex h-full items-center justify-center rounded-lg bg-muted">
                      <span className="text-xs text-muted-foreground">-</span>
                    </div>}
                </div>
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <Badge variant="outline" className={\`capitalize \${product.category === 'active' ? 'text-green-600' : 'text-red-600'}\`}>
                  {product.category === 'active' ? '●' : '○'}
                  {product.category}
                </Badge>
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell className="text-muted-foreground max-w-[200px] truncate">
                {product.description}
              </TableCell>
              <TableCell className="text-right">
                <button className="rounded-md border px-2 py-1 text-xs hover:bg-accent">
                  ⋮
                </button>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...n.parameters?.docs?.source},description:{story:`Default product table showcasing image, badges, and action patterns.
This is the canonical example for admin dashboard tables.`,...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Simple Table',
  args: {
    children: <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
  }
}`,...c.parameters?.docs?.source},description:{story:"Simple table with just body and rows",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Badges',
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>
              <Badge variant="default">Active</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>
              <Badge variant="secondary">Pending</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>
              <Badge variant="destructive">Inactive</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alice Williams</TableCell>
            <TableCell>
              <Badge variant="outline">Draft</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...m.parameters?.docs?.source},description:{story:"Table with status badges in category column",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Empty State',
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </>
  }
}`,...b.parameters?.docs?.source},description:{story:"Table with empty state",...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Striped Rows',
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    className: '[&_tbody_tr:nth-child(odd)]:bg-muted/30',
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...h.parameters?.docs?.source},description:{story:"Table with striped rows variant",...h.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Hover Highlight',
  parameters: {
    docs: {
      description: {
        story: 'Rows highlight on hover with hover:bg-muted/50 from the base TableRow component.'
      }
    }
  },
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...p.parameters?.docs?.source},description:{story:"Table with hover highlight on rows",...p.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Selectable Rows',
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <input type="checkbox" className="rounded border-input" />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map(user => <TableRow key={user.id} data-state="selected">
              <TableCell>
                <input type="checkbox" className="rounded border-input" defaultChecked />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...T.parameters?.docs?.source},description:{story:"Table with selectable rows (checkbox simulation)",...T.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Compact Table',
  parameters: {
    docs: {
      description: {
        story: 'Table with compact spacing for data-dense displays using smaller padding classes.'
      }
    }
  },
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead className="h-8 px-2">ID</TableHead>
            <TableHead className="h-8 px-2">Name</TableHead>
            <TableHead className="h-8 px-2">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[{
          id: 1,
          name: 'John Doe',
          email: 'john@example.com'
        }, {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com'
        }, {
          id: 3,
          name: 'Bob Johnson',
          email: 'bob@example.com'
        }].map(user => <TableRow key={user.id}>
              <TableCell className="p-2">{user.id}</TableCell>
              <TableCell className="p-2">{user.name}</TableCell>
              <TableCell className="p-2">{user.email}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...x.parameters?.docs?.source},description:{story:"Compact table with smaller padding",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Footer',
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[{
          item: 'Wireless Headphones',
          qty: 2,
          price: '$199.98'
        }, {
          item: 'Smart Watch',
          qty: 1,
          price: '$199.99'
        }, {
          item: 'Bluetooth Speaker',
          qty: 3,
          price: '$149.97'
        }].map((row, i) => <TableRow key={i}>
              <TableCell>{row.item}</TableCell>
              <TableCell className="text-right">{row.qty}</TableCell>
              <TableCell className="text-right">{row.price}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-medium">Total</TableCell>
            <TableCell className="text-right font-medium">6</TableCell>
            <TableCell className="text-right font-medium">$549.94</TableCell>
          </TableRow>
        </TableFooter>
      </>
  }
}`,...u.parameters?.docs?.source},description:{story:"Table with footer showing totals",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Actions',
  parameters: {
    docs: {
      description: {
        story: 'Table with action buttons (edit/delete) in the last column, commonly used in admin interfaces.'
      }
    }
  },
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map(user => <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <button className="rounded-md border px-3 py-1.5 text-xs hover:bg-accent">
                    Edit
                  </button>
                  <button className="rounded-md border border-destructive/30 px-3 py-1.5 text-xs text-destructive hover:bg-destructive/5">
                    Delete
                  </button>
                </div>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...g.parameters?.docs?.source},description:{story:"Table with action buttons column",...g.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Sortable Columns',
  parameters: {
    docs: {
      description: {
        story: 'Table with sortable column indicators (▲▼) typically used with TanStack Table.'
      }
    }
  },
  args: {
    children: <>
        <TableHeader>
          <TableRow>
            <TableHead>
              <button className="flex items-center gap-1 hover:underline">
                Name
                <span className="text-muted-foreground">▲</span>
              </button>
            </TableHead>
            <TableHead>
              <button className="flex items-center gap-1 hover:underline">
                Email
                <span className="text-muted-foreground">▲</span>
              </button>
            </TableHead>
            <TableHead>
              <button className="flex items-center gap-1 hover:underline">
                Role
                <span className="text-muted-foreground">▼</span>
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...j.parameters?.docs?.source},description:{story:"Table with sortable column headers simulation",...j.parameters?.docs?.description}}};const F=["Default","SimpleTable","WithBadges","EmptyState","StripedRows","HoverHighlight","SelectableRows","CompactTable","WithFooter","WithActions","SortableColumns"];export{x as CompactTable,n as Default,b as EmptyState,p as HoverHighlight,T as SelectableRows,c as SimpleTable,j as SortableColumns,h as StripedRows,g as WithActions,m as WithBadges,u as WithFooter,F as __namedExportsOrder,_ as default};
