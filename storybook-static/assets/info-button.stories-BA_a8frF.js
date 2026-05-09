import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{I as o}from"./infobar-0GRZo-Hj.js";import{I as r}from"./info-button-ChenDkme.js";import"./button-B1qRRuul.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CJNorLC4.js";import"./input-BWjd11J0.js";import"./separator-BjUrQ461.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./sheet-B6buQ7I-.js";import"./index-Do-fIL6h.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./icons-Bvzo9UON.js";import"./skeleton-CDhbiqWD.js";import"./tooltip-BMN2qtcx.js";import"./index-BnvOM56Y.js";import"./index-B69vM9co.js";import"./index-CFXvuxOn.js";import"./use-mobile-DILz8wSb.js";import"./index-C99FfTL5.js";import"./_interop_require_wildcard-BpaVepTj.js";const it={component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A button component that opens the infobar with contextual information when clicked."}}}},n={render:()=>{const e={title:"Help Information",sections:[{title:"Getting Started",description:"This is a helpful tip to get you started with the dashboard.",links:[{title:"View Tutorial",url:"#"}]}]};return t.jsx(o,{children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(r,{content:e}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"Click for help"})]})})}},s={render:()=>{const e={title:"Keyboard Shortcuts",sections:[{title:"Navigation",description:"Use these shortcuts to navigate faster.",links:[{title:"View All Shortcuts",url:"#"}]}]};return t.jsx(o,{children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(r,{content:e,children:"Help"}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"Press ⌘I to toggle"})]})})}},i={render:()=>{const e={title:"Quick Tips",sections:[{title:"Tip of the Day",description:"Use keyboard shortcuts to speed up your workflow."}]};return t.jsx(o,{children:t.jsx(r,{content:e,variant:"ghost"})})}},a={render:()=>{const e={title:"Product Updates",sections:[{title:"New Features",description:"Check out the latest features we have added.",links:[{title:"Read More",url:"#"}]}]};return t.jsx(o,{children:t.jsx(r,{content:e,variant:"outline",children:"Updates"})})}},c={render:()=>{const e={title:"Table Actions",sections:[{title:"Available Actions",description:"Here are all the actions you can perform on this table.",links:[{title:"Export Data",url:"#"},{title:"Import Data",url:"#"},{title:"Delete All",url:"#"}]}]};return t.jsx(o,{children:t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(r,{content:e}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Click the info button to see available actions"})]})})}};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,x,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,g,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(g=a.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var k,j,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const at=["Default","WithText","GhostVariant","OutlineVariant","WithCustomContent"];export{n as Default,i as GhostVariant,a as OutlineVariant,c as WithCustomContent,s as WithText,at as __namedExportsOrder,it as default};
