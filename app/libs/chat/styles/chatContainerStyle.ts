import { StyleSheet } from 'react-native';
import { actionBlueDisabled, actionBlue } from '@libs/shared/styles/Colors';
export const chatContainerStyle = StyleSheet.create({
  twoColumnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 5,
    paddingTop: 0,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    height: '75',
    width: '100%',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
  },
  messageSendContainer: {
    marginLeft: 10,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    width: 45,
    height: 45,
    borderRadius: 5,
  },
  messageSendContainerDisabled: {
    backgroundColor: actionBlueDisabled,
  },
  messageSendContainerActive: {
    backgroundColor: actionBlue,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'center',
    borderRadius: 12,
  },
  sentMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: actionBlue,
    borderBottomRightRadius: 4,
  },
  incomingMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEEEEE',
    borderBottomLeftRadius: 4,
  },
});
