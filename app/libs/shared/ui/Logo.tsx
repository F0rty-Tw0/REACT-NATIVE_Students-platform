// COMPONENTS
import { View } from 'react-native';
import CBSLogo from '@images/logo.svg';
//  STYLES
import { containerStyles } from '@libs/shared/styles/Containers';

export const Logo = () => (
  <View style={containerStyles.imageContainer}>
    <CBSLogo />
  </View>
);
