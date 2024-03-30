import {
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
import {RNText} from '../../Theme/theme';
import ImagePath from '../../../assets/ImagePath';
import {colors} from '../../Theme/Colors';

const Wallet2 = () => {
  const renderItem = (item: any, index: any) => {
    const status = index === 2 ? 'Pending' : '';
    return (
      <View
        style={{
          marginVertical: 14,
          backgroundColor: colors.white,
          borderBottomWidth: -1 && 1,
          borderBlockColor: -1 && colors.lightGray,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            marginBottom: 15,
          }}>
          <Image source={ImagePath.Userprofile} />
          <View
            style={{
              marginLeft: 1,
            }}>
            <RNText variant={'provideDetails2'}>
              Uttam Ray BookingPlumber
            </RNText>
            <RNText variant={'bellCoinHistorText2'}>
              20 December 23, 03:07 AM
            </RNText>
          </View>
          <View>
            <RNText variant={status ? 'walletRs2' : 'walletRs'}>+ ₹500</RNText>
            <RNText variant={'walletRs2'}>{status}</RNText>
          </View>
        </View>
      </View>
    );
  };
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.flatlist}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: colors.lightGray,
            }}>
            <View>
              <RNText variant={'commonText'}>Withdrwal details</RNText>
              <RNText style={{marginVertical: 12}} variant={'myBookingText'}>
                Pending Amount
              </RNText>
              <RNText variant={'myBookingText'}>Balance</RNText>
            </View>

            <View>
              <RNText variant={'commonText'}>Withdraw</RNText>
              <RNText
                style={{marginVertical: 12, marginLeft: 7}}
                variant={'myBookingText'}>
                1500 INR
              </RNText>
              <RNText style={{marginLeft: 15}} variant={'commonText'}>
                Check
              </RNText>
            </View>
          </View>
          <RNText
            style={{marginLeft: 8, marginTop: 15}}
            variant={'callHistoryText'}>
            History
          </RNText>
          <FlatList
            data={new Array(5)?.fill('')}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default Wallet2;

const styles = StyleSheet.create({
  flatlist: {
    marginHorizontal: 15,
    marginTop: 16,
    backgroundColor: colors.white,
    elevation: 2,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 15,
  },
});
