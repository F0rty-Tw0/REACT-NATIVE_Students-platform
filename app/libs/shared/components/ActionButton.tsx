// COMPONENTS
import { Pressable, Text } from 'react-native';
// STYLES
import { textStyle } from '@libs/shared/styles/Text';
import { buttonStyle } from '@libs/shared/styles/Buttons';
import { shadowStyles } from '@libs/shared/styles/Shadows';

interface ActionButtonProps {
  buttonText: string;
  onPress: () => void;
}
export const ActionButton = ({ buttonText, onPress }: ActionButtonProps) => (
  <Pressable
    style={({ pressed }) => [
      {
        opacity: pressed ? 0.7 : 1,
      },
      [
        buttonStyle.actionButton,
        buttonStyle.actionBlueEnabled,
        shadowStyles.containerShadow,
        { width: '100%', padding: 10, marginTop: 20, marginBottom: 30 },
      ],
    ]}
    onPress={onPress}
  >
    <Text style={[textStyle.buttonText, textStyle.centerText]}>
      {buttonText}
    </Text>
  </Pressable>
);
