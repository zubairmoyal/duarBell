import {useState} from 'react';
import {
  AppSafeAreaView,
  Button,
  Input,
  InputPassword,
  KeyBoardAware,
} from '../../Common';
import {RNText} from '../../Theme/theme';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../Theme/Colors';
import {DATA} from '../../Common/DummyData';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_HONE_STACK} from '../../Navigation/routes';

const RegisterScreen = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    address: '',
    referral: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  const OnRegister = () => {
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
    <KeyBoardAware>
      <View>
        <Input
          value={formData?.fullName}
          onChangeText={(text: any) => handleInputChange('fullName', text)}
          placeholder="Full Name"
        />
        <Input
          value={formData?.email}
          onChangeText={(text: any) => handleInputChange('email', text)}
          placeholder="Email"
        />
        <Input
          value={formData?.mobile}
          onChangeText={(text: any) => handleInputChange('mobile', text)}
          placeholder="Mobile No"
        />
        <InputPassword
          value={formData?.password}
          onChangeText={(text: any) => handleInputChange('password', text)}
          placeholder="Password"
        />
        <Input
          value={formData?.address}
          onChangeText={(text: any) => handleInputChange('address', text)}
          placeholder="Address"
        />
        <Input
          value={formData?.referral}
          onChangeText={(text: any) => handleInputChange('referral', text)}
          placeholder="Referral"
        />
      </View>

      <View style={styles.GendeMain}>
        <View
          style={{
            marginHorizontal: 5,
          }}>
          <RNText variant={'inputText2'}>Gender</RNText>
        </View>
        <View
          style={{
            marginLeft: 20,
          }}>
          <FlatList horizontal={true} data={DATA} renderItem={renderItem} />
        </View>
      </View>

      <View style={styles.TandC}>
        <TouchableOpacity
          onPress={onCheck}
          style={[
            styles.checkBox,
            {borderColor: isChecked ? colors.orange : colors.black},
          ]}
        />
        <RNText textAlign="center" variant={'inputText'}>
          {'  '}Accept
        </RNText>
        <TouchableOpacity>
          <RNText
            style={{
              marginLeft: 5,
              textDecorationLine: 'underline',
            }}
            variant={'tandc'}>
            Terms & Condition
          </RNText>
        </TouchableOpacity>
      </View>
      <Button
        onPress={OnRegister}
        useGradient={true}
        style={{
          flex: 1,
          height: 35,
          borderRadius: 6,
          marginTop: 30,
        }}
        children="Register"
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 32,
        }}>
        <RNText variant={'commonText'}>Already have an account? </RNText>
        <TouchableOpacity>
          <RNText variant={'loginHere'}>Login Here</RNText>
        </TouchableOpacity>
      </View>
    </KeyBoardAware>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  GendeMain: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 44,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
    paddingBottom: 8,
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
  TandC: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 10,
    height: 10,
    borderWidth: 1,
  },
});
