import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Controller } from "react-hook-form";
import LoadingComponent from "~/components/core/LoadingComponent";
import { checkEmailAPI } from "~/utils/services/auth";

const PersonalInfo = ({
  control,
  errors,
  step,
  handleNext,
  setValue,
  getValues,
}: {
  control: any;
  errors: any;
  step: number;
  handleNext: () => void;
  setValue: any;
  getValues: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    mutate: checkEmailAddress,
    isError,
    error,
  } = useMutation({
    mutationFn: async (emailAddress: string) => {
      try {
        setLoading(true);
        const response = await checkEmailAPI(emailAddress);
        if (response?.status === 200 || response?.status === 201) {
          const { message } = response?.data;
          setValue("first_name", message?.first_name || "");
          setValue("last_name", message?.last_name || "");
          setValue("phone", message?.phone || "");
          setValue("user_exist", true);
        } else {
          setValue("user_exist", false);
          setValue("first_name", "");
          setValue("last_name", "");
          setValue("phone", "");
        }
      } catch (errData) {
        console.error(errData);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div className="w-[500px] flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col w-full gap-2.5">
          <label className="text-black text-sm font-normal">
            Email<span className="text-red-500">*</span>
          </label>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <div className="w-full">
                <Input
                  {...field}
                  onBlur={(e) => checkEmailAddress(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
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
        <div className="flex w-full justify-between gap-8">
          <div className="flex flex-col w-full gap-2.5">
            <label className="text-black text-sm font-normal">
              First Name<span className="text-red-500">*</span>
            </label>
            <Controller
              name="first_name"
              control={control}
              disabled={getValues("user_exist")}
              rules={{ required: "First Name is required" }}
              render={({ field }) => (
                <div className="w-full">
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your first name"
                    className="h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30"
                  />
                  {errors.first_name && (
                    <div className="text-red-500 text-sm mt-1 capitalize">
                      {errors?.first_name?.message as string}
                    </div>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex flex-col w-full gap-2.5">
            <label className="text-black text-sm font-normal">
              Last Name<span className="text-red-500">*</span>
            </label>
            <Controller
              name="last_name"
              control={control}
              disabled={getValues("user_exist")}
              rules={{ required: "Last Name is required" }}
              render={({ field }) => (
                <div className="w-full">
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your last name"
                    className="h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30"
                  />
                  {errors.last_name && (
                    <div className="text-red-500 text-sm mt-1 capitalize">
                      {errors?.last_name?.message as string}
                    </div>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-2.5">
          <label className="text-black text-sm font-normal">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone Number is required" }}
            disabled={getValues("user_exist")}
            render={({ field }) => (
              <div className="w-full">
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your phone number"
                  className="h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30"
                />
                {errors.phone && (
                  <div className="text-red-500 text-sm mt-1 capitalize">
                    {errors?.phone?.message as string}
                  </div>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="w-full py-4 bg-[#0d0d0d] rounded-xl flex justify-center items-center">
          <button
            onClick={handleNext}
            className="text-white text-lg font-medium w-full"
          >
            Next
          </button>
        </div>
      )}
      <LoadingComponent
        loading={loading}
        label={"Please wait, while we are validating your email address."}
      />
    </div>
  );
};

export default PersonalInfo;
