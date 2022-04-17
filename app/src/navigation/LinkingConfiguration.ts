import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';
import { Shell } from '@libs/shell/navigation/ShellLinkingOptions';
import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';

const linkingConfiguration: LinkingOptions<ShellStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Onboarding: 'onboarding',
      Splash: 'splash',
      Shell,
      Auth: 'auth',
      NotFound: '*',
    },
  },
};

export default linkingConfiguration;
