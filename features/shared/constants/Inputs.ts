import { StyleSheet } from 'react-native';
import { actionBlueDark } from '@/features/shared/constants/Colors';

export const inputStyles = StyleSheet.create({
  formInput: {
    height: 70,
    paddingLeft: 10,
    color: actionBlueDark,
    fontSize: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  formInputLastChild: {
    borderBottomWidth: 0,
  },
});
