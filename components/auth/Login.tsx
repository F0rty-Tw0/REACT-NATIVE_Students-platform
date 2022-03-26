import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AuthForm } from '@/components/auth/AuthForm';
import { setUser } from '@/redux/actions/authActions';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        })
      );
      navigation.navigate('Root');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <AuthForm title='Login' handlePress={handleLogin} />
    </View>
  );
};
