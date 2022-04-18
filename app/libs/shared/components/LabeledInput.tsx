// COMPONENTS
import { View, Text, TextInput } from 'react-native';
// STYLES
import { actionBlueDisabled } from '@libs/shared/styles/Colors';
import { containerStyles } from '@libs/shared/styles/Containers';
import { shadowStyles } from '@libs/shared/styles/Shadows';
import { textStyle } from '@libs/shared/styles/Text';
import { inputStyles } from '@libs/shared/styles/Inputs';

interface LabeledInputProps {
  label: string;
  placeholderText: string;
  value: string;
  setValue: (value: string) => void;
}

export const LabeledInput = ({
  label,
  placeholderText,
  value,
  setValue,
}: LabeledInputProps) => {
  return (
    <View
      style={[containerStyles.inputContainer, shadowStyles.containerShadow]}
    >
      <Text style={textStyle.inputLabelText}>{label}</Text>
      <TextInput
        style={inputStyles.formInput}
        onChangeText={setValue}
        value={value}
        placeholder={placeholderText}
        placeholderTextColor={actionBlueDisabled}
      />
    </View>
  );
};
