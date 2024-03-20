import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppSafeAreaView, Button, Input} from '../Common';
import CommonHeader from '../Common/CommonHeader';
import CommonScrollVIew from '../Common/CommonScrollVIew';
import {colors} from '../Theme/Colors';
import {RNText} from '../Theme/theme';
import ImagePath from '../../assets/ImagePath';
import {DATA} from '../Common/DummyData';
import NavigationService from '../Navigation/NavigationService';
import { NAVIGATION_PROVIDERPROFILE } from '../Navigation/routes';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    fullName: 'Uttam Ray',
    email: 'uttam123@uttam123.com',
    mobile: '+91 9090909090',
    address: 'bgbg',
  });
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

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
                  ? colors.blue
                  : colors.black,
            },
          ]}>
          {item.id === selectedItemId && (
            <View
              style={{
                width: 4,
                height: 4,
                borderRadius: 4,
                backgroundColor: colors.blue,
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

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  return (
    <AppSafeAreaView style={{marginBottom: 100}}>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.main}>
          <RNText style={{marginBottom:4}} variant={'callHistoryText'}>Profile Picture</RNText>
        
        
          <TouchableOpacity
          activeOpacity={0.6}
           style={{
            backgroundColor:colors.lightGray,
            height:40,
            width:40,
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
            zIndex:999,
            position:'absolute',
            top:68,
            left:55
            }}>
            <Image style={{width:18,height:18}} source={ImagePath.camera} />
          </TouchableOpacity>



          <View>
            <Image source={ImagePath.Userprofile} />
            
          </View>
          

          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'notificationText'}>
            Fullname
          </RNText>

          <TextInput
            cursorColor={colors.gray}
            style={styles.input}
            value={formData?.fullName}
            onChangeText={(text: any) => handleInputChange('fullName', text)}
          />

          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'notificationText'}>
            Email
          </RNText>

          <TextInput
            cursorColor={colors.gray}
            style={styles.input}
            value={formData?.email}
            onChangeText={(text: any) => handleInputChange('email', text)}
          />

          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'notificationText'}>
            Mobile No
          </RNText>

          <TextInput
            cursorColor={colors.gray}
            style={styles.input}
            value={formData?.mobile}
            onChangeText={(text: any) => handleInputChange('mobile', text)}
          />

          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'notificationText'}>
            Address
          </RNText>

          <TextInput
            cursorColor={colors.gray}
            style={styles.input}
            value={formData?.address}
            onChangeText={(text: any) => handleInputChange('address', text)}
          />

          <View style={styles.GendeMain}>
            <RNText variant={'Size12'}>Gender</RNText>
            <View
              style={{
                marginLeft: 20,
              }}>
              <FlatList horizontal={true} data={DATA} renderItem={renderItem} />
            </View>
          </View>
          <Button 
          onPress={()=> NavigationService.navigate(NAVIGATION_PROVIDERPROFILE)}
          children='Update Profile' useGradient={true} style={styles.button}/>
          <TouchableOpacity
            style={{
              marginTop: 20,
              alignItems: 'center',
              alignSelf:'center'
            }}>
            <RNText style={{
                textDecorationLine: 'underline',
            }} variant={'eidtProfileCancel'}>Cancel</RNText>
          </TouchableOpacity>
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 12,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingTop:15,
    paddingBottom:50,
    elevation: 2,
    marginBottom: 3,
  },
  input: {
    height: 35,
    color: colors.black,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
    marginLeft: -3,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 4,
  },
  GendeMain: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: colors.gray2,
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
  button:{
    flex:1,
    height:35,
    borderRadius:18,
    marginTop:20
  }
});
