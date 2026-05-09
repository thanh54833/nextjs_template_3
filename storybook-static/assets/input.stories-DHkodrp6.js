import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{I as U}from"./input-BWjd11J0.js";import"./utils-BQHNewu7.js";const $={component:U,tags:["autodocs"],parameters:{docs:{description:{component:"A flexible text input component that supports various types including text, email, password, number, and file. Integrates seamlessly with form labels and validation states."}}}},e={args:{placeholder:"Enter text..."}},r={render:()=>l.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[l.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),l.jsx(U,{id:"email",type:"email",placeholder:"email@example.com"})]})},a={args:{disabled:!0,placeholder:"Disabled input"}},s={args:{"aria-invalid":!0,placeholder:"Invalid input",defaultValue:"invalid@example"}},t={args:{type:"password",placeholder:"Enter password"}},o={args:{type:"number",placeholder:"0"}},i={args:{type:"file",className:"file:h-10 file:cursor-pointer"}},n={args:{className:"h-8 text-sm",placeholder:"Small input"}};var c,p,d,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Default input with placeholder text",...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var h,g,f,b,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"Input with associated label for form accessibility",...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var y,w,v,S,N;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input'
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:"Disabled input that prevents user interaction",...(N=(S=a.parameters)==null?void 0:S.docs)==null?void 0:N.description}}};var E,D,I,j,F;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid input',
    defaultValue: 'invalid@example'
  }
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source},description:{story:"Input with error state, typically shown with aria-invalid and red border",...(F=(j=s.parameters)==null?void 0:j.docs)==null?void 0:F.description}}};var W,P,L,V,_;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...(L=(P=t.parameters)==null?void 0:P.docs)==null?void 0:L.source},description:{story:"Password input with masked characters",...(_=(V=t.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var k,z,A,O,R;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '0'
  }
}`,...(A=(z=o.parameters)==null?void 0:z.docs)==null?void 0:A.source},description:{story:"Number input for numeric values only",...(R=(O=o.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var q,B,C,G,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'file',
    className: 'file:h-10 file:cursor-pointer'
  }
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:"File input for file uploads",...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,M,Q,T;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    className: 'h-8 text-sm',
    placeholder: 'Small input'
  }
}`,...(M=(K=n.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"Small-sized input variant",...(T=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:T.description}}};const ee=["Default","WithLabel","Disabled","WithError","Password","Number","File","Small"];export{e as Default,a as Disabled,i as File,o as Number,t as Password,n as Small,s as WithError,r as WithLabel,ee as __namedExportsOrder,$ as default};
