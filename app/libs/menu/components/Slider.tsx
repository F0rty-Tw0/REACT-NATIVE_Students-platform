// COMPONENTS
import { Text, View, Switch } from 'react-native';
import { containerStyles } from '@libs/shared/styles/Containers';
// STYLES
import { textStyle } from '@libs/shared/styles/Text';
import { shadowStyles } from '@libs/shared/styles/Shadows';
import { actionBlueDisabled, actionBlue } from '@libs/shared/styles/Colors';
interface SliderProps {
  title: string;
  subtitle: string;
  isActive: boolean;
  handleToggle: () => void;
}
export const Slider = ({
  title,
  subtitle,
  isActive,
  handleToggle,
}: SliderProps) => {
  return (
    <View
      style={[
        containerStyles.twoColumnsContainer,
        containerStyles.sliderContainer,
        shadowStyles.containerShadow,
      ]}
    >
      <View>
        <Text style={textStyle.sliderLabelText}>{title}</Text>
        <Text style={[textStyle.subtext, { color: '#707070' }]}>
          {subtitle}
        </Text>
      </View>
      <Switch
        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]}}
        trackColor={{ false: '#AAAAAA80', true: actionBlueDisabled + 80 }}
        thumbColor={isActive ? actionBlue : '#F5F5F5'}
        onValueChange={handleToggle}
        activeThumbColor={actionBlue} // This one is only for the web to override the thumbColor
        value={isActive}
      ></Switch>
    </View>
  );
};
