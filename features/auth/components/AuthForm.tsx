//COMPONENTS
import { StyleSheet, Button, TextInput } from 'react-native';
import { View } from '@/components/shared/Themed';
//MODELS
import { AuthCredentialsInterface } from '@/features/auth/models/interfaces/authInterface';
//HOOKS
import { useState } from 'react';

interface FormProps {
  title: string;
  handlePress: ({ email, password }: AuthCredentialsInterface) => void;
}

export const AuthForm = ({ title, handlePress }: FormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        textContentType='emailAddress'
        value={email}
        placeholder='Email'
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder='Password'
      />
      <Button
        disabled={password.length < 3}
        title={title}
        onPress={() => handlePress({ email, password })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
