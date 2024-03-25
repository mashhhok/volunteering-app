import { AuthStoreState } from "./store";

export const isPasswordMatches = (state: AuthStoreState) => {
  return state.password.text === state.confirmPassword && !state.password.isError
}