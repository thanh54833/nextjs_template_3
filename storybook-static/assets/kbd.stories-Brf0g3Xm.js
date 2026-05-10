import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{c as me}from"./utils-BQHNewu7.js";function r({className:u,...g}){return e.jsx("kbd",{"data-slot":"kbd",className:me("bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none [&_svg:not([class*='size-'])]:size-3",u),...g})}function l({className:u,...g}){return e.jsx("kbd",{"data-slot":"kbd-group",className:me("inline-flex items-center gap-1",u),...g})}r.__docgenInfo={description:"",methods:[],displayName:"Kbd"};l.__docgenInfo={description:"",methods:[],displayName:"KbdGroup"};const ge={title:"UI/Kbd",component:r,subcomponents:{KbdGroup:l},tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A component for displaying keyboard keys and shortcuts. Supports individual keys and grouped shortcuts via KbdGroup subcomponent."}}}},s={args:{children:"⌘"}},o={args:{children:"K"}},t={args:{children:"Esc"}},a={args:{children:"⌘"}},n={args:{children:"⇧"}},c={args:{children:"⌃"}},d={args:{children:"⌥"}},i={render:()=>e.jsxs(l,{children:[e.jsx(r,{children:"⌘"}),e.jsx(r,{children:"K"})]})},p={render:()=>e.jsxs(l,{children:[e.jsx(r,{children:"⌘"}),e.jsx(r,{children:"⌥"}),e.jsx(r,{children:"P"})]})},m={args:{children:"Ctrl",className:"bg-red-500 text-white"}};var b,h,y,K,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: '⌘'
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Default keyboard key display.",...(k=(K=s.parameters)==null?void 0:K.docs)==null?void 0:k.description}}};var f,x,S,j,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'K'
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:"Single letter key.",...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var G,N,E,_,w;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Esc'
  }
}`,...(E=(N=t.parameters)==null?void 0:N.docs)==null?void 0:E.source},description:{story:"Escape key.",...(w=(_=t.parameters)==null?void 0:_.docs)==null?void 0:w.description}}};var v,O,D,I,z;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: '⌘'
  }
}`,...(D=(O=a.parameters)==null?void 0:O.docs)==null?void 0:D.source},description:{story:"Command key symbol.",...(z=(I=a.parameters)==null?void 0:I.docs)==null?void 0:z.description}}};var A,P,W,M,R;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: '⇧'
  }
}`,...(W=(P=n.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:"Shift key symbol.",...(R=(M=n.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var U,q,B,F,H;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: '⌃'
  }
}`,...(B=(q=c.parameters)==null?void 0:q.docs)==null?void 0:B.source},description:{story:"Control key symbol.",...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var J,L,Q,T,V;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: '⌥'
  }
}`,...(Q=(L=d.parameters)==null?void 0:L.docs)==null?void 0:Q.source},description:{story:"Option/Alt key symbol.",...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var X,Y,Z,$,ee;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
}`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Group of keyboard keys displayed together.",...(ee=($=i.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var re,se,oe,te,ae;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
}`,...(oe=(se=p.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:"Multi-key keyboard shortcut.",...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var ne,ce,de,ie,pe;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    children: 'Ctrl',
    className: 'bg-red-500 text-white'
  }
}`,...(de=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Keyboard key with custom styling.",...(pe=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:pe.description}}};const be=["Default","K","Escape","Command","Shift","Control","Option","Group","Shortcut","WithClassName"];export{a as Command,c as Control,s as Default,t as Escape,i as Group,o as K,d as Option,n as Shift,p as Shortcut,m as WithClassName,be as __namedExportsOrder,ge as default};
