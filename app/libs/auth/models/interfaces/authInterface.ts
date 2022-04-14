export interface AuthStateInterface {
  loading: boolean;
  isLoggedIn: boolean;
  error: string;
  user: AuthUserInterface | null;
}
export interface AuthCredentialsInterface {
  email: string;
  password: string;
}

export interface AuthUserInterface {
  email: string | null;
  token: string | null;
  id: string | null;
}

export interface DisplayUserInterface {}
