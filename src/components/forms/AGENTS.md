# FORMS DIRECTORY

**Part of:** Root AGENTS.md

## OVERVIEW

TanStack Form + Zod form field wrappers. 8 field types with consistent API.

## FIELD COMPONENTS

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `FormTextField` | Text input | `label`, `required`, `placeholder` |
| `FormTextareaField` | Multi-line text | `rows`, `label`, `required` |
| `FormSelectField` | Dropdown select | `options`, `label`, `required` |
| `FormCheckboxField` | Checkbox | `label`, `description` |
| `FormSwitchField` | Toggle switch | `label`, `description` |
| `FormRadioGroupField` | Radio buttons | `options`, `label` |
| `FormSliderField` | Range slider | `min`, `max`, `step`, `label` |
| `FormFileUploadField` | File upload | `accept`, `label`, `maxSize` |

## TANSTACK FORM PATTERNS

### Page Form (Create/Edit on dedicated route)

```typescript
// 1. Schema in schemas/<name>.ts
export const productSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  category: z.string().min(1, 'Please select a category'),
  price: z.number({ message: 'Price is required' }).min(0),
  description: z.string().optional()
});

// 2. Form component
const form = useAppForm({
  defaultValues: { name: '', category: '', price: 0, description: '' } as ProductFormValues,
  validators: { onSubmit: productSchema },
  onSubmit: async ({ value }) => {
    await mutation.mutateAsync(value);
  }
});

// 3. Typed field access
const { FormTextField, FormSelectField } = useFormFields<ProductFormValues>();

// 4. Render
<form.AppForm>
  <form.Form className="space-y-4">
    <FormTextField name="name" label="Product Name" required />
    <FormSelectField name="category" label="Category" required options={CATEGORY_OPTIONS} />
    <FormTextField name="price" label="Price" type="number" required />
    <FormTextareaField name="description" label="Description" />
  </form.Form>
</form.AppForm>
```

### Sheet Form (Inline create/edit)

```typescript
// Sheet manages open state; form uses `form` attribute
<Sheet open={open} onOpenChange={onOpenChange}>
  <SheetContent className="flex flex-col">
    <SheetHeader><SheetTitle>{isEdit ? 'Edit' : 'New'} Product</SheetTitle></SheetHeader>
    <div className="flex-1 overflow-auto">
      <form.AppForm>
        <form.Form id="product-sheet-form" className="space-y-4">
          <FormTextField name="name" label="Name" required />
        </form.Form>
      </form.AppForm>
    </div>
    <SheetFooter>
      <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
      <Button type="submit" form="product-sheet-form" disabled={mutation.isPending}>
        {mutation.isPending ? 'Saving...' : isEdit ? 'Update' : 'Create'}
      </Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### Multi-Step Form

```typescript
// Use useStepper hook for step management
const { currentStep, next, prev, goTo } = useStepper(totalSteps);

// Each step is a separate form section
{currentStep === 0 && <StepOne form={form} />}
{currentStep === 1 && <StepTwo form={form} />}
```

## ADVANCED PATTERNS

### Array Fields

```typescript
// For dynamic lists (tags, images, etc.)
<form.Field name="tags" mode="array">
  {(field) => (
    <div>
      {field.state.value.map((_, index) => (
        <form.Field key={index} name={`tags[${index}]`}>
          {(subField) => (
            <input
              value={subField.state.value}
              onChange={(e) => subField.handleChange(e.target.value)}
            />
          )}
        </form.Field>
      ))}
      <button type="button" onClick={() => field.pushValue('')}>Add Tag</button>
    </div>
  )}
</form.Field>
```

### Linked/Dependent Fields

```typescript
// Re-validate when another field changes
<form.Field
  name="confirmPassword"
  validators={{
    onChangeListenTo: ['password'],
    onChange: ({ value, fieldApi }) => {
      const password = fieldApi.form.getFieldValue('password');
      if (value !== password) return 'Passwords do not match';
      return undefined;
    }
  }}
/>
```

### Async Validation

```typescript
// Debounced async validation (e.g., check username availability)
<form.Field
  name="username"
  asyncDebounceMs={500}
  validators={{
    onChangeAsync: async ({ value }) => {
      const res = await fetch(`/api/check-username?q=${value}`);
      const { available } = await res.json();
      if (!available) return 'Username taken';
      return undefined;
    }
  }}
/>
```

### Form State Subscription

```typescript
// Fine-grained subscription to minimize re-renders
<form.Subscribe
  selector={(state) => ({ canSubmit: state.canSubmit, isSubmitting: state.isSubmitting })}
  children={({ canSubmit, isSubmitting }) => (
    <Button type="submit" disabled={!canSubmit} isLoading={isSubmitting}>
      {isSubmitting ? 'Saving...' : 'Save'}
    </Button>
  )}
/>
```

## CONVENTIONS

- **NEVER** use `useState` inside `AppField` render props - extract to component
- **ALWAYS** use `useAppForm` + `useFormFields<T>()` from `@/components/ui/tanstack-form`
- **ALWAYS** validate with Zod schema via `validators: { onSubmit: schema }`
- **ALWAYS** use `form` attribute on submit button for sheet forms
- **NEVER** use `useQuery` - use `useSuspenseQuery` for data fetching in forms

## ANTI-PATTERNS

- **NEVER** use `useState` in AppField render props
- **NEVER** skip Zod validation
- **NEVER** use manual loading state - use `isLoading` prop on Button
- **NEVER** import mock APIs directly in form components

## RELATED

- Root AGENTS.md: Forms, button loading
- `src/features/*/schemas/`: Zod schemas per feature
- `src/features/*/api/mutations.ts`: Mutation options