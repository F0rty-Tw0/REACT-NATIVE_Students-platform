import { StyleSheet } from 'react-native';

export const chatImageStyle = StyleSheet.create({
  chatRoomImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  chatImage: {
    width: 55,
    height: 55,
  },
});
