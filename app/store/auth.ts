import { Store } from "@tanstack/store";

type AuthState = {
  token: string | null;
  user: { name: string; email: string } | null;
};

const initialState: AuthState = { token: null, user: null };

export const authStore = new Store<AuthState>(initialState);

export const updateAuthStore = (updates: Partial<AuthState>) => {
  authStore.setState((state) => ({
    ...state,
    ...updates,
  }));
};

export const getAuthState = (): AuthState => {
  return authStore.state;
};

authStore.subscribe((state) => {
  localStorage.setItem("authState", JSON.stringify(state));
});
