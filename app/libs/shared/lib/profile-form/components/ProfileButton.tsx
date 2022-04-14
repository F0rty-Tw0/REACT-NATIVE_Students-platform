// COMPONENTS
import { Pressable, Text } from 'react-native';
// STYLES
import { spacingStyle } from '@libs/shared/styles/Spacing';
import { buttonStyle } from '@libs/shared/styles/Buttons';
import { textStyle } from '@libs/shared/styles/Text';

interface ProfileButtonProps {
  text: string;
  formCompleted: boolean;
  handleOnPress: () => void;
}
export const ProfileButton = ({
  text,
  formCompleted,
  handleOnPress,
}: ProfileButtonProps) => (
  <Pressable
    style={[
      spacingStyle.mediumMarginTop,
      buttonStyle.actionButton,
      formCompleted
        ? buttonStyle.actionBlueEnabled
        : buttonStyle.actionButtonDisabled,
    ]}
    disabled={!formCompleted}
    onPress={handleOnPress}
  >
    <Text style={textStyle.buttonText}>{text}</Text>
  </Pressable>
);
