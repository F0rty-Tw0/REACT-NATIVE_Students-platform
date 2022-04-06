/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '@/types/appTypes';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          home: {
            screens: {
              home: 'Home',
            },
          },
          profile: {
            screens: {
              profile: 'Profile',
            },
          },
        },
      },
      Modal: 'modal',
      Login: 'login',
      Register: 'register',
      NotFound: '*',
    },
  },
};

export default linking;
