// COMPONENTS
import { Pressable, View, Text } from 'react-native';
import { AuthButton } from '@libs/auth/ui/AuthButton';
import { AuthForm } from '@libs/auth/ui/AuthForm';
// MODELS
import { AuthScreenProp } from '@libs/auth/types/authScreenTypes';
// HOOKS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// REDUX
import {
  cleanAuthErrors,
  registerAndSetUser,
  registerFailure,
} from '@libs/auth/redux/actions/authActions';
import { appLogin } from '@libs/shell/redux/actions/appActions';
// STYLES
import { textStyle } from '@libs/shared/styles/Text';
import { containersStyles } from '@libs/shared/styles/Containers';
import { spacingStyle } from '@libs/shared/styles/Spacing';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation<AuthScreenProp>();

  const handleRegister = async () => {
    try {
      await dispatch(registerAndSetUser({ email, password }));
      navigation.navigate('Shell');
    } catch (_error) {
      return;
    }
  };

  const handlePasswordMatch = () => {
    if (password !== repeatPassword) {
      setIsPasswordMatch(false);
      dispatch(registerFailure("Password doesn't match"));
    } else {
      setIsPasswordMatch(true);
      dispatch(cleanAuthErrors());
    }
  };

  return (
    <View style={containersStyles.itemsContainer}>
      <Text style={textStyle.title}>Sign up to get access</Text>
      <AuthForm
        email={email}
        password={password}
        setEmail={setEmail}
        repeatPassword={repeatPassword}
        setPassword={setPassword}
        setIsAccepted={setIsAccepted}
        setRepeatPassword={setRepeatPassword}
        handlePasswordMatch={handlePasswordMatch}
      />
      <AuthButton
        text='Sign up'
        passwordLength={password.length}
        isAccepted={isAccepted}
        isPasswordMatch={isPasswordMatch}
        handleOnPress={handleRegister}
      />
      <Text style={[textStyle.subtext, spacingStyle.smallMarginTop]}>
        Already have an account?
        <Pressable
          onPress={() => {
            dispatch(appLogin());
          }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.7 : 1,
          })}
        >
          <Text style={textStyle.linkText}> Log in</Text>
        </Pressable>
      </Text>
    </View>
  );
};
