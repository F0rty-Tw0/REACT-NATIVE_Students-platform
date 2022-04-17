import { StyleSheet } from 'react-native';

export const profileContainerStyle = StyleSheet.create({
  userImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'white',
    marginLeft: 30,
  },
  alignImage: {
    marginTop: 15,
  },
});
