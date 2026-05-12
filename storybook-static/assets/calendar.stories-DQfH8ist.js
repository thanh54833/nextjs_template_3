import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./index-DYby6Z_P.js";import{C as r,f as p}from"./calendar-VxVs87-c.js";import{P as u,a as g,b as D}from"./popover-DBMmlqna.js";import{B as f}from"./button-BQzN1lMO.js";import{I as S}from"./icons-BdTSAv6R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Czy_q_oT.js";import"./index-Dc_FVRD7.js";import"./index-DOER7VuF.js";import"./index-BKV5D6oG.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-ByLlCQqU.js";import"./index-CZLUcR6N.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-DQn26SIZ.js";import"./floating-ui.react-dom-DZ6WtPqY.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";import"./index-BmEHjAU8.js";import"./index-koxbFvze.js";import"./index-DGP6o15j.js";const L={component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A calendar component for selecting dates and date ranges. Supports single date selection, multiple dates, and date ranges. Built on top of react-day-picker."}}},argTypes:{mode:{control:"select",options:["single","multiple","range"],description:"Selection mode"},showOutsideDays:{control:"boolean",description:"Whether to show days from adjacent months"}}},n={render:()=>{const[e,a]=s.useState(new Date);return t.jsx(r,{mode:"single",selected:e,onSelect:a})}},o={render:()=>{const[e,a]=s.useState(new Date(2024,5,15));return t.jsx(r,{mode:"single",selected:e,onSelect:a})}},d={render:()=>{const[e,a]=s.useState({from:new Date(2024,5,1),to:new Date(2024,5,10)});return t.jsx(r,{mode:"range",selected:e,onSelect:a})}},c={render:()=>{const[e,a]=s.useState(new Date);return t.jsx(r,{mode:"single",selected:e,onSelect:a,disabled:m=>m.getDay()===0||m.getDay()===6})}},i={render:()=>{const[e,a]=s.useState(new Date);return t.jsx(r,{mode:"single",selected:e,onSelect:a,showOutsideDays:!1})}},l={render:()=>{const[e,a]=s.useState(new Date);return t.jsxs(u,{children:[t.jsx(g,{asChild:!0,children:t.jsxs(f,{variant:"outline",className:"w-full justify-between font-normal",children:[t.jsx("span",{className:e?"text-foreground":"text-muted-foreground",children:e?p(e,"PPP"):"Pick a date"}),t.jsx(S.calendar,{className:"size-4 opacity-50"})]})}),t.jsx(D,{align:"start",className:"w-auto p-0",children:t.jsx(r,{mode:"single",selected:e,onSelect:a})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  /** Default calendar with today's date selected */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} />;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  /** Calendar with a specific date pre-selected */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2024, 5, 15));
    return <Calendar mode='single' selected={date} onSelect={setDate} />;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  /** Calendar in range selection mode */
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(2024, 5, 1),
      to: new Date(2024, 5, 10)
    });
    return <Calendar mode='range' selected={range} onSelect={setRange as (date: DateRange | undefined) => void} />;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  /** Calendar with weekends disabled */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} disabled={date => date.getDay() === 0 || date.getDay() === 6} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  /** Calendar with outside days hidden */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} showOutsideDays={false} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between font-normal">
            <span className={date ? 'text-foreground' : 'text-muted-foreground'}>
              {date ? format(date, 'PPP') : 'Pick a date'}
            </span>
            <Icons.calendar className="size-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align='start' className='w-auto p-0'>
          <Calendar mode='single' selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>;
  }
}`,...l.parameters?.docs?.source}}};const M=["Default","WithSelectedDate","WithRange","Disabled","HiddenOutsideDays","WithPopover"];export{n as Default,c as Disabled,i as HiddenOutsideDays,l as WithPopover,d as WithRange,o as WithSelectedDate,M as __namedExportsOrder,L as default};
