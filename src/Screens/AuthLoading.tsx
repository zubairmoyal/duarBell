import {Image} from 'react-native';
import ImagePath from '../../assets/ImagePath';
import {AppSafeAreaView} from '../Common';
import {useEffect} from 'react';
import NavigationService from '../Navigation/NavigationService';
import {NAVIGATION_AUTH_FLOW} from '../Navigation/routes';

const AuthLoading = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      NavigationService.navigate(NAVIGATION_AUTH_FLOW);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppSafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Image source={ImagePath.DourBellLgo} />
    </AppSafeAreaView>
  );
};
export default AuthLoading;
