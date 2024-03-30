import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppSafeAreaView, Button, WHITE} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import {colors} from '../../Theme/Colors';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {RNText} from '../../Theme/theme';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_MANAGE_BOOK_THREE} from '../../Navigation/routes';
import {Dropdown} from 'react-native-element-dropdown';
import DropDown from '../../Common/DropDown';
import ImagePickerComponent from '../../Common/ImagePickerComponent';

export default function VerificationOne() {
  const [verifyItem, setVerifyItem] = useState('');
  const onHandle = (item: any) => {
    setVerifyItem(item.label);
    // item => {
    //   setValue(item.value);
    //   setIsFocus(false);
    // }
  };

  const [selectedImagePath, setSelectedImagePath] = useState('');

  const handleImageSelect = (imagePath: React.SetStateAction<string>) => {
    setSelectedImagePath(imagePath);
  };

  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={[styles.main, colors.shadow]}>
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
          <DropDown onChange={onHandle} />
          {verifyItem && (
            <>
              <RNText
                style={{
                  marginTop: 20,
                }}
                variant={'idVerifyInput2'}>
                ID Proof
              </RNText>
              <DropDown onChange={onHandle} />
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.fadeGray,
                  height: 45,
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: 22,
                  borderRadius: 6,
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                }}>
                <View>
                  <RNText style={{fontWeight: '700'}} variant={'myBookingDate'}>
                    Upload Image
                  </RNText>
                  <RNText
                    style={{
                      width: 200,
                    }}
                    numberOfLines={1}
                    variant={'planText'}>
                    {/* {selectedImagePath */}
                      {/* ? selectedImagePath:  */}
                      pdf, xls, png, jpg, doc
                      {/* } */}
                  </RNText>
                </View>
                <ImagePickerComponent picker={true} onImageSelect={handleImageSelect} />
              </View>

              <RNText
                style={{
                  marginTop: 20,
                }}
                variant={'idVerifyInput2'}>
                Business Name Profile
              </RNText>
              <DropDown onChange={onHandle} />
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.fadeGray,
                  height: 45,
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: 22,
                  borderRadius: 6,
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                }}>
                <View>
                  <RNText style={{fontWeight: '700'}} variant={'myBookingDate'}>
                    Upload Image
                  </RNText>
                  <RNText
                    style={{
                      width: 200,
                    }}
                    numberOfLines={1}
                    variant={'planText'}>
                    {/* {selectedImagePath */}
                      {/* ? selectedImagePath:  */}
                      pdf, xls, png, jpg, doc
                      {/* } */}
                  </RNText>
                </View>
                <ImagePickerComponent picker={true} onImageSelect={handleImageSelect} />
              </View>
            </>
          )}

          <Button
            onPress={() => {
              NavigationService.navigate(NAVIGATION_MANAGE_BOOK_THREE);
            }}
            children="Submit"
            useGradient={true}
            style={{
              height: 35,
              borderRadius: 18,
              flex: 1,
            }}
            containerStyle={{
              marginVertical:30
            }}
          />
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom:15,
  },
});
