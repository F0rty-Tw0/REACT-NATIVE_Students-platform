// COMPONENTS
import { View, Text, TextInput } from 'react-native';
// STYLES
import { actionBlueDisabled } from '@libs/shared/styles/Colors';
import { containerStyles } from '@libs/shared/styles/Containers';
import { shadowStyles } from '@libs/shared/styles/Shadows';
import { textStyle } from '@libs/shared/styles/Text';
import { inputStyles } from '@libs/shared/styles/Inputs';

interface ProfileProgrammeProps {
  programme: string;
  setProgramme: (name: string) => void;
}

export const ProfileProgramme = ({
  programme,
  setProgramme,
}: ProfileProgrammeProps) => {
  return (
    <View
      style={[containerStyles.inputContainer, shadowStyles.containerShadow]}
    >
      <Text style={textStyle.inputLabelText}>Study programme</Text>
      <TextInput
        style={inputStyles.formInput}
        onChangeText={setProgramme}
        textContentType='name'
        value={programme}
        placeholder='Select from list'
        placeholderTextColor={actionBlueDisabled}
      />
    </View>
  );
};
