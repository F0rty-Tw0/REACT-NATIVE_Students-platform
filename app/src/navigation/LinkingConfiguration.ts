import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';
import { Auth } from '@libs/auth/navigation/AuthLinkingOptions';
import { Shell } from '@libs/shell/navigation/ShellLinkingOptions';
import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';

const linkingConfiguration: LinkingOptions<ShellStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Shell,
      Auth,
      NotFound: '*',
    },
  },
};

export default linkingConfiguration;
