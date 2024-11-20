import { useState } from "react";
import PasswordInfo from "./PasswordInfo";
import PersonalInfo from "./PersonalInfo";
import { useRouter } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signUpAPI } from "~/utils/services/auth";
import { ISignUpPayload } from "~/lib/interfaces/auth/iSignIn";

const SignUp = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
    getValues,
    trigger,
  } = useForm({});

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleStepClick = async (selectedStep: number) => {
    const isValid = await trigger();
    if (isValid) setStep(selectedStep);
  };

  const handleNext = async () => {
    const isValid = await trigger();

    if (isValid) {
      if (step < 2) {
        setStep(step + 1);
      }
    }
  };

  const { mutate, isError, error } = useMutation({
    mutationFn: async (signUpDetails: ISignUpPayload) => {
      try {
        setLoading(true);
        const response = await signUpAPI(signUpDetails);
        if (response?.status === 200 || response?.status === 201) {
          router.navigate({
            to: "/verify",
            search: {
              email: getValues("email"),
              company_id: response?.data?._id,
            },
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
      mutate(data);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-full border">
      <div className="px-6 py-3 top-10 absolute bg-white rounded-2xl shadow flex-col justify-start items-center gap-2 inline-flex border ">
        <div className="top-2 justify-center items-center gap-2 inline-flex">
          <div
            onClick={() => handleStepClick(1)}
            className={`px-4 py-1 rounded-full flex justify-center items-center cursor-pointer ${
              step === 1 ? "bg-black" : "bg-[#f6f6f6]"
            }`}
          >
            <div
              className={`text-center ${step === 1 ? "text-[#ffc900]" : "text-[#0d0d0d]"} text-lg font-normal`}
            >
              1
            </div>
          </div>
          <div className="w-52 h-[0px] border border-[#333333]"></div>
          <div
            onClick={() => handleStepClick(2)}
            className={`px-4 py-2 rounded-full flex justify-center items-center cursor-pointer ${
              step === 2 ? "bg-black" : "bg-[#f6f6f6]"
            }`}
          >
            <div
              className={`text-center ${step === 2 ? "text-[#ffc900]" : "text-[#0d0d0d]"} text-lg font-normal`}
            >
              2
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-center gap-4">
          <div className="text-center text-black text-2xl font-normal leading-loose">
            Personal Information
          </div>
          <div className="text-center text-[#333333] text-lg font-light leading-normal">
            Tell Us About Yourself
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="self-stretch flex-col justify-start items-center gap-6 flex"
          >
            {step === 1 ? (
              <PersonalInfo
                control={control}
                errors={errors}
                step={step}
                handleNext={handleNext}
                setValue={setValue}
                getValues={getValues}
              />
            ) : (
              <PasswordInfo
                control={control}
                errors={errors}
                getValues={getValues}
              />
            )}
          </form>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="text-center text-[#0d0d0d] text-base font-light">
            Already have an Account?
          </div>
          <div
            className="text-center text-[#2f80ed] text-base font-normal cursor-pointer"
            onClick={() => router.navigate({ to: "/signin" })}
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
