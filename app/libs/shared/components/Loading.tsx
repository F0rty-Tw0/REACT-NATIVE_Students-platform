// COMPONENTS
import { View } from 'react-native';
import LoadingSpinner from '@images/loader.svg';
//  STYLES
import { containerStyles } from '@libs/shared/styles/Containers';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';

export const Loading = () => {
  const { loading } = useAppSelector((state) => state.authReducer);
  return (
    (loading && (
      <View style={containerStyles.loadingContainer}>
        <LoadingSpinner />
      </View>
    )) ||
    null
  );
};
