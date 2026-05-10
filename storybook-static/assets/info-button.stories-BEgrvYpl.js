import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{I as c}from"./infobar-omB16zuq.js";import{I as o}from"./info-button-DoPPR9pa.js";import"./button-B1qRRuul.js";import"./index-D1SQP9Z-.js";import"./utils-BQHNewu7.js";import"./index-AnhkqxcL.js";import"./index-CAPI2NOD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CJNorLC4.js";import"./input-BWjd11J0.js";import"./separator-BjUrQ461.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./sheet-CWZPLhfi.js";import"./index-Do-fIL6h.js";import"./index-DW48STyt.js";import"./index-Da_hoYQ_.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";import"./icons-Bvzo9UON.js";import"./skeleton-CDhbiqWD.js";import"./tooltip-BMN2qtcx.js";import"./index-BnvOM56Y.js";import"./index-B69vM9co.js";import"./index-CFXvuxOn.js";import"./use-mobile-DILz8wSb.js";import"./index-C99FfTL5.js";import"./_interop_require_wildcard-BpaVepTj.js";const xt={component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A button component that opens the infobar with contextual information when clicked."}}}},r={render:()=>{const e={title:"Help Information",sections:[{title:"Getting Started",description:"This is a helpful tip to get you started with the dashboard.",links:[{title:"View Tutorial",url:"#"}]}]};return t.jsx(c,{children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(o,{content:e}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"Click for help"})]})})}},s={render:()=>{const e={title:"Keyboard Shortcuts",sections:[{title:"Navigation",description:"Use these shortcuts to navigate faster.",links:[{title:"View All Shortcuts",url:"#"}]}]};return t.jsx(c,{children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(o,{content:e,children:"Help"}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"Press ⌘I to toggle"})]})})}},n={render:()=>{const e={title:"Quick Tips",sections:[{title:"Tip of the Day",description:"Use keyboard shortcuts to speed up your workflow."}]};return t.jsx(c,{children:t.jsx(o,{content:e,variant:"ghost"})})}},i={render:()=>{const e={title:"Product Updates",sections:[{title:"New Features",description:"Check out the latest features we have added.",links:[{title:"Read More",url:"#"}]}]};return t.jsx(c,{children:t.jsx(o,{content:e,variant:"outline",children:"Updates"})})}},a={render:()=>{const e={title:"Table Actions",sections:[{title:"Available Actions",description:"Here are all the actions you can perform on this table.",links:[{title:"Export Data",url:"#"},{title:"Import Data",url:"#"},{title:"Delete All",url:"#"}]}]};return t.jsx(c,{children:t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(o,{content:e}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Click the info button to see available actions"})]})})}};var l,p,d,u,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Default icon-only info button.",...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var f,h,x,b,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Info button with custom text label.",...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var I,g,k,y,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source},description:{story:"Ghost variant for subtle styling.",...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.description}}};var w,N,C,P,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source},description:{story:"Outline variant for distinct visual separation.",...(T=(P=i.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};var A,D,S,B,U;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source},description:{story:"Info button with multiple links in content.",...(U=(B=a.parameters)==null?void 0:B.docs)==null?void 0:U.description}}};const bt=["Default","WithText","GhostVariant","OutlineVariant","WithCustomContent"];export{r as Default,n as GhostVariant,i as OutlineVariant,a as WithCustomContent,s as WithText,bt as __namedExportsOrder,xt as default};
