import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{I as d}from"./input-BWjd11J0.js";import{r as a}from"./index-CAPI2NOD.js";import{w as Q}from"./with-selector-u-Z-vBr1.js";import{a as X,F as Y,h as Z}from"./field-Bn4jZdm8.js";import{c as y}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./label-UzqpTrrA.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";import"./separator-BjUrQ461.js";function ee(r,o){return r===o}function w(r,o,t=ee){const s=a.useCallback(m=>{if(!r)return()=>{};const{unsubscribe:u}=r.subscribe(m);return u},[r]),n=a.useCallback(()=>r==null?void 0:r.get(),[r]);return Q.useSyncExternalStoreWithSelector(s,n,n,o,t)}const S=a.createContext(null),G=a.createContext(null);function re(){const r=a.useContext(G);if(!r)throw new Error("`formContext` only works when within a `formComponent` passed to `createFormHook`");return r}function oe(){function r(){const o=a.useContext(S);if(!o)throw new Error("`fieldContext` only works when within a `fieldComponent` passed to `createFormHook`");return o}return{fieldContext:S,useFieldContext:r,useFormContext:re,formContext:G}}const{useFieldContext:se,useFormContext:b}=oe(),q=a.createContext({}),B=()=>{const{id:r}=a.useContext(q),o=se();if(!o)throw new Error("useFieldContext should be used within <AppField>");const{name:t,store:s,...n}=o,i=w(s,m=>m.meta.errors);return{id:r,name:t,formItemId:`${r}-form-item`,formDescriptionId:`${r}-form-item-description`,formMessageId:`${r}-form-item-message`,errors:i,store:s,...n}};function c({className:r,children:o,...t}){const s=a.useId();return e.jsx(q.Provider,{value:{id:s},children:e.jsx(X,{className:y("grid gap-1",r),...t,children:o})})}function l({children:r,...o}){const{errors:t,formItemId:s,formDescriptionId:n,formMessageId:i,store:m}=B(),u=b(),p=w(m,j=>j.meta.isTouched),L=w(u.store,j=>j.submissionAttempts>0),v=!!t.length&&(p||L);return e.jsx(Y,{"data-invalid":v,id:s,"aria-describedby":v?`${n} ${i}`:`${n}`,"aria-invalid":v,...o,children:r})}function N({className:r,...o}){const{errors:t,formMessageId:s,store:n}=B(),i=b(),m=w(n,p=>p.meta.isTouched),u=w(i.store,p=>p.submissionAttempts>0);return!t.length||!m&&!u?null:e.jsx(Z,{"data-slot":"form-message",id:s,className:y("text-destructive text-sm",r),...o,errors:t})}function K({className:r,...o}){const t=b();return e.jsx(t.Subscribe,{selector:s=>s.errors,children:s=>s.length?e.jsx("div",{role:"alert",className:y("bg-destructive/10 text-destructive rounded-md border p-3 text-sm",r),...o,children:e.jsx("ul",{className:"list-disc space-y-1 pl-4",children:s.map((n,i)=>e.jsx("li",{children:String(n)},i))})}):null})}c.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};l.__docgenInfo={description:"",methods:[],displayName:"Field"};N.__docgenInfo={description:"",methods:[],displayName:"FieldError"};K.__docgenInfo={description:`Renders form-level validation errors (cross-field errors).
Place inside form.AppForm to show errors from form-level validators.

@example
\`\`\`tsx
<form.AppForm>
  <form.Form>
    <FormErrors />
    ...fields...
  </form.Form>
</form.AppForm>
\`\`\``,methods:[],displayName:"FormErrors"};const we={component:b,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"TanStack Form contexts and structural components for building complex forms with validation and error handling."}}}},f={render:()=>e.jsx("div",{className:"w-full max-w-md p-4",children:e.jsx("p",{className:"text-muted-foreground",children:"Form Context is used internally by TanStack Form. See tanstack-form.tsx for the full form system."})})},F={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-6 p-4",children:[e.jsxs(c,{children:[e.jsxs(l,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"name",className:"text-sm font-medium",children:"Full Name"}),e.jsx(d,{id:"name",placeholder:"John Doe"})]}),e.jsxs(l,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email Address"}),e.jsx(d,{id:"email",type:"email",placeholder:"john@example.com"})]})]}),e.jsxs(c,{children:[e.jsxs(l,{orientation:"horizontal",children:[e.jsx("label",{htmlFor:"username",className:"text-sm font-medium",children:"Username"}),e.jsx(d,{id:"username",placeholder:"johndoe"})]}),e.jsxs(l,{orientation:"horizontal",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"Password"}),e.jsx(d,{id:"password",type:"password",placeholder:"••••••••"})]})]})]})},x={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-6 p-4",children:[e.jsx(c,{children:e.jsxs(l,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"email-error",className:"text-sm font-medium",children:"Email"}),e.jsx(d,{id:"email-error",defaultValue:"invalid-email"}),e.jsx(N,{errors:["Invalid email format"]})]})}),e.jsx(c,{children:e.jsxs(l,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"password-error",className:"text-sm font-medium",children:"Password"}),e.jsx(d,{id:"password-error",type:"password",defaultValue:"123"}),e.jsx(N,{errors:["Password must be at least 8 characters","Must contain a number"]})]})})]})},h={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-6 p-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"FormErrors displays form-level validation errors at the top of the form."}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx(K,{className:"mb-4"}),e.jsx(c,{children:e.jsxs(l,{orientation:"vertical",children:[e.jsx("label",{htmlFor:"field1",className:"text-sm font-medium",children:"Field 1"}),e.jsx(d,{id:"field1",placeholder:"Enter value..."})]})})]})]})};var g,E,C,I,k;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md p-4">
      <p className="text-muted-foreground">
        Form Context is used internally by TanStack Form. See tanstack-form.tsx for the full form system.
      </p>
    </div>
}`,...(C=(E=f.parameters)==null?void 0:E.docs)==null?void 0:C.source},description:{story:"Overview of form context components and usage patterns.",...(k=(I=f.parameters)==null?void 0:I.docs)==null?void 0:k.description}}};var _,$,A,D,P;F.parameters={...F.parameters,docs:{...(_=F.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=($=F.parameters)==null?void 0:$.docs)==null?void 0:A.source},description:{story:"Form field structure with vertical and horizontal orientations.",...(P=(D=F.parameters)==null?void 0:D.docs)==null?void 0:P.description}}};var T,z,M,V,H;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(z=x.parameters)==null?void 0:z.docs)==null?void 0:M.source},description:{story:"Form fields with error message display.",...(H=(V=x.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};var W,J,O,R,U;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(J=h.parameters)==null?void 0:J.docs)==null?void 0:O.source},description:{story:"Form errors component for displaying form-level validation messages.",...(U=(R=h.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};const be=["Default","FormFieldStructure","WithFieldErrors","FormErrorsDemo"];export{f as Default,h as FormErrorsDemo,F as FormFieldStructure,x as WithFieldErrors,be as __namedExportsOrder,we as default};
