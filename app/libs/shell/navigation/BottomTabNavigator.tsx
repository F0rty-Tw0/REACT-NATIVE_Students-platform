import { HomeScreen } from '@libs/shell/screens/HomeScreen';
import ProfileScreen from '@libs/profile/screens/ProfileScreen';
import Colors from '@libs/shared/styles/Colors';
import useColorScheme from '@/hooks/useColorScheme';
import { ShellTabParamList } from '@/app/types/appTypes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthMenu } from '@libs/auth/components/AuthMenu';
import { TabBarIcon } from '@libs/shared/components/TabBarIcon';

// A bottom tab navigator displays tab buttons on the bottom of the display to switch screens. https://reactnavigation.org/docs/bottom-tab-navigator
const BottomTab = createBottomTabNavigator<ShellTabParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight: () => <AuthMenu />,
        })}
      />

      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
