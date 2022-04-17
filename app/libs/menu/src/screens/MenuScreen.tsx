// COMPONENTS
import { View } from 'react-native';
import { LogoutButton } from '@libs/auth/components/LogoutButton';
import { Notification } from '@libs/menu/components/Notification';
import { Profile } from '@libs/menu/components/Profile';
// STYLES
import { containerStyles } from '@libs/shared/styles/Containers';

export const MenuScreen = () => {
  return (
    <View style={containerStyles.mainContainer}>
      <View style={containerStyles.itemsContainer}>
        <Profile />
        <Notification />
        <View style={containerStyles.logoutContainer}>
          <LogoutButton />
        </View>
      </View>
    </View>
  );
};
