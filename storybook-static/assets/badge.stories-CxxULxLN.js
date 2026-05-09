const x={component:Badge,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A small label component for highlighting statuses, categories, or counts. Supports multiple variants like default, secondary, destructive, and outline."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"],description:"Visual style variant of the badge"}}},e={args:{children:"Default"}},r={args:{variant:"secondary",children:"Secondary"}},t={args:{variant:"destructive",children:"Destructive"}},a={args:{variant:"outline",children:"Outline"}};var s,n,o,c,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source},description:{story:"Default badge with primary styling.",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.description}}};var d,u,l,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source},description:{story:"Secondary variant badge.",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var g,v,y,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Destructive variant for error or warning states.",...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var D,S,O,b,w;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(O=(S=a.parameters)==null?void 0:S.docs)==null?void 0:O.source},description:{story:"Outline variant with border styling.",...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};const _=["Default","Secondary","Destructive","Outline"];export{e as Default,t as Destructive,a as Outline,r as Secondary,_ as __namedExportsOrder,x as default};
