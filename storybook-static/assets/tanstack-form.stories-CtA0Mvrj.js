import{j as e}from"./jsx-runtime-EKYJJIwR.js";const r={title:"UI/TanStack Form",tags:["autodocs"],parameters:{layout:"padded"}},o={render:()=>e.jsxs("div",{className:"max-w-2xl space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold",children:"TanStack Form Integration"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Type-safe form system with Zod validation, automatic error handling, and pre-built field components."})]}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Exports"}),e.jsxs("ul",{className:"text-sm space-y-1 font-mono",children:[e.jsxs("li",{children:[e.jsx("code",{children:"useAppForm"})," — Main form hook"]}),e.jsxs("li",{children:[e.jsx("code",{children:"useFormFields<T>"})," — Type-safe field components"]}),e.jsxs("li",{children:[e.jsx("code",{children:"withForm"})," — HOC for form wrapping"]}),e.jsxs("li",{children:[e.jsx("code",{children:"withFieldGroup"})," — HOC for field grouping"]})]})]}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Field Components"}),e.jsxs("ul",{className:"text-sm space-y-1 font-mono",children:[e.jsxs("li",{children:[e.jsx("code",{children:"FormTextField"})," — Text input"]}),e.jsxs("li",{children:[e.jsx("code",{children:"FormTextareaField"})," — Textarea"]}),e.jsxs("li",{children:[e.jsx("code",{children:"FormSelectField"})," — Select dropdown"]}),e.jsxs("li",{children:[e.jsx("code",{children:"FormCheckboxField"})," — Checkbox"]}),e.jsxs("li",{children:[e.jsx("code",{children:"FormSwitchField"})," — Toggle switch"]}),e.jsxs("li",{children:[e.jsx("code",{children:"FormRadioGroupField"})," — Radio group"]}),e.jsxs("li",{children:[e.jsx("code",{children:"FormSliderField"})," — Range slider"]}),e.jsxs("li",{children:[e.jsx("code",{children:"FormFileUploadField"})," — File upload"]})]})]}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Usage"}),e.jsx("pre",{className:"text-xs mt-2 overflow-x-auto",children:`const form = useAppForm({
  defaultValues: { email: '', name: '' },
  validators: { onChange: schema }
});

const { FormTextField } = useFormFields<FormValues>();

<form.Form>
  <form.AppField
    name="email"
    children={(field) => (
      <FormTextField {...field} label="Email" />
    )}
  />
  <form.SubmitButton>Submit</form.SubmitButton>
</form.Form>`})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["See ",e.jsx("code",{children:"src/components/forms/fields/"})," for individual field implementations."]})]})};var d,i,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className='max-w-2xl space-y-6'>
      <div>
        <h3 className='text-lg font-semibold'>TanStack Form Integration</h3>
        <p className='text-sm text-muted-foreground mt-1'>
          Type-safe form system with Zod validation, automatic error handling, and pre-built field components.
        </p>
      </div>

      <div className='rounded-lg border p-4'>
        <h4 className='text-sm font-medium mb-2'>Exports</h4>
        <ul className='text-sm space-y-1 font-mono'>
          <li><code>useAppForm</code> — Main form hook</li>
          <li><code>useFormFields&lt;T&gt;</code> — Type-safe field components</li>
          <li><code>withForm</code> — HOC for form wrapping</li>
          <li><code>withFieldGroup</code> — HOC for field grouping</li>
        </ul>
      </div>

      <div className='rounded-lg border p-4'>
        <h4 className='text-sm font-medium mb-2'>Field Components</h4>
        <ul className='text-sm space-y-1 font-mono'>
          <li><code>FormTextField</code> — Text input</li>
          <li><code>FormTextareaField</code> — Textarea</li>
          <li><code>FormSelectField</code> — Select dropdown</li>
          <li><code>FormCheckboxField</code> — Checkbox</li>
          <li><code>FormSwitchField</code> — Toggle switch</li>
          <li><code>FormRadioGroupField</code> — Radio group</li>
          <li><code>FormSliderField</code> — Range slider</li>
          <li><code>FormFileUploadField</code> — File upload</li>
        </ul>
      </div>

      <div className='rounded-lg border p-4'>
        <h4 className='text-sm font-medium mb-2'>Usage</h4>
        <pre className='text-xs mt-2 overflow-x-auto'>
        {\`const form = useAppForm({
  defaultValues: { email: '', name: '' },
  validators: { onChange: schema }
});

const { FormTextField } = useFormFields<FormValues>();

<form.Form>
  <form.AppField
    name="email"
    children={(field) => (
      <FormTextField {...field} label="Email" />
    )}
  />
  <form.SubmitButton>Submit</form.SubmitButton>
</form.Form>\`}
        </pre>
      </div>

      <div className='text-xs text-muted-foreground'>
        See <code>src/components/forms/fields/</code> for individual field implementations.
      </div>
    </div>
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const m=["Overview"];export{o as Overview,m as __namedExportsOrder,r as default};
