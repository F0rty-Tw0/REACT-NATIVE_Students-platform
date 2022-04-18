// COMPONENTS
import { Text, View, Image, Pressable } from 'react-native';
import { containerStyles } from '@libs/shared/styles/Containers';
// HOOKS
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
// STYLES
import { profileImageStyle } from '@libs/shared/lib/profile-form/styles/profileImageStyles';
import { textStyle } from '@libs/shared/styles/Text';
import { buttonStyle } from '@libs/shared/styles/Buttons';
import { shadowStyles } from '@libs/shared/styles/Shadows';
import { useNavigation } from '@react-navigation/native';
import { ShellScreenProp } from '@libs/shell/types/shellScreenTypes';
import { Shell } from '@libs/shell/navigation/ShellLinkingOptions';

export const Profile = () => {
  const { pictureUrl, profile } = useAppSelector(
    (state: any) => state.profileFormReducer
  );
  const {
    user: { email },
  } = useAppSelector((state: any) => state.authReducer);
  const navigation = useNavigation<ShellScreenProp>();

  const handleEditPress = () => {
    navigation.navigate('EditProfile' );
  };
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
      <View style={containerStyles.twoColumnsContainer}>
        <View style={containerStyles.profileMenuImageContainer}>
          <Image
            style={profileImageStyle.profileMenuImage}
            source={{ uri: pictureUrl }}
          />
        </View>
        <View style={{ width: '100%' }}>
          <Text style={textStyle.title}>{profile.name}</Text>
          <Text>{email}</Text>
          <Text>{profile.studyProgramme}</Text>
        </View>
      </View>
      <Pressable
        style={[
          buttonStyle.actionButton,
          buttonStyle.actionBlueEnabled,
          shadowStyles.containerShadow,
          {
            padding: 10,
            marginTop: 20,
            marginBottom: 30,
          },
        ]}
        onPress={handleEditPress}
      >
        <Text style={[textStyle.buttonText, textStyle.centerText]}>
          Edit profile
        </Text>
      </Pressable>
    </View>
  );
};
