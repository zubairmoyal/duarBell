import {useState} from 'react';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import {AppSafeAreaView, Button, KeyBoardAware} from '../../Common';
import ImagePath from '../../../assets/ImagePath';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../Theme/Colors';

const Login = () => {
  const [isLoginSelected, setIsLoginSelected] = useState(true);

  const handleTabClick = (isLoginSelected: any) => {
    setIsLoginSelected(isLoginSelected);
  };
  return (
    <>
      <AppSafeAreaView style={{flex:1}}>
        <KeyBoardAware>
          <View style={styles.topImageView}>
            <Image
              style={{
                width: 161,
                height: 45,
              }}
              source={ImagePath.DourBellLgo}
            />
          </View>
          <View style={styles.LoginButtonTopView}>
            <Button
              useGradient={isLoginSelected}
              onPress={() => handleTabClick(true)}
              style={styles.RegisterButton}
              children="Login"
            />
            <Button
            // disabled
              useGradient={!isLoginSelected}
              onPress={() => handleTabClick(false)}
              style={styles.RegisterButton}
              children="Register"
            />
          </View>
          {isLoginSelected ? <LoginScreen /> : <RegisterScreen />}
        </KeyBoardAware>
      </AppSafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  topImageView: {
    // flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  LoginButtonTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LoginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    height: 32,
    width: 165,
    borderColor: colors.dimWhite,
  },
  RegisterButton: {
    height: 32,
    width: 165,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
