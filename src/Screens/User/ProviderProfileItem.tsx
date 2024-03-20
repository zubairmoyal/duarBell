import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImagePath from '../../../assets/ImagePath';
import {colors} from '../../Theme/Colors';
import NavigationService from '../../Navigation/NavigationService';
import {RNText} from '../../Theme/theme';

const data = [
  {
    id: '1',
    image: ImagePath.portfolio,
    title: 'My Portfolio',
    arrow: ImagePath.arrow,
  },
  {
    id: '2',
    image: ImagePath.service2,
    title: 'Manage Service',
    arrow: ImagePath.arrow,
  },
  {id: '3', image: ImagePath.wallet2, title: 'Wallet', arrow: ImagePath.arrow},
  {
    id: '4',
    image: ImagePath.plans,
    title: 'Subscription Plans',
    arrow: ImagePath.arrow,
  },
  {
    id: '5',
    image: ImagePath.manageBook,
    title: 'Mange Booking',
    arrow: ImagePath.arrow,
  },
  {
    id: '6',
    image: ImagePath.review,
    title: 'Mange Review Rating',
    arrow: ImagePath.arrow,
  },
  {
    id: '7',
    image: ImagePath.managestuff,
    title: 'Manage Stuff',
    arrow: ImagePath.arrow,
  },
  {
    id: '8',
    image: ImagePath.profile,
    title: 'Profile Granter',
    arrow: ImagePath.arrow,
  },
  {
    id: '9',
    image: ImagePath.idvarification,
    title: 'ID Verification',
    arrow: ImagePath.arrow,
  },
  {
    id: '10',
    image: ImagePath.setting,
    title: 'Setting',
    arrow: ImagePath.arrow,
  },
];

const ProviderProfileItem = () => {

  const handleItemClick = (id: any) => {
    switch (id) {
      case '1':
        NavigationService.navigate('');
        break;
      default:
        break;
    }
  };

  return data?.map((item, index) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.main}
      key={item.id}
      onPress={() => handleItemClick(item.id)}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image source={item.image} />
        <RNText style={{marginLeft: 8}} variant={'commonText'}>
          {item.title}
        </RNText>
      </View>
      <Image source={item.arrow} />
    </TouchableOpacity>
  ));
};

export default ProviderProfileItem;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    marginBottom: 4,
    marginTop: 15,
    marginHorizontal: 12,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    elevation:2,
  },
});
