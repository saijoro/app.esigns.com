import { Plus } from "lucide-react";
import { useDropzone, FileRejection } from "react-dropzone";

const CreateDocument = () => {
  const onDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  };
  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    console.log(rejectedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: { "text/csv": [".csv"] },
    multiple: false,
    disabled: false,
  });
  return (
    <div className="w-full overflow-y-auto">
      <div className="flex gap-5 w-full">
        <div
          {...getRootProps()}
          className={`cursor-pointer hover:bg-[#f5f5f6] ease-in-out duration-300 py-20 w-1/2 border-2 border-dashed rounded-lg p-1 flex flex-col items-center justify-center text-center ${
            isDragActive ? "border-blue-500 bg-blue-50" : ""
          } ${"cursor-pointer"}`}
        >
          <img src="/images/dashboard/upload.svg" />
          <label className="font-light text-[20px] pt-2">
            {isDragActive
              ? "Drop your files here..."
              : "Drag and Drop your files here"}
          </label>
          <label className="font-extralight  text-[16px] pt-2">
            Supported files: PDF, Word, JPG, PNG
          </label>
          <label className="text-[#ee7206] text-[14px] pt-2">
            Max Size: 25MB
          </label>
          <input {...getInputProps()} />
        </div>
        <div
          className={`w-1/2 border-2 border-dashed rounded-lg p-1 flex flex-col items-center justify-center text-center`}
        >
          <img src="/images/dashboard/ai-icon.svg" />

          <label className="font-light text-[20px] pt-2">Create with AI</label>
          <label className="font-extralight text-[16px] pt-2">
            Provide some details, and AI will create a <br /> template for you
            using an editor
          </label>
        </div>
      </div>

      <div className="w-full pt-7">
        <h2>
          Create a document from a template, or start with a blank document
        </h2>
        <div className="flex flex-wrap gap-3 pt-2">
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center">
              <Plus />
            </div>
            <p className="text-center">Blank Template</p>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center"></div>
            <p className="text-center">Template 1</p>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center"></div>
            <p className="text-center">Template 2</p>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center"></div>
            <p className="text-center">Template 3</p>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center"></div>
            <p className="text-center">Template 4</p>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center"></div>
            <p className="text-center">Template 5</p>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center"></div>
            <p className="text-center">Template 6</p>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center"></div>
            <p className="text-center">Template 7</p>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-[#e9e9e9] flex justify-center items-center"></div>
            <p className="text-center">Template 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDocument;
