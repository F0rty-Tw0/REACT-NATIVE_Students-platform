// COMPONENTS
import { View } from 'react-native';
import LoadingSpinner from '@images/loader.svg';
//  STYLES
import { containerStyles } from '@libs/shared/styles/Containers';
import { useAppSelector } from '@libs/shared/hooks/redux-hooks/useAppSelector';

export const Loading = () => {
  const authIsLoading = useAppSelector((state) => state.authReducer.isLoading);

  return (
    (authIsLoading && (
      <View style={containerStyles.loadingContainer}>
        <LoadingSpinner />
      </View>
    )) ||
    null
  );
};
