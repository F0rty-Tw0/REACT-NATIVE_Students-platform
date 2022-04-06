import { CoreStackParamList } from '@/types/appTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthScreenProp = NativeStackNavigationProp<
  CoreStackParamList,
  'Auth'
>;
