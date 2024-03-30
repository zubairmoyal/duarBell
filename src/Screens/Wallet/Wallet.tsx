import {FlatList, Image, ImageBackground, StyleSheet, Text, View,Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {colors} from '../../Theme/Colors';
import {RNText} from '../../Theme/theme';
import ImagePath from '../../../assets/ImagePath';
import NavigationService from '../../Navigation/NavigationService';
import { NAVIGATION_BELLCOINS, NAVIGATION_PROVIDERPROFILE, NAVIGATION_WALEET2 } from '../../Navigation/routes';

const Wallet = () => {
  const renderItem = () => {
    return(
      < TouchableOpacity onPress={() => NavigationService.navigate(NAVIGATION_WALEET2)}
       style={{
       marginVertical:14,
       flexDirection:'row',
       backgroundColor:colors.white,
       justifyContent:'space-between',
       alignItems:'center'
      }}>
<Image source={ImagePath.Userprofile}/>
<View style={{
 marginLeft:1
}}>
  <RNText variant={'bellCoinHistorText'}>Referral Provider Pinkz Balmazuum</RNText>
  <RNText variant={'bellCoinHistorText2'}>04 December 23, 04:11 AM</RNText>
</View>
<RNText variant={'walletRs'}>+30</RNText>
      </TouchableOpacity>
    )
  }
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.main}>
          <ImageBackground
            style={styles.backGroud}
            source={ImagePath.linearView}>
            <RNText variant={'sizeTwenty'}>60</RNText>
            <RNText variant={'buttonTextSemi'}>BellCoins</RNText>
          </ImageBackground>
         
          <RNText textAlign='center' variant={'commonText'}>
            Referrer your friends earn 10 BellCoins each Your Referral Code is -
            <RNText variant={'buttonTextSemi'}>uRTPbb</RNText>
          </RNText>
          <Button 
          onPress={()=> NavigationService.navigate(NAVIGATION_BELLCOINS)}
          style={styles.button} children='SHARE' useGradient={true} />
        </View>
       <View style={styles.flatlist}>
        <RNText style={{marginLeft:8}} variant={'callHistoryText'}>History</RNText>
        <FlatList 
        data={new Array(5)?.fill('',)}
        renderItem={renderItem} />
       </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  main: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 12,
    borderRadius: 8,
    paddingHorizontal:30,
  },
  backGroud:{
    width: 92,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:30
  },
  button:{
    flex:1,
    height:32,
    borderRadius:18,
    marginTop:20,
  },
  flatlist:{
    marginHorizontal:15,
    marginTop:16,
    backgroundColor:colors.white,
    elevation:2,
    marginBottom:15,
    borderRadius:8,
    paddingHorizontal:12,
    paddingTop:15

  },
});
