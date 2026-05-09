import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{I as d}from"./input-BWjd11J0.js";import{r as a}from"./index-CAPI2NOD.js";import{w as R}from"./with-selector-C2wV8QlV.js";import{a as U,F as G,h as O}from"./field-Bn4jZdm8.js";import{c as S}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BHo6bcfZ.js";import"./index-D1SQP9Z-.js";import"./label-UzqpTrrA.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";import"./separator-BjUrQ461.js";function q(r,o){return r===o}function F(r,o,s=q){const t=a.useCallback(m=>{if(!r)return()=>{};const{unsubscribe:u}=r.subscribe(m);return u},[r]),n=a.useCallback(()=>r==null?void 0:r.get(),[r]);return R.useSyncExternalStoreWithSelector(t,n,n,o,s)}const g=a.createContext(null),V=a.createContext(null);function B(){const r=a.useContext(V);if(!r)throw new Error("`formContext` only works when within a `formComponent` passed to `createFormHook`");return r}function K(){function r(){const o=a.useContext(g);if(!o)throw new Error("`fieldContext` only works when within a `fieldComponent` passed to `createFormHook`");return o}return{fieldContext:g,useFieldContext:r,useFormContext:B,formContext:V}}const{useFieldContext:L,useFormContext:w}=K(),z=a.createContext({}),H=()=>{const{id:r}=a.useContext(z),o=L();if(!o)throw new Error("useFieldContext should be used within <AppField>");const{name:s,store:t,...n}=o,l=F(t,m=>m.meta.errors);return{id:r,name:s,formItemId:`${r}-form-item`,formDescriptionId:`${r}-form-item-description`,formMessageId:`${r}-form-item-message`,errors:l,store:t,...n}};function c({className:r,children:o,...s}){const t=a.useId();return e.jsx(z.Provider,{value:{id:t},children:e.jsx(U,{className:S("grid gap-1",r),...s,children:o})})}function i({children:r,...o}){const{errors:s,formItemId:t,formDescriptionId:n,formMessageId:l,store:m}=H(),u=w(),p=F(m,v=>v.meta.isTouched),J=F(u.store,v=>v.submissionAttempts>0),j=!!s.length&&(p||J);return e.jsx(G,{"data-invalid":j,id:t,"aria-describedby":j?`${n} ${l}`:`${n}`,"aria-invalid":j,...o,children:r})}function N({className:r,...o}){const{errors:s,formMessageId:t,store:n}=H(),l=w(),m=F(n,p=>p.meta.isTouched),u=F(l.store,p=>p.submissionAttempts>0);return!s.length||!m&&!u?null:e.jsx(O,{"data-slot":"form-message",id:t,className:S("text-destructive text-sm",r),...o,errors:s})}function W({className:r,...o}){const s=w();return e.jsx(s.Subscribe,{selector:t=>t.errors,children:t=>t.length?e.jsx("div",{role:"alert",className:S("bg-destructive/10 text-destructive rounded-md border p-3 text-sm",r),...o,children:e.jsx("ul",{className:"list-disc space-y-1 pl-4",children:t.map((n,l)=>e.jsx("li",{children:String(n)},l))})}):null})}c.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};i.__docgenInfo={description:"",methods:[],displayName:"Field"};N.__docgenInfo={description:"",methods:[],displayName:"FieldError"};W.__docgenInfo={description:`Renders form-level validation errors (cross-field errors).
Place inside form.AppForm to show errors from form-level validators.

