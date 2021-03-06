// If you are not familiar with React Navigation, refer to the "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from '@app/navigation/LinkingConfiguration';
import { ShellNavigator } from '@libs/shell/navigation/ShellNavigator';

interface NavigationProp {
  colorScheme: ColorSchemeName;
}

export default function Navigation({ colorScheme }: NavigationProp) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <ShellNavigator />
    </NavigationContainer>
  );
}
