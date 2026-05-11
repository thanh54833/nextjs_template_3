import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{C as S}from"./checkbox-DDAvnhjQ.js";import{I as a}from"./input-BWjd11J0.js";import{R as Ne,a as L}from"./radio-group-BP5NeDnU.js";import{r as Se}from"./index-Br2IOmUs.js";import{c as we}from"./index-D1SQP9Z-.js";import{c}from"./utils-BQHNewu7.js";import{L as Ce}from"./label-DX3nwFxV.js";import{S as Ie}from"./separator-D06F4YFP.js";import"./icons-Bwb0mD-e.js";import"./index-B1gorirK.js";import"./index-BRlNe44M.js";import"./index-DW48STyt.js";import"./index-D7wzBi_S.js";import"./index-1oe2SjNl.js";import"./index-B_pGI_cq.js";import"./index-B7w1hHoe.js";import"./index-EtsJrrfg.js";import"./index-Caz76J1-.js";import"./index-BI3c041M.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CGqftQ-p.js";import"./index-x4TqUDAk.js";import"./index-OvQM5fGA.js";import"./index-BBh8-vjY.js";import"./index-DLhQgCaF.js";import"./index-Bal2i3vH.js";function d({className:t,...i}){return e.jsx("fieldset",{"data-slot":"field-set",className:c("flex flex-col gap-6","has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",t),...i})}function p({className:t,variant:i="legend",...o}){return e.jsx("legend",{"data-slot":"field-legend","data-variant":i,className:c("mb-3 font-medium","data-[variant=legend]:text-base","data-[variant=label]:text-sm",t),...o})}function s({className:t,...i}){return e.jsx("div",{"data-slot":"field-group",className:c("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",t),...i})}const Ge=we("group/field flex w-full gap-3 data-[invalid=true]:text-destructive",{variants:{orientation:{vertical:["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"],responsive:["flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function r({className:t,orientation:i="vertical",...o}){return e.jsx("div",{role:"group","data-slot":"field","data-orientation":i,className:c(Ge({orientation:i}),t),...o})}function l({className:t,...i}){return e.jsx("div",{"data-slot":"field-content",className:c("group/field-content flex flex-1 flex-col gap-1.5 leading-snug",t),...i})}function n({className:t,...i}){return e.jsx(Ce,{"data-slot":"field-label",className:c("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4","has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",t),...i})}function xe({className:t,...i}){return e.jsx("div",{"data-slot":"field-label",className:c("flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",t),...i})}function je({className:t,...i}){return e.jsx("p",{"data-slot":"field-description",className:c("text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance","last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",t),...i})}function ge({children:t,className:i,...o}){return e.jsxs("div",{"data-slot":"field-separator","data-content":!!t,className:c("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",i),...o,children:[e.jsx(Ie,{className:"absolute inset-0 top-1/2"}),t&&e.jsx("span",{className:"bg-background text-muted-foreground relative mx-auto block w-fit px-2","data-slot":"field-separator-content",children:t})]})}function be({className:t,children:i,errors:o,...ve}){const N=Se.useMemo(()=>{if(i)return i;if(!(o!=null&&o.length))return null;const ye=o.map(m=>typeof m=="string"?m:m==null?void 0:m.message).filter(Boolean),y=Array.from(new Set(ye));return y.length===1?y[0]:e.jsx("ul",{className:"ml-4 flex list-disc flex-col gap-1",children:y.map((m,Le)=>e.jsx("li",{children:m},Le))})},[i,o]);return N?e.jsx("div",{role:"alert","data-slot":"field-error",className:c("text-destructive text-sm font-normal",t),...ve,children:N}):null}r.__docgenInfo={description:"",methods:[],displayName:"Field",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"FieldLabel"};je.__docgenInfo={description:"",methods:[],displayName:"FieldDescription"};be.__docgenInfo={description:"",methods:[],displayName:"FieldError",props:{errors:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | { message?: string } | undefined",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ message?: string }",signature:{properties:[{key:"message",value:{name:"string",required:!1}}]}},{name:"undefined"}]}],raw:"Array<string | { message?: string } | undefined>"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"FieldGroup"};p.__docgenInfo={description:"",methods:[],displayName:"FieldLegend",props:{variant:{required:!1,tsType:{name:"union",raw:"'legend' | 'label'",elements:[{name:"literal",value:"'legend'"},{name:"literal",value:"'label'"}]},description:"",defaultValue:{value:"'legend'",computed:!1}}}};ge.__docgenInfo={description:"",methods:[],displayName:"FieldSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};l.__docgenInfo={description:"",methods:[],displayName:"FieldContent"};xe.__docgenInfo={description:"",methods:[],displayName:"FieldTitle"};const ri={component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Flexible field components with CVA-based variants for building complex forms with various orientations and layouts."}}}},u={render:()=>e.jsxs(d,{children:[e.jsx(p,{children:"Personal Information"}),e.jsxs(s,{children:[e.jsxs(r,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"first-name",children:"First Name"}),e.jsx(l,{children:e.jsx(a,{id:"first-name",placeholder:"John"})})]}),e.jsxs(r,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"last-name",children:"Last Name"}),e.jsx(l,{children:e.jsx(a,{id:"last-name",placeholder:"Doe"})})]})]})]})},h={render:()=>e.jsxs(d,{children:[e.jsx(p,{children:"Account Details"}),e.jsxs(s,{children:[e.jsxs(r,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"username",children:"Username"}),e.jsx(l,{children:e.jsx(a,{id:"username",placeholder:"johndoe"})})]}),e.jsxs(r,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(l,{children:e.jsx(a,{id:"email",type:"email",placeholder:"john@example.com"})})]})]})]})},F={render:()=>e.jsxs(d,{children:[e.jsx(p,{children:"Responsive Example"}),e.jsx(s,{children:e.jsxs(r,{orientation:"responsive",children:[e.jsx(n,{htmlFor:"display-name",children:"Display Name"}),e.jsx(l,{children:e.jsx(a,{id:"display-name",placeholder:"John Doe"})})]})})]})},f={render:()=>e.jsx(d,{children:e.jsx(s,{children:e.jsxs(r,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"project",children:"Project Name"}),e.jsx(xe,{children:"Required for public visibility"}),e.jsx(l,{children:e.jsx(a,{id:"project",placeholder:"My Awesome Project"})}),e.jsx(je,{children:"This name will be displayed on your public profile."})]})})})},x={render:()=>e.jsx(d,{children:e.jsx(s,{children:e.jsxs(r,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"email-error",children:"Email"}),e.jsx(l,{children:e.jsx(a,{id:"email-error",type:"email",defaultValue:"invalid-email"})}),e.jsx(be,{errors:["Invalid email format","Email already exists"]})]})})})},j={render:()=>e.jsx(d,{children:e.jsxs(s,{children:[e.jsxs(r,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"section-title",children:"Section Title"}),e.jsx(l,{children:e.jsx(a,{id:"section-title",placeholder:"Enter title"})})]}),e.jsx(ge,{children:"or"}),e.jsxs(r,{orientation:"vertical",children:[e.jsx(n,{htmlFor:"section-link",children:"Section Link"}),e.jsx(l,{children:e.jsx(a,{id:"section-link",placeholder:"https://"})})]})]})})},g={render:()=>e.jsxs(d,{children:[e.jsx(p,{children:"Preferences"}),e.jsxs(s,{children:[e.jsx(r,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"notifications",className:"flex-row-reverse",children:[e.jsx(S,{id:"notifications"}),"Enable notifications"]})}),e.jsx(r,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"marketing",className:"flex-row-reverse",children:[e.jsx(S,{id:"marketing"}),"Marketing emails"]})})]})]})},b={render:()=>e.jsxs(d,{children:[e.jsx(p,{children:"Plan Selection"}),e.jsx(s,{children:e.jsx(r,{orientation:"vertical",children:e.jsxs(Ne,{defaultValue:"pro",children:[e.jsx(r,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"radio-basic",className:"flex-row-reverse",children:[e.jsx(L,{id:"radio-basic",value:"basic"}),"Basic Plan"]})}),e.jsx(r,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"radio-pro",className:"flex-row-reverse",children:[e.jsx(L,{id:"radio-pro",value:"pro"}),"Pro Plan"]})}),e.jsx(r,{orientation:"horizontal",children:e.jsxs(n,{htmlFor:"radio-enterprise",className:"flex-row-reverse",children:[e.jsx(L,{id:"radio-enterprise",value:"enterprise"}),"Enterprise Plan"]})})]})})})]})},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(d,{children:[e.jsx(p,{children:"Personal Info"}),e.jsxs(s,{children:[e.jsxs(r,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"first",children:"First Name"}),e.jsx(l,{children:e.jsx(a,{id:"first",placeholder:"John"})})]}),e.jsxs(r,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"last",children:"Last Name"}),e.jsx(l,{children:e.jsx(a,{id:"last",placeholder:"Doe"})})]})]})]}),e.jsxs(d,{children:[e.jsx(p,{children:"Contact"}),e.jsx(s,{children:e.jsxs(r,{orientation:"horizontal",children:[e.jsx(n,{htmlFor:"contact-email",children:"Email"}),e.jsx(l,{children:e.jsx(a,{id:"contact-email",type:"email",placeholder:"john@example.com"})})]})})]})]})};var w,C,I,G,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(C=u.parameters)==null?void 0:C.docs)==null?void 0:I.source},description:{story:"Default vertical field layout with two inputs.",...(k=(G=u.parameters)==null?void 0:G.docs)==null?void 0:k.description}}};var z,E,R,_,P;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(E=h.parameters)==null?void 0:E.docs)==null?void 0:R.source},description:{story:"Horizontal orientation for compact field layouts.",...(P=(_=h.parameters)==null?void 0:_.docs)==null?void 0:P.description}}};var D,T,M,V,q;F.parameters={...F.parameters,docs:{...(D=F.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(T=F.parameters)==null?void 0:T.docs)==null?void 0:M.source},description:{story:"Responsive orientation that adapts to container width.",...(q=(V=F.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var A,J,W,O,B;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(J=f.parameters)==null?void 0:J.docs)==null?void 0:W.source},description:{story:"Field with title subtitle for additional context.",...(B=(O=f.parameters)==null?void 0:O.docs)==null?void 0:B.description}}};var H,U,K,Q,X;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(U=x.parameters)==null?void 0:U.docs)==null?void 0:K.source},description:{story:"Field with error messages for validation feedback.",...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,$,ee,ie;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Field with separator for grouping alternative options.",...(ie=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ie.description}}};var te,re,ne,le,ae;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:"Checkbox field with horizontal label layout.",...(ae=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ae.description}}};var oe,de,se,ce,pe;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(de=b.parameters)==null?void 0:de.docs)==null?void 0:se.source},description:{story:"Radio group field for single selection from options.",...(pe=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};var me,ue,he,Fe,fe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:he.source},description:{story:"Multiple field groups for organizing complex forms.",...(fe=(Fe=v.parameters)==null?void 0:Fe.docs)==null?void 0:fe.description}}};const ni=["Default","HorizontalOrientation","ResponsiveOrientation","WithFieldTitle","WithErrors","WithSeparator","CheckboxField","RadioGroupField","MultipleFieldGroups"];export{g as CheckboxField,u as Default,h as HorizontalOrientation,v as MultipleFieldGroups,b as RadioGroupField,F as ResponsiveOrientation,x as WithErrors,f as WithFieldTitle,j as WithSeparator,ni as __namedExportsOrder,ri as default};
