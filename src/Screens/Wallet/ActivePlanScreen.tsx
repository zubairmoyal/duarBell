import {
  FlatList,
  Image,
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
import {RNText} from '../../Theme/theme';
import ImagePath from '../../../assets/ImagePath';
import { ACTIVEPLANS } from '../../Common/DummyData';

const ActivePlanScreen = () => {
  const renderItem = ({item, index}: any) => {
    const lastindex = index === ACTIVEPLANS.length - 1;
    let textVariant = 'planText';

  if (lastindex) {
    textVariant = 'planText2';
  } else if (index === ACTIVEPLANS.length - 2) {
    textVariant = 'planText2';
  }
    return (
     <View style={{flexDirection:'row'}}>
      <Image  style={{marginRight:8}} source={item.image} />
      <RNText variant={'planText'}>{item.text2}</RNText>
      <RNText variant={'planText2'}>{' '}{item.num}</RNText>
     </View>
    );
  };
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View
          style={[ colors.shadow,{
            padding: 14,
            backgroundColor: colors.white,
            flex: 1,
            marginHorizontal: 12,
            borderRadius: 8,
            elevation: 4,
            height:550,
            marginBottom:12,
          }]}>
          <View>
          <RNText variant={'callHistoryText'}>Main Service</RNText>
          <RNText style={{marginTop:18,marginBottom:2}} variant={'profileGranterText'}>Diamond Plan / Validity Monthly</RNText>
          <RNText variant={'bellCoinHistorText4'}>Expires on: 05 January 2024 01:53 PM</RNText>

          </View>

          <View style={{marginTop:25}}>
            <FlatList
              data={ACTIVEPLANS}
              renderItem={(item, index) => renderItem(item, index)}
            />
          </View>
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ActivePlanScreen;

const styles = StyleSheet.create({});
