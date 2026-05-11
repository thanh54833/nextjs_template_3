import{j as l}from"./jsx-runtime-u17CrQMm.js";import{I as c}from"./input-CFt1qv4K.js";import"./utils-BQHNewu7.js";const u={component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A flexible text input component that supports various types including text, email, password, number, and file. Integrates seamlessly with form labels and validation states."}}}},e={args:{placeholder:"Enter text..."}},r={render:()=>l.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[l.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),l.jsx(c,{id:"email",type:"email",placeholder:"email@example.com"})]})},a={args:{disabled:!0,placeholder:"Disabled input"}},s={args:{"aria-invalid":!0,placeholder:"Invalid input",defaultValue:"invalid@example"}},t={args:{type:"password",placeholder:"Enter password"}},o={args:{type:"number",placeholder:"0"}},i={args:{type:"file",className:"file:h-10 file:cursor-pointer"}},n={args:{className:"h-8 text-sm",placeholder:"Small input"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...e.parameters?.docs?.source},description:{story:"Default input with placeholder text",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
}`,...r.parameters?.docs?.source},description:{story:"Input with associated label for form accessibility",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input'
  }
}`,...a.parameters?.docs?.source},description:{story:"Disabled input that prevents user interaction",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid input',
    defaultValue: 'invalid@example'
  }
}`,...s.parameters?.docs?.source},description:{story:"Input with error state, typically shown with aria-invalid and red border",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...t.parameters?.docs?.source},description:{story:"Password input with masked characters",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '0'
  }
}`,...o.parameters?.docs?.source},description:{story:"Number input for numeric values only",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file',
    className: 'file:h-10 file:cursor-pointer'
  }
}`,...i.parameters?.docs?.source},description:{story:"File input for file uploads",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'h-8 text-sm',
    placeholder: 'Small input'
  }
}`,...n.parameters?.docs?.source},description:{story:"Small-sized input variant",...n.parameters?.docs?.description}}};const h=["Default","WithLabel","Disabled","WithError","Password","Number","File","Small"];export{e as Default,a as Disabled,i as File,o as Number,t as Password,n as Small,s as WithError,r as WithLabel,h as __namedExportsOrder,u as default};
