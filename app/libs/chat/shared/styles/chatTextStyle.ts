import { StyleSheet } from 'react-native';

export const chatTextStyle = StyleSheet.create({
  emptyState: {
    width: '80%',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#AAAAAA',
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  chatSubtitle: {
    fontSize: 16,
    color: '#707070',
  },
  sentMessageText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  incomingMessageText: {
    fontSize: 14,
    color: '#333333',
  },
  messageSubtext: {
    fontSize: 12,
    color: '#707070',
    marginBottom: 15,
  },
  sentMessageSubtext: {
    marginRight: 10,
    textAlign: 'right',
  },
  incomingMessageSubtext: {
    marginLeft: 70,
    textAlign: 'left',
  },
});
