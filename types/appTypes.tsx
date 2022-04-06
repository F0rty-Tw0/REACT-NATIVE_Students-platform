/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface AppParamList extends CoreStackParamList {}
  }
}

export type CoreStackParamList = {
  Core: NavigatorScreenParams<CoreTabParamList> | undefined;
  Home: undefined;
  Auth: undefined;
  Discover: undefined;
  Events: undefined;
  Organizations: undefined;
  Chat: undefined;
  Posts: undefined;
  Splash: undefined;
  Onboarding: undefined;
  PreOnboarding: undefined;
  Menu: undefined;
  Profile: undefined;
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  Notifications: undefined;
  Verification: undefined;
  NotFound: undefined;
};

export type CoreStackScreenProps<Screen extends keyof CoreStackParamList> =
  NativeStackScreenProps<CoreStackParamList, Screen>;

export type CoreTabParamList = {
  Home: undefined;
  Profile: undefined;
  Menu: undefined;
  Chat: undefined;
};

export type CoreTabScreenProps<Screen extends keyof CoreTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<CoreTabParamList, Screen>,
    NativeStackScreenProps<CoreStackParamList>
  >;
