import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as n}from"./utils-BQHNewu7.js";import{B as i}from"./button-Ch-BQGzE.js";import"./index-LHNt3CwB.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";function m({className:e,...t}){return r.jsx("div",{"data-slot":"card",className:n("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function c({className:e,...t}){return r.jsx("div",{"data-slot":"card-header",className:n("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function l({className:e,...t}){return r.jsx("div",{"data-slot":"card-title",className:n("leading-none font-semibold",e),...t})}function p({className:e,...t}){return r.jsx("div",{"data-slot":"card-description",className:n("text-muted-foreground text-sm",e),...t})}function C({className:e,...t}){return r.jsx("div",{"data-slot":"card-action",className:n("col-start-2 row-span-2 row-start-1 self-start justify-self-end",e),...t})}function s({className:e,...t}){return r.jsx("div",{"data-slot":"card-content",className:n("px-6",e),...t})}function u({className:e,...t}){return r.jsx("div",{"data-slot":"card-footer",className:n("flex items-center px-6 [.border-t]:pt-6",e),...t})}m.__docgenInfo={description:"",methods:[],displayName:"Card"};c.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};u.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};l.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};C.__docgenInfo={description:"",methods:[],displayName:"CardAction"};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};s.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const v={component:m,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Card is a container component for grouping and displaying content. It includes sub-components: `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, and `CardFooter` for flexible layouts."}}}},a={args:{children:r.jsxs(r.Fragment,{children:[r.jsxs(c,{children:[r.jsx(l,{children:"Card Title"}),r.jsx(p,{children:"This is a card description."})]}),r.jsx(s,{children:r.jsx("p",{children:"Card content goes here."})})]})}},o={args:{children:r.jsxs(r.Fragment,{children:[r.jsxs(c,{children:[r.jsx(l,{children:"Profile"}),r.jsx(C,{children:r.jsx(i,{variant:"ghost",size:"icon-xs",children:"Edit"})}),r.jsx(p,{children:"Manage your profile settings"})]}),r.jsx(s,{children:r.jsx("p",{children:"Your profile information"})}),r.jsxs(u,{children:[r.jsx(i,{variant:"outline",children:"Cancel"}),r.jsx(i,{children:"Save"})]})]})}},d={args:{children:r.jsx(s,{children:"Simple card content"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Default card with header, title, description, and content",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Card with action buttons in header and footer",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <CardContent>Simple card content</CardContent>
  }
}`,...d.parameters?.docs?.source},description:{story:"Simple card with just content",...d.parameters?.docs?.description}}};const T=["Default","WithAction","SimpleCard"];export{a as Default,d as SimpleCard,o as WithAction,T as __namedExportsOrder,v as default};
