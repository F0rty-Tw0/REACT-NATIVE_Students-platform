// COMPONENTS
import { View, Text, Pressable } from 'react-native';
import User from '@images/user.svg';
// STYLES
import { profileContainerStyle } from '@libs/shared/lib/profile-form/styles/profileContainerStyles';
import { profileButtonStyle } from '@libs/shared/lib/profile-form/styles/profileButtonStyles';
import { textStyle } from '@libs/shared/styles/Text';
import { buttonStyle } from '@libs/shared/styles/Buttons';
export const ProfilePicture = () => {
  return (
    <View style={profileContainerStyle.twoColumnsContainer}>
      <View>
        <Text style={[textStyle.inputLabelText, { marginLeft: 0 }]}>
          Profile Picture
        </Text>
        <Pressable
          style={[
            buttonStyle.actionButton,
            buttonStyle.actionBlueEnabled,
            profileButtonStyle.uploadButton,
            { padding: 10 },
          ]}
          onPress={() => {
            console.log('Uploading');
          }}
        >
          <Text style={textStyle.buttonText}>Upload</Text>
        </Pressable>
      </View>
      <View style={profileContainerStyle.userImageContainer}>
        <View style={profileContainerStyle.alignImage}>
          <User />
        </View>
      </View>
    </View>
  );
};
