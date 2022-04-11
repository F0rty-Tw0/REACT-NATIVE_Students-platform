import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@libs/shared/components/Themed';
import { ShellStackScreenProps } from '@libs/shell/types/shellScreenTypes';

export const NotFoundScreen = ({
  navigation,
}: ShellStackScreenProps<'NotFound'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Shell')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
