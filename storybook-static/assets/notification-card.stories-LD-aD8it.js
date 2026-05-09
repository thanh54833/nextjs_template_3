import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as ge}from"./index-CAPI2NOD.js";import{I as d}from"./icons-Bvzo9UON.js";import{c as p}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ye=i=>{const t=new Date(i),r=new Date().getTime()-t.getTime(),s=Math.floor(r/(1e3*60)),a=Math.floor(r/(1e3*60*60)),c=Math.floor(r/(1e3*60*60*24));return s<1?"Just now":s<60?`${s}m ago`:a<24?`${a}h ago`:c<7?`${c}d ago`:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})},fe=i=>{const t={size:12,strokeWidth:2.5};switch(i){case"redirect":return e.jsx(d.externalLink,{...t});case"api_call":return e.jsx(d.check,{...t});case"workflow":return e.jsx(d.clock,{...t});case"modal":return e.jsx(d.alertCircle,{...t});default:return null}},j=({id:i,title:t,body:u,status:r="unread",createdAt:s,actions:a=[],onMarkAsRead:c,onAction:S,loadingActionId:ue,className:me})=>{const l=r==="unread";return e.jsx("div",{className:p("group relative w-full rounded-2xl transition-all",l?"bg-muted":"bg-muted/40",me),children:e.jsxs("div",{className:"px-4 py-3.5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0 flex-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:p("text-[15px] leading-tight font-semibold",l?"text-foreground":"text-muted-foreground"),children:t}),l&&e.jsx("div",{className:"h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500"})]}),e.jsx("p",{className:p("mb-0 text-[13px]",l?"text-muted-foreground":"text-muted-foreground/60"),children:u})]}),l&&c&&e.jsx("button",{type:"button",onClick:()=>c(i),className:p("rounded-lg p-1.5 transition-colors","text-muted-foreground hover:bg-accent hover:text-foreground"),"aria-label":"Mark as read",children:e.jsx(d.check,{size:16})})]}),e.jsxs("div",{className:"mt-3 flex items-end justify-between",children:[a.length>0&&e.jsx("div",{className:p("flex flex-wrap items-center gap-2",!l&&"opacity-60"),children:a.map(o=>{const I=ue===o.id,D=o.executed||!1,W=I&&o.type!=="modal";return e.jsx("button",{type:"button",disabled:I||D,onClick:()=>S==null?void 0:S(i,o.id,o.type),className:p("flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-normal transition",o.style==="primary"?"bg-primary/10 text-primary hover:bg-primary/20":o.style==="danger"?"bg-destructive/10 text-destructive hover:bg-destructive/20":"bg-accent text-muted-foreground hover:bg-accent hover:text-foreground",W&&"opacity-50",D&&"cursor-not-allowed opacity-60"),children:W?e.jsx(d.spinner,{size:12,className:"animate-spin"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:o.label}),D?e.jsx(d.check,{size:12,strokeWidth:2.5}):fe(o.type)]})},o.id)})}),s&&e.jsx("span",{className:"text-muted-foreground/60 inline-block text-[11px]",children:ye(s)})]})]})})};j.__docgenInfo={description:"",methods:[],displayName:"NotificationCard",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'unread' | 'read' | 'archived'",elements:[{name:"literal",value:"'unread'"},{name:"literal",value:"'read'"},{name:"literal",value:"'archived'"}]},description:"",defaultValue:{value:"'unread'",computed:!1}},createdAt:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"NotificationAction"}],raw:"NotificationAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},onMarkAsRead:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(notificationId: string, actionId: string, actionType: ActionType) => void",signature:{arguments:[{type:{name:"string"},name:"notificationId"},{type:{name:"string"},name:"actionId"},{type:{name:"union",raw:"'redirect' | 'api_call' | 'workflow' | 'modal'",elements:[{name:"literal",value:"'redirect'"},{name:"literal",value:"'api_call'"},{name:"literal",value:"'workflow'"},{name:"literal",value:"'modal'"}]},name:"actionType"}],return:{name:"void"}}},description:""},loadingActionId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ke={component:j,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A notification card component with support for actions, status indicators, and timestamps."}}}},be=new Date(Date.now()-1e3*60*5).toISOString(),n={id:"notification-1",title:"New message from Sarah",body:"Hey! I wanted to follow up on our conversation about the project timeline.",status:"unread",createdAt:be},m={args:n},g={args:{...n,status:"unread"}},y={args:{...n,status:"read"}},f={args:{...n,status:"archived"}},b={args:{...n,actions:[{id:"reply",label:"Reply",type:"redirect"},{id:"dismiss",label:"Dismiss",type:"modal",style:"default"}]}},h={args:{...n,title:"Upgrade Required",body:"Your plan has expired. Upgrade now to continue accessing premium features.",actions:[{id:"upgrade",label:"Upgrade Plan",type:"redirect",style:"primary"}]}},w={args:{...n,title:"Account Security Alert",body:"We detected a sign-in from a new device. If this wasn't you, please secure your account.",actions:[{id:"secure",label:"Secure Account",type:"api_call",style:"danger"},{id:"ignore",label:"It Was Me",type:"modal",style:"default"}]}},x={args:{...n,title:"Task Completed",body:"Your export task has been completed successfully.",actions:[{id:"download",label:"Download",type:"redirect",executed:!0}]}},v={args:{...n,actions:[{id:"process",label:"Process",type:"workflow"}],loadingActionId:"process"}},A={args:{...n,title:"Deployment Ready",body:"Your application has been deployed to production and is ready for testing.",actions:[{id:"view",label:"View App",type:"redirect"},{id:"rollback",label:"Rollback",type:"api_call",style:"danger"},{id:"logs",label:"View Logs",type:"modal"}]}},he=new Date(Date.now()-1e3*60*60*24*7).toISOString(),N={args:{id:"old-notification",title:"Weekly Report",body:"Your weekly analytics report is ready to view.",status:"read",createdAt:he}},k={render:()=>{const[i,t]=ge.useState([{id:"1",title:"New message from Sarah",body:"Hey! I wanted to follow up on our conversation about the project timeline.",status:"unread",createdAt:new Date(Date.now()-3e5).toISOString()},{id:"2",title:"Deployment Complete",body:"Your application has been successfully deployed to production.",status:"read",createdAt:new Date(Date.now()-72e5).toISOString()}]),u=r=>{t(s=>s.map(a=>a.id===r?{...a,status:"read"}:a))};return e.jsx("div",{className:"flex flex-col gap-4 w-full max-w-md",children:i.map(r=>e.jsx(j,{...r,onMarkAsRead:u,onAction:(s,a,c)=>{console.log("Action:",{notificationId:s,actionId:a,actionType:c})}},r.id))})}};var R,T,M;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: baseNotification
}`,...(M=(T=m.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var q,_,C;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'unread'
  }
}`,...(C=(_=g.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var U,Y,O;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'read'
  }
}`,...(O=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var L,P,E;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'archived'
  }
}`,...(E=(P=f.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var V,z,H;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    actions: [{
      id: 'reply',
      label: 'Reply',
      type: 'redirect'
    }, {
      id: 'dismiss',
      label: 'Dismiss',
      type: 'modal',
      style: 'default'
    }]
  }
}`,...(H=(z=b.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var $,F,J;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    title: 'Upgrade Required',
    body: 'Your plan has expired. Upgrade now to continue accessing premium features.',
    actions: [{
      id: 'upgrade',
      label: 'Upgrade Plan',
      type: 'redirect',
      style: 'primary'
    }]
  }
}`,...(J=(F=h.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var B,G,K;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    title: 'Account Security Alert',
    body: "We detected a sign-in from a new device. If this wasn't you, please secure your account.",
    actions: [{
      id: 'secure',
      label: 'Secure Account',
      type: 'api_call',
      style: 'danger'
    }, {
      id: 'ignore',
      label: 'It Was Me',
      type: 'modal',
      style: 'default'
    }]
  }
}`,...(K=(G=w.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    title: 'Task Completed',
    body: 'Your export task has been completed successfully.',
    actions: [{
      id: 'download',
      label: 'Download',
      type: 'redirect',
      executed: true
    }]
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    actions: [{
      id: 'process',
      label: 'Process',
      type: 'workflow'
    }],
    loadingActionId: 'process'
  }
}`,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,oe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    title: 'Deployment Ready',
    body: 'Your application has been deployed to production and is ready for testing.',
    actions: [{
      id: 'view',
      label: 'View App',
      type: 'redirect'
    }, {
      id: 'rollback',
      label: 'Rollback',
      type: 'api_call',
      style: 'danger'
    }, {
      id: 'logs',
      label: 'View Logs',
      type: 'modal'
    }]
  }
}`,...(oe=(se=A.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ie,ce;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    id: 'old-notification',
    title: 'Weekly Report',
    body: 'Your weekly analytics report is ready to view.',
    status: 'read',
    createdAt: sevenDaysAgo
  }
}`,...(ce=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,le,pe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = React.useState([{
      id: '1',
      title: 'New message from Sarah',
      body: 'Hey! I wanted to follow up on our conversation about the project timeline.',
      status: 'unread' as const,
      createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString()
    }, {
      id: '2',
      title: 'Deployment Complete',
      body: 'Your application has been successfully deployed to production.',
      status: 'read' as const,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString()
    }]);
    const handleMarkAsRead = (id: string) => {
      setNotifications(prev => prev.map(n => n.id === id ? {
        ...n,
        status: 'read' as const
      } : n));
    };
    return <div className="flex flex-col gap-4 w-full max-w-md">
        {notifications.map(notification => <NotificationCard key={notification.id} {...notification} onMarkAsRead={handleMarkAsRead} onAction={(notificationId, actionId, actionType) => {
        console.log('Action:', {
          notificationId,
          actionId,
          actionType
        });
      }} />)}
      </div>;
  }
}`,...(pe=(le=k.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};const Se=["Default","Unread","Read","Archived","WithActions","WithPrimaryAction","WithDangerAction","WithExecutedAction","WithLoadingAction","WithMultipleActions","OldNotification","Interactive"];export{f as Archived,m as Default,k as Interactive,N as OldNotification,y as Read,g as Unread,b as WithActions,w as WithDangerAction,x as WithExecutedAction,v as WithLoadingAction,A as WithMultipleActions,h as WithPrimaryAction,Se as __namedExportsOrder,ke as default};
