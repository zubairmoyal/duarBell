import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {RNText} from '../../Theme/theme';
import {colors} from '../../Theme/Colors';
import ImagePath from '../../../assets/ImagePath';
import NavigationService from '../../Navigation/NavigationService';
import { NAVIGATION_MANAGE_REVIEWS, NAVIGATION_MYACCOUNTS } from '../../Navigation/routes';

const ManageBookThree = () => {
  const renderItem = () => {
    return (
      <TouchableOpacity onPress={() => NavigationService.navigate(NAVIGATION_MYACCOUNTS)}
        style={{
          flexDirection: 'row',
          paddingVertical: 12,
          alignItems: 'center',
        }}>
        <Image
          style={{
            marginRight: 15,
          }}
          source={ImagePath.Userprofile}
        />
        <View>
          <RNText variant={'categoryText2'}>XamakAMlam</RNText>
          <RNText variant={'sortByText'}>Plumber</RNText>
        </View>
        </TouchableOpacity>
    );
  };
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.main}>
          <RNText variant={'callHistoryText'}>Add Booking Staff</RNText>
          <View>
            <FlatList data={new Array(2)?.fill('')} renderItem={renderItem} />

            <TouchableOpacity onPress={()=>NavigationService.navigate(NAVIGATION_MANAGE_REVIEWS)}
              activeOpacity={0.7}
              style={styles.button}>
              <RNText variant={'buttonText'}>Add Staff</RNText>
            </TouchableOpacity>
          </View>
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ManageBookThree;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: 560,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 1,
    marginHorizontal: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom:4
  },
  button:{
    height: 35,
    borderRadius: 18,
    backgroundColor: colors.limeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  }
});
