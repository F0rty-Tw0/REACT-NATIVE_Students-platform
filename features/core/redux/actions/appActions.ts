import { LOGIN, REGISTER } from '@/features/core/redux/appTypes';

export const appLogin = () => ({
  type: LOGIN,
});

export const appRegister = () => ({
  type: REGISTER,
});
