import {
  Image,
  ImageBase,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppSafeAreaView} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {colors} from '../../Theme/Colors';
import ImagePath from '../../../assets/ImagePath';
import {RNText} from '../../Theme/theme';
import {SliderBox} from 'react-native-image-slider-box';
import ProviderProfileDetailItem from './ProviderProfileDetailItem';

const images = [ImagePath.homeImage, ImagePath.homeImage, ImagePath.homeImage];

const ProviderProfileDetail = () => {
  const renderCustomItem = ({item, index}: any) => {
    return (
      <View
        style={{
          width: '100%',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
        <Image
          resizeMode="cover"
          style={{
            width: '99%',
            height: 160,
            alignSelf: 'center',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          source={ImagePath.banner2}
        />
      </View>
    );
  };
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={[styles.main, colors.shadow]}>
          <View
            style={{
              height: 172,
              alignItems: 'center',
            }}>
            <SliderBox
              images={images}
              onCurrentImagePressed={(index: any) =>
                console.warn(`image ${index} pressed`)
              }
              autoplay
              //   activeOpacity={1}
              resizeMethod={'resize'}
              resizeMode={'cover'}
              // paginationBoxVerticalPadding={-40}
              dotColor="transparent"
              inactiveDotColor="transparent"
              dotStyle={null}
              renderItem={renderCustomItem}
            />
          </View>
          <View
            style={{
              padding: 10,
              borderRadius: 9,
              zIndex: 999,
              bottom: 20,
              height: 90,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image source={ImagePath.Userprofile} />
              <View
                style={{
                  flex: 1,
                  marginLeft:7,
                  marginTop:15
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <RNText variant={'categoryText2'}>
                    XamakAMlam{' '}
                    </RNText>
                    <Image source={ImagePath.verified} />
                  </View>
                  <TouchableOpacity
                    style={{
                      width: '10%',
                      height: 14,
                    }}>
                    <Image source={ImagePath.fav} />
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'60%',marginVertical:4}}>
                  <RNText variant={'sortByText1'}>Plumber</RNText>
                  <RNText variant={'sortByText3'}>4.0</RNText>
                  <Image style={{width:11,height:11}} source={ImagePath.star}></Image>
                  <RNText variant={'sortByText3'}>2.3 km</RNText>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',width:'75%',alignItems:'center'}}>
                <RNText variant={'managerBookingtextpending2'}>
                Pritam Saha
                </RNText>
                <TouchableOpacity style={styles.button}>
                  <RNText variant={'myBookingButtonText'}>Message</RNText>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.main,colors.shadow]}>
            <ProviderProfileDetailItem />
          </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ProviderProfileDetail;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    marginHorizontal: 12,
    borderRadius: 9,
    elevation: 3,
    marginBottom: 10,
  },
  button: {
    height: 21,
    width: 81,
    borderRadius: 12,
    backgroundColor: colors.limeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    // marginTop: 12,
  },
});
