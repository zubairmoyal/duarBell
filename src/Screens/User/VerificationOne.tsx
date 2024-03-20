import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import {colors} from '../../Theme/Colors';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {RNText} from '../../Theme/theme';
import NavigationService from '../../Navigation/NavigationService';
import { NAVIGATION_MANAGE_BOOK_THREE } from '../../Navigation/routes';

export default function VerificationOne() {
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.main}>
          <RNText variant={'SizeForteen'}>
            Verify your Identity and Business Name
          </RNText>
          <RNText
            style={{
              marginTop: 17,
            }}
            variant={'commonText'}>
            Verify your identity to get a{' '}
            <RNText style={{color: '#CE3600'}} variant={''}>
              VERIFIED
            </RNText>{' '}
            mark in your profile. DuarBell has ensued that your profile is a
            genuine representation
          </RNText>
          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'idVerifyInput2'}>
            Verify for
          </RNText>

          <RNText variant={'idVerifyInput2'}>DORPDOWN HERE</RNText>

          <Button
          onPress={() => {NavigationService.navigate(NAVIGATION_MANAGE_BOOK_THREE)}}
            children="Submit"
            useGradient={true}
            style={{
              height: 35,
              borderRadius: 18,
              flex: 1,
              marginTop: 70,
            }}
          />
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: 560,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
    marginHorizontal: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
