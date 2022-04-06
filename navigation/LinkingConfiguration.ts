/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { Auth } from '@/features/auth/navigation/AuthLinkingOptions';
import { Core } from '@/features/core/navigation/CoreLinkingOptions';
import { CoreStackParamList } from '@/types/appTypes';
console.log(Auth);
const linking: LinkingOptions<CoreStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Core,
      Auth,
      NotFound: '*',
    },
  },
};

export default linking;
