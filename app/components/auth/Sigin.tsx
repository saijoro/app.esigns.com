import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  return (
    <div>
      <div className="p-8 top-[100px] left-[594px] absolute bg-white rounded-2xl shadow flex-col justify-start items-center gap-12 inline-flex">
        <div className="self-stretch h-[71px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-black text-[32px] font-normal  leading-loose">
            Login
          </div>
          <div className="self-stretch text-center text-[#333333] text-lg font-light  leading-normal">
            Greetings! Kindly enter your credentials.
          </div>
        </div>
        <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch h-[297px] flex-col justify-start items-start gap-12 flex">
            <div className="self-stretch h-[201px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch text-black text-sm font-normal  leading-[18.20px]">
                  Email
                </div>
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30"
                />
              </div>

              <div className="self-stretch h-[105px] flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch text-black text-sm font-normal  leading-[18.20px]">
                  Password
                </div>
                <div className="self-stretch h-[81px] flex-col justify-start items-start gap-3 flex">
                  <Input
                    type="password"
                    placeholder="Enter password"
                    className="h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30 w-full"
                  />
                  <div className="self-stretch text-right text-black text-base font-medium  leading-tight">
                    Forgot Password ?
                  </div>
                </div>
              </div>
            </div>
            <Button className="text-black h-12 px-2.5 py-3.5 bg-[#ffc900] rounded-lg text-base font-medium leading-tight w-full">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
