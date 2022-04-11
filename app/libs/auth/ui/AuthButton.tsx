// COMPONENTS
import { Pressable } from 'react-native';
import { Text } from '@libs/shared/components/Themed';
// STYLES
import { spacingStyle } from '@libs/shared/styles/Spacing';
import { buttonsStyle } from '@libs/shared/styles/Buttons';
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
      buttonsStyle.actionButton,
      passwordLength < 3 || !isAccepted || !isPasswordMatch
        ? buttonsStyle.actionButtonDisabled
        : buttonsStyle.actionBlueEnabled,
    ]}
    disabled={passwordLength < 3 || !isAccepted || !isPasswordMatch}
    onPress={handleOnPress}
  >
    <Text style={textStyle.buttonText}>{text}</Text>
  </Pressable>
);
