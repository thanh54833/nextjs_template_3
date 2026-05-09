import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as l}from"./index-CAPI2NOD.js";import{b as R,B as X}from"./button-B1qRRuul.js";import{c as Z}from"./index-Da_hoYQ_.js";import{u as I}from"./index-CJNorLC4.js";import{c as w,R as ee,W as te,C as oe,T as re,D as ae,a as P,b as ne,P as le,O as ie}from"./index-Do-fIL6h.js";import{c as se}from"./index-DW48STyt.js";import{c as s}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D1SQP9Z-.js";import"./index-AnhkqxcL.js";import"./index-BIKiyF7s.js";import"./index-FyZeRQcs.js";import"./index-DwArvr4q.js";import"./index-Cfs9WRo2.js";import"./index-C-szKJnO.js";import"./index-DvGSVeov.js";import"./index-Qoh0vY4V.js";import"./index-B3CE9KsV.js";import"./index-BCXW28Pz.js";import"./index-BFmRr4y5.js";import"./index-CrsbsgJ0.js";var ce=Symbol("radix.slottable");function de(e){const o=({children:r})=>t.jsx(t.Fragment,{children:r});return o.displayName=`${e}.Slottable`,o.__radixId=ce,o}var $="AlertDialog",[ge]=Z($,[w]),i=w(),F=e=>{const{__scopeAlertDialog:o,...r}=e,a=i(o);return t.jsx(ee,{...a,...r,modal:!0})};F.displayName=$;var pe="AlertDialogTrigger",M=l.forwardRef((e,o)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return t.jsx(ne,{...n,...a,ref:o})});M.displayName=pe;var ue="AlertDialogPortal",H=e=>{const{__scopeAlertDialog:o,...r}=e,a=i(o);return t.jsx(le,{...a,...r})};H.displayName=ue;var me="AlertDialogOverlay",k=l.forwardRef((e,o)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return t.jsx(ie,{...n,...a,ref:o})});k.displayName=me;var c="AlertDialogContent",[Ae,De]=ge(c),fe=de("AlertDialogContent"),B=l.forwardRef((e,o)=>{const{__scopeAlertDialog:r,children:a,...n}=e,A=i(r),g=l.useRef(null),U=I(o,g),j=l.useRef(null);return t.jsx(te,{contentName:c,titleName:L,docsSlug:"alert-dialog",children:t.jsx(Ae,{scope:r,cancelRef:j,children:t.jsxs(oe,{role:"alertdialog",...A,...n,ref:U,onOpenAutoFocus:se(n.onOpenAutoFocus,d=>{var N;d.preventDefault(),(N=j.current)==null||N.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[t.jsx(fe,{children:a}),t.jsx(xe,{contentRef:g})]})})})});B.displayName=c;var L="AlertDialogTitle",W=l.forwardRef((e,o)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return t.jsx(re,{...n,...a,ref:o})});W.displayName=L;var z="AlertDialogDescription",G=l.forwardRef((e,o)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return t.jsx(ae,{...n,...a,ref:o})});G.displayName=z;var ve="AlertDialogAction",V=l.forwardRef((e,o)=>{const{__scopeAlertDialog:r,...a}=e,n=i(r);return t.jsx(P,{...n,...a,ref:o})});V.displayName=ve;var Y="AlertDialogCancel",q=l.forwardRef((e,o)=>{const{__scopeAlertDialog:r,...a}=e,{cancelRef:n}=De(Y,r),A=i(r),g=I(o,n);return t.jsx(P,{...A,...a,ref:g})});q.displayName=Y;var xe=({contentRef:e})=>{const o=`\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${z}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{var a;document.getElementById((a=e.current)==null?void 0:a.getAttribute("aria-describedby"))||console.warn(o)},[o,e]),null},he=F,ye=M,_e=H,je=k,Ne=B,Ce=V,Te=q,be=W,Oe=G;function m({...e}){return t.jsx(he,{"data-slot":"alert-dialog",...e})}function J({...e}){return t.jsx(ye,{"data-slot":"alert-dialog-trigger",...e})}function K({...e}){return t.jsx(_e,{"data-slot":"alert-dialog-portal",...e})}function Q({className:e,...o}){return t.jsx(je,{"data-slot":"alert-dialog-overlay",className:s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...o})}function D({className:e,...o}){return t.jsxs(K,{children:[t.jsx(Q,{}),t.jsx(Ne,{"data-slot":"alert-dialog-content",className:s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...o})]})}function f({className:e,...o}){return t.jsx("div",{"data-slot":"alert-dialog-header",className:s("flex flex-col gap-2 text-center sm:text-left",e),...o})}function v({className:e,...o}){return t.jsx("div",{"data-slot":"alert-dialog-footer",className:s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...o})}function x({className:e,...o}){return t.jsx(be,{"data-slot":"alert-dialog-title",className:s("text-lg font-semibold",e),...o})}function h({className:e,...o}){return t.jsx(Oe,{"data-slot":"alert-dialog-description",className:s("text-muted-foreground text-sm",e),...o})}function y({className:e,...o}){return t.jsx(Ce,{className:s(R(),e),...o})}function _({className:e,...o}){return t.jsx(Te,{className:s(R({variant:"outline"}),e),...o})}m.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};K.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};Q.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};J.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};D.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};f.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};v.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};x.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};h.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};y.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};_.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};const Ue={component:m,tags:["autodocs"],parameters:{layout:"centered"}},p={render:()=>t.jsx(m,{open:!0,children:t.jsxs(D,{children:[t.jsxs(f,{children:[t.jsx(x,{children:"Are you absolutely sure?"}),t.jsx(h,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),t.jsxs(v,{children:[t.jsx(_,{children:"Cancel"}),t.jsx(y,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Continue"})]})]})})},u={render:()=>{const[e,o]=l.useState(!1);return t.jsxs(m,{open:e,onOpenChange:o,children:[t.jsx(J,{asChild:!0,children:t.jsx(X,{variant:"destructive",children:"Delete Account"})}),t.jsxs(D,{children:[t.jsxs(f,{children:[t.jsx(x,{children:"Delete Account"}),t.jsx(h,{children:"Are you sure you want to delete your account? This action is permanent and cannot be reversed."})]}),t.jsxs(v,{children:[t.jsx(_,{onClick:()=>o(!1),children:"Cancel"}),t.jsx(y,{onClick:()=>o(!1),children:"Delete"})]})]})]})}};var C,T,b;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...(b=(T=p.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var O,S,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const Xe=["Default","WithTrigger"];export{p as Default,u as WithTrigger,Xe as __namedExportsOrder,Ue as default};
