import{j as n}from"./jsx-runtime-u17CrQMm.js";import{B as s}from"./button-Ch-BQGzE.js";import{D as r,a,b as c,c as o,d as w,e,f as h,g as x,h as j,i as D,j as m,k as g,l,m as M}from"./dropdown-menu-CzcFslMW.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";import"./icons-CJO6dUP8.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-BmEHjAU8.js";import"./index-D1sqivKo.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DhmFcL7_.js";import"./index-C4JN59vf.js";import"./index-ofxjSrhS.js";import"./index-D3yKPjIL.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-C1lvhlBT.js";import"./index-DkJfsZhp.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";import"./index-BXQs120s.js";const X={component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component for revealing actions, options, or navigation. Built on Radix UI primitives with support for checkboxes, radio groups, and nested submenus."}}}},t={render:()=>n.jsxs(r,{children:[n.jsx(a,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Dropdown"})}),n.jsxs(c,{children:[n.jsxs(o,{children:["New Tab",n.jsx(w,{children:"⌘T"})]}),n.jsxs(o,{children:["New Window",n.jsx(w,{children:"⌘N"})]}),n.jsx(e,{}),n.jsxs(o,{children:["Save Page As...",n.jsx(w,{children:"⇧⌘S"})]}),n.jsx(e,{}),n.jsxs(o,{variant:"destructive",children:["Delete",n.jsx(w,{children:"⌫"})]})]})]})},d={render:()=>n.jsxs(r,{children:[n.jsx(a,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Dropdown"})}),n.jsxs(c,{children:[n.jsx(o,{children:"Profile"}),n.jsx(o,{children:"Billing"}),n.jsx(o,{children:"Settings"}),n.jsx(e,{}),n.jsxs(h,{children:[n.jsx(x,{children:"More"}),n.jsxs(j,{children:[n.jsx(o,{children:"Keyboard Shortcuts"}),n.jsx(o,{children:"API Documentation"}),n.jsx(o,{children:"Community"})]})]}),n.jsx(e,{}),n.jsx(o,{variant:"destructive",children:"Sign Out"})]})]})},p={render:()=>n.jsxs(r,{children:[n.jsx(a,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Dropdown"})}),n.jsxs(c,{children:[n.jsx(D,{children:"Appearance"}),n.jsx(e,{}),n.jsx(m,{checked:!0,children:"Show Sidebar"}),n.jsx(m,{checked:!0,children:"Show Toolbar"}),n.jsx(m,{children:"Show Status Bar"})]})]})},u={render:()=>n.jsxs(r,{children:[n.jsx(a,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Dropdown"})}),n.jsxs(c,{children:[n.jsx(D,{children:"Theme"}),n.jsx(e,{}),n.jsxs(g,{value:"light",children:[n.jsx(l,{value:"light",children:"Light"}),n.jsx(l,{value:"dark",children:"Dark"}),n.jsx(l,{value:"system",children:"System"})]})]})]})},i={render:()=>n.jsxs(r,{children:[n.jsx(a,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Dropdown"})}),n.jsxs(c,{children:[n.jsxs(M,{children:[n.jsx(D,{children:"My Account"}),n.jsx(e,{}),n.jsx(o,{children:"Profile"}),n.jsx(o,{children:"Billing"}),n.jsx(o,{children:"Settings"})]}),n.jsx(e,{}),n.jsxs(M,{children:[n.jsx(D,{children:"Workspace"}),n.jsx(e,{}),n.jsx(o,{children:"Team Members"}),n.jsx(o,{children:"Invitations"}),n.jsx(o,{children:"Roles & Permissions"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            New Tab
            <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Save Page As...
            <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            Delete
            <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...t.parameters?.docs?.source},description:{story:"Default dropdown menu with common actions and shortcuts",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Keyboard Shortcuts</DropdownMenuItem>
              <DropdownMenuItem>API Documentation</DropdownMenuItem>
              <DropdownMenuItem>Community</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...d.parameters?.docs?.source},description:{story:"Dropdown menu with nested submenu",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>Show Sidebar</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>Show Toolbar</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Show Status Bar</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Dropdown menu with checkbox items for toggling options",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="light">
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Dropdown menu with radio group for single selection",...u.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Workspace</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Team Members</DropdownMenuItem>
            <DropdownMenuItem>Invitations</DropdownMenuItem>
            <DropdownMenuItem>Roles & Permissions</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Dropdown menu with grouped items for organizing related actions",...i.parameters?.docs?.description}}};const Y=["Default","WithSubmenu","WithCheckbox","WithRadioGroup","WithGroup"];export{t as Default,p as WithCheckbox,i as WithGroup,u as WithRadioGroup,d as WithSubmenu,Y as __namedExportsOrder,X as default};
