import{jsx as e,jsxs as t}from"react/jsx-runtime";import{useDropzone as c}from"react-dropzone";const i=()=>{const o=r=>{console.log(r)},s=r=>{console.log(r)},{getRootProps:a,getInputProps:n,isDragActive:l}=c({onDrop:o,onDropRejected:s,accept:{"text/csv":[".csv"]},multiple:!1,disabled:!1});return e("div",{className:"w-full",children:t("div",{className:"flex gap-5 w-full",children:[t("div",{...a(),className:`cursor-pointer py-20 w-1/2 border-2 border-dashed rounded-lg p-1 flex flex-col items-center justify-center text-center ${l?"border-blue-500 bg-blue-50":""} cursor-pointer`,children:[e("img",{src:"/images/dashboard/upload.svg"}),e("label",{className:"font-light text-[20px] pt-2",children:l?"Drop your files here...":"Drag and Drop your files here"}),e("label",{className:"font-extralight  text-[16px] pt-2",children:"Supported files: PDF, Word, JPG, PNG"}),e("label",{className:"text-[#ee7206] text-[14px] pt-2",children:"Max Size: 25MB"}),e("input",{...n()})]}),t("div",{className:"w-1/2 border-2 border-dashed rounded-lg p-1 flex flex-col items-center justify-center text-center",children:[e("img",{src:"/images/dashboard/ai-icon.svg"}),e("label",{className:"font-light text-[20px] pt-2",children:"Create with AI"}),t("label",{className:"font-extralight text-[16px] pt-2",children:["Provide some details, and AI will create a ",e("br",{})," template for you using an editor"]})]})]})})},m=function(){return e(i,{})};export{m as component};