export interface AuthStateInterface {
  isLoading: boolean;
  isLoggedIn: boolean;
  error: string;
  user: AuthUserInterface | null;
}
export interface AuthCredentialsInterface {
  email: string;
  password: string;
}

export interface AuthUserInterface {
  email: string;
  token: string; // We don't need to store this since firebase handles it for us
  id: string; // We don't need to store this since firebase handles it for us
}
