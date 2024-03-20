import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  AppSafeAreaView,
  Button,
  Input,
  InputPassword,
  KeyBoardAware,
} from '../../Common';
import {colors} from '../../Theme/Colors';
import {LOGINDATA} from '../../Common/DummyData';
import React, {useState} from 'react';
import {RNText} from '../../Theme/theme';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_HONE_STACK} from '../../Navigation/routes';

const LoginScreen = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const onLogin = () => {
    NavigationService.navigate(NAVIGATION_HONE_STACK);
  };
  const renderItem = ({item}: any) => {
    const onGenderFunction = (id: any) => {
      setSelectedItemId(id === selectedItemId ? null : id);
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => onGenderFunction(item.id)}
          style={[
            styles.ItemView,
            {
              borderColor:
                item.id === selectedItemId
                  ? colors.reddishOrange
                  : colors.black,
            },
          ]}>
          {item.id === selectedItemId && (
            <View
              style={{
                width: 4,
                height: 4,
                borderRadius: 4,
                backgroundColor: colors.reddishOrange,
              }}
            />
          )}
        </TouchableOpacity>
        <RNText
          style={{
            marginRight: 7,
          }}
          variant={'inputText2'}>
          {item.name}
        </RNText>
      </View>
    );
  };
  return (
    <AppSafeAreaView>
      <View style={styles.main}>
        <FlatList horizontal data={LOGINDATA} renderItem={renderItem} />
      </View>
      <View>
        <Input
          value={formData?.email}
          onChangeText={(text: any) => handleInputChange('email', text)}
          placeholder="Mobile No / Email"
        />
        <InputPassword
          value={formData?.password}
          onChangeText={(text: any) => handleInputChange('password', text)}
          placeholder="Password"
        />
      </View>

      <Button
        onPress={onLogin}
        useGradient={true}
        children="Login"
        style={styles.ButtonView}
      />

      <View style={styles.forgatView}>
        <RNText variant={'commonText'}>Forgot Password</RNText>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RNText variant={'commonText'}>Don't have an account?</RNText>
          <TouchableOpacity>
            <RNText variant={'loginHere'}> Register Now!</RNText>
          </TouchableOpacity>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

export default React.memo(LoginScreen);

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  ItemView: {
    width: 12,
    height: 12,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonView: {
    flex: 1,
    height: 35,
    borderRadius: 5,
    marginTop: 45,
  },
  forgatView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
