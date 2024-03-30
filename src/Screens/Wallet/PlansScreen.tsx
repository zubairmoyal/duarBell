import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {PLANS} from '../../Common/DummyData';
import {RNText} from '../../Theme/theme';
import Plans from '../../../assets/Image/plan.svg';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {color} from '@shopify/restyle';
import {colors} from '../../Theme/Colors';
import ImagePath from '../../../assets/ImagePath';
import NavigationService from '../../Navigation/NavigationService';
import ActivePlans from './ActivePlans';
import { NAVIGATION_ACTIVE_PLAN_SCREEN } from '../../Navigation/routes';

const PlansScreen = () => {
  const [isChecked, setIsChecked] = useState(null);

  const renderItem = ({item, index}: any) => {
    const lastindex = index === PLANS.length - 1;

    const {
      id,
      day,
      check,
      rs,
      val,
      discount,
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
    } = item ?? '';
    const texts = [
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
    ];

    const onSelect = (id: any) => {
      setIsChecked(isChecked === id ? null : id);
    };

    return (
      <View
        style={{
          borderBottomWidth: lastindex ? 0 : 1,
          borderBottomColor: colors.lightGray,
          paddingBottom: 24,
          paddingTop: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <RNText variant={'managerBookingtext2'}>{day}</RNText>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <RNText
                style={{
                  textDecorationLine: 'line-through',
                }}
                variant={'provideDetails1'}>
                {rs}
              </RNText>
              <RNText variant={'walletRs'}>
                {'  '}
                {val}
              </RNText>

              <TouchableOpacity
                onPress={() => onSelect(id)}
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor:
                    isChecked === id ? colors.reddishOrange : colors.lightGray,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                {isChecked === id && (
                  <View
                    style={{
                      width: 7,
                      height: 7,
                      backgroundColor: colors.reddishOrange,
                      borderRadius: 10,
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>

            <RNText
              style={{
                textAlign: 'right',
                textDecorationLine: 'line-through',
                marginTop: 5,
              }}
              variant={'loginHere'}>
              {discount}
            </RNText>
          </View>
        </View>
        {texts?.map((text, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <Image source={check} />
            <RNText style={{marginLeft: 5}} variant={'notificationText'}>
              {text}
            </RNText>
          </View>
        ))}
      </View>
    );
  };

  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View
          style={{
            padding: 14,
            backgroundColor: colors.white,
            flex: 1,
            marginHorizontal: 12,
            borderRadius: 8,
            elevation: 4,
          }}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 12,
            }}>
            <Plans />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 12,
            }}>
            <RNText variant={'commonText'}>Member subscription</RNText>
            <Image
              style={{
                width: 8,
                height: 8,
                marginLeft: 3,
              }}
              source={ImagePath.arrow}
            />
          </View>

          <View>
            <FlatList
              data={PLANS}
              renderItem={(item, index) => renderItem(item, index)}
            />
          </View>
        </View>
        <Button onPress={()=>NavigationService.navigate(NAVIGATION_ACTIVE_PLAN_SCREEN)}
          containerStyle={{
            marginHorizontal: 12,
            marginTop: 16,
          }}
          style={{
            height: 35,
            flex: 1,
            borderRadius: 18,
          }}
          children="Submit"
          useGradient={true}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 30,
            marginTop: 10,
          }}>
          <RNText
            style={{
              textDecorationLine: 'underline',
            }}
            variant={'eidtProfileCancel'}>
            Cancel
          </RNText>
        </TouchableOpacity>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({});
