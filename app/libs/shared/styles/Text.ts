import { StyleSheet } from 'react-native';
import {
  actionBlue,
  actionBlueDark,
  errorRed,
} from '@libs/shared/styles/Colors';

export const textStyle = StyleSheet.create({
  title: {
    color: actionBlueDark,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtext: {
    color: actionBlue,
    fontSize: 13,
    textAlign: 'center',
  },
  errorText: {
    color: errorRed,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    padding: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  linkText: {
    color: actionBlue,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textAlignedTop: {
    textAlignVertical: 'top',
  },
});
