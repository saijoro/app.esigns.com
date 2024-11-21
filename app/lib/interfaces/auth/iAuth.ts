import { Control, UseFormGetValues, UseFormSetValue } from "react-hook-form";

export interface ILoginDetails {
  email: string;
  password: string;
}

export interface IErrors {
  email?: string[];
  password?: string[];
}

export interface ISignUpPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  terms_and_conditions: boolean;
  phone: string;
  cPassword: string;
  plan_type: string;
}

export interface FormValues {
  user_exist: boolean;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  terms_and_conditions: boolean;
  phone: string;
  cPassword: string;
  plan_type: string;
}

export interface PersonalInfoProps {
  control: Control<FormValues | any>;
  errors: Record<string, any>;
  step: number;
  handleNext: () => void;
  setValue: UseFormSetValue<FormValues | any>;
  getValues: UseFormGetValues<FormValues | any>;
}
