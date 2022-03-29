//MODULES
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
//MODELS
import {
  AuthCredentialsInterface,
  AuthUserInterface,
} from '@/features/auth/models/interfaces/authInterface';

export const login = async ({
  email,
  password,
}: AuthCredentialsInterface): Promise<AuthUserInterface> => {
  const auth = getAuth();
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return {
    email: user.email,
    id: user.uid,
    token: user.refreshToken,
  };
};

export const register = async ({
  email,
  password,
}: AuthCredentialsInterface): Promise<AuthUserInterface> => {
  const auth = getAuth();
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return {
    email: user.email,
    id: user.uid,
    token: user.refreshToken,
  };
};
