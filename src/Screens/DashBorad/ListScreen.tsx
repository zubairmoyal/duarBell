import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import ImagePath from '../../../assets/ImagePath';
import {colors} from '../../Theme/Colors';
import {LIST_DATA} from '../../Common/DummyData';
import {RNText} from '../../Theme/theme';
import CommonButton from '../../Common/CommonButton';
import SortBy from './SortBy';


const ListScreen = () => {
  const [likedItems, setLikedItems] = useState([]);

  const renderItem = ({item,index}: any) => { 
    const toggleLike = (index) => {
      if (likedItems.includes(index)) {
          setLikedItems(likedItems.filter(itemIndex => itemIndex !== index));
        } else {
          setLikedItems([...likedItems, index]);
        }
    };
  
    return (
      <View
        style={{
          marginHorizontal: 12,
          marginVertical: 10,
          paddingBottom:15,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth:index !== item.length -1 && 1,
          borderBlockColor: index !== item.length -1 &&  colors.lightGray,
        }}>
        <View style={{marginRight: 10,}}>
          <Image source={ImagePath.Userprofile} />
        </View>
        <View style={{flex: 1,}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // flex: 1,
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <RNText variant={'categoryText2'}>XamakAMlam</RNText>
              <Image style={{marginLeft: 5}} source={ImagePath.verified} />
            </View>
            <TouchableOpacity onPress={() => toggleLike(index)}>
                <Image tintColor={likedItems?.includes(index) ? colors.fireEngineRed : null} source={ImagePath.fav} />
                </TouchableOpacity>
          </View>
          <View
            style={{
              // flex: 1,
              width: '52%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <RNText variant={'sortByText'}>Plumber</RNText>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RNText variant={'sortByText2'}>4.0</RNText>
              <Image
                style={{marginLeft: 5, height: 6.33, width: 6.67}}
                source={ImagePath.star}
              />
            </View>
            <RNText variant={'sortByText2'}>2.3 Km</RNText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={ImagePath.Location} />
            <RNText variant={'sortByText2'}>
              {' '}
              bakharapara,Bongaigaon,Assam,783380
            </RNText>
          </View>
          <CommonButton Calltext ={'Call Now'}  isShow={true} />
         
        </View>
      </View>
    );
  };
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <SortBy />
        <View
          style={{
            marginHorizontal: 12,
            borderRadius: 9,
            backgroundColor: colors.white,
            elevation: 6
          }}>
          <FlatList data={new Array(5)?.fill('',)} renderItem={renderItem} />
        </View>
        <Image style={{width:"100%",marginTop:12}} source={ImagePath.adds} />
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
