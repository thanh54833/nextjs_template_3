import{j as n}from"./jsx-runtime-u17CrQMm.js";import{T as i}from"./textarea-cNT01uKG.js";import"./utils-Czy_q_oT.js";const l={component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A multi-line text input component for longer form content such as messages, descriptions, and comments. Supports resizing and validation states."}}}},e={args:{placeholder:"Type your message here..."}},a={render:()=>n.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[n.jsx("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message"}),n.jsx(i,{id:"message",placeholder:"Type your message here..."})]})},r={args:{disabled:!0,placeholder:"Disabled textarea"}},s={args:{"aria-invalid":!0,defaultValue:"Invalid text content"}},t={args:{className:"min-h-10",placeholder:"Short text..."}},o={args:{className:"min-h-32",defaultValue:"This is a larger textarea that can accommodate more content. Perfect for longer form inputs like descriptions, comments, or detailed messages."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...'
  }
}`,...e.parameters?.docs?.source},description:{story:"Default textarea with placeholder",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <label htmlFor="message" className="text-sm font-medium">
        Message
      </label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Textarea with associated label for form accessibility",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled textarea'
  }
}`,...r.parameters?.docs?.source},description:{story:"Disabled textarea that prevents user interaction",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid text content'
  }
}`,...s.parameters?.docs?.source},description:{story:"Textarea with error state for validation feedback",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'min-h-10',
    placeholder: 'Short text...'
  }
}`,...t.parameters?.docs?.source},description:{story:"Small textarea variant for minimal content",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'min-h-32',
    defaultValue: 'This is a larger textarea that can accommodate more content. Perfect for longer form inputs like descriptions, comments, or detailed messages.'
  }
}`,...o.parameters?.docs?.source},description:{story:"Large textarea variant for detailed content",...o.parameters?.docs?.description}}};const p=["Default","WithLabel","Disabled","WithError","Small","Large"];export{e as Default,r as Disabled,o as Large,t as Small,s as WithError,a as WithLabel,p as __namedExportsOrder,l as default};
