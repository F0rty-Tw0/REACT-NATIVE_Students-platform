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
    backgroundColor: '#FFFFFF',
    border: '1px solid #EEEEEE',
    width: '100%',
    padding: 8,
    paddingBottom: 0,
    marginBottom: 15,
    marginTop: 20,
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
  splashContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoutContainer: {
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 30,
    marginBottom: 10,
  },
  twoColumnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileMenuImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  sliderContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 20,
    padding: 15
  },
});
