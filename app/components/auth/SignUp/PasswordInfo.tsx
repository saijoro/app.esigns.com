import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const PasswordInfo = ({
  control,
  errors,
  getValues,
}: {
  control: any;
  errors: any;
  getValues: any;
}) => {
  const [selectedAccountType, setSelectedAccountType] =
    useState<string>("individual");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validations, setValidations] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
    passwordMatch: false,
  });

  const passwordValidationRules = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    symbol: /[!@#$%^&*(),.?":{}|<>]/,
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const updatedValidations = {
      uppercase: passwordValidationRules.uppercase.test(newPassword),
      lowercase: passwordValidationRules.lowercase.test(newPassword),
      number: passwordValidationRules.number.test(newPassword),
      symbol: passwordValidationRules.symbol.test(newPassword),
      passwordMatch: newPassword === confirmPassword,
    };

    setValidations(updatedValidations);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setValidations((prevValidations) => ({
      ...prevValidations,
      passwordMatch: password === newConfirmPassword,
    }));
  };

  return (
    <div className="w-[500px] p-8 flex flex-col justify-start items-center gap-6">
      <div className="w-full flex flex-col gap-4">
        <div className="text-black text-sm font-normal">
          Choose Account Type
        </div>
        <Controller
          name="plan_type"
          defaultValue="individual"
          control={control}
          render={({ field }) => (
            <RadioGroup
              {...field}
              className="w-full flex flex-row"
              onValueChange={(e) => {
                field.onChange(e);
                setSelectedAccountType(e);
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individual" />
                <Label htmlFor="individual" className="cursor-pointer">
                  Individual
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business" className="cursor-pointer">
                  Business
                </Label>
              </div>
            </RadioGroup>
          )}
        />
      </div>

      {selectedAccountType === "business" && (
        <div className="w-full flex flex-col gap-4">
          <div className="text-black text-sm font-normal">
            Company Name<span className="text-red-500">*</span>
          </div>
          <Controller
            name="company"
            rules={{ required: "Company name is required" }}
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter your company name"
                  className="h-12 px-4 py-3.5 bg-white border border-black/30"
                />
                {errors.company && (
                  <div className="text-red-500 text-sm mt-1 capitalize">
                    {errors?.company?.message as string}
                  </div>
                )}
              </div>
            )}
          />
        </div>
      )}

      {!getValues("user_exist") && (
        <>
          <div className="w-full flex flex-col gap-4">
            <div className="text-black text-sm font-normal">
              Password<span className="text-red-500">*</span>
            </div>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <div className="w-full">
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    className="h-12 px-4 py-3.5 bg-white border border-black/30"
                    onChange={handlePasswordChange}
                  />
                  {errors.password && (
                    <div className="text-red-500 text-sm mt-1 capitalize">
                      {errors?.password?.message as string}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="text-black text-sm font-normal">
              Confirm password
            </div>
            <Controller
              name="cPassword"
              control={control}
              rules={{ required: "Confirm password is required" }}
              render={({ field }) => (
                <div className="w-full">
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirm your password"
                    className="h-12 px-4 py-3.5 bg-white border border-black/30"
                    onChange={handleConfirmPasswordChange}
                  />
                  {errors.cPassword && (
                    <div className="text-red-500 text-sm mt-1 capitalize">
                      {errors?.cPassword?.message as string}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {password ? (
            <div className="w-full flex flex-col gap-4 mt-4">
              <div className="text-black text-sm font-normal">
                Password Requirements:
              </div>
              <ul className="list-disc pl-5">
                <li
                  className={`flex items-center ${validations.uppercase ? "text-green-500" : "text-red-500"}`}
                >
                  {validations.uppercase ? "✔️" : "❌"} At least one uppercase
                  letter (A-Z)
                </li>
                <li
                  className={`flex items-center ${validations.lowercase ? "text-green-500" : "text-red-500"}`}
                >
                  {validations.lowercase ? "✔️" : "❌"} At least one lowercase
                  letter (a-z)
                </li>
                <li
                  className={`flex items-center ${validations.number ? "text-green-500" : "text-red-500"}`}
                >
                  {validations.number ? "✔️" : "❌"} At least one number (0-9)
                </li>
                <li
                  className={`flex items-center ${validations.symbol ? "text-green-500" : "text-red-500"}`}
                >
                  {validations.symbol ? "✔️" : "❌"} At least one symbol
                  (!@#$%^&*)
                </li>
                <li
                  className={`flex items-center ${validations.passwordMatch ? "text-green-500" : "text-red-500"}`}
                >
                  {validations.passwordMatch ? "✔️" : "❌"} Passwords match
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </>
      )}

      <div className="flex items-center space-x-2 mt-4">
        <Controller
          name="terms_and_conditions"
          control={control}
          render={({ field }) => (
            <>
              <Checkbox
                {...field}
                id="terms"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked)}
                className="w-4 h-4 border border-black/30"
              />
              <Label
                htmlFor="terms"
                className="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to eSigns Terms of Service and Privacy Policy
              </Label>
            </>
          )}
        />
      </div>

      <div className="w-full py-4 bg-[#0d0d0d] rounded-xl flex justify-center items-center mt-6">
        <button type="submit" className="text-white text-lg font-medium w-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PasswordInfo;
