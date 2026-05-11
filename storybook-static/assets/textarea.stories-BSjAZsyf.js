import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{T as z}from"./textarea-Dcu_f47d.js";import"./utils-BQHNewu7.js";const q={component:z,tags:["autodocs"],parameters:{docs:{description:{component:"A multi-line text input component for longer form content such as messages, descriptions, and comments. Supports resizing and validation states."}}}},e={args:{placeholder:"Type your message here..."}},a={render:()=>n.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[n.jsx("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message"}),n.jsx(z,{id:"message",placeholder:"Type your message here..."})]})},r={args:{disabled:!0,placeholder:"Disabled textarea"}},s={args:{"aria-invalid":!0,defaultValue:"Invalid text content"}},t={args:{className:"min-h-10",placeholder:"Short text..."}},o={args:{className:"min-h-32",defaultValue:"This is a larger textarea that can accommodate more content. Perfect for longer form inputs like descriptions, comments, or detailed messages."}};var i,c,m,d,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...'
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Default textarea with placeholder",...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var p,u,g,h,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <label htmlFor="message" className="text-sm font-medium">
        Message
      </label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"Textarea with associated label for form accessibility",...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var x,b,y,v,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled textarea'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Disabled textarea that prevents user interaction",...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var T,D,N,w,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid text content'
  }
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"Textarea with error state for validation feedback",...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};var L,E,V,W,k;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    className: 'min-h-10',
    placeholder: 'Short text...'
  }
}`,...(V=(E=t.parameters)==null?void 0:E.docs)==null?void 0:V.source},description:{story:"Small textarea variant for minimal content",...(k=(W=t.parameters)==null?void 0:W.docs)==null?void 0:k.description}}};var F,I,M,P,_;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    className: 'min-h-32',
    defaultValue: 'This is a larger textarea that can accommodate more content. Perfect for longer form inputs like descriptions, comments, or detailed messages.'
  }
}`,...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:"Large textarea variant for detailed content",...(_=(P=o.parameters)==null?void 0:P.docs)==null?void 0:_.description}}};const B=["Default","WithLabel","Disabled","WithError","Small","Large"];export{e as Default,r as Disabled,o as Large,t as Small,s as WithError,a as WithLabel,B as __namedExportsOrder,q as default};
