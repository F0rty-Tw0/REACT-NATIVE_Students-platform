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
  emptyStateImage: {
    width: 80,
    height: 80,
  },
  messageImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: 'white',
  },
  messageImage: {
    width: 35,
    height: 35,
  },
});
