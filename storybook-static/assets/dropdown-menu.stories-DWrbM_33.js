import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{B as S}from"./button-B1qRRuul.js";import{r as p}from"./index-CAPI2NOD.js";import{c as R}from"./index-DW48STyt.js";import{c as Oe}from"./index-CJNorLC4.js";import{c as Pe}from"./index-Da_hoYQ_.js";import{u as se}from"./index-DwArvr4q.js";import{P as Ae}from"./index-C-szKJnO.js";import{c as ie,R as ke,A as Ee,P as Ge,C as Be,I as Le,S as ze,a as $e,b as We,d as Ke,L as Ue,e as qe,f as Fe,g as He,h as Ve,G as Xe,i as Je}from"./index-Cw3nuEB9.js";import{u as k}from"./index-BIKiyF7s.js";import{I as A}from"./icons-Bvzo9UON.js";import{c as w}from"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./index-AnhkqxcL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FyZeRQcs.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-BUhLVj6P.js";import"./index-Ux667dBy.js";import"./index-Cfs9WRo2.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BnvOM56Y.js";import"./index-B69vM9co.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./index-BIZqRJav.js";var T="DropdownMenu",[Qe]=Pe(T,[ie]),u=ie(),[Ye,pe]=Qe(T),ue=n=>{const{__scopeDropdownMenu:o,children:r,dir:t,open:a,defaultOpen:i,onOpenChange:m,modal:s=!0}=n,c=u(o),O=p.useRef(null),[_,C]=se({prop:a,defaultProp:i??!1,onChange:m,caller:T});return e.jsx(Ye,{scope:o,triggerId:k(),triggerRef:O,contentId:k(),open:_,onOpenChange:C,onOpenToggle:p.useCallback(()=>C(Te=>!Te),[C]),modal:s,children:e.jsx(ke,{...c,open:_,onOpenChange:C,dir:t,modal:s,children:r})})};ue.displayName=T;var ce="DropdownMenuTrigger",le=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,disabled:t=!1,...a}=n,i=pe(ce,r),m=u(r);return e.jsx(Ee,{asChild:!0,...m,children:e.jsx(Ae.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...a,ref:Oe(o,i.triggerRef),onPointerDown:R(n.onPointerDown,s=>{!t&&s.button===0&&s.ctrlKey===!1&&(i.onOpenToggle(),i.open||s.preventDefault())}),onKeyDown:R(n.onKeyDown,s=>{t||(["Enter"," "].includes(s.key)&&i.onOpenToggle(),s.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(s.key)&&s.preventDefault())})})})});le.displayName=ce;var Ze="DropdownMenuPortal",me=n=>{const{__scopeDropdownMenu:o,...r}=n,t=u(o);return e.jsx(Ge,{...t,...r})};me.displayName=Ze;var we="DropdownMenuContent",De=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=pe(we,r),i=u(r),m=p.useRef(!1);return e.jsx(Be,{id:a.contentId,"aria-labelledby":a.triggerId,...i,...t,ref:o,onCloseAutoFocus:R(n.onCloseAutoFocus,s=>{var c;m.current||(c=a.triggerRef.current)==null||c.focus(),m.current=!1,s.preventDefault()}),onInteractOutside:R(n.onInteractOutside,s=>{const c=s.detail.originalEvent,O=c.button===0&&c.ctrlKey===!0,_=c.button===2||O;(!a.modal||_)&&(m.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});De.displayName=we;var en="DropdownMenuGroup",he=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Xe,{...a,...t,ref:o})});he.displayName=en;var nn="DropdownMenuLabel",Me=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Ue,{...a,...t,ref:o})});Me.displayName=nn;var on="DropdownMenuItem",ge=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Le,{...a,...t,ref:o})});ge.displayName=on;var rn="DropdownMenuCheckboxItem",fe=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(qe,{...a,...t,ref:o})});fe.displayName=rn;var tn="DropdownMenuRadioGroup",xe=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(He,{...a,...t,ref:o})});xe.displayName=tn;var an="DropdownMenuRadioItem",ve=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Ve,{...a,...t,ref:o})});ve.displayName=an;var dn="DropdownMenuItemIndicator",be=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Fe,{...a,...t,ref:o})});be.displayName=dn;var sn="DropdownMenuSeparator",Ie=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(ze,{...a,...t,ref:o})});Ie.displayName=sn;var pn="DropdownMenuArrow",un=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Je,{...a,...t,ref:o})});un.displayName=pn;var cn=n=>{const{__scopeDropdownMenu:o,children:r,open:t,onOpenChange:a,defaultOpen:i}=n,m=u(o),[s,c]=se({prop:t,defaultProp:i??!1,onChange:a,caller:"DropdownMenuSub"});return e.jsx($e,{...m,open:s,onOpenChange:c,children:r})},ln="DropdownMenuSubTrigger",je=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(We,{...a,...t,ref:o})});je.displayName=ln;var mn="DropdownMenuSubContent",Se=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Ke,{...a,...t,ref:o,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Se.displayName=mn;var wn=ue,Dn=le,hn=me,Mn=De,gn=he,fn=Me,xn=ge,vn=fe,bn=xe,In=ve,_e=be,jn=Ie,Sn=cn,_n=je,Cn=Se;function D({...n}){return e.jsx(wn,{"data-slot":"dropdown-menu",...n})}function h({...n}){return e.jsx(Dn,{"data-slot":"dropdown-menu-trigger",...n})}function M({className:n,sideOffset:o=4,...r}){return e.jsx(hn,{children:e.jsx(Mn,{"data-slot":"dropdown-menu-content",sideOffset:o,className:w("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",n),...r})})}function P({...n}){return e.jsx(gn,{"data-slot":"dropdown-menu-group",...n})}function d({className:n,inset:o,variant:r="default",...t}){return e.jsx(xn,{"data-slot":"dropdown-menu-item","data-inset":o,"data-variant":r,className:w("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...t})}function y({className:n,children:o,checked:r,...t}){return e.jsxs(vn,{"data-slot":"dropdown-menu-checkbox-item",className:w("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),checked:r,...t,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(_e,{children:e.jsx(A.check,{className:"size-4"})})}),o]})}function Ce({...n}){return e.jsx(bn,{"data-slot":"dropdown-menu-radio-group",...n})}function N({className:n,children:o,...r}){return e.jsxs(In,{"data-slot":"dropdown-menu-radio-item",className:w("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...r,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(_e,{children:e.jsx(A.circle,{className:"size-2 fill-current"})})}),o]})}function j({className:n,inset:o,...r}){return e.jsx(fn,{"data-slot":"dropdown-menu-label","data-inset":o,className:w("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",n),...r})}function l({className:n,...o}){return e.jsx(jn,{"data-slot":"dropdown-menu-separator",className:w("bg-border -mx-1 my-1 h-px",n),...o})}function I({className:n,...o}){return e.jsx("span",{"data-slot":"dropdown-menu-shortcut",className:w("text-muted-foreground ml-auto text-xs tracking-widest",n),...o})}function ye({...n}){return e.jsx(Sn,{"data-slot":"dropdown-menu-sub",...n})}function Ne({className:n,inset:o,children:r,...t}){return e.jsxs(_n,{"data-slot":"dropdown-menu-sub-trigger","data-inset":o,className:w("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",n),...t,children:[r,e.jsx(A.chevronRight,{className:"ml-auto size-4"})]})}function Re({className:n,...o}){return e.jsx(Cn,{"data-slot":"dropdown-menu-sub-content",className:w("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",n),...o})}D.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu"};h.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuTrigger"};M.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuContent",props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};P.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuGroup"};j.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'destructive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'destructive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuCheckboxItem"};Ce.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioGroup"};N.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioItem"};l.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSeparator"};I.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuShortcut"};ye.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSub"};Ne.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};Re.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubContent"};const oo={component:D,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component for revealing actions, options, or navigation. Built on Radix UI primitives with support for checkboxes, radio groups, and nested submenus."}}}},g={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(S,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(M,{children:[e.jsxs(d,{children:["New Tab",e.jsx(I,{children:"⌘T"})]}),e.jsxs(d,{children:["New Window",e.jsx(I,{children:"⌘N"})]}),e.jsx(l,{}),e.jsxs(d,{children:["Save Page As...",e.jsx(I,{children:"⇧⌘S"})]}),e.jsx(l,{}),e.jsxs(d,{variant:"destructive",children:["Delete",e.jsx(I,{children:"⌫"})]})]})]})},f={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(S,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(M,{children:[e.jsx(d,{children:"Profile"}),e.jsx(d,{children:"Billing"}),e.jsx(d,{children:"Settings"}),e.jsx(l,{}),e.jsxs(ye,{children:[e.jsx(Ne,{children:"More"}),e.jsxs(Re,{children:[e.jsx(d,{children:"Keyboard Shortcuts"}),e.jsx(d,{children:"API Documentation"}),e.jsx(d,{children:"Community"})]})]}),e.jsx(l,{}),e.jsx(d,{variant:"destructive",children:"Sign Out"})]})]})},x={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(S,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(M,{children:[e.jsx(j,{children:"Appearance"}),e.jsx(l,{}),e.jsx(y,{checked:!0,children:"Show Sidebar"}),e.jsx(y,{checked:!0,children:"Show Toolbar"}),e.jsx(y,{children:"Show Status Bar"})]})]})},v={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(S,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(M,{children:[e.jsx(j,{children:"Theme"}),e.jsx(l,{}),e.jsxs(Ce,{value:"light",children:[e.jsx(N,{value:"light",children:"Light"}),e.jsx(N,{value:"dark",children:"Dark"}),e.jsx(N,{value:"system",children:"System"})]})]})]})},b={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(S,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(M,{children:[e.jsxs(P,{children:[e.jsx(j,{children:"My Account"}),e.jsx(l,{}),e.jsx(d,{children:"Profile"}),e.jsx(d,{children:"Billing"}),e.jsx(d,{children:"Settings"})]}),e.jsx(l,{}),e.jsxs(P,{children:[e.jsx(j,{children:"Workspace"}),e.jsx(l,{}),e.jsx(d,{children:"Team Members"}),e.jsx(d,{children:"Invitations"}),e.jsx(d,{children:"Roles & Permissions"})]})]})]})};var E,G,B,L,z;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(G=g.parameters)==null?void 0:G.docs)==null?void 0:B.source},description:{story:"Default dropdown menu with common actions and shortcuts",...(z=(L=g.parameters)==null?void 0:L.docs)==null?void 0:z.description}}};var $,W,K,U,q;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(W=f.parameters)==null?void 0:W.docs)==null?void 0:K.source},description:{story:"Dropdown menu with nested submenu",...(q=(U=f.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var F,H,V,X,J;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(H=x.parameters)==null?void 0:H.docs)==null?void 0:V.source},description:{story:"Dropdown menu with checkbox items for toggling options",...(J=(X=x.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};var Q,Y,Z,ee,ne;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Dropdown menu with radio group for single selection",...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.description}}};var oe,re,te,ae,de;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=(re=b.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:"Dropdown menu with grouped items for organizing related actions",...(de=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:de.description}}};const ro=["Default","WithSubmenu","WithCheckbox","WithRadioGroup","WithGroup"];export{g as Default,x as WithCheckbox,b as WithGroup,v as WithRadioGroup,f as WithSubmenu,ro as __namedExportsOrder,oo as default};
