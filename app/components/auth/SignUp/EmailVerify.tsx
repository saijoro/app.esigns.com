import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { verifyEmailWithOTPAPI } from "~/utils/services/auth";

const EmailVerfication = () => {
  const navigate = useNavigate({ from: "/" });
  const router = useRouter();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email") || "";
  const companyId = searchParams.get("company") || "";

  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    trigger,
  } = useForm({});

  const { mutate, isError, error } = useMutation({
    mutationFn: async (verifactionDetails: {
      email: string;
      verification_code: string;
    }) => {
      try {
        setLoading(true);
        const response = await verifyEmailWithOTPAPI(verifactionDetails);
        if (response?.status === 200 || response?.status === 201) {
          router.navigate({
            to: "/",
          });
        } else if (response?.status === 422) {
          const errData = response?.data?.errors?.details;
          if (errData) {
            errData.forEach((error: any) => {
              if (error.type === "any.empty" || error.type === "any.required") {
                setError(error.key, {
                  type: error.type,
                  message: error.message,
                });
              }
            });
          }
        } else if (response?.status == 404) {
          const isNotFound = response?.data?.message;
          if (isNotFound) {
            setError("email", {
              type: "manual",
              message: isNotFound,
            });
          }
        } else if (response?.status == 403) {
          const isInvalid = response?.data?.message;
          if (isInvalid) {
            setError("password", {
              type: "manual",
              message: isInvalid,
            });
          }
        } else {
          throw response;
        }
      } catch (errData) {
        console.error(errData);
      } finally {
        setLoading(false);
      }
    },
  });

  const onSubmit = async (data: any) => {
    const isValid = await trigger();

    if (isValid) {
      let verifactionDetails = { ...data, email };
      mutate(verifactionDetails);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-8 top-[100px] w-[400px]  absolute bg-white rounded-2xl shadow flex-col justify-center items-center gap-12 inline-flex border">
        <div className="self-stretch h-[71px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-black text-[32px] font-normal leading-loose">
            Emial Verification
          </div>
          <div className="self-stretch text-center text-[#333333] text-lg font-light leading-normal">
            A Verfication mail has been sent to yout email account. please check
            your inbox to verify.
          </div>
        </div>
        <hr />
        <div className="self-stretch flex-col justify-start items-center gap-6 flex">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="self-stretch flex-col justify-start items-center gap-6 flex"
          >
            <div className="self-stretch h-[297px] flex-col justify-start items-start gap-12 flex">
              <div className="self-stretch h-[201px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch text-black text-sm font-normal leading-[18.20px]">
                    Email
                  </div>
                  <Controller
                    name="email"
                    rules={{ required: "Email is required" }}
                    control={control}
                    disabled
                    defaultValue={email}
                    render={({ field }) => (
                      <div className="w-full">
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter email"
                          className="h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30"
                        />
                        {errors.email && (
                          <div className="text-red-500 text-sm mt-1 capitalize">
                            {errors?.email?.message as string}
                          </div>
                        )}
                      </div>
                    )}
                  />
                </div>

                <div className="self-stretch h-[105px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch text-black text-sm font-normal leading-[18.20px]">
                    Verfication Code (OTP)
                  </div>
                  <div className="self-stretch h-[81px] flex-col justify-start items-start gap-3 flex">
                    <Controller
                      name="verification_code"
                      control={control}
                      rules={{ required: "Verification code is required" }}
                      render={({ field }) => (
                        <div className="w-full relative">
                          <Input
                            {...field}
                            type={"text"}
                            placeholder="Enter verification code"
                            className="h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30 w-full"
                          />

                          {errors.verification_code && (
                            <div className="text-red-500 text-sm mt-1 capitalize">
                              {errors?.verification_code?.message as string}
                            </div>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="text-black h-12 px-2.5 py-3.5 bg-[#2f80ed] rounded-lg text-base font-medium leading-tight w-full"
              >
                {loading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  "Verify"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerfication;
