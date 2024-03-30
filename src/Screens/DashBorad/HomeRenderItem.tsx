import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RNText} from '../../Theme/theme';
import {KeyBoardAware} from '../../Common';
import {colors} from '../../Theme/Colors';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_SERVICE_LIST_SCREEN} from '../../Navigation/routes';

const HomeRenderItem = ({rowData}: any) => {
  const OnRenderClick = () => {
    NavigationService.navigate(NAVIGATION_SERVICE_LIST_SCREEN);
  };

  return (
    
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        paddingHorizontal:25,
        width: '100%',
      }}>
      {rowData?.map((item, index) => {
        return (
          <TouchableOpacity
          key={index}
            onPress={OnRenderClick}
            style={{
              alignItems: 'center',
              width: 92,
              height: 88,
              marginTop: 8,
            }}>
            <Image source={item.image} />
            <RNText
              style={{textAlign: 'center', marginTop: 12}}
              variant={'commonText'}>
              {item?.text}
            </RNText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default HomeRenderItem;

const styles = StyleSheet.create({});
