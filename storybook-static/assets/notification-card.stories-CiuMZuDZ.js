import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as M}from"./index-DYby6Z_P.js";import{I as d}from"./icons-CJO6dUP8.js";import{c as p}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const q=n=>{const t=new Date(n),r=new Date().getTime()-t.getTime(),o=Math.floor(r/(1e3*60)),a=Math.floor(r/(1e3*60*60)),c=Math.floor(r/(1e3*60*60*24));return o<1?"Just now":o<60?`${o}m ago`:a<24?`${a}h ago`:c<7?`${c}d ago`:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})},O=n=>{const t={size:12,strokeWidth:2.5};switch(n){case"redirect":return e.jsx(d.externalLink,{...t});case"api_call":return e.jsx(d.check,{...t});case"workflow":return e.jsx(d.clock,{...t});case"modal":return e.jsx(d.alertCircle,{...t});default:return null}},D=({id:n,title:t,body:S,status:r="unread",createdAt:o,actions:a=[],onMarkAsRead:c,onAction:R,loadingActionId:W,className:T})=>{const l=r==="unread";return e.jsx("div",{className:p("group relative w-full rounded-2xl transition-all",l?"bg-muted":"bg-muted/40",T),children:e.jsxs("div",{className:"px-4 py-3.5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0 flex-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:p("text-[15px] leading-tight font-semibold",l?"text-foreground":"text-muted-foreground"),children:t}),l&&e.jsx("div",{className:"h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500"})]}),e.jsx("p",{className:p("mb-0 text-[13px]",l?"text-muted-foreground":"text-muted-foreground/60"),children:S})]}),l&&c&&e.jsx("button",{type:"button",onClick:()=>c(n),className:p("rounded-lg p-1.5 transition-colors","text-muted-foreground hover:bg-accent hover:text-foreground"),"aria-label":"Mark as read",children:e.jsx(d.check,{size:16})})]}),e.jsxs("div",{className:"mt-3 flex items-end justify-between",children:[a.length>0&&e.jsx("div",{className:p("flex flex-wrap items-center gap-2",!l&&"opacity-60"),children:a.map(i=>{const I=W===i.id,k=i.executed||!1,j=I&&i.type!=="modal";return e.jsx("button",{type:"button",disabled:I||k,onClick:()=>R?.(n,i.id,i.type),className:p("flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-normal transition",i.style==="primary"?"bg-primary/10 text-primary hover:bg-primary/20":i.style==="danger"?"bg-destructive/10 text-destructive hover:bg-destructive/20":"bg-accent text-muted-foreground hover:bg-accent hover:text-foreground",j&&"opacity-50",k&&"cursor-not-allowed opacity-60"),children:j?e.jsx(d.spinner,{size:12,className:"animate-spin"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:i.label}),k?e.jsx(d.check,{size:12,strokeWidth:2.5}):O(i.type)]})},i.id)})}),o&&e.jsx("span",{className:"text-muted-foreground/60 inline-block text-[11px]",children:q(o)})]})]})})};D.__docgenInfo={description:"",methods:[],displayName:"NotificationCard",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'unread' | 'read' | 'archived'",elements:[{name:"literal",value:"'unread'"},{name:"literal",value:"'read'"},{name:"literal",value:"'archived'"}]},description:"",defaultValue:{value:"'unread'",computed:!1}},createdAt:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"NotificationAction"}],raw:"NotificationAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},onMarkAsRead:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(notificationId: string, actionId: string, actionType: ActionType) => void",signature:{arguments:[{type:{name:"string"},name:"notificationId"},{type:{name:"string"},name:"actionId"},{type:{name:"union",raw:"'redirect' | 'api_call' | 'workflow' | 'modal'",elements:[{name:"literal",value:"'redirect'"},{name:"literal",value:"'api_call'"},{name:"literal",value:"'workflow'"},{name:"literal",value:"'modal'"}]},name:"actionType"}],return:{name:"void"}}},description:""},loadingActionId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={component:D,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A notification card component with support for actions, status indicators, and timestamps."}}}},U=new Date(Date.now()-1e3*60*5).toISOString(),s={id:"notification-1",title:"New message from Sarah",body:"Hey! I wanted to follow up on our conversation about the project timeline.",status:"unread",createdAt:U},u={args:s},m={args:{...s,status:"unread"}},g={args:{...s,status:"read"}},y={args:{...s,status:"archived"}},f={args:{...s,actions:[{id:"reply",label:"Reply",type:"redirect"},{id:"dismiss",label:"Dismiss",type:"modal",style:"default"}]}},h={args:{...s,title:"Upgrade Required",body:"Your plan has expired. Upgrade now to continue accessing premium features.",actions:[{id:"upgrade",label:"Upgrade Plan",type:"redirect",style:"primary"}]}},w={args:{...s,title:"Account Security Alert",body:"We detected a sign-in from a new device. If this wasn't you, please secure your account.",actions:[{id:"secure",label:"Secure Account",type:"api_call",style:"danger"},{id:"ignore",label:"It Was Me",type:"modal",style:"default"}]}},b={args:{...s,title:"Task Completed",body:"Your export task has been completed successfully.",actions:[{id:"download",label:"Download",type:"redirect",executed:!0}]}},x={args:{...s,actions:[{id:"process",label:"Process",type:"workflow"}],loadingActionId:"process"}},v={args:{...s,title:"Deployment Ready",body:"Your application has been deployed to production and is ready for testing.",actions:[{id:"view",label:"View App",type:"redirect"},{id:"rollback",label:"Rollback",type:"api_call",style:"danger"},{id:"logs",label:"View Logs",type:"modal"}]}},A={args:{id:"old-notification",title:"Weekly Report",body:"Your weekly analytics report is ready to view.",status:"read",createdAt:new Date(Date.now()-1e3*60*60*24*7).toISOString()}},N={render:()=>{const[n,t]=M.useState([{id:"1",title:"New message from Sarah",body:"Hey! I wanted to follow up on our conversation about the project timeline.",status:"unread",createdAt:new Date(Date.now()-3e5).toISOString()},{id:"2",title:"Deployment Complete",body:"Your application has been successfully deployed to production.",status:"read",createdAt:new Date(Date.now()-72e5).toISOString()}]),S=r=>{t(o=>o.map(a=>a.id===r?{...a,status:"read"}:a))};return e.jsx("div",{className:"flex flex-col gap-4 w-full max-w-md",children:n.map(r=>e.jsx(D,{...r,onMarkAsRead:S,onAction:(o,a,c)=>{console.log("Action:",{notificationId:o,actionId:a,actionType:c})}},r.id))})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: baseNotification
}`,...u.parameters?.docs?.source},description:{story:"Default notification card with unread status.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'unread'
  }
}`,...m.parameters?.docs?.source},description:{story:"Unread notification state with visual indicator.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'read'
  }
}`,...g.parameters?.docs?.source},description:{story:"Read notification with muted styling.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'archived'
  }
}`,...y.parameters?.docs?.source},description:{story:"Archived notification for dismissed items.",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Notification with action buttons for interaction.",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Notification with primary action button for promotions.",...h.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Notification with danger action for security alerts.",...w.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Notification with executed action showing completed state.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    actions: [{
      id: 'process',
      label: 'Process',
      type: 'workflow'
    }],
    loadingActionId: 'process'
  }
}`,...x.parameters?.docs?.source},description:{story:"Notification with loading action during async operations.",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Notification with multiple action options.",...v.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'old-notification',
    title: 'Weekly Report',
    body: 'Your weekly analytics report is ready to view.',
    status: 'read',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
  }
}`,...A.parameters?.docs?.source},description:{story:"Older notification demonstrating timestamp formatting.",...A.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Interactive example with multiple notifications and state management.",...N.parameters?.docs?.description}}};const V=["Default","Unread","Read","Archived","WithActions","WithPrimaryAction","WithDangerAction","WithExecutedAction","WithLoadingAction","WithMultipleActions","OldNotification","Interactive"];export{y as Archived,u as Default,N as Interactive,A as OldNotification,g as Read,m as Unread,f as WithActions,w as WithDangerAction,b as WithExecutedAction,x as WithLoadingAction,v as WithMultipleActions,h as WithPrimaryAction,V as __namedExportsOrder,E as default};
