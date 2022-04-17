// COMPONENTS
import { View, Text, Pressable, Image } from 'react-native';
import User from '@images/user.svg';
// STYLES
import { profileContainerStyle } from '@libs/shared/lib/profile-form/styles/profileContainerStyles';
import { profileButtonStyle } from '@libs/shared/lib/profile-form/styles/profileButtonStyles';
import { textStyle } from '@libs/shared/styles/Text';
import { buttonStyle } from '@libs/shared/styles/Buttons';
import { profileImageStyle } from '@libs/shared/lib/profile-form/styles/profileImageStyles';
interface ProfilePictureProps {
  pictureSource: string;
  handlePictureUpload: () => void;
}

export const ProfilePicture = ({
  pictureSource,
  handlePictureUpload,
}: ProfilePictureProps) => {
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
          onPress={handlePictureUpload}
        >
          <Text style={textStyle.buttonText}>Upload</Text>
        </Pressable>
      </View>
      <View style={profileContainerStyle.userImageContainer}>
        <View style={profileContainerStyle.alignImage}>
          {pictureSource ? (
            <Image
              style={profileImageStyle.profileImage}
              source={{ uri: pictureSource }}
            />
          ) : (
            <User />
          )}
        </View>
      </View>
    </View>
  );
};
