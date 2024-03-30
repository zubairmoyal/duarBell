import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImagePath from '../../../assets/ImagePath';
import {RNText} from '../../Theme/theme';
import {colors} from '../../Theme/Colors';

const GranterList = ({selectedIndex}:any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View style={styles.container}>
        <Image
          style={{
            width: 39,
            height: 39,
          }}
          source={ImagePath.Userprofile}
        />
        <View style={styles.userTxt}>
          <RNText variant={'profileGranterText'}>Mintu Ray</RNText>
          <RNText variant={'provideDetailsProfil3'}>Bridal Makeup</RNText>
        </View>
        <View style={styles.addView}>
          <RNText variant={'profileGranterText'}>{selectedIndex ?'Available':'Outgoing'}</RNText>
          <RNText variant={'profileGranterText'}>{selectedIndex ?'0':'Hide'}</RNText>
          <TouchableOpacity style={styles.hideView}>
            <RNText variant={'profileGranterHide'}>{selectedIndex ?'Active':'Hide'}</RNText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GranterList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userTxt: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addView: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hideView: {
    width: 42,
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