@example
\`\`\`tsx
<form.AppForm>
  <form.Form>
    <FormErrors />
    ...fields...
  </form.Form>
</form.AppForm>
\`\`\``,methods:[],displayName:"FormErrors"};const ce={component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"TanStack Form contexts and structural components for building complex forms with validation and error handling."}}}},f={render:()=>e.jsx("div",{className:"w-full max-w-md p-4",children:e.jsx("p",{className:"text-muted-foreground",children:"Form Context is used internally by TanStack Form. See tanstack-form.tsx for the full form system."})})},x={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-6 p-4",children:[e.jsxs(c,{children:[e.jsxs(i,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"name",className:"text-sm font-medium",children:"Full Name"}),e.jsx(d,{id:"name",placeholder:"John Doe"})]}),e.jsxs(i,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email Address"}),e.jsx(d,{id:"email",type:"email",placeholder:"john@example.com"})]})]}),e.jsxs(c,{children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx("label",{htmlFor:"username",className:"text-sm font-medium",children:"Username"}),e.jsx(d,{id:"username",placeholder:"johndoe"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"Password"}),e.jsx(d,{id:"password",type:"password",placeholder:"••••••••"})]})]})]})},h={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-6 p-4",children:[e.jsx(c,{children:e.jsxs(i,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"email-error",className:"text-sm font-medium",children:"Email"}),e.jsx(d,{id:"email-error",defaultValue:"invalid-email"}),e.jsx(N,{errors:["Invalid email format"]})]})}),e.jsx(c,{children:e.jsxs(i,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"password-error",className:"text-sm font-medium",children:"Password"}),e.jsx(d,{id:"password-error",type:"password",defaultValue:"123"}),e.jsx(N,{errors:["Password must be at least 8 characters","Must contain a number"]})]})})]})},b={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-6 p-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"FormErrors displays form-level validation errors at the top of the form."}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx(W,{className:"mb-4"}),e.jsx(c,{children:e.jsxs(i,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"field1",className:"text-sm font-medium",children:"Field 1"}),e.jsx(d,{id:"field1",placeholder:"Enter value..."})]})})]})]})};var y,E,C;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md p-4">
      <p className="text-muted-foreground">
        Form Context is used internally by TanStack Form. See tanstack-form.tsx for the full form system.
      </p>
    </div>
}`,...(C=(E=f.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var I,k,_;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-6 p-4">
      <FormFieldSet>
        <FormField orientation="vertical">
          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
          <Input id="name" placeholder="John Doe" />
        </FormField>

        <FormField orientation="vertical">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </FormField>
      </FormFieldSet>

      <FormFieldSet>
        <FormField orientation="horizontal">
          <label htmlFor="username" className="text-sm font-medium">Username</label>
          <Input id="username" placeholder="johndoe" />
        </FormField>

        <FormField orientation="horizontal">
          <label htmlFor="password" className="text-sm font-medium">Password</label>
          <Input id="password" type="password" placeholder="••••••••" />
        </FormField>
      </FormFieldSet>
    </div>
}`,...(_=(k=x.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var $,A,D;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-6 p-4">
      <FormFieldSet>
        <FormField orientation="vertical">
          <label htmlFor="email-error" className="text-sm font-medium">Email</label>
          <Input id="email-error" defaultValue="invalid-email" />
          <FormFieldError errors={['Invalid email format']} />
        </FormField>
      </FormFieldSet>

      <FormFieldSet>
        <FormField orientation="vertical">
          <label htmlFor="password-error" className="text-sm font-medium">Password</label>
          <Input id="password-error" type="password" defaultValue="123" />
          <FormFieldError errors={['Password must be at least 8 characters', 'Must contain a number']} />
        </FormField>
      </FormFieldSet>
    </div>
}`,...(D=(A=h.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var P,T,M;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-6 p-4">
      <p className="text-sm text-muted-foreground">
        FormErrors displays form-level validation errors at the top of the form.
      </p>
      <div className="rounded-lg border p-4">
        <FormErrors className="mb-4" />
        <FormFieldSet>
          <FormField orientation="vertical">
            <label htmlFor="field1" className="text-sm font-medium">Field 1</label>
            <Input id="field1" placeholder="Enter value..." />
          </FormField>
        </FormFieldSet>
      </div>
    </div>
}`,...(M=(T=b.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};const ue=["Default","FormFieldStructure","WithFieldErrors","FormErrorsDemo"];export{f as Default,b as FormErrorsDemo,x as FormFieldStructure,h as WithFieldErrors,ue as __namedExportsOrder,ce as default};
