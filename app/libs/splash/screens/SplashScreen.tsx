// COMPONENTS
import { View, Text, Image } from 'react-native';
import { AuthScreenProp } from '@libs/auth/types/authScreenTypes';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
// HOOKS
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
const splash = require('@images/splash.png');
// STYLES
import { containerStyles } from '@libs/shared/styles/Containers';
import { imageStyles } from '@libs/shared/styles/Images';
import { textStyle } from '@libs/shared/styles/Text';
export const SplashScreen = () => {
  const navigation = useNavigation<AuthScreenProp>();

  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  useEffect((): void => {
    setTimeout(() => {
      navigation.replace(isLoggedIn ? 'Shell' : 'Auth');
    }, 1000);
  }, []);

  return (
    <View
      style={[containerStyles.mainContainer, containerStyles.splashContainer]}
    >
      <Text style={textStyle.title}>Student Life</Text>
      <Text style={textStyle.title}>at</Text>
      <Text style={textStyle.title}>Copenhagen Business School</Text>

      <Text style={textStyle.splashByText}>By</Text>
      <Image style={imageStyles.splashImage} source={splash} />
    </View>
  );
};
