import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{u as L,I as l}from"./infobar-DJLuzhdd.js";import{r as m}from"./index-CAPI2NOD.js";import{I as M}from"./icons-Bvzo9UON.js";import{B as Q}from"./button-B1qRRuul.js";import{c as z}from"./utils-BQHNewu7.js";import"./input-BWjd11J0.js";import"./separator-BjUrQ461.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Qoh0vY4V.js";import"./index-CJNorLC4.js";import"./sheet-DZf-ms4B.js";import"./index-wUS1JGU-.js";import"./index-CKUxhdB2.js";import"./index-Da_hoYQ_.js";import"./index-BAWfCZ5Z.js";import"./index-CxHADOAi.js";import"./index-Dp8D8Mew.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-DML2O0rb.js";import"./index-yuxTiXDJ.js";import"./use-mobile-DKWUX-hg.js";import"./tooltip-CqjslCDK.js";import"./index-Ky1P1Yos.js";import"./index-B5M3RRgR.js";import"./index-CFXvuxOn.js";import"./index-C99FfTL5.js";import"./index-D1SQP9Z-.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-AnhkqxcL.js";function r({content:t,className:G,variant:R="ghost",size:W="icon",...c}){const{setContent:u,setOpen:_}=L(),d=m.useRef(t);d.current=t,m.useEffect(()=>{u(d.current)},[]);const F=K=>{var p;u(t),_(!0),(p=c.onClick)==null||p.call(c,K)};return e.jsxs(Q,{variant:R,size:W,className:z("shrink-0",G),onClick:F,"aria-label":"Show information",...c,children:[e.jsx(M.info,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Show information"})]})}r.__docgenInfo={description:"",methods:[],displayName:"InfoButton",props:{content:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  title: string;
  sections: DescriptiveSection[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"sections",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  description: string;
  links?: HelpfulLink[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  url: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:"HelpfulLink[]",required:!1}}]}}],raw:"DescriptiveSection[]",required:!0}}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'ghost' | 'outline' | 'secondary' | 'destructive' | 'link'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'ghost'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'sm' | 'lg' | 'icon'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'icon'",computed:!1}}},composes:["Omit"]};const Se={component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A button component that opens the infobar with contextual information when clicked."}}}},o={render:()=>{const t={title:"Help Information",sections:[{title:"Getting Started",description:"This is a helpful tip to get you started with the dashboard.",links:[{title:"View Tutorial",url:"#"}]}]};return e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{content:t}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Click for help"})]})})}},n={render:()=>{const t={title:"Keyboard Shortcuts",sections:[{title:"Navigation",description:"Use these shortcuts to navigate faster.",links:[{title:"View All Shortcuts",url:"#"}]}]};return e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{content:t,children:"Help"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"Press ⌘I to toggle"})]})})}},i={render:()=>{const t={title:"Quick Tips",sections:[{title:"Tip of the Day",description:"Use keyboard shortcuts to speed up your workflow."}]};return e.jsx(l,{children:e.jsx(r,{content:t,variant:"ghost"})})}},s={render:()=>{const t={title:"Product Updates",sections:[{title:"New Features",description:"Check out the latest features we have added.",links:[{title:"Read More",url:"#"}]}]};return e.jsx(l,{children:e.jsx(r,{content:t,variant:"outline",children:"Updates"})})}},a={render:()=>{const t={title:"Table Actions",sections:[{title:"Available Actions",description:"Here are all the actions you can perform on this table.",links:[{title:"Export Data",url:"#"},{title:"Import Data",url:"#"},{title:"Delete All",url:"#"}]}]};return e.jsx(l,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{content:t}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Click the info button to see available actions"})]})})}};var f,h,v,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Default icon-only info button.",...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var b,k,y,I,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source},description:{story:"Info button with custom text label.",...(w=(I=n.parameters)==null?void 0:I.docs)==null?void 0:w.description}}};var j,N,C,P,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source},description:{story:"Ghost variant for subtle styling.",...(S=(P=i.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var T,A,D,B,q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:"Outline variant for distinct visual separation.",...(q=(B=s.parameters)==null?void 0:B.docs)==null?void 0:q.description}}};var V,H,U,E,O;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(H=a.parameters)==null?void 0:H.docs)==null?void 0:U.source},description:{story:"Info button with multiple links in content.",...(O=(E=a.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};const Te=["Default","WithText","GhostVariant","OutlineVariant","WithCustomContent"];export{o as Default,i as GhostVariant,s as OutlineVariant,a as WithCustomContent,n as WithText,Te as __namedExportsOrder,Se as default};
