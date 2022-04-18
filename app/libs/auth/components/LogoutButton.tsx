// COMPONENTS
import { Text, Pressable } from 'react-native';
// REDUX
import { logoutAndCleanUser } from '@libs/auth/redux/actions/authActions';
import { cleanProfileForm } from '@libs/shared/lib/profile-form/redux/actions/profileFormActions';
// HOOKS
import { useDispatch } from 'react-redux';
// STYLES
import { textStyle } from '@libs/shared/styles/Text';
import { buttonStyle } from '@libs/shared/styles/Buttons';
import { shadowStyles } from '@libs/shared/styles/Shadows';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(logoutAndCleanUser());
        dispatch(cleanProfileForm());
      }}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        [
          buttonStyle.actionButton,
          buttonStyle.logoutButton,
          shadowStyles.containerShadow,
        ],
      ]}
    >
      <Text style={textStyle.logoutText}>Log out</Text>
    </Pressable>
  );
};
