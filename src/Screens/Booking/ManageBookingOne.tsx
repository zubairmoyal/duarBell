import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {colors} from '../../Theme/Colors';
import ImagePath from '../../../assets/ImagePath';
import {RNText} from '../../Theme/theme';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_MANAGE_BOOKING_ONE} from '../../Navigation/routes';
import OptionItem from './OptionItem';

const ManageBookingOne = (route:any) => {
const Id = route?.route?.params?.id

  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={[styles.main, colors.shadow]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <Image source={ImagePath.Userprofile} />
              </View>
              <View
                style={{
                  marginLeft: 12,
                }}>
                <RNText variant={'myBookingDate'}>
                  On: 30-11--0001, 12:00 AM
                </RNText>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RNText variant={'categoryText2'}>Pinkz Balmazuum</RNText>
                  <Image style={{marginLeft: 5}} source={ImagePath.verified} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RNText variant={'sortByText'}>Plumber</RNText>
                  <View style={styles.redDot} />
                  <RNText variant={'managerBookingtextpending'}>Pending</RNText>
                </View>
                <TouchableOpacity style={styles.messageButton}>
                    <RNText variant={'myBookingButtonText'}>Message</RNText>
                  </TouchableOpacity>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 18,
                    height: 18,
                  }}
                  source={ImagePath.callIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

         <OptionItem id={Id} />
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ManageBookingOne;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    marginHorizontal: 12,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 20,
    elevation: 6,
    marginBottom: 10,
    height:570,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: colors.fireEngineRed,
    marginHorizontal: 5,
  },
  messageButton:{
    height: 16,
    width: 71,
    borderRadius: 11,
    backgroundColor: colors.limeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  }
});
