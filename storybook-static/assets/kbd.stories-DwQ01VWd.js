import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as b}from"./utils-Czy_q_oT.js";function r({className:u,...g}){return e.jsx("kbd",{"data-slot":"kbd",className:b("bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none [&_svg:not([class*='size-'])]:size-3",u),...g})}function l({className:u,...g}){return e.jsx("kbd",{"data-slot":"kbd-group",className:b("inline-flex items-center gap-1",u),...g})}r.__docgenInfo={description:"",methods:[],displayName:"Kbd"};l.__docgenInfo={description:"",methods:[],displayName:"KbdGroup"};const K={title:"UI/Kbd",component:r,subcomponents:{KbdGroup:l},tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A component for displaying keyboard keys and shortcuts. Supports individual keys and grouped shortcuts via KbdGroup subcomponent."}}}},s={args:{children:"⌘"}},o={args:{children:"K"}},t={args:{children:"Esc"}},a={args:{children:"⌘"}},n={args:{children:"⇧"}},c={args:{children:"⌃"}},d={args:{children:"⌥"}},i={render:()=>e.jsxs(l,{children:[e.jsx(r,{children:"⌘"}),e.jsx(r,{children:"K"})]})},p={render:()=>e.jsxs(l,{children:[e.jsx(r,{children:"⌘"}),e.jsx(r,{children:"⌥"}),e.jsx(r,{children:"P"})]})},m={args:{children:"Ctrl",className:"bg-red-500 text-white"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌘'
  }
}`,...s.parameters?.docs?.source},description:{story:"Default keyboard key display.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'K'
  }
}`,...o.parameters?.docs?.source},description:{story:"Single letter key.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Esc'
  }
}`,...t.parameters?.docs?.source},description:{story:"Escape key.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌘'
  }
}`,...a.parameters?.docs?.source},description:{story:"Command key symbol.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⇧'
  }
}`,...n.parameters?.docs?.source},description:{story:"Shift key symbol.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌃'
  }
}`,...c.parameters?.docs?.source},description:{story:"Control key symbol.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌥'
  }
}`,...d.parameters?.docs?.source},description:{story:"Option/Alt key symbol.",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
}`,...i.parameters?.docs?.source},description:{story:"Group of keyboard keys displayed together.",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
}`,...p.parameters?.docs?.source},description:{story:"Multi-key keyboard shortcut.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ctrl',
    className: 'bg-red-500 text-white'
  }
}`,...m.parameters?.docs?.source},description:{story:"Keyboard key with custom styling.",...m.parameters?.docs?.description}}};const k=["Default","K","Escape","Command","Shift","Control","Option","Group","Shortcut","WithClassName"];export{a as Command,c as Control,s as Default,t as Escape,i as Group,o as K,d as Option,n as Shift,p as Shortcut,m as WithClassName,k as __namedExportsOrder,K as default};
