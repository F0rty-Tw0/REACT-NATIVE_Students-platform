// COMPONENTS
import { Text, View } from 'react-native';
import { Slider } from '@libs/menu/components/Slider';
// STYLES
import { textStyle } from '@libs/shared/styles/Text';
// HOOKS
import { useState } from 'react';

export const Notification = () => {
  const [isChat, setIsChat] = useState(false);
  const [isEvent, setIsEvent] = useState(false);

  const handleToggleChatNotifications = () => {
    setIsChat(!isChat);
  };

  const handleToggleEventNotifications = () => {
    setIsEvent(!isEvent);
  };
  return (
    <View style={{ marginTop: 30, marginBottom: 30 }}>
      <Text style={textStyle.title}>NOTIFICATIONS</Text>
      <Slider
        title='Chat'
        subtitle='When you receive a new message'
        isActive={isChat}
        handleToggle={handleToggleChatNotifications}
      />
      <Slider
        title='Event reminder'
        subtitle="An hour before events you are 'going to'"
        isActive={isEvent}
        handleToggle={handleToggleEventNotifications}
      />
    </View>
  );
};
