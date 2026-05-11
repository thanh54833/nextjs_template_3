import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./index-DYby6Z_P.js";import{b as N,B as T}from"./button-Ch-BQGzE.js";import{c as s}from"./utils-BQHNewu7.js";import{c as V}from"./index-BKV5D6oG.js";import{u as b}from"./index-DOER7VuF.js";import{c as O,R as Y,b as U,W as J,C as K,T as Q,D as X,a as S,P as Z,O as ee}from"./index-CYD3ze5d.js";import{c as te}from"./index-Dc_FVRD7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-LHNt3CwB.js";import"./index-DGP6o15j.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-BmEHjAU8.js";import"./index-D3yKPjIL.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-ByLlCQqU.js";import"./index-CKv4g580.js";import"./index-Hpgzpgrs.js";import"./index-CcuSeV1x.js";var oe=Symbol("radix.slottable");function re(e){const t=({children:r})=>o.jsx(o.Fragment,{children:r});return t.displayName=`${e}.Slottable`,t.__radixId=oe,t}var E="AlertDialog",[ae]=V(E,[O]),i=O(),R=e=>{const{__scopeAlertDialog:t,...r}=e,a=i(t);return o.jsx(Y,{...a,...r,modal:!0})};R.displayName=E;var ne="AlertDialogTrigger",w=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(U,{...n,...a,ref:t})});w.displayName=ne;var le="AlertDialogPortal",I=e=>{const{__scopeAlertDialog:t,...r}=e,a=i(t);return o.jsx(Z,{...a,...r})};I.displayName=le;var ie="AlertDialogOverlay",P=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(ee,{...n,...a,ref:t})});P.displayName=ie;var c="AlertDialogContent",[se,ce]=ae(c),de=re("AlertDialogContent"),$=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,children:a,...n}=e,A=i(r),u=l.useRef(null),q=b(t,u),j=l.useRef(null);return o.jsx(J,{contentName:c,titleName:F,docsSlug:"alert-dialog",children:o.jsx(se,{scope:r,cancelRef:j,children:o.jsxs(K,{role:"alertdialog",...A,...n,ref:q,onOpenAutoFocus:te(n.onOpenAutoFocus,d=>{d.preventDefault(),j.current?.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[o.jsx(de,{children:a}),o.jsx(pe,{contentRef:u})]})})})});$.displayName=c;var F="AlertDialogTitle",k=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(Q,{...n,...a,ref:t})});k.displayName=F;var M="AlertDialogDescription",B=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(X,{...n,...a,ref:t})});B.displayName=M;var ge="AlertDialogAction",H=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return o.jsx(S,{...n,...a,ref:t})});H.displayName=ge;var L="AlertDialogCancel",W=l.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...a}=e,{cancelRef:n}=ce(L,r),A=i(r),u=b(t,n);return o.jsx(S,{...A,...a,ref:u})});W.displayName=L;var pe=({contentRef:e})=>{const t=`\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${M}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{document.getElementById(e.current?.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},ue=R,me=w,Ae=I,De=P,fe=$,ve=H,xe=W,he=k,ye=B;function m({...e}){return o.jsx(ue,{"data-slot":"alert-dialog",...e})}function D({...e}){return o.jsx(me,{"data-slot":"alert-dialog-trigger",...e})}function z({...e}){return o.jsx(Ae,{"data-slot":"alert-dialog-portal",...e})}function G({className:e,...t}){return o.jsx(De,{"data-slot":"alert-dialog-overlay",className:s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function f({className:e,...t}){return o.jsxs(z,{children:[o.jsx(G,{}),o.jsx(fe,{"data-slot":"alert-dialog-content",className:s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...t})]})}function v({className:e,...t}){return o.jsx("div",{"data-slot":"alert-dialog-header",className:s("flex flex-col gap-2 text-center sm:text-left",e),...t})}function x({className:e,...t}){return o.jsx("div",{"data-slot":"alert-dialog-footer",className:s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function h({className:e,...t}){return o.jsx(he,{"data-slot":"alert-dialog-title",className:s("text-lg font-semibold",e),...t})}function y({className:e,...t}){return o.jsx(ye,{"data-slot":"alert-dialog-description",className:s("text-muted-foreground text-sm",e),...t})}function C({className:e,...t}){return o.jsx(ve,{className:s(N(),e),...t})}function _({className:e,...t}){return o.jsx(xe,{className:s(N({variant:"outline"}),e),...t})}m.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};z.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};G.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};D.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};f.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};v.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};x.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};h.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};y.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};C.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};_.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};const Ge={component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An alert dialog component for actions that require explicit user confirmation. Use for destructive or irreversible operations."}}}},g={render:()=>{const[e,t]=l.useState(!1);return o.jsxs(m,{open:e,onOpenChange:t,children:[o.jsx(D,{asChild:!0,children:o.jsx(T,{variant:"destructive",children:"Delete Account"})}),o.jsxs(f,{children:[o.jsxs(v,{children:[o.jsx(h,{children:"Are you absolutely sure?"}),o.jsx(y,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),o.jsxs(x,{children:[o.jsx(_,{onClick:()=>t(!1),children:"Cancel"}),o.jsx(C,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",onClick:()=>t(!1),children:"Continue"})]})]})]})}},p={render:()=>{const[e,t]=l.useState(!1);return o.jsxs(m,{open:e,onOpenChange:t,children:[o.jsx(D,{asChild:!0,children:o.jsx(T,{variant:"destructive",children:"Delete Account"})}),o.jsxs(f,{children:[o.jsxs(v,{children:[o.jsx(h,{children:"Delete Account"}),o.jsx(y,{children:"Are you sure you want to delete your account? This action is permanent and cannot be reversed."})]}),o.jsxs(x,{children:[o.jsx(_,{onClick:()=>t(!1),children:"Cancel"}),o.jsx(C,{onClick:()=>t(!1),children:"Delete"})]})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Default alert dialog with destructive action styling",...g.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Alert dialog with trigger button for destructive actions",...p.parameters?.docs?.description}}};const qe=["Default","WithTrigger"];export{g as Default,p as WithTrigger,qe as __namedExportsOrder,Ge as default};
