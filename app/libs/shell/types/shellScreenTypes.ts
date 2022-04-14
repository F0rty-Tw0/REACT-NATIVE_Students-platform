import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// TYPES
import { AuthScreenParamList } from '@libs/auth/types/authScreenTypes';

export type ShellStackParamList = {
  NotFound: undefined;
  Splash: undefined;
  Shell: NavigatorScreenParams<ShellTabParamList> | undefined;
  Auth: undefined;
  Home: undefined;
  Onboarding: undefined;
  // Discover: undefined;
  // Events: undefined;
  // Organizations: undefined;
  // Chat: undefined;
  // Posts: undefined;
  // Splash: undefined;
  // PreOnboarding: undefined;
  // Menu: undefined;
  // Profile: undefined;
  // ResetPassword: undefined;
  // Notifications: undefined;
  // Verification: undefined;
};

export type ShellTabParamList = {
  Home: undefined;
  Profile: undefined;
  Menu: undefined;
  Chat: undefined;
};

export type ShellStackScreenProps<Screen extends keyof ShellStackParamList> =
  NativeStackScreenProps<ShellStackParamList, Screen>;

export type ShellTabScreenProps<Screen extends keyof ShellTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ShellTabParamList, Screen>,
    NativeStackScreenProps<ShellStackParamList>
  >;
