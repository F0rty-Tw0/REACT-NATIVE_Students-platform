// COMPONENTS
import { Text, View, Image } from 'react-native';
import { ActionButton } from '@libs/shared/components/ActionButton';
import User from '@images/user.svg';
// HOOKS
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
// STYLES
import { profileImageStyle } from '@libs/shared/lib/profile-form/styles/profileImageStyles';
import { containerStyles } from '@libs/shared/styles/Containers';
import { textStyle } from '@libs/shared/styles/Text';
// TYPES
import { ShellScreenProp } from '@libs/shell/types/shellScreenTypes';

export const Profile = () => {
  const { pictureUrl, profile } = useAppSelector(
    (state: any) => state.profileFormReducer
  );
  const {
    user: { email },
  } = useAppSelector((state: any) => state.authReducer);
  const navigation = useNavigation<ShellScreenProp>();

  const handleEditPress = () => {
    navigation.navigate('EditProfile');
  };
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
      <View style={containerStyles.twoColumnsContainer}>
        <View style={containerStyles.profileMenuImageContainer}>
          {pictureUrl ? (
            <Image
              style={profileImageStyle.profileMenuImage}
              source={{ uri: pictureUrl }}
            />
          ) : (
            <User />
          )}
        </View>
        <View style={{ width: '100%' }}>
          <Text style={textStyle.title}>{profile.name}</Text>
          <Text>{email}</Text>
          <Text>{profile.studyProgramme}</Text>
        </View>
      </View>
      <ActionButton buttonText='Edit Profile' onPress={handleEditPress} />
    </View>
  );
};
