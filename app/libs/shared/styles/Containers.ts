import { StyleSheet } from 'react-native';
import { actionBlueDisabled } from '@libs/shared/styles/Colors';

export const containerStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsContainer: {
    maxWidth: 400,
    width: '100%',
  },
  inputContainer: {
    border: '1px solid #EEEEEE',
    marginBottom: 15,
    borderRadius: 5,
  },
  imageContainer: {
    marginBottom: 20,
  },
  checkBoxContainer: {
    height: 20,
  },
  loadingContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: actionBlueDisabled + 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
