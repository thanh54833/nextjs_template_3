const Er={component:Button,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A clickable button element with various styles and sizes. Supports multiple variants like default, secondary, destructive, outline, ghost, and link."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link"],description:"Visual style variant of the button"},size:{control:"select",options:["default","sm","lg","xs","icon","icon-sm","icon-xs","icon-lg"],description:"Size of the button"}}},r={args:{children:"Button"}},e={args:{variant:"secondary",children:"Secondary"}},s={args:{variant:"destructive",children:"Destructive"}},a={args:{variant:"outline",children:"Outline"}},t={args:{variant:"ghost",children:"Ghost"}},n={args:{variant:"link",children:"Link"}},o={args:{size:"xs",children:"Extra Small"}},c={args:{size:"sm",children:"Small"}},i={args:{size:"lg",children:"Large"}},d={args:{size:"icon",children:"🔔"}},l={args:{size:"icon-xs",children:"×"}},p={args:{size:"icon-sm",children:"★"}},m={args:{size:"icon-lg",children:"👍"}},u={args:{disabled:!0,children:"Disabled"}};var g,h,y,S,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Default button with primary styling.",...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var b,z,k,x,D;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(k=(z=e.parameters)==null?void 0:z.docs)==null?void 0:k.source},description:{story:"Secondary variant button.",...(D=(x=e.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};var I,L,f,w,O;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source},description:{story:"Destructive variant for dangerous actions.",...(O=(w=s.parameters)==null?void 0:w.docs)==null?void 0:O.description}}};var G,E,X,B,_;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(X=(E=a.parameters)==null?void 0:E.docs)==null?void 0:X.source},description:{story:"Outline variant with border styling.",...(_=(B=a.parameters)==null?void 0:B.docs)==null?void 0:_.description}}};var A,T,V,j,q;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}`,...(V=(T=t.parameters)==null?void 0:T.docs)==null?void 0:V.source},description:{story:"Ghost variant with transparent background.",...(q=(j=t.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};var C,F,H,J,K;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link'
  }
}`,...(H=(F=n.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"Link variant styled as hyperlink text.",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var M,N,P,Q,R;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    children: 'Extra Small'
  }
}`,...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:"Extra small size button.",...(R=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var U,W,Y,Z,$;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.source},description:{story:"Small size button.",...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var rr,er,sr,ar,tr;i.parameters={...i.parameters,docs:{...(rr=i.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large'
  }
}`,...(sr=(er=i.parameters)==null?void 0:er.docs)==null?void 0:sr.source},description:{story:"Large size button.",...(tr=(ar=i.parameters)==null?void 0:ar.docs)==null?void 0:tr.description}}};var nr,or,cr,ir,dr;d.parameters={...d.parameters,docs:{...(nr=d.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    children: '🔔'
  }
}`,...(cr=(or=d.parameters)==null?void 0:or.docs)==null?void 0:cr.source},description:{story:"Icon-only button with default icon size.",...(dr=(ir=d.parameters)==null?void 0:ir.docs)==null?void 0:dr.description}}};var lr,pr,mr,ur,gr;l.parameters={...l.parameters,docs:{...(lr=l.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    size: 'icon-xs',
    children: '×'
  }
}`,...(mr=(pr=l.parameters)==null?void 0:pr.docs)==null?void 0:mr.source},description:{story:"Icon-only button with extra small size.",...(gr=(ur=l.parameters)==null?void 0:ur.docs)==null?void 0:gr.description}}};var hr,yr,Sr,vr,br;p.parameters={...p.parameters,docs:{...(hr=p.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    size: 'icon-sm',
    children: '★'
  }
}`,...(Sr=(yr=p.parameters)==null?void 0:yr.docs)==null?void 0:Sr.source},description:{story:"Icon-only button with small size.",...(br=(vr=p.parameters)==null?void 0:vr.docs)==null?void 0:br.description}}};var zr,kr,xr,Dr,Ir;m.parameters={...m.parameters,docs:{...(zr=m.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  args: {
    size: 'icon-lg',
    children: '👍'
  }
}`,...(xr=(kr=m.parameters)==null?void 0:kr.docs)==null?void 0:xr.source},description:{story:"Icon-only button with large size.",...(Ir=(Dr=m.parameters)==null?void 0:Dr.docs)==null?void 0:Ir.description}}};var Lr,fr,wr,Or,Gr;u.parameters={...u.parameters,docs:{...(Lr=u.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(wr=(fr=u.parameters)==null?void 0:fr.docs)==null?void 0:wr.source},description:{story:"Disabled button that cannot be clicked.",...(Gr=(Or=u.parameters)==null?void 0:Or.docs)==null?void 0:Gr.description}}};const Xr=["Default","Secondary","Destructive","Outline","Ghost","Link","XSmall","Small","Large","Icon","IconXSmall","IconSmall","IconLarge","Disabled"];export{r as Default,s as Destructive,u as Disabled,t as Ghost,d as Icon,m as IconLarge,p as IconSmall,l as IconXSmall,i as Large,n as Link,a as Outline,e as Secondary,c as Small,o as XSmall,Xr as __namedExportsOrder,Er as default};
