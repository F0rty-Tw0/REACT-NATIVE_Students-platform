import { StyleSheet } from 'react-native';
import ChatRoom from '@libs/chat/components/ChatRoom';

import EditScreenInfo from '@libs/shared/components/EditScreenInfo';
import { View, Text } from '@libs/shared/components/Themed';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';

export const HomeScreen = () => {
  const user = useAppSelector((state) => state.authReducer.user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      {!user && <ChatRoom />}
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/HomeScreen.tsx' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
