// If you are not familiar with React Navigation, refer to the "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from '@/navigation/LinkingConfiguration';
import { RootNavigator } from '@/features/core/navigation/RootNavigator';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
