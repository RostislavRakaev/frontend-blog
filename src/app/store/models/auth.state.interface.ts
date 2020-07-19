
export interface IAuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: Error | null
}
