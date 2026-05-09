const T={component:Heading,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A page heading component that displays a title with an optional description and info content. Used for page headers and section titles."}}}},e={args:{title:"Dashboard",description:"Overview of your metrics and activity."}},t={args:{title:"Analytics",description:"Detailed analytics for your workspace.",infoContent:{title:"Analytics Info",sections:[{title:"Overview",description:"This page shows detailed analytics about your workspace performance."}]}}},a={args:{title:"Settings",description:"Manage your account and workspace settings."}},r={args:{title:"Product Management",description:"Manage your products, inventory, and orders."}};var o,s,n,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    description: 'Overview of your metrics and activity.'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:"Default heading with title and description.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};var d,p,l,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Analytics',
    description: 'Detailed analytics for your workspace.',
    infoContent: {
      title: 'Analytics Info',
      sections: [{
        title: 'Overview',
        description: 'This page shows detailed analytics about your workspace performance.'
      }]
    }
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source},description:{story:"Heading with info content for contextual help.",...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var m,y,f,h,w;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    description: 'Manage your account and workspace settings.'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"Small heading variant.",...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};var v,S,D,k,M;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Product Management',
    description: 'Manage your products, inventory, and orders.'
  }
}`,...(D=(S=r.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:"Large heading variant.",...(M=(k=r.parameters)==null?void 0:k.docs)==null?void 0:M.description}}};const A=["Default","WithInfo","SmallTitle","LargeTitle"];export{e as Default,r as LargeTitle,a as SmallTitle,t as WithInfo,A as __namedExportsOrder,T as default};
