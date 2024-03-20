import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import ImagePath from '../../../assets/ImagePath';
import {RNText} from '../../Theme/theme';
import {colors} from '../../Theme/Colors';

const Booking = () => {
  return (
    <AppSafeAreaView style={{marginBottom: 80}}>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={styles.main}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <Image source={ImagePath.Userprofile} />
              </View>
              <View
                style={{
                  marginLeft: 12,
                }}>
                <RNText variant={'myBookingDate'}>
                  On: 30-11--0001, 12:00 AM
                </RNText>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RNText variant={'categoryText2'}>Pinkz Balmazuum</RNText>
                  <Image style={{marginLeft: 5}} source={ImagePath.verified} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RNText variant={'sortByText'}>Plumber</RNText>
                  <View style={styles.redDot} />
                  <RNText variant={'managerBookingtextpending'}>
                    Completed
                  </RNText>
                </View>
                <TouchableOpacity style={styles.button}>
                  <RNText variant={'myBookingButtonText'}>Message</RNText>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Image
                style={{
                  width: 18,
                  height: 18,
                }}
                source={ImagePath.dotVertical}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 25,
            }}>
            <View>
              <RNText variant={'categoryText2'}>Schedule Date</RNText>
              <RNText variant={'inputText'}>20/12/2023</RNText>
            </View>
            <View>
              <RNText variant={'categoryText2'}>Schedule Time</RNText>
              <RNText variant={'inputText'}>15:36</RNText>
            </View>
            <View>
              <RNText variant={'categoryText2'}>Booking Price</RNText>
              <RNText variant={'inputText'}>500</RNText>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              alignItems: 'center',
            }}>
            <Image source={ImagePath.Location} />
            <RNText style={{marginLeft: 6}} variant={'commonText'}>
              Location for service
            </RNText>
          </View>
          <RNText style={{marginLeft: 20}} variant={'myBookingText'}>
            bgng
          </RNText>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              alignItems: 'center',
            }}>
            <Image source={ImagePath.Vector} />
            <RNText style={{marginLeft: 6}} variant={'commonText'}>
              Location of service provider
            </RNText>
          </View>
          <RNText style={{marginLeft: 20}} variant={'myBookingText'}>
            Barpeta ,Assam,778776 1.3km
          </RNText>
          <View
            style={{
              marginTop: 15,
            }}>
            <RNText variant={'commonText'}>Description</RNText>
            <RNText variant={'myBookingText'}>Ajjanaaja</RNText>
          </View>
          <View
            style={{
              marginTop: 15,
            }}>
            <RNText variant={'commonText'}>Other contact details</RNText>
            <RNText variant={'myBookingText'}>Shha</RNText>
            <RNText variant={'myBookingText'}>1231231244</RNText>
          </View>
          <RNText style={{marginTop: 12}} variant={'commonText'}>
            Attach files
          </RNText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={ImagePath.eye} />
            <RNText variant={'myBookingAttach'}>VIEW</RNText>
          </View>
          <View
            style={{
              marginTop: 11,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RNText variant={'inputText'}>At: 01-01-1970, 05:30 AM</RNText>
            <Button
              style={{
                width: 107,
                height: 27,
                borderRadius: 18,
              }}
              children="REVIEW"
              useGradient={true}
            />
          </View>
        </View>
        <View style={styles.main2}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image source={ImagePath.Userprofile} />

              <View>
                <View
                  style={{
                    marginLeft: 12,
                    // backgroundColor:'green'
                  }}>
                  <RNText variant={'myBookingDate'}>
                    On: 30-11--0001, 12:00 AM
                  </RNText>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <RNText variant={'categoryText2'}>Pinkz Balmazuum</RNText>
                    <Image
                      style={{marginLeft: 5}}
                      source={ImagePath.verified}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <RNText variant={'sortByText'}>Plumber</RNText>
                    <View style={styles.redDot} />
                    <RNText variant={'managerBookingtextpending'}>
                      Completed
                    </RNText>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <RNText variant={'myBookingButtonText'}>Message</RNText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View>
              <Image
                style={{
                  width: 18,
                  height: 18,
                }}
                source={ImagePath.dotVertical}
              />
            </View>
          </View>
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 12,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    elevation: 2,
    marginBottom: 3,
  },
  main2: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
    elevation: 2,
    marginBottom: 3,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: colors.fireEngineRed,
    marginHorizontal: 5,
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
    marginTop: 12,
  },
});
