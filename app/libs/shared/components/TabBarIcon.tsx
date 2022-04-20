import { FontAwesome } from '@expo/vector-icons';

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  style?: React.ComponentProps<typeof FontAwesome>['style'];
  size?: React.ComponentProps<typeof FontAwesome>['size'];
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
