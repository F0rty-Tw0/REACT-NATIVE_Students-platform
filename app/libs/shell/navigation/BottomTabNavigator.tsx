// COMPONENTS
import { ShellScreensNavigator } from '@libs/shell/navigation/ShellScreensNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@libs/shared/components/TabBarIcon';
import { EditProfileScreen } from '@libs/menu/profile/screens/EditProfileScreen';

// TYPES
import { ShellTabParamList } from '@libs/shell/types/shellScreenTypes';
// STYLES
import { actionBlue } from '@libs/shared/styles/Colors';
import { MenuScreen } from '@libs/menu/src/screens/MenuScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BottomTab = createBottomTabNavigator<ShellTabParamList>();
const Stack = createNativeStackNavigator<ShellTabParamList>();
export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: {
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: 'uppercase',
          fontFamily: 'Teko',
        },
        tabBarActiveTintColor: actionBlue,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Teko',
          fontSize: 24,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: actionBlue,
        },
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
        name='Discover'
        component={MenuScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Chat'
        component={MenuScreen}
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='comments' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <TabBarIcon name='bars' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
