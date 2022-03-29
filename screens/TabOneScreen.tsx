import { StyleSheet } from 'react-native';
import ChatRoom from '@/features/chat/components/ChatRoom';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/shared/Themed';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

export default function TabOneScreen() {
  const user = useAppSelector((state) => state.authReducer.user);
  return (
    <View style={styles.container}>
      {!user && <ChatRoom />}
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
