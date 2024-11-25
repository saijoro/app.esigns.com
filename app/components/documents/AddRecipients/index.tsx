import RecepientAccordian from "./RecipientAccordian";

const AddRecipients = () => {
  return (
    <div className="w-full bg-white flex-col justify-between items-start inline-flex">
      <div className="self-stretch h-[350px] flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch p-4 bg-[#f1f1f1] justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-[#333333] text-base font-normal font-['Readex Pro'] leading-none">
            Add document Details
          </div>
        </div>
        <div className="self-stretch px-4 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="w-5 h-5 relative">
              <div className="w-5 h-5 left-0 top-0 absolute rounded border border-[#0d0d0d]" />
            </div>
            <div className="text-[#333333] text-base font-light font-['Readex Pro'] capitalize leading-none">
              Enforce Signature Order
            </div>
            <div className="w-5 h-5 relative bg-[#e6e6e6] rounded-[80px]" />
          </div>
          <div className="justify-start items-center gap-4 flex">
            <div className="text-[#828282] text-base font-light font-['Readex Pro'] capitalize leading-none">
              You can drag the list to re-arrange the order
            </div>
          </div>
        </div>
        <div className="self-stretch h-[242px] px-4 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1.5 flex">
            <div className="self-stretch text-[#383838] text-sm font-medium font-['DM Sans'] capitalize leading-[14px]">
              Document Name
            </div>
            <div className="self-stretch p-3 rounded-lg border border-black/30 justify-start items-center gap-2.5 inline-flex">
              <div className="text-black/40 text-base font-normal font-['DM Sans'] capitalize leading-none">
                Test Document Name
              </div>
            </div>
          </div>
          <div className="w-full">
            <RecepientAccordian />
          </div>
        </div>
      </div>
      <div className="self-stretch p-4 bg-[#fff9ed] justify-between items-center inline-flex">
        <div className="h-[18px] justify-start items-center gap-3 flex">
          <div className="w-[18px] h-[18px] relative" />
          <div className="text-[#333333] text-base font-medium font-['DM Sans'] capitalize leading-none">
            Add Recepient
          </div>
        </div>
        <div className="justify-start items-center gap-6 flex">
          <div className="px-[18px] py-[9px] rounded-lg border border-[#0d0d0d]/10 justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#0d0d0d] text-base font-light font-['Readex Pro'] leading-none">
              Skip
            </div>
          </div>
          <div className="px-[18px] py-[9px] bg-[#f07306] rounded-lg justify-center items-center gap-2.5 flex">
            <div className="text-center text-white text-base font-light font-['Readex Pro'] leading-none">
              Create a Document
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRecipients;
