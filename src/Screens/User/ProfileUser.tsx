import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppSafeAreaView, Button, Input} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {RNText} from '../../Theme/theme';
import {colors} from '../../Theme/Colors';
import NavigationService from '../../Navigation/NavigationService';
import { NAVIGATION_MY_PORTFOLIO, NAVIGATION_PROFILE_GRANTER, NAVIGATION_VERIFICATION_ONE } from '../../Navigation/routes';

const ProfileUser = () => {
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.main}>
          <TouchableOpacity onPress={() => NavigationService.navigate(NAVIGATION_PROFILE_GRANTER)}>
          <RNText variant={'callHistoryText'}>Add Profile Granter</RNText>
          </TouchableOpacity>
          <RNText variant={'commonText'}>
            Add your friend to your profile as a profile granter.
          </RNText>

          <View
            style={{
              marginTop: 30,
            }}>
            <RNText variant={'idVerifyInput2'}>Enter friend mobile no</RNText>
            <TextInput
            cursorColor={colors.gray}
              placeholder="Enter friend mobile no"
              placeholderTextColor={colors.gray}
              keyboardType='numeric'
              maxLength={10}
              style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: colors.gray2,
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 2,
                marginTop: 10,
                color:colors.black
              }}
            />
          </View>
          <Button
          onPress={() => NavigationService.navigate(NAVIGATION_VERIFICATION_ONE)}
            children="Continue"
            useGradient={true}
            style={{
              height: 37,
              flex: 1,
              borderRadius: 18,
              marginTop: 40,
            }}
          />

          <TouchableOpacity
          onPress={() => NavigationService.navigate(NAVIGATION_MY_PORTFOLIO)}
            style={{
              marginTop: 30,
              alignItems: 'center',
            }}>
            <RNText style={{textDecorationLine: 'underline'}} variant={'eidtProfileCancel'}>Cancel</RNText>
          </TouchableOpacity>
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ProfileUser;

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
