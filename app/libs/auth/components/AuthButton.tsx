// COMPONENTS
import { Pressable, Text } from 'react-native';
// STYLES
import { spacingStyle } from '@libs/shared/styles/Spacing';
import { buttonStyle } from '@libs/shared/styles/Buttons';
import { textStyle } from '@libs/shared/styles/Text';

interface AuthButtonProps {
  text: string;
  passwordLength: number;
  isAccepted?: boolean;
  isPasswordMatch?: boolean;
  handleOnPress: () => void;
}
export const AuthButton = ({
  text,
  passwordLength,
  isAccepted = true,
  isPasswordMatch = true,
  handleOnPress,
}: AuthButtonProps) => (
  <Pressable
    style={[
      spacingStyle.mediumMarginTop,
      buttonStyle.actionButton,
      passwordLength < 3 || !isAccepted || !isPasswordMatch
        ? buttonStyle.actionButtonDisabled
        : buttonStyle.actionBlueEnabled,
    ]}
    disabled={passwordLength < 3 || !isAccepted || !isPasswordMatch}
    onPress={handleOnPress}
  >
    <Text style={textStyle.buttonText}>{text}</Text>
  </Pressable>
);
