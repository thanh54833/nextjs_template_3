import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{B as x}from"./button-B1qRRuul.js";import{r as p}from"./index-CAPI2NOD.js";import{c as R}from"./index-DW48STyt.js";import{c as be}from"./index-CJNorLC4.js";import{c as Ie}from"./index-Da_hoYQ_.js";import{u as Q}from"./index-DwArvr4q.js";import{P as je}from"./index-C-szKJnO.js";import{c as Y,R as Se,A as _e,P as Ce,C as Ne,I as ye,S as Re,a as Te,b as Oe,d as Pe,L as Ae,e as ke,f as Ee,g as Ge,h as Be,G as Le,i as ze}from"./index-Cw3nuEB9.js";import{u as k}from"./index-BIKiyF7s.js";import{I as A}from"./icons-Bvzo9UON.js";import{c as w}from"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./index-AnhkqxcL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FyZeRQcs.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-BUhLVj6P.js";import"./index-Ux667dBy.js";import"./index-Cfs9WRo2.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BnvOM56Y.js";import"./index-B69vM9co.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./index-BIZqRJav.js";var T="DropdownMenu",[$e]=Ie(T,[Y]),u=Y(),[We,Z]=$e(T),ee=n=>{const{__scopeDropdownMenu:o,children:r,dir:t,open:a,defaultOpen:i,onOpenChange:m,modal:s=!0}=n,c=u(o),O=p.useRef(null),[v,b]=Q({prop:a,defaultProp:i??!1,onChange:m,caller:T});return e.jsx(We,{scope:o,triggerId:k(),triggerRef:O,contentId:k(),open:v,onOpenChange:b,onOpenToggle:p.useCallback(()=>b(ve=>!ve),[b]),modal:s,children:e.jsx(Se,{...c,open:v,onOpenChange:b,dir:t,modal:s,children:r})})};ee.displayName=T;var ne="DropdownMenuTrigger",oe=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,disabled:t=!1,...a}=n,i=Z(ne,r),m=u(r);return e.jsx(_e,{asChild:!0,...m,children:e.jsx(je.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...a,ref:be(o,i.triggerRef),onPointerDown:R(n.onPointerDown,s=>{!t&&s.button===0&&s.ctrlKey===!1&&(i.onOpenToggle(),i.open||s.preventDefault())}),onKeyDown:R(n.onKeyDown,s=>{t||(["Enter"," "].includes(s.key)&&i.onOpenToggle(),s.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(s.key)&&s.preventDefault())})})})});oe.displayName=ne;var Ke="DropdownMenuPortal",re=n=>{const{__scopeDropdownMenu:o,...r}=n,t=u(o);return e.jsx(Ce,{...t,...r})};re.displayName=Ke;var te="DropdownMenuContent",ae=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=Z(te,r),i=u(r),m=p.useRef(!1);return e.jsx(Ne,{id:a.contentId,"aria-labelledby":a.triggerId,...i,...t,ref:o,onCloseAutoFocus:R(n.onCloseAutoFocus,s=>{var c;m.current||(c=a.triggerRef.current)==null||c.focus(),m.current=!1,s.preventDefault()}),onInteractOutside:R(n.onInteractOutside,s=>{const c=s.detail.originalEvent,O=c.button===0&&c.ctrlKey===!0,v=c.button===2||O;(!a.modal||v)&&(m.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});ae.displayName=te;var qe="DropdownMenuGroup",de=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Le,{...a,...t,ref:o})});de.displayName=qe;var Ue="DropdownMenuLabel",se=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Ae,{...a,...t,ref:o})});se.displayName=Ue;var Fe="DropdownMenuItem",ie=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(ye,{...a,...t,ref:o})});ie.displayName=Fe;var He="DropdownMenuCheckboxItem",pe=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(ke,{...a,...t,ref:o})});pe.displayName=He;var Ve="DropdownMenuRadioGroup",ue=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Ge,{...a,...t,ref:o})});ue.displayName=Ve;var Xe="DropdownMenuRadioItem",ce=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Be,{...a,...t,ref:o})});ce.displayName=Xe;var Je="DropdownMenuItemIndicator",le=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Ee,{...a,...t,ref:o})});le.displayName=Je;var Qe="DropdownMenuSeparator",me=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Re,{...a,...t,ref:o})});me.displayName=Qe;var Ye="DropdownMenuArrow",Ze=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(ze,{...a,...t,ref:o})});Ze.displayName=Ye;var en=n=>{const{__scopeDropdownMenu:o,children:r,open:t,onOpenChange:a,defaultOpen:i}=n,m=u(o),[s,c]=Q({prop:t,defaultProp:i??!1,onChange:a,caller:"DropdownMenuSub"});return e.jsx(Te,{...m,open:s,onOpenChange:c,children:r})},nn="DropdownMenuSubTrigger",we=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Oe,{...a,...t,ref:o})});we.displayName=nn;var on="DropdownMenuSubContent",De=p.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,a=u(r);return e.jsx(Pe,{...a,...t,ref:o,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});De.displayName=on;var rn=ee,tn=oe,an=re,dn=ae,sn=de,pn=se,un=ie,cn=pe,ln=ue,mn=ce,Me=le,wn=me,Dn=en,Mn=we,hn=De;function D({...n}){return e.jsx(rn,{"data-slot":"dropdown-menu",...n})}function M({...n}){return e.jsx(tn,{"data-slot":"dropdown-menu-trigger",...n})}function h({className:n,sideOffset:o=4,...r}){return e.jsx(an,{children:e.jsx(dn,{"data-slot":"dropdown-menu-content",sideOffset:o,className:w("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",n),...r})})}function P({...n}){return e.jsx(sn,{"data-slot":"dropdown-menu-group",...n})}function d({className:n,inset:o,variant:r="default",...t}){return e.jsx(un,{"data-slot":"dropdown-menu-item","data-inset":o,"data-variant":r,className:w("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...t})}function N({className:n,children:o,checked:r,...t}){return e.jsxs(cn,{"data-slot":"dropdown-menu-checkbox-item",className:w("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),checked:r,...t,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(Me,{children:e.jsx(A.check,{className:"size-4"})})}),o]})}function he({...n}){return e.jsx(ln,{"data-slot":"dropdown-menu-radio-group",...n})}function y({className:n,children:o,...r}){return e.jsxs(mn,{"data-slot":"dropdown-menu-radio-item",className:w("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...r,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(Me,{children:e.jsx(A.circle,{className:"size-2 fill-current"})})}),o]})}function g({className:n,inset:o,...r}){return e.jsx(pn,{"data-slot":"dropdown-menu-label","data-inset":o,className:w("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",n),...r})}function l({className:n,...o}){return e.jsx(wn,{"data-slot":"dropdown-menu-separator",className:w("bg-border -mx-1 my-1 h-px",n),...o})}function f({className:n,...o}){return e.jsx("span",{"data-slot":"dropdown-menu-shortcut",className:w("text-muted-foreground ml-auto text-xs tracking-widest",n),...o})}function fe({...n}){return e.jsx(Dn,{"data-slot":"dropdown-menu-sub",...n})}function ge({className:n,inset:o,children:r,...t}){return e.jsxs(Mn,{"data-slot":"dropdown-menu-sub-trigger","data-inset":o,className:w("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",n),...t,children:[r,e.jsx(A.chevronRight,{className:"ml-auto size-4"})]})}function xe({className:n,...o}){return e.jsx(hn,{"data-slot":"dropdown-menu-sub-content",className:w("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",n),...o})}D.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu"};M.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuTrigger"};h.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuContent",props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};P.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuGroup"};g.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'destructive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'destructive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuCheckboxItem"};he.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioGroup"};y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioItem"};l.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSeparator"};f.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuShortcut"};fe.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSub"};ge.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};xe.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubContent"};const Fn={component:D,tags:["autodocs"],parameters:{layout:"centered"}},I={render:()=>e.jsxs(D,{children:[e.jsx(M,{asChild:!0,children:e.jsx(x,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(h,{children:[e.jsxs(d,{children:["New Tab",e.jsx(f,{children:"⌘T"})]}),e.jsxs(d,{children:["New Window",e.jsx(f,{children:"⌘N"})]}),e.jsx(l,{}),e.jsxs(d,{children:["Save Page As...",e.jsx(f,{children:"⇧⌘S"})]}),e.jsx(l,{}),e.jsxs(d,{variant:"destructive",children:["Delete",e.jsx(f,{children:"⌫"})]})]})]})},j={render:()=>e.jsxs(D,{children:[e.jsx(M,{asChild:!0,children:e.jsx(x,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(h,{children:[e.jsx(d,{children:"Profile"}),e.jsx(d,{children:"Billing"}),e.jsx(d,{children:"Settings"}),e.jsx(l,{}),e.jsxs(fe,{children:[e.jsx(ge,{children:"More"}),e.jsxs(xe,{children:[e.jsx(d,{children:"Keyboard Shortcuts"}),e.jsx(d,{children:"API Documentation"}),e.jsx(d,{children:"Community"})]})]}),e.jsx(l,{}),e.jsx(d,{variant:"destructive",children:"Sign Out"})]})]})},S={render:()=>e.jsxs(D,{children:[e.jsx(M,{asChild:!0,children:e.jsx(x,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(h,{children:[e.jsx(g,{children:"Appearance"}),e.jsx(l,{}),e.jsx(N,{checked:!0,children:"Show Sidebar"}),e.jsx(N,{checked:!0,children:"Show Toolbar"}),e.jsx(N,{children:"Show Status Bar"})]})]})},_={render:()=>e.jsxs(D,{children:[e.jsx(M,{asChild:!0,children:e.jsx(x,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(h,{children:[e.jsx(g,{children:"Theme"}),e.jsx(l,{}),e.jsxs(he,{value:"light",children:[e.jsx(y,{value:"light",children:"Light"}),e.jsx(y,{value:"dark",children:"Dark"}),e.jsx(y,{value:"system",children:"System"})]})]})]})},C={render:()=>e.jsxs(D,{children:[e.jsx(M,{asChild:!0,children:e.jsx(x,{variant:"outline",children:"Open Dropdown"})}),e.jsxs(h,{children:[e.jsxs(P,{children:[e.jsx(g,{children:"My Account"}),e.jsx(l,{}),e.jsx(d,{children:"Profile"}),e.jsx(d,{children:"Billing"}),e.jsx(d,{children:"Settings"})]}),e.jsx(l,{}),e.jsxs(P,{children:[e.jsx(g,{children:"Workspace"}),e.jsx(l,{}),e.jsx(d,{children:"Team Members"}),e.jsx(d,{children:"Invitations"}),e.jsx(d,{children:"Roles & Permissions"})]})]})]})};var E,G,B;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(G=I.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var L,z,$;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(z=j.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var W,K,q;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var U,F,H;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(F=_.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var V,X,J;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(X=C.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};const Hn=["Default","WithSubmenu","WithCheckbox","WithRadioGroup","WithGroup"];export{I as Default,S as WithCheckbox,C as WithGroup,_ as WithRadioGroup,j as WithSubmenu,Hn as __namedExportsOrder,Fn as default};
