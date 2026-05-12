import{j as e}from"./jsx-runtime-u17CrQMm.js";import{w as g,u}from"./index-B8KB3hxO.js";import{r as x}from"./index-DYby6Z_P.js";import{I as p}from"./icons-BdTSAv6R.js";import{b,a as y,A as C}from"./avatar-C0fnEVSm.js";import{B as d}from"./badge-ARHUHlUB.js";import{B as o}from"./button-BQzN1lMO.js";import{S as k}from"./separator-IRAzr_sg.js";import{T as S,a as T}from"./toggle-group-BkMcHXkP.js";import{u as F,o as I,e as B,s as c,_ as O,a as A,l as E,b as R}from"./tanstack-form-CJKk980Y.js";import{D as m,a as h,b as v,c as f,d as j,e as D,f as w}from"./dialog-DbXIuLJn.js";import{I as U}from"./input-Dz4TUfxo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Czy_q_oT.js";import"./index-BKV5D6oG.js";import"./index-ByLlCQqU.js";import"./index-D1sqivKo.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";import"./index-B1sArz3w.js";import"./index-VlTWTt8y.js";import"./index-DGP6o15j.js";import"./index-koxbFvze.js";import"./toggle-6SXreFCI.js";import"./index-Dc_FVRD7.js";import"./index-BmEHjAU8.js";import"./index-BXQs120s.js";import"./index-C4JN59vf.js";import"./index-C1lvhlBT.js";import"./index-ofxjSrhS.js";import"./with-selector-Dn_EPY37.js";import"./field-HTWoZM-x.js";import"./label-CBeO_B6j.js";import"./input-group-DE8iN8n0.js";import"./textarea-cNT01uKG.js";import"./spinner-C8LyUNDi.js";import"./select-B12i0HQj.js";import"./index-BdQq_4o_.js";import"./index-D3yKPjIL.js";import"./index-CZLUcR6N.js";import"./index-DQn26SIZ.js";import"./floating-ui.react-dom-DZ6WtPqY.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-t4OVC0Wb.js";import"./index-D5FZlcEA.js";import"./checkbox-Cl4zh2m2.js";import"./index-CcuSeV1x.js";import"./switch-C4S7R9io.js";import"./radio-group-B5s5vgz5.js";import"./slider-cwZHwJ5b.js";import"./next-image-B_ObWQ8f.js";import"./index-BhKcopM4.js";import"./index-B2wVv7rK.js";import"./progress-Bk9cwEgH.js";import"./scroll-area-CD1fzsEB.js";import"./calendar-VxVs87-c.js";import"./popover-DBMmlqna.js";import"./index-DCxO6YQ3.js";const Xe={component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dialog component that overlays the page to capture user attention. Built on Radix UI primitives for accessibility and animation support."}}}},n={play:async({canvasElement:i})=>{const r=g(i).getByRole("button",{name:/open dialog/i});await u.click(r)},render:()=>{const[i,a]=x.useState(!1);return e.jsxs(m,{open:i,onOpenChange:a,children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(v,{children:[e.jsxs(f,{children:[e.jsx(j,{children:"Dialog Title"}),e.jsx(D,{children:"This is a description of the dialog. It provides additional context about the content."})]}),e.jsx("p",{children:"Dialog content goes here. You can put any React content inside."}),e.jsxs(w,{children:[e.jsx(o,{variant:"outline",onClick:()=>a(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>a(!1),children:"Confirm"})]})]})]})}},P=I({interviewTitle:c().min(1,"Interview title is required"),meetingUrl:A("Must be a valid URL").or(E("")),interviewDate:c().min(1,"Please pick a date & time"),duration:O(["30","60","90"]),prospectName:c().min(1,"Name is required"),prospectEmail:B("Must be a valid email")}),H=[{value:"30",label:"30 min"},{value:"60",label:"60 min"},{value:"90",label:"90 min"}];function _({onClose:i}){const a=F({defaultValues:{interviewTitle:"UX Designer Interview - Jake and Aspect Team",meetingUrl:"https://us04web.zoom.us/j/75806772593?pwd=hb0098d8...",interviewDate:"",duration:"30",prospectName:"Jack Sparrow",prospectEmail:"jacksparrow@gmail.com"},validators:{onSubmit:P},onSubmit:async({value:t})=>{await new Promise(s=>setTimeout(s,800)),console.info("Interview scheduled:",t),i()}}),{FormTextField:r}=R();return e.jsx(a.AppForm,{children:e.jsx(a.Form,{id:"schedule-interview-form",className:"p-0",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("section",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm font-semibold text-foreground",children:"Interview Details"}),e.jsxs("div",{className:"flex items-start gap-3 rounded-lg border bg-muted/40 px-3 py-3",children:[e.jsxs(b,{className:"mt-0.5 h-9 w-9 shrink-0",children:[e.jsx(y,{src:"https://github.com/shadcn.png",alt:"Senior Frontend Angular Developer"}),e.jsx(C,{className:"bg-primary text-primary-foreground text-xs font-semibold",children:"SF"})]}),e.jsxs("div",{className:"min-w-0 space-y-1.5",children:[e.jsx("p",{className:"text-sm font-medium leading-tight",children:"Senior Frontend Angular Developer"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Offtoc LLC"}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"text-[11px] text-muted-foreground shrink-0",children:"Skills"}),e.jsx("div",{className:"flex gap-1 flex-wrap",children:["Angular","Javascript","Tailwind"].map(t=>e.jsx(d,{variant:"secondary",className:"h-4 rounded-full px-2 text-[10px]",children:t},t))})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"text-[11px] text-muted-foreground shrink-0",children:"Position type"}),e.jsx("div",{className:"flex gap-1",children:["Remote","Full-time"].map(t=>e.jsx(d,{variant:"outline",className:"h-4 rounded-full px-2 text-[10px]",children:t},t))})]})]})]})]}),e.jsx(r,{name:"interviewTitle",label:"Interview Title",placeholder:"e.g. UX Designer Interview"}),e.jsx(r,{name:"meetingUrl",label:"Meeting URL",placeholder:"https://...",type:"url"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(a.AppField,{name:"interviewDate",children:t=>e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-sm font-medium leading-none",children:"Interview date & time"}),e.jsxs("div",{className:"relative",children:[e.jsx(U,{placeholder:"Pick a slot",value:t.state.value,onChange:s=>t.handleChange(s.target.value),onBlur:t.handleBlur,className:"pl-9"}),e.jsx(p.calendar,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"})]}),e.jsx(t.FieldError,{})]})}),e.jsx(a.AppField,{name:"duration",children:t=>e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-sm font-medium leading-none",children:"Duration"}),e.jsx(S,{type:"single",variant:"outline",value:t.state.value,onValueChange:s=>{s&&t.handleChange(s)},className:"w-full",children:H.map(({value:s,label:N})=>e.jsx(T,{value:s,className:"flex-1 text-xs font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",children:N},s))})]})})]})]}),e.jsx(k,{}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm font-semibold text-foreground",children:"Prospect Details"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(r,{name:"prospectName",label:"Name",placeholder:"Jack Sparrow"}),e.jsx(r,{name:"prospectEmail",label:"Email Address",type:"email",placeholder:"jack@example.com"})]}),e.jsxs(o,{type:"button",variant:"ghost",size:"sm",className:"h-auto gap-1.5 px-0 py-0 text-sm font-normal text-primary hover:bg-transparent hover:text-primary/80",children:[e.jsx(p.plusCircle,{className:"h-4 w-4"}),"Add Prospect"]})]})]})})})}const l={play:async({canvasElement:i})=>{const r=g(i).getByRole("button",{name:/schedule interview/i});await u.click(r)},render:()=>{const[i,a]=x.useState(!1);return e.jsxs(m,{open:i,onOpenChange:a,children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{children:"Schedule Interview"})}),e.jsxs(v,{className:"flex max-h-[90vh] flex-col gap-0 p-0 sm:max-w-lg",children:[e.jsxs(f,{className:"shrink-0 border-b px-6 pb-4 pt-4 pr-10 text-left",children:[e.jsx(j,{className:"text-xl font-semibold tracking-tight",children:"Schedule new interview"}),e.jsx(D,{className:"text-sm text-muted-foreground",children:"Fill in the correct information for this interview."})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:e.jsx(_,{onClose:()=>a(!1)})}),e.jsxs(w,{className:"shrink-0 flex-row items-center border-t px-6 py-4",children:[e.jsx(o,{variant:"outline",onClick:()=>a(!1),children:"Cancel"}),e.jsx(o,{type:"submit",form:"schedule-interview-form",className:"flex-1",children:"Schedule Interview"})]})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /open dialog/i
    });
    await userEvent.click(trigger);
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog. It provides additional context about the
              content.
            </DialogDescription>
          </DialogHeader>
          <p>Dialog content goes here. You can put any React content inside.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...n.parameters?.docs?.source},description:{story:"Default dialog with title, description, and action buttons",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /schedule interview/i
    });
    await userEvent.click(trigger);
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Schedule Interview</Button>
        </DialogTrigger>
        <DialogContent className="flex max-h-[90vh] flex-col gap-0 p-0 sm:max-w-lg">
          <DialogHeader className="shrink-0 border-b px-6 pb-4 pt-4 pr-10 text-left">
            <DialogTitle className="text-xl font-semibold tracking-tight">
              Schedule new interview
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Fill in the correct information for this interview.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ScheduleInterviewFormDialog onClose={() => setOpen(false)} />
          </div>

          <DialogFooter className="shrink-0 flex-row items-center border-t px-6 py-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" form="schedule-interview-form" className="flex-1">
              Schedule Interview
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  }
}`,...l.parameters?.docs?.source},description:{story:"Sectioned dialog form: candidate card, date/duration grid, prospect list",...l.parameters?.docs?.description}}};const Ye=["Default","FormDialog"];export{n as Default,l as FormDialog,Ye as __namedExportsOrder,Xe as default};
