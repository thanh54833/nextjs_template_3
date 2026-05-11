import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as S}from"./checkbox-BB5KK0tZ.js";import{I as o}from"./input-CFt1qv4K.js";import{R,a as L}from"./radio-group-h6R_zzY6.js";import{r as _}from"./index-DYby6Z_P.js";import{c as P}from"./index-LHNt3CwB.js";import{c as s}from"./utils-BQHNewu7.js";import{L as D}from"./label-BCNIo0r_.js";import{S as T}from"./separator-tXcssORl.js";import"./icons-CJO6dUP8.js";import"./index-DOER7VuF.js";import"./index-BKV5D6oG.js";import"./index-Dc_FVRD7.js";import"./index-BmEHjAU8.js";import"./index-D1sqivKo.js";import"./index-t4OVC0Wb.js";import"./index-Doocx2sM.js";import"./index-CcuSeV1x.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BbSX8NXS.js";import"./index-BXQs120s.js";import"./index-C4JN59vf.js";import"./index-C1lvhlBT.js";import"./index-ByLlCQqU.js";import"./index-ofxjSrhS.js";function a({className:r,...i}){return e.jsx("fieldset",{"data-slot":"field-set",className:s("flex flex-col gap-6","has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",r),...i})}function p({className:r,variant:i="legend",...c}){return e.jsx("legend",{"data-slot":"field-legend","data-variant":i,className:s("mb-3 font-medium","data-[variant=legend]:text-base","data-[variant=label]:text-sm",r),...c})}function d({className:r,...i}){return e.jsx("div",{"data-slot":"field-group",className:s("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",r),...i})}const M=P("group/field flex w-full gap-3 data-[invalid=true]:text-destructive",{variants:{orientation:{vertical:["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"],responsive:["flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function t({className:r,orientation:i="vertical",...c}){return e.jsx("div",{role:"group","data-slot":"field","data-orientation":i,className:s(M({orientation:i}),r),...c})}function l({className:r,...i}){return e.jsx("div",{"data-slot":"field-content",className:s("group/field-content flex flex-1 flex-col gap-1.5 leading-snug",r),...i})}function n({className:r,...i}){return e.jsx(D,{"data-slot":"field-label",className:s("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4","has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",r),...i})}function w({className:r,...i}){return e.jsx("div",{"data-slot":"field-label",className:s("flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",r),...i})}function C({className:r,...i}){return e.jsx("p",{"data-slot":"field-description",className:s("text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance","last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",r),...i})}function I({children:r,className:i,...c}){return e.jsxs("div",{"data-slot":"field-separator","data-content":!!r,className:s("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",i),...c,children:[e.jsx(T,{className:"absolute inset-0 top-1/2"}),r&&e.jsx("span",{className:"bg-background text-muted-foreground relative mx-auto block w-fit px-2","data-slot":"field-separator-content",children:r})]})}function G({className:r,children:i,errors:c,...k}){const N=_.useMemo(()=>{if(i)return i;if(!c?.length)return null;const z=c.map(m=>typeof m=="string"?m:m?.message).filter(Boolean),y=Array.from(new Set(z));return y.length===1?y[0]:e.jsx("ul",{className:"ml-4 flex list-disc flex-col gap-1",children:y.map((m,E)=>e.jsx("li",{children:m},E))})},[i,c]);return N?e.jsx("div",{role:"alert","data-slot":"field-error",className:s("text-destructive text-sm font-normal",r),...k,children:N}):null}t.__docgenInfo={description:"",methods:[],displayName:"Field",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"FieldLabel"};C.__docgenInfo={description:"",methods:[],displayName:"FieldDescription"};G.__docgenInfo={description:"",methods:[],displayName:"FieldError",props:{errors:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | { message?: string } | undefined",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ message?: string }",signature:{properties:[{key:"message",value:{name:"string",required:!1}}]}},{name:"undefined"}]}],raw:"Array<string | { message?: string } | undefined>"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"FieldGroup"};p.__docgenInfo={description:"",methods:[],displayName:"FieldLegend",props:{variant:{required:!1,tsType:{name:"union",raw:"'legend' | 'label'",elements:[{name:"literal",value:"'legend'"},{name:"literal",value:"'label'"}]},description:"",defaultValue:{value:"'legend'",computed:!1}}}};I.__docgenInfo={description:"",methods:[],displayName:"FieldSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};l.__docgenInfo={description:"",methods:[],displayName:"FieldContent"};w.__docgenInfo={description:"",methods:[],displayName:"FieldTitle"};const me={component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Flexible field components with CVA-based variants for building complex forms with various orientations and layouts."}}}},u={render:()=>e.jsxs(a,{children:[e.jsx(p,{children:"Personal Information"}),e.jsxs(d,{children:[e.jsxs(t,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"first-name",children:"First Name"}),e.jsx(l,{children:e.jsx(o,{id:"first-name",placeholder:"John"})})]}),e.jsxs(t,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"last-name",children:"Last Name"}),e.jsx(l,{children:e.jsx(o,{id:"last-name",placeholder:"Doe"})})]})]})]})},h={render:()=>e.jsxs(a,{children:[e.jsx(p,{children:"Account Details"}),e.jsxs(d,{children:[e.jsxs(t,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"username",children:"Username"}),e.jsx(l,{children:e.jsx(o,{id:"username",placeholder:"johndoe"})})]}),e.jsxs(t,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(l,{children:e.jsx(o,{id:"email",type:"email",placeholder:"john@example.com"})})]})]})]})},F={render:()=>e.jsxs(a,{children:[e.jsx(p,{children:"Responsive Example"}),e.jsx(d,{children:e.jsxs(t,{orientation:"responsive",children:[e.jsx(n,{htmlFor:"display-name",children:"Display Name"}),e.jsx(l,{children:e.jsx(o,{id:"display-name",placeholder:"John Doe"})})]})})]})},f={render:()=>e.jsx(a,{children:e.jsx(d,{children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"project",children:"Project Name"}),e.jsx(w,{children:"Required for public visibility"}),e.jsx(l,{children:e.jsx(o,{id:"project",placeholder:"My Awesome Project"})}),e.jsx(C,{children:"This name will be displayed on your public profile."})]})})})},x={render:()=>e.jsx(a,{children:e.jsx(d,{children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"email-error",children:"Email"}),e.jsx(l,{children:e.jsx(o,{id:"email-error",type:"email",defaultValue:"invalid-email"})}),e.jsx(G,{errors:["Invalid email format","Email already exists"]})]})})})},j={render:()=>e.jsx(a,{children:e.jsxs(d,{children:[e.jsxs(t,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"section-title",children:"Section Title"}),e.jsx(l,{children:e.jsx(o,{id:"section-title",placeholder:"Enter title"})})]}),e.jsx(I,{children:"or"}),e.jsxs(t,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"section-link",children:"Section Link"}),e.jsx(l,{children:e.jsx(o,{id:"section-link",placeholder:"https://"})})]})]})})},g={render:()=>e.jsxs(a,{children:[e.jsx(p,{children:"Preferences"}),e.jsxs(d,{children:[e.jsx(t,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"notifications",className:"flex-row-reverse",children:[e.jsx(S,{id:"notifications"}),"Enable notifications"]})}),e.jsx(t,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"marketing",className:"flex-row-reverse",children:[e.jsx(S,{id:"marketing"}),"Marketing emails"]})})]})]})},b={render:()=>e.jsxs(a,{children:[e.jsx(p,{children:"Plan Selection"}),e.jsx(d,{children:e.jsx(t,{orientation:"vertical",children:e.jsxs(R,{defaultValue:"pro",children:[e.jsx(t,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"radio-basic",className:"flex-row-reverse",children:[e.jsx(L,{id:"radio-basic",value:"basic"}),"Basic Plan"]})}),e.jsx(t,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"radio-pro",className:"flex-row-reverse",children:[e.jsx(L,{id:"radio-pro",value:"pro"}),"Pro Plan"]})}),e.jsx(t,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"radio-enterprise",className:"flex-row-reverse",children:[e.jsx(L,{id:"radio-enterprise",value:"enterprise"}),"Enterprise Plan"]})})]})})})]})},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(a,{children:[e.jsx(p,{children:"Personal Info"}),e.jsxs(d,{children:[e.jsxs(t,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"first",children:"First Name"}),e.jsx(l,{children:e.jsx(o,{id:"first",placeholder:"John"})})]}),e.jsxs(t,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"last",children:"Last Name"}),e.jsx(l,{children:e.jsx(o,{id:"last",placeholder:"Doe"})})]})]})]}),e.jsxs(a,{children:[e.jsx(p,{children:"Contact"}),e.jsx(d,{children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"contact-email",children:"Email"}),e.jsx(l,{children:e.jsx(o,{id:"contact-email",type:"email",placeholder:"john@example.com"})})]})})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet>
      <FieldLegend>Personal Information</FieldLegend>
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <FieldContent>
            <Input id="first-name" placeholder="John" />
          </FieldContent>
        </Field>

        <Field orientation="vertical">
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <FieldContent>
            <Input id="last-name" placeholder="Doe" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...u.parameters?.docs?.source},description:{story:"Default vertical field layout with two inputs.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet>
      <FieldLegend>Account Details</FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <FieldContent>
            <Input id="username" placeholder="johndoe" />
          </FieldContent>
        </Field>

        <Field orientation="horizontal">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldContent>
            <Input id="email" type="email" placeholder="john@example.com" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...h.parameters?.docs?.source},description:{story:"Horizontal orientation for compact field layouts.",...h.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet>
      <FieldLegend>Responsive Example</FieldLegend>
      <FieldGroup>
        <Field orientation="responsive">
          <FieldLabel htmlFor="display-name">Display Name</FieldLabel>
          <FieldContent>
            <Input id="display-name" placeholder="John Doe" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...F.parameters?.docs?.source},description:{story:"Responsive orientation that adapts to container width.",...F.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet>
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="project">Project Name</FieldLabel>
          <FieldTitle>Required for public visibility</FieldTitle>
          <FieldContent>
            <Input id="project" placeholder="My Awesome Project" />
          </FieldContent>
          <FieldDescription>This name will be displayed on your public profile.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...f.parameters?.docs?.source},description:{story:"Field with title subtitle for additional context.",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet>
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="email-error">Email</FieldLabel>
          <FieldContent>
            <Input id="email-error" type="email" defaultValue="invalid-email" />
          </FieldContent>
          <FieldError errors={['Invalid email format', 'Email already exists']} />
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...x.parameters?.docs?.source},description:{story:"Field with error messages for validation feedback.",...x.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet>
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="section-title">Section Title</FieldLabel>
          <FieldContent>
            <Input id="section-title" placeholder="Enter title" />
          </FieldContent>
        </Field>

        <FieldSeparator>or</FieldSeparator>

        <Field orientation="vertical">
          <FieldLabel htmlFor="section-link">Section Link</FieldLabel>
          <FieldContent>
            <Input id="section-link" placeholder="https://" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...j.parameters?.docs?.source},description:{story:"Field with separator for grouping alternative options.",...j.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet>
      <FieldLegend>Preferences</FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="notifications" className="flex-row-reverse">
            <Checkbox id="notifications" />
            Enable notifications
          </FieldLabel>
        </Field>

        <Field orientation="horizontal">
          <FieldLabel htmlFor="marketing" className="flex-row-reverse">
            <Checkbox id="marketing" />
            Marketing emails
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...g.parameters?.docs?.source},description:{story:"Checkbox field with horizontal label layout.",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FieldSet>
      <FieldLegend>Plan Selection</FieldLegend>
      <FieldGroup>
        <Field orientation="vertical">
          <RadioGroup defaultValue="pro">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="radio-basic" className="flex-row-reverse">
                <RadioGroupItem id="radio-basic" value="basic" />
                Basic Plan
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="radio-pro" className="flex-row-reverse">
                <RadioGroupItem id="radio-pro" value="pro" />
                Pro Plan
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="radio-enterprise" className="flex-row-reverse">
                <RadioGroupItem id="radio-enterprise" value="enterprise" />
                Enterprise Plan
              </FieldLabel>
            </Field>
          </RadioGroup>
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...b.parameters?.docs?.source},description:{story:"Radio group field for single selection from options.",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <FieldSet>
        <FieldLegend>Personal Info</FieldLegend>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="first">First Name</FieldLabel>
            <FieldContent>
              <Input id="first" placeholder="John" />
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="last">Last Name</FieldLabel>
            <FieldContent>
              <Input id="last" placeholder="Doe" />
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Contact</FieldLegend>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="contact-email">Email</FieldLabel>
            <FieldContent>
              <Input id="contact-email" type="email" placeholder="john@example.com" />
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
}`,...v.parameters?.docs?.source},description:{story:"Multiple field groups for organizing complex forms.",...v.parameters?.docs?.description}}};const ue=["Default","HorizontalOrientation","ResponsiveOrientation","WithFieldTitle","WithErrors","WithSeparator","CheckboxField","RadioGroupField","MultipleFieldGroups"];export{g as CheckboxField,u as Default,h as HorizontalOrientation,v as MultipleFieldGroups,b as RadioGroupField,F as ResponsiveOrientation,x as WithErrors,f as WithFieldTitle,j as WithSeparator,ue as __namedExportsOrder,me as default};
