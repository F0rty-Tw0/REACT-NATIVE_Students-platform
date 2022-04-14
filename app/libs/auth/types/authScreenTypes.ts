import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthScreenProp = NativeStackNavigationProp<
  ShellStackParamList,
  'Auth'
>;

export type AuthScreenParamList = {
  Auth: undefined;
};
