import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppSafeAreaView} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import ImagePath from '../../../assets/ImagePath';
import {colors} from '../../Theme/Colors';
import {RNText} from '../../Theme/theme';

const NotificationsScreen = () => {
  const renderItem = () => {
    return (
      <TouchableOpacity 
      activeOpacity={0.7}
       style={styles.renderMain}>
        <View style={styles.renderOne}>
          <Image source={ImagePath.bell} />
          <View style={{marginLeft: 12}}>
            <RNText variant={'notificationText'}>Booking Completed!</RNText>
            <RNText variant={'notificationText'}>
              04:57 - 20th December 2023
            </RNText>
          </View>
        </View>
        <Image style={{marginBottom:12}} source={ImagePath.dotVertical} />
      </TouchableOpacity>
    );
  };
  return (
    <AppSafeAreaView style={{marginBottom: 80}}>
      <CommonHeader />
      <CommonScrollVIew>
        <View>
          <FlatList
            data={new Array(10)?.fill('')}
            renderItem={renderItem}
            keyExtractor={(item, index) => item?.toString}
          />
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  renderMain: {
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:15,
    marginHorizontal:12,
    elevation:2
  },
  renderOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
