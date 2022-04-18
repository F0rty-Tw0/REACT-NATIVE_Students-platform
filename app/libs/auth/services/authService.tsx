// MODULES
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
// MODELS
import {
  AuthCredentialsInterface,
  AuthUserInterface,
} from '@libs/auth/models/interfaces/authInterface';
// UTILS
import { getMessageFromErrorCode } from '@libs/auth/utils/getFirebaseAuthErrors';

export const login = async ({
  email,
  password,
}: AuthCredentialsInterface): Promise<AuthUserInterface> => {
  try {
    const auth = getAuth();
    await setPersistence(auth, browserSessionPersistence);
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
    await setPersistence(auth, browserSessionPersistence);
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

export const logout = async (): Promise<void> => {
  try {
    const auth = getAuth();
    await auth.signOut();
  } catch (error: any) {
    throw new Error(getMessageFromErrorCode(error.code));
  }
};
