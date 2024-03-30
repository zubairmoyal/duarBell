import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../Theme/Colors';
import ImagePath from '../../../assets/ImagePath';
import {RNText} from '../../Theme/theme';
import CommonButton from '../../Common/CommonButton';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_MANAGE_SERVICE} from '../../Navigation/routes';

const SortBy = () => {
  const [likedItems, setLikedItems] = useState([]);

  const renderItem = ({item, index}: any) => {
    const toggleLike = index => {
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
              <Image
                tintColor={
                  likedItems?.includes(index) ? colors.fireEngineRed : null
                }
                source={ImagePath.fav}
              />
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
          <CommonButton
            onpress={() => NavigationService.navigate(NAVIGATION_MANAGE_SERVICE)}
            Calltext={'Call Now'}
            isShow={true} style={undefined} nonStyle={undefined}          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <View
        style={{
          marginHorizontal: 12,
          borderRadius: 9,
          backgroundColor: colors.white,
          elevation: 6,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 14,
            marginTop: 12,
          }}>
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
          data={new Array(2)?.fill('')}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Image style={{width: '100%', marginTop: 12}} source={ImagePath.adds} />
    </View>
  );
};

export default SortBy;

const styles = StyleSheet.create({});
