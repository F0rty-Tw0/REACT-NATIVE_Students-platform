// MODULES
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// MODELS
import {
  AuthCredentialsInterface,
  AuthUserInterface,
} from '@/features/auth/models/interfaces/authInterface';
// UTILS
import { getMessageFromErrorCode } from '@/features/auth/utils/getFirebaseAuthErrors';

export const login = async ({
  email,
  password,
}: AuthCredentialsInterface): Promise<AuthUserInterface> => {
  try {
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return {
      email: user.email,
      id: user.uid,
      token: user.refreshToken,
    };
  } catch (error: any) {
    throw new Error(getMessageFromErrorCode(error.code));
  }
};

export const register = async ({
  email,
  password,
}: AuthCredentialsInterface): Promise<AuthUserInterface> => {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      email: user.email,
      id: user.uid,
      token: user.refreshToken,
    };
  } catch (error: any) {
    throw new Error(getMessageFromErrorCode(error.code));
  }
};
