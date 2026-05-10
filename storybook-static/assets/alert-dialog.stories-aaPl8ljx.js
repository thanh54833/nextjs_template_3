import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{r as l}from"./index-CAPI2NOD.js";import{b as F,B as k}from"./button-B1qRRuul.js";import{c as re}from"./index-Da_hoYQ_.js";import{u as M}from"./index-CJNorLC4.js";import{c as B,R as ae,b as ne,W as le,C as ie,T as se,D as ce,a as H,P as de,O as ge}from"./index-Do-fIL6h.js";import{c as pe}from"./index-DW48STyt.js";import{c as s}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./index-AnhkqxcL.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";var ue=Symbol("radix.slottable");function me(e){const t=({children:r})=>o.jsx(o.Fragment,{children:r});return t.displayName=`${e}.Slottable`,t.__radixId=ue,t}var L="AlertDialog",[Ae]=re(L,[B]),i=B(),W=e=>{const{__scopeAlertDialog:t,...r}=e,a=i(t);return o.jsx(ae,{...a,...r,modal:!0})};W.displayName=L;var De="AlertDialogTrigger",z=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(ne,{...n,...a,ref:t})});z.displayName=De;var fe="AlertDialogPortal",G=e=>{const{__scopeAlertDialog:t,...r}=e,a=i(t);return o.jsx(de,{...a,...r})};G.displayName=fe;var ve="AlertDialogOverlay",q=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(ge,{...n,...a,ref:t})});q.displayName=ve;var c="AlertDialogContent",[xe,he]=Ae(c),ye=me("AlertDialogContent"),V=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,children:a,...n}=e,A=i(r),u=l.useRef(null),oe=M(t,u),j=l.useRef(null);return o.jsx(le,{contentName:c,titleName:Y,docsSlug:"alert-dialog",children:o.jsx(xe,{scope:r,cancelRef:j,children:o.jsxs(ie,{role:"alertdialog",...A,...n,ref:oe,onOpenAutoFocus:pe(n.onOpenAutoFocus,d=>{var N;d.preventDefault(),(N=j.current)==null||N.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[o.jsx(ye,{children:a}),o.jsx(_e,{contentRef:u})]})})})});V.displayName=c;var Y="AlertDialogTitle",U=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(se,{...n,...a,ref:t})});U.displayName=Y;var J="AlertDialogDescription",K=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(ce,{...n,...a,ref:t})});K.displayName=J;var Ce="AlertDialogAction",Q=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(H,{...n,...a,ref:t})});Q.displayName=Ce;var X="AlertDialogCancel",Z=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,{cancelRef:n}=he(X,r),A=i(r),u=M(t,n);return o.jsx(H,{...A,...a,ref:u})});Z.displayName=X;var _e=({contentRef:e})=>{const t=`\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${J}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{var a;document.getElementById((a=e.current)==null?void 0:a.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},je=W,Ne=z,Te=G,be=q,Oe=V,Se=Q,Ee=Z,Re=U,we=K;function m({...e}){return o.jsx(je,{"data-slot":"alert-dialog",...e})}function D({...e}){return o.jsx(Ne,{"data-slot":"alert-dialog-trigger",...e})}function ee({...e}){return o.jsx(Te,{"data-slot":"alert-dialog-portal",...e})}function te({className:e,...t}){return o.jsx(be,{"data-slot":"alert-dialog-overlay",className:s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function f({className:e,...t}){return o.jsxs(ee,{children:[o.jsx(te,{}),o.jsx(Oe,{"data-slot":"alert-dialog-content",className:s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...t})]})}function v({className:e,...t}){return o.jsx("div",{"data-slot":"alert-dialog-header",className:s("flex flex-col gap-2 text-center sm:text-left",e),...t})}function x({className:e,...t}){return o.jsx("div",{"data-slot":"alert-dialog-footer",className:s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function h({className:e,...t}){return o.jsx(Re,{"data-slot":"alert-dialog-title",className:s("text-lg font-semibold",e),...t})}function y({className:e,...t}){return o.jsx(we,{"data-slot":"alert-dialog-description",className:s("text-muted-foreground text-sm",e),...t})}function C({className:e,...t}){return o.jsx(Se,{className:s(F(),e),...t})}function _({className:e,...t}){return o.jsx(Ee,{className:s(F({variant:"outline"}),e),...t})}m.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};ee.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};te.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};D.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};f.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};v.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};x.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};h.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};y.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};C.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};_.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};const tt={component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An alert dialog component for actions that require explicit user confirmation. Use for destructive or irreversible operations."}}}},g={render:()=>{const[e,t]=l.useState(!1);return o.jsxs(m,{open:e,onOpenChange:t,children:[o.jsx(D,{asChild:!0,children:o.jsx(k,{variant:"destructive",children:"Delete Account"})}),o.jsxs(f,{children:[o.jsxs(v,{children:[o.jsx(h,{children:"Are you absolutely sure?"}),o.jsx(y,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),o.jsxs(x,{children:[o.jsx(_,{onClick:()=>t(!1),children:"Cancel"}),o.jsx(C,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",onClick:()=>t(!1),children:"Continue"})]})]})]})}},p={render:()=>{const[e,t]=l.useState(!1);return o.jsxs(m,{open:e,onOpenChange:t,children:[o.jsx(D,{asChild:!0,children:o.jsx(k,{variant:"destructive",children:"Delete Account"})}),o.jsxs(f,{children:[o.jsxs(v,{children:[o.jsx(h,{children:"Delete Account"}),o.jsx(y,{children:"Are you sure you want to delete your account? This action is permanent and cannot be reversed."})]}),o.jsxs(x,{children:[o.jsx(_,{onClick:()=>t(!1),children:"Cancel"}),o.jsx(C,{onClick:()=>t(!1),children:"Delete"})]})]})]})}};var T,b,O,S,E;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={() => setOpen(false)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...(O=(b=g.parameters)==null?void 0:b.docs)==null?void 0:O.source},description:{story:"Default alert dialog with destructive action styling",...(E=(S=g.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};var R,w,I,P,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Account</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete your account? This action is permanent and cannot be
              reversed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setOpen(false)}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...(I=(w=p.parameters)==null?void 0:w.docs)==null?void 0:I.source},description:{story:"Alert dialog with trigger button for destructive actions",...($=(P=p.parameters)==null?void 0:P.docs)==null?void 0:$.description}}};const ot=["Default","WithTrigger"];export{g as Default,p as WithTrigger,ot as __namedExportsOrder,tt as default};
