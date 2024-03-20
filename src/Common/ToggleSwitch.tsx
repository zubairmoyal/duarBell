import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Toggle from 'react-native-toggle-element';
import { RNText } from '../Theme/theme';
import { colors } from '../Theme/Colors';
import ImagePath from '../../assets/ImagePath';

const ToggleSwitch = () => {
    const [toggleValue, setToggleValue] = useState(false);

    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        //   flex: 1,
        }}>
        <Toggle
          value={toggleValue}
          onPress={newState => setToggleValue(newState)}
          leftComponent={
            <>
              {toggleValue ? null : (
                <RNText
                  style={{
                    marginLeft: 15,
                  }}
                  variant={'toggleText'}>
                  US
                </RNText>
              )}
            </>
          }
          rightComponent={
            <>
              {toggleValue ? (
                <RNText
                  style={{
                    marginRight: 15,
                  }}
                  variant={'toggleText'}>
                  DB
                </RNText>
              ) : null}
            </>
          }
          trackBar={{
            width: 70,
            height: 100,
          }}
          trackBarStyle={{
            width: 40,
            height: 20,
            backgroundColor: colors.vermilion,
          }}
          thumbStyle={{
            width: 23,
            height: 23,
            backgroundColor: colors.vermilion,
            borderWidth: 2,
            borderColor: colors.white,
            borderRadius: 15,
          }}
          thumbActiveComponent={
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 10, height: 10, marginTop: 5}}
                tintColor={colors.white}
                source={ImagePath.tabUser}
              />
            </View>
          }
          thumbInActiveComponent={
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 10, height: 10, marginTop: 5}}
                tintColor={colors.white}
                source={ImagePath.tabUser}
              />
            </View>
          }
        />
      </View>
    );
}

export default ToggleSwitch

const styles = StyleSheet.create({})