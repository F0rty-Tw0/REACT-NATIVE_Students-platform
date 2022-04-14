import { ShellScreensNavigator } from '@libs/shell/navigation/ShellScreensNavigator';
import ProfileScreen from '@libs/profile/screens/ProfileScreen';
import Colors from '@libs/shared/styles/Colors';
import useColorScheme from '@libs/shared/hooks/useColorScheme';
import { ShellTabParamList } from '@libs/shell/types/shellScreenTypes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        component={ShellScreensNavigator}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
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
