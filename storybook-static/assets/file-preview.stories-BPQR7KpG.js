import{j as s}from"./jsx-runtime-u17CrQMm.js";import{I as i}from"./icons-CJO6dUP8.js";import{c as a}from"./utils-BQHNewu7.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j=j,w=e=>{const n=e.split(".");return n.length>1?n[n.length-1]:""},N=(e,n)=>{const r=w(n).toLowerCase(),t={size:24};return e.startsWith("image/")?s.jsx(i.media,{...t,className:"text-emerald-500 dark:text-emerald-400"}):e==="application/pdf"||r==="pdf"?s.jsx(i.fileTypePdf,{...t,className:"text-red-500 dark:text-red-400"}):["doc","docx","odt","rtf"].includes(r)||e.includes("wordprocessing")||e.includes("msword")?s.jsx(i.fileTypeDoc,{...t,className:"text-blue-500 dark:text-blue-400"}):["xls","xlsx","csv","ods"].includes(r)||e.includes("spreadsheet")||e.includes("excel")?s.jsx(i.fileTypeXls,{...t,className:"text-green-500 dark:text-green-400"}):["txt","md"].includes(r)||e==="text/plain"?s.jsx(i.post,{...t,className:"text-zinc-500 dark:text-zinc-400"}):["js","ts","jsx","tsx","py","java","c","cpp","html","css"].includes(r)||e.includes("javascript")||e.includes("typescript")?s.jsx(i.code,{...t,className:"text-yellow-500 dark:text-yellow-400"}):["json","xml","yaml","yml"].includes(r)?s.jsx(i.code,{...t,className:"text-zinc-500 dark:text-zinc-400"}):e.startsWith("video/")||["mp4","avi","mov","mkv"].includes(r)?s.jsx(i.video,{...t,className:"text-purple-500 dark:text-purple-400"}):e.startsWith("audio/")||["mp3","wav","ogg"].includes(r)?s.jsx(i.music,{...t,className:"text-pink-500 dark:text-pink-400"}):["zip","rar","tar","gz","7z"].includes(r)||e.includes("archive")||e.includes("compressed")?s.jsx(i.fileZip,{...t,className:"text-amber-500 dark:text-amber-400"}):s.jsx(i.page,{...t,className:"text-zinc-500 dark:text-zinc-400"})},b=(e,n)=>{const r=w(n).toUpperCase();if(e.includes("msword")||e.includes("wordprocessing"))return"DOC";if(e.includes("spreadsheet")||e.includes("excel"))return"SPREADSHEET";const t=e.split("/")[1];return!t||t==="octet-stream"?r||"FILE":t.replace("vnd.openxmlformats-officedocument.","").replace("vnd.ms-","").replace("x-","").replace("document.","").replace("presentation.","").replace("application.","").split(".")[0].toUpperCase().substring(0,8)},R=({files:e,onRemove:n,className:r,variant:t="default"})=>{const p=t==="inverted";return e.length===0?null:s.jsx("div",{className:a("flex w-full flex-col gap-2 rounded-xl p-2",r),children:s.jsx("div",{className:"flex w-full flex-wrap gap-2",children:e.map(o=>s.jsxs("div",{className:a("group/file relative flex items-center rounded-xl transition-all",p?"bg-primary-foreground/15 hover:bg-primary-foreground/20":"bg-muted hover:bg-muted/80",o.type.startsWith("image/")&&o.url?"h-14 w-14 justify-center":"max-w-[220px] min-w-[180px] p-2 pr-8"),children:[o.isUploading&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center rounded-xl bg-black/30",children:s.jsx(i.spinner,{size:20,className:"animate-spin text-white"})}),n&&s.jsx("button",{type:"button",onClick:()=>n(o.id),className:a("absolute -top-1 -right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full","scale-75 opacity-0 transition-all duration-150 group-hover/file:scale-100 group-hover/file:opacity-100","bg-muted-foreground/60 hover:bg-muted-foreground/80 cursor-pointer"),"aria-label":`Remove ${o.name}`,children:s.jsx(i.close,{size:10,className:"text-white"})}),o.type.startsWith("image/")&&o.url?s.jsx("div",{className:"h-12 w-12 overflow-hidden rounded-md",children:s.jsx(j,{width:48,height:48,src:o.url,alt:o.name,className:"h-full w-full object-cover"})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:a("mr-3 flex h-10 w-10 items-center justify-center rounded-lg",p?"bg-primary-foreground/10":"bg-muted-foreground/10"),children:N(o.type,o.name)}),s.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[s.jsx("p",{className:a("truncate text-sm font-medium",p?"text-primary-foreground":"text-foreground"),children:o.name.length>18?`${o.name.substring(0,15)}...`:o.name}),s.jsx("span",{className:a("text-xs",p?"text-primary-foreground/70":"text-muted-foreground"),children:b(o.type,o.name)})]})]})]},o.id))})})};R.__docgenInfo={description:"",methods:[],displayName:"FilePreview",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'inverted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverted'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const S={component:R,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A file preview component that displays uploaded files with type-specific icons and remove functionality."}}}},y=[{id:"1",name:"project-proposal.pdf",type:"application/pdf",url:"/placeholder.pdf"},{id:"2",name:"dashboard-mockup.fig",type:"application/figma",url:"/placeholder"},{id:"3",name:"data-analysis.xlsx",type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},{id:"4",name:"readme.md",type:"text/markdown"}],d={args:{files:y,onRemove:e=>console.log("Remove file:",e)}},l={args:{files:[{id:"img-1",name:"hero-image.jpg",type:"image/jpeg",url:"https://picsum.photos/200"},{id:"img-2",name:"logo.png",type:"image/png",url:"https://picsum.photos/201"}],onRemove:e=>console.log("Remove file:",e)}},c={args:{files:y,variant:"inverted",onRemove:e=>console.log("Remove file:",e)}},m={args:{files:[{id:"1",name:"uploading-file.pdf",type:"application/pdf",isUploading:!0},{id:"2",name:"completed-file.docx",type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",url:"/placeholder"},{id:"3",name:"another-uploading.jpg",type:"image/jpeg",isUploading:!0,url:"https://picsum.photos/200"}],onRemove:e=>console.log("Remove file:",e)}},u={args:{files:[{id:"1",name:"product-demo.mp4",type:"video/mp4",url:"/placeholder"}],onRemove:e=>console.log("Remove file:",e)}},g={args:{files:[{id:"1",name:"podcast-ep-12.mp3",type:"audio/mpeg",url:"/placeholder"}],onRemove:e=>console.log("Remove file:",e)}},f={args:{files:[{id:"1",name:"source-code.zip",type:"application/zip",url:"/placeholder"}],onRemove:e=>console.log("Remove file:",e)}},h={args:{files:y}},v={args:{files:[{id:"1",name:"document.pdf",type:"application/pdf"},{id:"2",name:"image-photo.jpg",type:"image/jpeg",url:"https://picsum.photos/202"},{id:"3",name:"spreadsheet.xlsx",type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},{id:"4",name:"code.ts",type:"text/typescript"},{id:"5",name:"video-promo.mp4",type:"video/mp4"},{id:"6",name:"archive.tar.gz",type:"application/gzip"}],onRemove:e=>console.log("Remove file:",e)}},x={args:{files:[{id:"1",name:"profile-photo.jpg",type:"image/jpeg",url:"https://picsum.photos/203"}],onRemove:e=>console.log("Remove file:",e)}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    files: sampleFiles,
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...d.parameters?.docs?.source},description:{story:"Default file preview with various document types.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: 'img-1',
      name: 'hero-image.jpg',
      type: 'image/jpeg',
      url: 'https://picsum.photos/200'
    }, {
      id: 'img-2',
      name: 'logo.png',
      type: 'image/png',
      url: 'https://picsum.photos/201'
    }],
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...l.parameters?.docs?.source},description:{story:"Image file preview with thumbnail display.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    files: sampleFiles,
    variant: 'inverted',
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...c.parameters?.docs?.source},description:{story:"Inverted color variant for dark backgrounds.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'uploading-file.pdf',
      type: 'application/pdf',
      isUploading: true
    }, {
      id: '2',
      name: 'completed-file.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      url: '/placeholder'
    }, {
      id: '3',
      name: 'another-uploading.jpg',
      type: 'image/jpeg',
      isUploading: true,
      url: 'https://picsum.photos/200'
    }],
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...m.parameters?.docs?.source},description:{story:"Files in various upload states (uploading, completed).",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'product-demo.mp4',
      type: 'video/mp4',
      url: '/placeholder'
    }],
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...u.parameters?.docs?.source},description:{story:"Video file preview with video-specific icon.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'podcast-ep-12.mp3',
      type: 'audio/mpeg',
      url: '/placeholder'
    }],
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...g.parameters?.docs?.source},description:{story:"Audio file preview with audio-specific icon.",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'source-code.zip',
      type: 'application/zip',
      url: '/placeholder'
    }],
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...f.parameters?.docs?.source},description:{story:"Archive file preview with compressed file icon.",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    files: sampleFiles
  }
}`,...h.parameters?.docs?.source},description:{story:"Read-only preview without remove functionality.",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'document.pdf',
      type: 'application/pdf'
    }, {
      id: '2',
      name: 'image-photo.jpg',
      type: 'image/jpeg',
      url: 'https://picsum.photos/202'
    }, {
      id: '3',
      name: 'spreadsheet.xlsx',
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    }, {
      id: '4',
      name: 'code.ts',
      type: 'text/typescript'
    }, {
      id: '5',
      name: 'video-promo.mp4',
      type: 'video/mp4'
    }, {
      id: '6',
      name: 'archive.tar.gz',
      type: 'application/gzip'
    }],
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...v.parameters?.docs?.source},description:{story:"Mixed file types showing type-specific icons.",...v.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'profile-photo.jpg',
      type: 'image/jpeg',
      url: 'https://picsum.photos/203'
    }],
    onRemove: (id: string) => console.log('Remove file:', id)
  }
}`,...x.parameters?.docs?.source},description:{story:"Single image preview with larger display.",...x.parameters?.docs?.description}}};const U=["Default","WithImages","InvertedVariant","WithUploadingFiles","WithVideoFile","WithAudioFile","WithArchiveFile","WithoutRemoveButton","MixedFileTypes","SingleImage"];export{d as Default,c as InvertedVariant,v as MixedFileTypes,x as SingleImage,f as WithArchiveFile,g as WithAudioFile,l as WithImages,m as WithUploadingFiles,u as WithVideoFile,h as WithoutRemoveButton,U as __namedExportsOrder,S as default};
