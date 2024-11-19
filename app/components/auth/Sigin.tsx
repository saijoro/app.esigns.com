import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { loginAPI } from "~/utils/services/auth";
import { useForm, Controller } from "react-hook-form";
import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

const SignIn: React.FC = () => {
  const navigate = useNavigate({ from: "/" });
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({});

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { mutate, isError, error } = useMutation({
    mutationFn: async (loginDetails: ILoginDetails) => {
      try {
        setLoading(true);
        const response = await loginAPI(loginDetails);
        if (response?.status === 200 || response?.status === 201) {
          const { data } = response?.data;
          const expiryDate = new Date(data?.access_token_expires_at);
          Cookies.set("token", data.access_token, {
            priority: "High",
            expires: expiryDate,
          });
          navigate({
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

  const onSubmit = (data: any) => {
    mutate(data);
  };

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="p-8 top-[100px] left-[594px] absolute bg-white rounded-2xl shadow flex-col justify-start items-center gap-12 inline-flex border">
        <div className="self-stretch h-[71px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-black text-[32px] font-normal leading-loose">
            Login
          </div>
          <div className="self-stretch text-center text-[#333333] text-lg font-light leading-normal">
            Greetings! Kindly enter your credentials.
          </div>
        </div>
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
                    control={control}
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
                    Password
                  </div>
                  <div className="self-stretch h-[81px] flex-col justify-start items-start gap-3 flex">
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <div className="w-full relative">
                          <Input
                            {...field}
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter password"
                            className="h-12 px-4 py-3.5 bg-white rounded-lg border border-black/30 w-full"
                          />
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-800"
                          >
                            {passwordVisible ? <Eye /> : <EyeOff />}
                          </button>
                          {errors.password && (
                            <div className="text-red-500 text-sm mt-1 capitalize">
                              {errors?.password?.message as string}
                            </div>
                          )}
                        </div>
                      )}
                    />

                    <div className="self-stretch text-right text-black text-base font-medium leading-tight">
                      Forgot Password ?
                    </div>
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="text-black h-12 px-2.5 py-3.5 bg-[#ffc900] rounded-lg text-base font-medium leading-tight w-full"
              >
                {loading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
