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
import {colors} from '../../Theme/Colors';
import {RNText} from '../../Theme/theme';
import ImagePath from '../../../assets/ImagePath';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_MANAGE_BOOKING_ONE} from '../../Navigation/routes';

const AddStaff = () => {
  const onAddStaff = () => {
    NavigationService.navigate(NAVIGATION_MANAGE_BOOKING_ONE, {id: '1'});
  };

  const renderItem = () => {
    return (
      <View style={styles.contentView}>
        <Image source={ImagePath.Userprofile} />
        <View
          style={{
            marginLeft: 16,
          }}>
          <RNText variant="categoryText2">XamakAMlam</RNText>
          <RNText variant="sortByText">Plumber</RNText>
        </View>
      </View>
    );
  };

  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={[styles.main, colors.shadow]}>
          <RNText variant="callHistoryText">Add Booking Staff</RNText>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={new Array(3)?.fill(',')}
              renderItem={renderItem}
            />
            <TouchableOpacity
              onPress={onAddStaff}
              activeOpacity={0.5}
              style={styles.button}>
              <RNText variant={'buttonTextSemi2'}>Add Staff</RNText>
            </TouchableOpacity>
          </View>
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default AddStaff;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: colors.white,
    height: 570,
    marginBottom: 10,
    elevation: 7,
    marginHorizontal: 12,
    borderRadius: 8,
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    height: 37,
    borderRadius: 19,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
