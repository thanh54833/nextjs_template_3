import{j as t}from"./jsx-runtime-u17CrQMm.js";import{I as c}from"./infobar-BPn8QQBJ.js";import{I as o}from"./info-button-CFibo3s5.js";import"./button-Ch-BQGzE.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DGP6o15j.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DOER7VuF.js";import"./input-CFt1qv4K.js";import"./separator-tXcssORl.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./sheet-CJ-scKL4.js";import"./icons-CJO6dUP8.js";import"./index-CYD3ze5d.js";import"./index-Dc_FVRD7.js";import"./index-BKV5D6oG.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-BmEHjAU8.js";import"./index-D3yKPjIL.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";import"./skeleton-P1jhn00l.js";import"./tooltip-DElC3ZbC.js";import"./index-DkJfsZhp.js";import"./index-Doocx2sM.js";import"./index-D5FZlcEA.js";import"./use-mobile-BBRID8vO.js";const M={component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A button component that opens the infobar with contextual information when clicked."}}}},r={render:()=>{const e={title:"Help Information",sections:[{title:"Getting Started",description:"This is a helpful tip to get you started with the dashboard.",links:[{title:"View Tutorial",url:"#"}]}]};return t.jsx(c,{children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(o,{content:e}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"Click for help"})]})})}},s={render:()=>{const e={title:"Keyboard Shortcuts",sections:[{title:"Navigation",description:"Use these shortcuts to navigate faster.",links:[{title:"View All Shortcuts",url:"#"}]}]};return t.jsx(c,{children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(o,{content:e,children:"Help"}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"Press ⌘I to toggle"})]})})}},n={render:()=>{const e={title:"Quick Tips",sections:[{title:"Tip of the Day",description:"Use keyboard shortcuts to speed up your workflow."}]};return t.jsx(c,{children:t.jsx(o,{content:e,variant:"ghost"})})}},i={render:()=>{const e={title:"Product Updates",sections:[{title:"New Features",description:"Check out the latest features we have added.",links:[{title:"Read More",url:"#"}]}]};return t.jsx(c,{children:t.jsx(o,{content:e,variant:"outline",children:"Updates"})})}},a={render:()=>{const e={title:"Table Actions",sections:[{title:"Available Actions",description:"Here are all the actions you can perform on this table.",links:[{title:"Export Data",url:"#"},{title:"Import Data",url:"#"},{title:"Delete All",url:"#"}]}]};return t.jsx(c,{children:t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(o,{content:e}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Click the info button to see available actions"})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const content: InfobarContent = {
      title: 'Help Information',
      sections: [{
        title: 'Getting Started',
        description: 'This is a helpful tip to get you started with the dashboard.',
        links: [{
          title: 'View Tutorial',
          url: '#'
        }]
      }]
    };
    return <InfobarProvider>
        <div className="flex items-center gap-4">
          <InfoButton content={content} />
          <span className="text-sm text-muted-foreground">Click for help</span>
        </div>
      </InfobarProvider>;
  }
}`,...r.parameters?.docs?.source},description:{story:"Default icon-only info button.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const content: InfobarContent = {
      title: 'Keyboard Shortcuts',
      sections: [{
        title: 'Navigation',
        description: 'Use these shortcuts to navigate faster.',
        links: [{
          title: 'View All Shortcuts',
          url: '#'
        }]
      }]
    };
    return <InfobarProvider>
        <div className="flex items-center gap-4">
          <InfoButton content={content}>
            Help
          </InfoButton>
          <span className="text-sm text-muted-foreground">Press ⌘I to toggle</span>
        </div>
      </InfobarProvider>;
  }
}`,...s.parameters?.docs?.source},description:{story:"Info button with custom text label.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const content: InfobarContent = {
      title: 'Quick Tips',
      sections: [{
        title: 'Tip of the Day',
        description: 'Use keyboard shortcuts to speed up your workflow.'
      }]
    };
    return <InfobarProvider>
        <InfoButton content={content} variant="ghost" />
      </InfobarProvider>;
  }
}`,...n.parameters?.docs?.source},description:{story:"Ghost variant for subtle styling.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const content: InfobarContent = {
      title: 'Product Updates',
      sections: [{
        title: 'New Features',
        description: 'Check out the latest features we have added.',
        links: [{
          title: 'Read More',
          url: '#'
        }]
      }]
    };
    return <InfobarProvider>
        <InfoButton content={content} variant="outline">
          Updates
        </InfoButton>
      </InfobarProvider>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Outline variant for distinct visual separation.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const content: InfobarContent = {
      title: 'Table Actions',
      sections: [{
        title: 'Available Actions',
        description: 'Here are all the actions you can perform on this table.',
        links: [{
          title: 'Export Data',
          url: '#'
        }, {
          title: 'Import Data',
          url: '#'
        }, {
          title: 'Delete All',
          url: '#'
        }]
      }]
    };
    return <InfobarProvider>
        <div className="flex flex-col gap-4">
          <InfoButton content={content} />
          <p className="text-xs text-muted-foreground">Click the info button to see available actions</p>
        </div>
      </InfobarProvider>;
  }
}`,...a.parameters?.docs?.source},description:{story:"Info button with multiple links in content.",...a.parameters?.docs?.description}}};const Q=["Default","WithText","GhostVariant","OutlineVariant","WithCustomContent"];export{r as Default,n as GhostVariant,i as OutlineVariant,a as WithCustomContent,s as WithText,Q as __namedExportsOrder,M as default};
