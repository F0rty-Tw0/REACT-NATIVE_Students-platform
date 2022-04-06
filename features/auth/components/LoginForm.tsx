// COMPONENTS
import { TextInput, Pressable } from 'react-native';
import { View, Text } from '@/features/shared/components/Themed';
import { FontAwesome } from '@expo/vector-icons';

// MODELS
import { AuthScreenProp } from '@/features/auth/types/NavigationTypes';
// HOOKS
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
// REDUX
import {
  cleanAuthErrors,
  loginAndSetUser,
} from '@/features/auth/redux/actions/authActions';
import { appRegister } from '@/features/core/redux/actions/appActions';
// STYLES
import { buttonsStyle } from '@/features/shared/constants/Buttons';
import { textStyle } from '@/features/shared/constants/Text';
import { containersStyles } from '@/features/shared/constants/Containers';
import { spacingStyle } from '@/features/shared/constants/Spacing';
import { shadowsStyle } from '@/features/shared/constants/Shadows';
import { inputStyles } from '@/features/shared/constants/Inputs';
import { actionBlueDark, errorRed } from '@/features/shared/constants/Colors';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useAppSelector((state) => state.authReducer.error);
  const navigation = useNavigation<AuthScreenProp>();

  useEffect(() => {
    dispatch(cleanAuthErrors());
  }, []);

  const handleLogin = async () => {
    try {
      await dispatch(loginAndSetUser({ email, password }));
      navigation.navigate('Core');
    } catch (_error) {
      return;
    }
  };

  return (
    <View style={containersStyles.itemsContainer}>
      <Text style={textStyle.title}>Log in</Text>
      <View
        style={[containersStyles.inputContainer, shadowsStyle.containerShadow]}
      >
        <TextInput
          style={inputStyles.formInput}
          onChangeText={setEmail}
          keyboardType='email-address'
          textContentType='emailAddress'
          value={email}
          placeholder='E-MAIL'
          placeholderTextColor={actionBlueDark}
        />
        <TextInput
          style={[inputStyles.formInput, inputStyles.formInputLastChild]}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder='PASSWORD'
          placeholderTextColor={actionBlueDark}
        />
        {error ? (
          <Text style={textStyle.errorText}>
            <FontAwesome
              style={{ marginRight: 13, marginTop: 5 }}
              size={20}
              color={errorRed}
              name='times-circle'
            />
            <Text style={textStyle.errorText}>{error}</Text>
          </Text>
        ) : (
          <></>
        )}
      </View>
      <Text style={textStyle.linkText}>Forgot password?</Text>
      <Pressable
        style={[
          spacingStyle.mediumMarginTop,
          buttonsStyle.actionButton,
          password.length < 3
            ? buttonsStyle.actionButtonDisabled
            : buttonsStyle.actionBlueEnabled,
        ]}
        disabled={password.length < 3}
        onPress={handleLogin}
      >
        <Text style={textStyle.buttonText}>Log in</Text>
      </Pressable>
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
