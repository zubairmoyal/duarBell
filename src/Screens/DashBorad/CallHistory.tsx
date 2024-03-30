import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppSafeAreaView} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {colors} from '../../Theme/Colors';
import ImagePath from '../../../assets/ImagePath';
import {RNText} from '../../Theme/theme';
import CommonButton from '../../Common/CommonButton';

const CallHistory = () => {
  const renderItem = ({item, index}: any) => {
    return (
      <View
        style={{
          marginHorizontal: 12,
          marginVertical: 10,
          paddingBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: index !== item.length - 1 && 1,
          borderBlockColor: index !== item.length - 1 && colors.lightGray,
        }}>
        <View style={{marginRight: 10}}>
          <Image source={ImagePath.Userprofile} />
        </View>
        
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
                
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <RNText variant={'categoryText2'}>XamakAMlam</RNText>
              <RNText variant={'searchInputText'}>  27 December 06:03 AM</RNText>

            </View>
          </View>
          <View
            style={{
              width: '52%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <RNText variant={'sortByText'}>Plumber</RNText>
          </View>
          
          <CommonButton Calltext ={'Call Again'} />
        </View>
      </View>
    );
  };

  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        {/* <SortBy /> */}
        <View
          style={{
            marginHorizontal: 12,
            borderRadius: 9,
            backgroundColor: colors.white,
            elevation: 2,
            flex:1,
            paddingBottom:15,
            marginBottom:15
          }}>
            <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                marginHorizontal:14,
                marginTop:12}}>
                <RNText variant={'commonText'}>SortBy:</RNText>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RNText variant={'commonText'}>All</RNText>
              <TouchableOpacity>
              <Image
                style={{height: 17, width: 17}}
                source={ImagePath.dropdown}
              />  
              </TouchableOpacity>
            </View>
            </View>
          <FlatList
            data={new Array(5)?.fill('',)}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default CallHistory;

const styles = StyleSheet.create({});
