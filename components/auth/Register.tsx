import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { AuthForm } from '@/components/auth/AuthForm';
import { setUser } from '@/redux/actions/authActions';

export const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <AuthForm title='Register' handlePress={handleRegister} />
    </View>
  );
};
