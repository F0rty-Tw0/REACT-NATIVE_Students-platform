// COMPONENTS
import { Pressable, View, Text } from 'react-native';
import { AuthButton } from '@libs/auth/components/AuthButton';
import { AuthForm } from '@libs/auth/components/AuthForm';
// MODELS
import { AuthScreenProp } from '@libs/auth/types/authScreenTypes';
// HOOKS
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
// REDUX
import { loginAndSetUser } from '@libs/auth/redux/actions/authActions';
import { appRegister } from '@libs/shell/redux/actions/appActions';
// STYLES
import { textStyle } from '@libs/shared/styles/Text';
import { containerStyles } from '@libs/shared/styles/Containers';
import { spacingStyle } from '@libs/shared/styles/Spacing';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthScreenProp>();

  const handleLogin = async () => {
    try {
      await dispatch(loginAndSetUser({ email, password }));
      navigation.navigate('Splash');
    } catch (_error) {
      return; // Error is handled in the reducer
    }
  };

  return (
    <View style={containerStyles.itemsContainer}>
      <Text style={textStyle.title}>Log in</Text>
      <AuthForm
        isRegister={false}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <Text style={textStyle.linkText}>Forgot password?</Text>
      <AuthButton
        text='Log in'
        passwordLength={password.length}
        handleOnPress={handleLogin}
      />
      <Text style={[textStyle.subtext, spacingStyle.smallMarginTop]}>
        Don't have an account?
        <Pressable
          onPress={() => {
            dispatch(appRegister());
          }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.7 : 1,
          })}
        >
          <Text style={textStyle.linkText}> Sign up</Text>
        </Pressable>
      </Text>
    </View>
  );
};
