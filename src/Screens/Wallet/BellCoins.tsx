import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppSafeAreaView} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import ImagePath from '../../../assets/ImagePath';
import {RNText} from '../../Theme/theme';
import {colors} from '../../Theme/Colors';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_NOTIFICATION_SCREEN, NAVIGATION_PLANS} from '../../Navigation/routes';
import ActivePlans from './ActivePlans';
import Icon from '../../../assets/Image/icon.svg';
import Calendar from '../../../assets/Image/calendar.svg';
import Wallet from '../../../assets/Image/wallet.svg';
import Picon from '../../../assets/Image/picon.svg';
import StatusScreen from './StatusScreen';

const data = [
  {id: '1', image: <Calendar />, title: 'Upcoming Appointments'},
  {id: '2', image: <Icon />, title: 'View Booking History'},
  {id: '3', image: <Wallet />, title: 'Wallet'},
  {id: '4', image: <Picon />, title: 'Subscrition Plans'},
];
const BellCoins = () => {
  const transformedData = [];
  for (let i = 0; i < data.length; i += 2) {
    const row = data.slice(i, i + 2);
    transformedData.push(row);
  }

  const handleItemClick = (id: any) => {
    switch (id) {
      case '1':
        null;
        break;
      case '2':
        null;
        break;
      case '3':
        null;
        break;
      case '4':
        NavigationService.navigate(NAVIGATION_PLANS);
        break;
      default:
        break;
    }
  };

  const RenderItem = ({item}: any) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 25}}>
        {item.map(({id, image, title}: any) => (
          <TouchableOpacity
            onPress={() => handleItemClick(id)}
            key={id}
            style={{flex: 1, alignItems: 'center', marginHorizontal: 8}}>
            {image}
            <RNText
              style={{marginTop: 14}}
              textAlign="center"
              variant={'commonText'}>
              {title}
            </RNText>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.main}>
          <ImageBackground
            style={styles.backGroud}
            source={ImagePath.linearView}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <RNText variant={'sizeTwenty'}>60</RNText>
              <RNText variant={'buttonTextSemi'}>BellCoins</RNText>
            </View>
          </ImageBackground>

          <View>
            <FlatList
              data={transformedData}
              renderItem={RenderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <ActivePlans />

        <StatusScreen />
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default BellCoins;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 12,
    borderRadius: 8,
    marginBottom: 3,
    elevation: 3,
  },
  backGroud: {
    width: 92,
    height: 92,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 25,
  },
});
