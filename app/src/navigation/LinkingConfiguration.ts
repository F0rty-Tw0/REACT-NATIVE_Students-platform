import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';
import { Shell } from '@libs/shell/navigation/ShellLinkingOptions';
import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';

const linkingConfiguration: LinkingOptions<ShellStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Shell,
      Auth: 'auth',
      Splash: 'splash',
      Onboarding: 'onboarding',
      NotFound: '*',
    },
  },
};

export default linkingConfiguration;
