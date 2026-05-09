import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{c as n}from"./utils-BQHNewu7.js";import{B as i}from"./button-B1qRRuul.js";import"./index-D1SQP9Z-.js";import"./index-AnhkqxcL.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CJNorLC4.js";function N({className:e,...t}){return r.jsx("div",{"data-slot":"card",className:n("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function c({className:e,...t}){return r.jsx("div",{"data-slot":"card-header",className:n("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function l({className:e,...t}){return r.jsx("div",{"data-slot":"card-title",className:n("leading-none font-semibold",e),...t})}function p({className:e,...t}){return r.jsx("div",{"data-slot":"card-description",className:n("text-muted-foreground text-sm",e),...t})}function v({className:e,...t}){return r.jsx("div",{"data-slot":"card-action",className:n("col-start-2 row-span-2 row-start-1 self-start justify-self-end",e),...t})}function s({className:e,...t}){return r.jsx("div",{"data-slot":"card-content",className:n("px-6",e),...t})}function y({className:e,...t}){return r.jsx("div",{"data-slot":"card-footer",className:n("flex items-center px-6 [.border-t]:pt-6",e),...t})}N.__docgenInfo={description:"",methods:[],displayName:"Card"};c.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};y.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};l.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};v.__docgenInfo={description:"",methods:[],displayName:"CardAction"};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};s.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const H={component:N,tags:["autodocs"],parameters:{layout:"padded"}},a={args:{children:r.jsxs(r.Fragment,{children:[r.jsxs(c,{children:[r.jsx(l,{children:"Card Title"}),r.jsx(p,{children:"This is a card description."})]}),r.jsx(s,{children:r.jsx("p",{children:"Card content goes here."})})]})}},o={args:{children:r.jsxs(r.Fragment,{children:[r.jsxs(c,{children:[r.jsx(l,{children:"Profile"}),r.jsx(v,{children:r.jsx(i,{variant:"ghost",size:"icon-xs",children:"Edit"})}),r.jsx(p,{children:"Manage your profile settings"})]}),r.jsx(s,{children:r.jsx("p",{children:"Your profile information"})}),r.jsxs(y,{children:[r.jsx(i,{variant:"outline",children:"Cancel"}),r.jsx(i,{children:"Save"})]})]})}},d={args:{children:r.jsx(s,{children:"Simple card content"})}};var m,C,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a card description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
      </>
  }
}`,...(u=(C=a.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var h,x,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardAction>
            <Button variant="ghost" size="icon-xs">Edit</Button>
          </CardAction>
          <CardDescription>Manage your profile settings</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Your profile information</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </>
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,j,_;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <CardContent>Simple card content</CardContent>
  }
}`,...(_=(j=d.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const w=["Default","WithAction","SimpleCard"];export{a as Default,d as SimpleCard,o as WithAction,w as __namedExportsOrder,H as default};
