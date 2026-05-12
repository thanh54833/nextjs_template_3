import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as D}from"./index-DYby6Z_P.js";import{I as l}from"./icons-BdTSAv6R.js";import{c as p}from"./utils-Czy_q_oT.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _=s=>{const t=new Date(s),i=new Date().getTime()-t.getTime(),n=Math.floor(i/(1e3*60)),a=Math.floor(i/(1e3*60*60)),o=Math.floor(i/(1e3*60*60*24));return n<1?"Just now":n<60?`${n}m ago`:a<24?`${a}h ago`:o<7?`${o}d ago`:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})},U=s=>{const t={size:12,strokeWidth:2.5};switch(s){case"redirect":return e.jsx(l.externalLink,{...t});case"api_call":return e.jsx(l.check,{...t});case"workflow":return e.jsx(l.clock,{...t});case"modal":return e.jsx(l.alertCircle,{...t});default:return null}},I=({id:s,title:t,body:u,status:i="unread",createdAt:n,actions:a=[],onMarkAsRead:o,onAction:R,loadingActionId:T,className:M})=>{const d=i==="unread";return e.jsx("div",{className:p("group relative w-full rounded-2xl transition-all",d?"bg-muted":"bg-muted/40",M),"aria-label":d?`${t} — unread`:t,children:e.jsxs("div",{className:"px-4 py-3.5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0 flex-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:p("text-[15px] leading-tight font-semibold",d?"text-foreground":"text-muted-foreground"),children:t}),d&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500","aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Unread"})]})]}),e.jsx("p",{className:p("mb-0 text-[13px]",d?"text-muted-foreground":"text-muted-foreground/60"),children:u})]}),d&&o&&e.jsx("button",{type:"button",onClick:()=>o(s),className:p("rounded-lg p-1.5 transition-colors","text-muted-foreground hover:bg-accent hover:text-foreground","focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring/50"),"aria-label":"Mark as read",children:e.jsx(l.check,{size:16})})]}),e.jsxs("div",{className:"mt-3 flex items-end justify-between",children:[a.length>0&&e.jsx("div",{className:p("flex flex-wrap items-center gap-2",!d&&"opacity-60"),children:a.map(r=>{const W=T===r.id,k=r.executed||!1,C=W&&r.type!=="modal";return e.jsx("button",{type:"button",disabled:W||k,onClick:()=>R?.(s,r.id,r.type),className:p("flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-normal transition",r.style==="primary"?"bg-primary/10 text-primary hover:bg-primary/20":r.style==="danger"?"bg-destructive/10 text-destructive hover:bg-destructive/20":"bg-accent text-muted-foreground hover:bg-accent hover:text-foreground",C&&"opacity-50",k&&"cursor-not-allowed opacity-60","focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring/50"),children:C?e.jsx(l.spinner,{size:12,className:"animate-spin"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:r.label}),k?e.jsx(l.check,{size:12,strokeWidth:2.5}):U(r.type)]})},r.id)})}),n&&e.jsx("span",{className:"text-muted-foreground/60 inline-block text-[11px]",children:_(n)})]})]})})};I.__docgenInfo={description:"",methods:[],displayName:"NotificationCard",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'unread' | 'read' | 'archived'",elements:[{name:"literal",value:"'unread'"},{name:"literal",value:"'read'"},{name:"literal",value:"'archived'"}]},description:"",defaultValue:{value:"'unread'",computed:!1}},createdAt:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"NotificationAction"}],raw:"NotificationAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},onMarkAsRead:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(notificationId: string, actionId: string, actionType: ActionType) => void",signature:{arguments:[{type:{name:"string"},name:"notificationId"},{type:{name:"string"},name:"actionId"},{type:{name:"union",raw:"'redirect' | 'api_call' | 'workflow' | 'modal'",elements:[{name:"literal",value:"'redirect'"},{name:"literal",value:"'api_call'"},{name:"literal",value:"'workflow'"},{name:"literal",value:"'modal'"}]},name:"actionType"}],return:{name:"void"}}},description:""},loadingActionId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const V={component:I,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A notification card component with support for actions, status indicators, and timestamps."}}}},O=new Date(Date.now()-1e3*60*5).toISOString(),c={id:"notification-1",title:"New message from Sarah",body:"Hey! I wanted to follow up on our conversation about the project timeline.",status:"unread",createdAt:O},m={args:c},g={args:{...c,status:"unread"}},f={args:{...c,status:"read"}},y={args:{...c,status:"archived"}},x={args:{...c,actions:[{id:"reply",label:"Reply",type:"redirect"},{id:"dismiss",label:"Dismiss",type:"modal",style:"default"}]}},b={args:{...c,title:"Upgrade Required",body:"Your plan has expired. Upgrade now to continue accessing premium features.",actions:[{id:"upgrade",label:"Upgrade Plan",type:"redirect",style:"primary"}]}},h={args:{...c,title:"Account Security Alert",body:"We detected a sign-in from a new device. If this wasn't you, please secure your account.",actions:[{id:"secure",label:"Secure Account",type:"api_call",style:"danger"},{id:"ignore",label:"It Was Me",type:"modal",style:"default"}]}},w={render:()=>{const[s,t]=D.useState(!1),[u,i]=D.useState(null),n=(a,o)=>{if(o==="secure"&&!s){i(o);return}console.log("Action fired:",o),t(!0),i(null)};return e.jsxs("div",{className:"space-y-3 max-w-sm",children:[e.jsx(I,{id:"security-1",title:"Account Security Alert",body:"We detected a sign-in from a new device in London, UK. If this wasn't you, please secure your account immediately.",status:"unread",createdAt:new Date(Date.now()-1e3*60*2).toISOString(),actions:[{id:"secure",label:"Secure Account",type:"api_call",style:"danger"},{id:"ignore",label:"It Was Me",type:"modal",style:"default"}],onAction:n}),u&&!s&&e.jsxs("div",{className:"rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm",children:[e.jsx("p",{className:"font-medium text-destructive mb-2",children:"Confirm: Secure your account?"}),e.jsx("p",{className:"text-muted-foreground text-xs mb-3",children:"This will log out all other sessions and send a security email."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"rounded-md bg-destructive px-3 py-1.5 text-xs font-medium text-white focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring/50",onClick:()=>{t(!0),i(null)},children:"Yes, secure it"}),e.jsx("button",{className:"rounded-md border px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring/50",onClick:()=>i(null),children:"Cancel"})]})]}),s&&e.jsx("p",{className:"text-xs text-muted-foreground px-1",children:"Account secured. All other sessions logged out."})]})}},v={args:{...c,title:"Task Completed",body:"Your export task has been completed successfully.",actions:[{id:"download",label:"Download",type:"redirect",executed:!0}]}},A={args:{...c,actions:[{id:"process",label:"Process",type:"workflow"}],loadingActionId:"process"}},N={args:{...c,title:"Deployment Ready",body:"Your application has been deployed to production and is ready for testing.",actions:[{id:"view",label:"View App",type:"redirect"},{id:"rollback",label:"Rollback",type:"api_call",style:"danger"},{id:"logs",label:"View Logs",type:"modal"}]}},S={args:{id:"old-notification",title:"Weekly Report",body:"Your weekly analytics report is ready to view.",status:"read",createdAt:new Date(Date.now()-1e3*60*60*24*7).toISOString()}},j={render:()=>{const[s,t]=D.useState([{id:"1",title:"New message from Sarah",body:"Hey! I wanted to follow up on our conversation about the project timeline.",status:"unread",createdAt:new Date(Date.now()-3e5).toISOString()},{id:"2",title:"Deployment Complete",body:"Your application has been successfully deployed to production.",status:"read",createdAt:new Date(Date.now()-72e5).toISOString()}]),u=i=>{t(n=>n.map(a=>a.id===i?{...a,status:"read"}:a))};return e.jsx("div",{className:"flex flex-col gap-4 w-full max-w-md",children:s.map(i=>e.jsx(I,{...i,onMarkAsRead:u,onAction:(n,a,o)=>{console.log("Action:",{notificationId:n,actionId:a,actionType:o})}},i.id))})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: baseNotification
}`,...m.parameters?.docs?.source},description:{story:"Default notification card with unread status.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'unread'
  }
}`,...g.parameters?.docs?.source},description:{story:"Unread notification state with visual indicator.",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'read'
  }
}`,...f.parameters?.docs?.source},description:{story:"Read notification with muted styling.",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    status: 'archived'
  }
}`,...y.parameters?.docs?.source},description:{story:"Archived notification for dismissed items.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Notification with action buttons for interaction.",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Notification with primary action button for promotions.",...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Notification with danger action for security alerts.",...h.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [confirmed, setConfirmed] = React.useState(false);
    const [pending, setPending] = React.useState<string | null>(null);
    const handleAction = (_notificationId: string, actionId: string) => {
      if (actionId === 'secure' && !confirmed) {
        setPending(actionId);
        return;
      }
      console.log('Action fired:', actionId);
      setConfirmed(true);
      setPending(null);
    };
    return <div className="space-y-3 max-w-sm">
        <NotificationCard id="security-1" title="Account Security Alert" body="We detected a sign-in from a new device in London, UK. If this wasn't you, please secure your account immediately." status="unread" createdAt={new Date(Date.now() - 1000 * 60 * 2).toISOString()} actions={[{
        id: 'secure',
        label: 'Secure Account',
        type: 'api_call',
        style: 'danger'
      }, {
        id: 'ignore',
        label: 'It Was Me',
        type: 'modal',
        style: 'default'
      }]} onAction={handleAction} />
        {pending && !confirmed && <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm">
            <p className="font-medium text-destructive mb-2">Confirm: Secure your account?</p>
            <p className="text-muted-foreground text-xs mb-3">This will log out all other sessions and send a security email.</p>
            <div className="flex gap-2">
              <button className="rounded-md bg-destructive px-3 py-1.5 text-xs font-medium text-white focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring/50" onClick={() => {
            setConfirmed(true);
            setPending(null);
          }}>
                Yes, secure it
              </button>
              <button className="rounded-md border px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring/50" onClick={() => setPending(null)}>
                Cancel
              </button>
            </div>
          </div>}
        {confirmed && <p className="text-xs text-muted-foreground px-1">Account secured. All other sessions logged out.</p>}
      </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:"Security alert with client-side confirmation before the destructive action fires",...w.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Notification with executed action showing completed state.",...v.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseNotification,
    actions: [{
      id: 'process',
      label: 'Process',
      type: 'workflow'
    }],
    loadingActionId: 'process'
  }
}`,...A.parameters?.docs?.source},description:{story:"Notification with loading action during async operations.",...A.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Notification with multiple action options.",...N.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'old-notification',
    title: 'Weekly Report',
    body: 'Your weekly analytics report is ready to view.',
    status: 'read',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
  }
}`,...S.parameters?.docs?.source},description:{story:"Older notification demonstrating timestamp formatting.",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Interactive example with multiple notifications and state management.",...j.parameters?.docs?.description}}};const z=["Default","Unread","Read","Archived","WithActions","WithPrimaryAction","WithDangerAction","WithDangerActionConfirm","WithExecutedAction","WithLoadingAction","WithMultipleActions","OldNotification","Interactive"];export{y as Archived,m as Default,j as Interactive,S as OldNotification,f as Read,g as Unread,x as WithActions,h as WithDangerAction,w as WithDangerActionConfirm,v as WithExecutedAction,A as WithLoadingAction,N as WithMultipleActions,b as WithPrimaryAction,z as __namedExportsOrder,V as default};
