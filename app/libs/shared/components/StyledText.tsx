import { Text, TextProps } from '@libs/shared/components/Themed';

export const MonoText = (props: TextProps) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
};
