import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppSafeAreaView} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import {SERVICE_LIST} from '../../Common/DummyData';
import { colors } from '../../Theme/Colors';
import { RNText } from '../../Theme/theme';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import NavigationService from '../../Navigation/NavigationService';
import { NAVIGATION_LIST_SCREEN } from '../../Navigation/routes';

const ServiceListScreen = () => {
  const renderItem = ({item}: any) => {
    const {image, category, serviceName} = item ?? ''
    const onSuMbit = () => {
      NavigationService.navigate(NAVIGATION_LIST_SCREEN)
    }
    return (
      <TouchableOpacity 
      onPress={onSuMbit}
      activeOpacity={0.7}
      style={styles.main}>
        <View style={styles.renderImage}>
          <Image source={image} />
        </View>
        <View>
          <RNText variant={'categoryText'}>{category}</RNText>
          <RNText variant={'categoryText2'}>{serviceName}</RNText>

        </View>
      </TouchableOpacity>
    );
  };
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
      <View>
        <FlatList data={SERVICE_LIST} renderItem={renderItem} />
      </View>
      </CommonScrollVIew>

    </AppSafeAreaView>
  );
};

export default ServiceListScreen;

const styles = StyleSheet.create({
  main:{
    margin:12,
    backgroundColor:colors.white,
    elevation:5,
    borderRadius:9,
    flexDirection:'row',
    alignItems:'center'
  },
  renderImage: {
    width: 96,
    borderRadius: 20,
    margin:12
  },
});
