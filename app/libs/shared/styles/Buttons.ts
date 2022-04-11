import {
  actionBlue,
  actionBlueDisabled,
} from '@libs/shared/styles/Colors';
import { StyleSheet } from 'react-native';

export const buttonsStyle = StyleSheet.create({
  actionButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
  },
  actionBlueEnabled: {
    backgroundColor: actionBlue,
  },
  actionButtonDisabled: {
    backgroundColor: actionBlueDisabled,
  },
});
