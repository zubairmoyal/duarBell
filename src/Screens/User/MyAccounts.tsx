import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {RNText} from '../../Theme/theme';
import {colors} from '../../Theme/Colors';
import ImagePath from '../../../assets/ImagePath';
import NavigationService from '../../Navigation/NavigationService';
import { NAVIGATION_EDITPROFILE } from '../../Navigation/routes';
import { NAVIGATION_NOTIFICATION_SCREEN } from '../../Navigation/routes';



const data = [
  {id: '1', image: ImagePath.notificationalarm, title: 'Notification Management', arrow: ImagePath.arrow},
  {id: '2', image: ImagePath.useraccount, title: 'Create Business Account', arrow: ImagePath.arrow},
  {id: '3', image: ImagePath.solarpassword, title: 'Change password', arrow: ImagePath.arrow},
  {id: '4', image: ImagePath.transaction, title: 'Transactions', arrow:  ImagePath.arrow},
];
const MyAccounts = () => {

  const handleItemClick = (id:any) => {
    switch (id) {
      case '1':
        NavigationService.navigate(NAVIGATION_NOTIFICATION_SCREEN);
        break;
      default:
        break;
    }
  };

  const RenderItem = () => {
    return data?.map((item, index) => (
      <TouchableOpacity 
      activeOpacity={0.5}
      style={{
        flexDirection:'row',
        padding:10,
        borderRadius: 8,
        marginBottom:4,
        marginTop:15,
        marginHorizontal:12,
        backgroundColor:colors.white,
        justifyContent:'space-between'
        
      }} key={item.id} onPress={() => handleItemClick(item.id)}>
        <View style={{
          flexDirection:'row'
        }}>
        <Image source={item.image}/>
        <RNText style={{marginLeft:8}} variant={'commonText'}>{item.title}</RNText>
        </View>
        <Image source={item.arrow} />
      </TouchableOpacity>
    ));
  };

  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.main}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 0.6,
                alignItems: 'center',
              }}>
              <Image source={ImagePath.Userprofile} />
              <RNText variant={'myAccount'}>Uttam Ray</RNText>
            </View>
            <TouchableOpacity  onPress={() => NavigationService.navigate(NAVIGATION_EDITPROFILE)}>


              <Image source={ImagePath.edit} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 15,
            }}>
            <RNText variant={'notificationText'}>Fullname</RNText>
            <RNText variant={'eidtProfileInputText'}>Uttam Ray</RNText>
          </View>
          <View
            style={{
              marginTop: 15,
            }}>
            <RNText variant={'notificationText'}>Email</RNText>
            <RNText variant={'eidtProfileInputText'}>
              uttam123@uttam123.com
            </RNText>
          </View>
          <View
            style={{
              marginTop: 15,
            }}>
            <RNText variant={'notificationText'}>Mobile No</RNText>
            <RNText variant={'eidtProfileInputText'}>+91 9090909090</RNText>
          </View>
          <View
            style={{
              marginTop: 15,
            }}>
            <RNText variant={'notificationText'}>Address</RNText>
            <RNText variant={'eidtProfileInputText'}>bgng</RNText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 12,
            }}>
            <RNText variant={'notificationText'}>Gender</RNText>
            <RNText variant={'eidtProfileInputText'}> Male</RNText>
          </View>
        </View>
          <View
            style={{  
              flex:1,
            }}>
            {RenderItem()}
          </View>
          <View style={{marginVertical:22}}>
          <Button
              style={{
                width: 334,
                height: 35,
                borderRadius: 18,
              }}
              children="Logout"
              useGradient={true}
            />
            </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default MyAccounts;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 12,
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    marginBottom: 3,
  },
});
