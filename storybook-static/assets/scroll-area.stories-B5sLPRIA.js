import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as o,a as s}from"./scroll-area-CD1fzsEB.js";import"./utils-Czy_q_oT.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";import"./index-CcuSeV1x.js";import"./index-D1sqivKo.js";import"./index-BKV5D6oG.js";import"./index-ByLlCQqU.js";import"./index-ofxjSrhS.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";const f={component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A scrollable area component that provides a styled scrollbar. Uses native scroll behavior with custom styling for the scrollbar track and thumb."}}},argTypes:{orientation:{control:"select",options:["vertical","horizontal"],description:"Scroll bar orientation"}}},t={render:()=>e.jsx(o,{className:"h-[200px] w-[350px] rounded-md border p-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{className:"text-sm",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{className:"text-sm",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{className:"text-sm",children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),e.jsx("p",{className:"text-sm",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."})]})})},a={render:()=>e.jsxs(o,{className:"h-[200px] w-[350px] rounded-md border",children:[e.jsx("div",{className:"flex w-[600px] p-4",children:e.jsx("p",{className:"text-sm whitespace-nowrap",children:"This is a horizontal scroll area with content that extends beyond the visible width. The scrollbar will appear at the bottom."})}),e.jsx(s,{orientation:"horizontal"})]})},i={render:()=>e.jsxs(o,{className:"h-[200px] w-[350px] rounded-md border p-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm whitespace-nowrap",children:"Horizontal content that extends beyond the visible width with vertical scroll capability."}),e.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{className:"text-sm whitespace-nowrap",children:"More horizontal text to enable both scroll orientations."}),e.jsx("p",{className:"text-sm",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{className:"text-sm whitespace-nowrap",children:"Even more horizontal text to demonstrate the scroll area capabilities."})]}),e.jsx(s,{orientation:"horizontal"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  /** Default vertical scroll area */
  render: () => <ScrollArea className='h-[200px] w-[350px] rounded-md border p-4'>
      <div className='space-y-4'>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='text-sm'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className='text-sm'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p className='text-sm'>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p className='text-sm'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </div>
    </ScrollArea>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  /** Scroll area with horizontal scrolling */
  render: () => <ScrollArea className='h-[200px] w-[350px] rounded-md border'>
      <div className='flex w-[600px] p-4'>
        <p className='text-sm whitespace-nowrap'>
          This is a horizontal scroll area with content that extends beyond the visible width. The scrollbar will appear at the bottom.
        </p>
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  /** Scroll area with both vertical and horizontal scrollbars */
  render: () => <ScrollArea className='h-[200px] w-[350px] rounded-md border p-4'>
      <div className='space-y-4'>
        <p className='text-sm whitespace-nowrap'>
          Horizontal content that extends beyond the visible width with vertical scroll capability.
        </p>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='text-sm whitespace-nowrap'>
          More horizontal text to enable both scroll orientations.
        </p>
        <p className='text-sm'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className='text-sm whitespace-nowrap'>
          Even more horizontal text to demonstrate the scroll area capabilities.
        </p>
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
}`,...i.parameters?.docs?.source}}};const S=["Default","Horizontal","BothOrientations"];export{i as BothOrientations,t as Default,a as Horizontal,S as __namedExportsOrder,f as default};
