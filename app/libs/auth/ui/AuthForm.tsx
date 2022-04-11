// COMPONENTS
import { TextInput } from 'react-native';
import { View, Text } from '@libs/shared/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
// HOOKS
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
// REDUX
import {
  cleanAuthErrors,
} from '@libs/auth/redux/actions/authActions';
// STYLES
import { textStyle } from '@libs/shared/styles/Text';
import { containersStyles } from '@libs/shared/styles/Containers';
import { shadowsStyle } from '@libs/shared/styles/Shadows';
import { inputStyles } from '@libs/shared/styles/Inputs';
import { actionBlueDark, errorRed } from '@libs/shared/styles/Colors';
import { spacingStyle } from '@libs/shared/styles/Spacing';

interface AuthFormProps {
  isRegister?: boolean;
  email: string;
  password: string;
  repeatPassword?: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setIsAccepted?: (isAccepted: boolean) => void;
  setRepeatPassword?: (repeatPassword: string) => void;
  handlePasswordMatch?: () => void;
}
export const AuthForm = ({
  isRegister = true,
  email,
  password,
  repeatPassword,
  setEmail,
  setPassword,
  setIsAccepted = () => {
    // This is intentional
  },
  setRepeatPassword = () => {
    // This is intentional
  },
  handlePasswordMatch = () => {
    // This is intentional
  },
}: AuthFormProps) => {
  const error = useAppSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanAuthErrors());
  }, []);

  if (isRegister) {
    useEffect(() => {
      handlePasswordMatch();
    }, [repeatPassword, password]);
  }

  return (
    <>
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
          style={[
            inputStyles.formInput,
            !error && !isRegister && inputStyles.formInputLastChild,
          ]}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder='PASSWORD'
          placeholderTextColor={actionBlueDark}
        />

        {isRegister && (
          <TextInput
            style={[
              inputStyles.formInput,
              !error && inputStyles.formInputLastChild,
            ]}
            onChangeText={setRepeatPassword}
            value={repeatPassword}
            secureTextEntry={true}
            placeholder='REPEAT PASSWORD'
            placeholderTextColor={actionBlueDark}
          />
        )}
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
        ) : null}
      </View>
      {isRegister && (
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
              setIsAccepted(isChecked);
            }}
          />
          <Text style={[textStyle.subtext, textStyle.textAlignedTop]}>
            I agree to the terms and conditions
          </Text>
        </Text>
      )}
    </>
  );
};