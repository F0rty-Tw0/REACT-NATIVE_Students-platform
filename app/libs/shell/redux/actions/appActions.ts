import { LOGIN, REGISTER } from '@libs/shell/redux/shellStoreTypes';

export const appLogin = () => ({
  type: LOGIN,
});

export const appRegister = () => ({
  type: REGISTER,
});
