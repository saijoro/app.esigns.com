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
