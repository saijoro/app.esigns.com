import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { SearchDropDowns } from "./SearchDropDowns";

const contactTypeOptions = [
  { label: "Client", value: "client" },
  { label: "Vendor", value: "vendor" },
  { label: "Employee", value: "employee" },
];

const signerTypeOptions = [
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Witness", value: "witness" },
];

export default function RecipientAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactType, setContactType] = useState("");
  const [signerType, setSignerType] = useState("");

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger
          onClick={() => setIsOpen(!isOpen)}
          className="hover:no-underline"
        >
          <div className="flex justify-start items-center gap-4 w-full">
            <div className="grow h-16 pl-3 pr-2 py-3 bg-[#c2c2c2]/10 border-l-2 border-[#a533cf] flex items-center gap-4">
              <div className="grow flex items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://via.placeholder.com/40x40"
                  alt="Profile"
                />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-[#333333] text-base font-normal capitalize leading-none">
                    Neha Rathod
                  </div>
                  <div className="text-black/50 text-sm font-normal capitalize leading-[14px]">
                    kambali.samath@timber.net
                  </div>
                </div>
              </div>
              <div onClick={handleDropdownClick}>
                <SearchDropDowns
                  placeholder="Contact Type"
                  options={contactTypeOptions}
                  value={contactType}
                  onChange={setContactType}
                />
              </div>
              <div onClick={handleDropdownClick}>
                <SearchDropDowns
                  placeholder="Signer Type"
                  options={signerTypeOptions}
                  value={signerType}
                  onChange={setSignerType}
                />
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Input type="text" placeholder="Field 1" className="flex-1" />
            <Input type="text" placeholder="Field 2" className="flex-1" />
            <Input type="text" placeholder="Field 3" className="flex-1" />
            <Input type="text" placeholder="Field 4" className="flex-1" />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
