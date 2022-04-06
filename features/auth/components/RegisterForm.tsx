// COMPONENTS
import { TextInput, Pressable } from 'react-native';
import { View, Text } from '@/features/shared/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
// MODELS
import { AuthScreenProp } from '@/features/auth/types/NavigationTypes';
// HOOKS
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
// REDUX
import {
  cleanAuthErrors,
  registerAndSetUser,
  registerFailure,
} from '@/features/auth/redux/actions/authActions';
import { appLogin } from '@/features/core/redux/actions/appActions';
// STYLES
import { buttonsStyle } from '@/features/shared/constants/Buttons';
import { textStyle } from '@/features/shared/constants/Text';
import { containersStyles } from '@/features/shared/constants/Containers';
import { spacingStyle } from '@/features/shared/constants/Spacing';
import { shadowsStyle } from '@/features/shared/constants/Shadows';
import { inputStyles } from '@/features/shared/constants/Inputs';
import { actionBlueDark, errorRed } from '@/features/shared/constants/Colors';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const dispatch = useDispatch();
  const error = useAppSelector((state) => state.authReducer.error);
  const navigation = useNavigation<AuthScreenProp>();

  useEffect(() => {
    dispatch(cleanAuthErrors());
  }, []);

  useEffect(() => {
    matchPassword();
  }, [repeatPassword]);

  const matchPassword = () => {
    if (password !== repeatPassword) {
      setPasswordMatch(false);
      dispatch(registerFailure("Password doesn't match"));
    } else {
      setPasswordMatch(true);
      dispatch(cleanAuthErrors());
    }
  };

  const handleRegister = async () => {
    try {
      await dispatch(registerAndSetUser({ email, password }));
      navigation.navigate('Core');
    } catch (_error) {
      return;
    }
  };

  return (
    <View style={containersStyles.itemsContainer}>
      <Text style={textStyle.title}>Sign up to get access</Text>
      <View
        style={[containersStyles.inputContainer, shadowsStyle.containerShadow]}
      >
        <TextInput
          style={inputStyles.formInput}
          onChangeText={setEmail}
          textContentType='emailAddress'
          value={email}
          placeholder='E-MAIL'
          placeholderTextColor={actionBlueDark}
        />
        <TextInput
          style={inputStyles.formInput}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder='PASSWORD'
          placeholderTextColor={actionBlueDark}
        />
        <TextInput
          style={[inputStyles.formInput, inputStyles.formInputLastChild]}
          onChangeText={setRepeatPassword}
          value={repeatPassword}
          secureTextEntry={true}
          placeholder='REPEAT PASSWORD'
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
      <Text style={spacingStyle.smallMarginTop}>
        <BouncyCheckbox
          iconStyle={{
            borderWidth: 2,
            borderRadius: 5,
          }}
          bounceFriction={5}
          fillColor='#32305D'
          size={25}
          onPress={(isChecked: boolean) => {
            setAccepted(isChecked);
          }}
        />
        <Text style={[textStyle.subtext, textStyle.textAlignedTop]}>
          I agree to the terms and conditions
        </Text>
      </Text>
      <Pressable
        style={[
          spacingStyle.mediumMarginTop,
          buttonsStyle.actionButton,
          password.length < 3 || !accepted || !passwordMatch
            ? buttonsStyle.actionButtonDisabled
            : buttonsStyle.actionBlueEnabled,
        ]}
        disabled={password.length < 3 || !accepted || !passwordMatch}
        onPress={handleRegister}
      >
        <Text style={textStyle.buttonText}>Sign up</Text>
      </Pressable>
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
