import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as Ye}from"./index-CAPI2NOD.js";import{I as d}from"./icons-Bvzo9UON.js";import{c as p}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Le=n=>{const t=new Date(n),r=new Date().getTime()-t.getTime(),o=Math.floor(r/(1e3*60)),a=Math.floor(r/(1e3*60*60)),c=Math.floor(r/(1e3*60*60*24));return o<1?"Just now":o<60?`${o}m ago`:a<24?`${a}h ago`:c<7?`${c}d ago`:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})},Pe=n=>{const t={size:12,strokeWidth:2.5};switch(n){case"redirect":return e.jsx(d.externalLink,{...t});case"api_call":return e.jsx(d.check,{...t});case"workflow":return e.jsx(d.clock,{...t});case"modal":return e.jsx(d.alertCircle,{...t});default:return null}},I=({id:n,title:t,body:S,status:r="unread",createdAt:o,actions:a=[],onMarkAsRead:c,onAction:k,loadingActionId:_e,className:Ce})=>{const l=r==="unread";return e.jsx("div",{className:p("group relative w-full rounded-2xl transition-all",l?"bg-muted":"bg-muted/40",Ce),children:e.jsxs("div",{className:"px-4 py-3.5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0 flex-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:p("text-[15px] leading-tight font-semibold",l?"text-foreground":"text-muted-foreground"),children:t}),l&&e.jsx("div",{className:"h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500"})]}),e.jsx("p",{className:p("mb-0 text-[13px]",l?"text-muted-foreground":"text-muted-foreground/60"),children:S})]}),l&&c&&e.jsx("button",{type:"button",onClick:()=>c(n),className:p("rounded-lg p-1.5 transition-colors","text-muted-foreground hover:bg-accent hover:text-foreground"),"aria-label":"Mark as read",children:e.jsx(d.check,{size:16})})]}),e.jsxs("div",{className:"mt-3 flex items-end justify-between",children:[a.length>0&&e.jsx("div",{className:p("flex flex-wrap items-center gap-2",!l&&"opacity-60"),children:a.map(i=>{const j=_e===i.id,D=i.executed||!1,R=j&&i.type!=="modal";return e.jsx("button",{type:"button",disabled:j||D,onClick:()=>k==null?void 0:k(n,i.id,i.type),className:p("flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-normal transition",i.style==="primary"?"bg-primary/10 text-primary hover:bg-primary/20":i.style==="danger"?"bg-destructive/10 text-destructive hover:bg-destructive/20":"bg-accent text-muted-foreground hover:bg-accent hover:text-foreground",R&&"opacity-50",D&&"cursor-not-allowed opacity-60"),children:R?e.jsx(d.spinner,{size:12,className:"animate-spin"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:i.label}),D?e.jsx(d.check,{size:12,strokeWidth:2.5}):Pe(i.type)]})},i.id)})}),o&&e.jsx("span",{className:"text-muted-foreground/60 inline-block text-[11px]",children:Le(o)})]})]})})};I.__docgenInfo={description:"",methods:[],displayName:"NotificationCard",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'unread' | 'read' | 'archived'",elements:[{name:"literal",value:"'unread'"},{name:"literal",value:"'read'"},{name:"literal",value:"'archived'"}]},description:"",defaultValue:{value:"'unread'",computed:!1}},createdAt:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"NotificationAction"}],raw:"NotificationAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},onMarkAsRead:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(notificationId: string, actionId: string, actionType: ActionType) => void",signature:{arguments:[{type:{name:"string"},name:"notificationId"},{type:{name:"string"},name:"actionId"},{type:{name:"union",raw:"'redirect' | 'api_call' | 'workflow' | 'modal'",elements:[{name:"literal",value:"'redirect'"},{name:"literal",value:"'api_call'"},{name:"literal",value:"'workflow'"},{name:"literal",value:"'modal'"}]},name:"actionType"}],return:{name:"void"}}},description:""},loadingActionId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Je={component:I,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A notification card component with support for actions, status indicators, and timestamps."}}}},Ee=new Date(Date.now()-1e3*60*5).toISOString(),s={id:"notification-1",title:"New message from Sarah",body:"Hey! I wanted to follow up on our conversation about the project timeline.",status:"unread",createdAt:Ee},u={args:s},m={args:{...s,status:"unread"}},g={args:{...s,status:"read"}},y={args:{...s,status:"archived"}},f={args:{...s,actions:[{id:"reply",label:"Reply",type:"redirect"},{id:"dismiss",label:"Dismiss",type:"modal",style:"default"}]}},h={args:{...s,title:"Upgrade Required",body:"Your plan has expired. Upgrade now to continue accessing premium features.",actions:[{id:"upgrade",label:"Upgrade Plan",type:"redirect",style:"primary"}]}},w={args:{...s,title:"Account Security Alert",body:"We detected a sign-in from a new device. If this wasn't you, please secure your account.",actions:[{id:"secure",label:"Secure Account",type:"api_call",style:"danger"},{id:"ignore",label:"It Was Me",type:"modal",style:"default"}]}},b={args:{...s,title:"Task Completed",body:"Your export task has been completed successfully.",actions:[{id:"download",label:"Download",type:"redirect",executed:!0}]}},x={args:{...s,actions:[{id:"process",label:"Process",type:"workflow"}],loadingActionId:"process"}},v={args:{...s,title:"Deployment Ready",body:"Your application has been deployed to production and is ready for testing.",actions:[{id:"view",label:"View App",type:"redirect"},{id:"rollback",label:"Rollback",type:"api_call",style:"danger"},{id:"logs",label:"View Logs",type:"modal"}]}},N={args:{id:"old-notification",title:"Weekly Report",body:"Your weekly analytics report is ready to view.",status:"read",createdAt:new Date(Date.now()-1e3*60*60*24*7).toISOString()}},A={render:()=>{const[n,t]=Ye.useState([{id:"1",title:"New message from Sarah",body:"Hey! I wanted to follow up on our conversation about the project timeline.",status:"unread",createdAt:new Date(Date.now()-3e5).toISOString()},{id:"2",title:"Deployment Complete",body:"Your application has been successfully deployed to production.",status:"read",createdAt:new Date(Date.now()-72e5).toISOString()}]),S=r=>{t(o=>o.map(a=>a.id===r?{...a,status:"read"}:a))};return e.jsx("div",{className:"flex flex-col gap-4 w-full max-w-md",children:n.map(r=>e.jsx(I,{...r,onMarkAsRead:S,onAction:(o,a,c)=>{console.log("Action:",{notificationId:o,actionId:a,actionType:c})}},r.id))})}};var W,T,M,q,O;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: baseNotification
}`,...(M=(T=u.parameters)==null?void 0:T.docs)==null?void 0:M.source},description:{story:"Default notification card with unread status.",...(O=(q=u.parameters)==null?void 0:q.docs)==null?void 0:O.description}}};var U,_,C,Y,L;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'unread'
  }
}`,...(C=(_=m.parameters)==null?void 0:_.docs)==null?void 0:C.source},description:{story:"Unread notification state with visual indicator.",...(L=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:L.description}}};var P,E,V,z,H;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'read'
  }
}`,...(V=(E=g.parameters)==null?void 0:E.docs)==null?void 0:V.source},description:{story:"Read notification with muted styling.",...(H=(z=g.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var $,F,J,B,G;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'archived'
  }
}`,...(J=(F=y.parameters)==null?void 0:F.docs)==null?void 0:J.source},description:{story:"Archived notification for dismissed items.",...(G=(B=y.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var K,Q,X,Z,ee;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Notification with action buttons for interaction.",...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ae,re,oe,ie;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:"Notification with primary action button for promotions.",...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var se,ne,ce,de,le;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ce.source},description:{story:"Notification with danger action for security alerts.",...(le=(de=w.parameters)==null?void 0:de.docs)==null?void 0:le.description}}};var pe,ue,me,ge,ye;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"Notification with executed action showing completed state.",...(ye=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ye.description}}};var fe,he,we,be,xe;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    actions: [{
      id: 'process',
      label: 'Process',
      type: 'workflow'
    }],
    loadingActionId: 'process'
  }
}`,...(we=(he=x.parameters)==null?void 0:he.docs)==null?void 0:we.source},description:{story:"Notification with loading action during async operations.",...(xe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:xe.description}}};var ve,Ne,Ae,Se,ke;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ae=(Ne=v.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source},description:{story:"Notification with multiple action options.",...(ke=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:ke.description}}};var De,Ie,je,Re,We;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    id: 'old-notification',
    title: 'Weekly Report',
    body: 'Your weekly analytics report is ready to view.',
    status: 'read',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
  }
}`,...(je=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:je.source},description:{story:"Older notification demonstrating timestamp formatting.",...(We=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:We.description}}};var Te,Me,qe,Oe,Ue;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(qe=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:qe.source},description:{story:"Interactive example with multiple notifications and state management.",...(Ue=(Oe=A.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.description}}};const Be=["Default","Unread","Read","Archived","WithActions","WithPrimaryAction","WithDangerAction","WithExecutedAction","WithLoadingAction","WithMultipleActions","OldNotification","Interactive"];export{y as Archived,u as Default,A as Interactive,N as OldNotification,g as Read,m as Unread,f as WithActions,w as WithDangerAction,b as WithExecutedAction,x as WithLoadingAction,v as WithMultipleActions,h as WithPrimaryAction,Be as __namedExportsOrder,Je as default};
