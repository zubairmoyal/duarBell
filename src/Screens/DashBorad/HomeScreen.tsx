import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AppSafeAreaView, KeyBoardAware} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import ImagePath from '../../../assets/ImagePath';
import {SliderBox} from 'react-native-image-slider-box';
import {colors} from '../../Theme/Colors';
import React, { useState } from 'react';
import {HOME_DATA} from '../../Common/DummyData';
import HomeRenderItem from './HomeRenderItem';
import {RNText} from '../../Theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import CommonScrollVIew from '../../Common/CommonScrollVIew';

const images = [ImagePath.homeImage, ImagePath.homeImage, ImagePath.homeImage];
const HomeScreen = () => {
  const renderCustomItem = ({item, index}: any) => {
    return (
      <View
        style={{
          //   height: 155,
          width: '95%',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          marginHorizontal: 10,
        }}>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            // height:155,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          source={ImagePath.banner}
        />
      </View>
    );
  };

 

  return (
    <AppSafeAreaView style={{marginBottom:80}}>
      <CommonHeader screen='true'/>
      <CommonScrollVIew>
        <SliderBox
          images={images}
          onCurrentImagePressed={(index: any) =>
            console.warn(`image ${index} pressed`)
          }
          autoplay
          // circleLoop
          activeOpacity={1}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          dotColor={colors.white}
          inactiveDotColor={colors.white}
          dotStyle={{
            width: 20,
            height: 3,
            padding: 0,
            margin: 0,
            marginHorizontal: -5,
          }}
          renderItem={renderCustomItem}
        />
        <View style={{
              marginTop:12,
              marginHorizontal:10,
              elevation:5,
             }}> 
         <FlatList
            data={HOME_DATA}
            renderItem={({item, index}) => {
              if (index % 3 === 0) {
                const rowData = HOME_DATA.slice(index, index + 3);
                return (
                  <View style={{ }}>
                <HomeRenderItem rowData={rowData} />
                </View>
                );
              }
            }}
            keyExtractor={(item, index) => index.toString()}
          /> 
        </View>
        <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:12
              }}>
              <Image style={{width:"100%"}} source={ImagePath.adds} />
              </View>
              <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={{width:"100%"}} source={ImagePath.adds} />
              </View>
              <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={{width:"100%"}} source={ImagePath.adds} />
              </View>
              </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
  scrollViewOverlay: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 20,
    // backgroundColor:'green'
  },
  one: {
    marginTop: 10,
  },
  two: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
