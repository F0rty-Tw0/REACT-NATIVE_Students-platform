// COMPONENTS
import { View, Text, TextInput } from 'react-native';
// STYLES
import { actionBlueDisabled } from '@libs/shared/styles/Colors';
import { containerStyles } from '@libs/shared/styles/Containers';
import { shadowStyles } from '@libs/shared/styles/Shadows';
import { textStyle } from '@libs/shared/styles/Text';
import { inputStyles } from '@libs/shared/styles/Inputs';

interface ProfileNameProps {
  name: string;
  setName: (name: string) => void;
}

export const ProfileName = ({ name, setName }: ProfileNameProps) => {
  return (
    <View
      style={[
        containerStyles.inputContainer,
        shadowStyles.containerShadow,
        { marginTop: 40 },
      ]}
    >
      <Text style={textStyle.inputLabelText}>WHAT IS YOUR NAME?</Text>
      <TextInput
        style={inputStyles.formInput}
        onChangeText={setName}
        textContentType='name'
        value={name}
        placeholder='First name and last name'
        placeholderTextColor={actionBlueDisabled}
      />
    </View>
  );
};
