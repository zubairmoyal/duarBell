import React, {useState} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import {BProps} from '../Types/Index';
import {TouchableOpacityView} from './TouchableOpacityView';
import LinearGradient from 'react-native-linear-gradient';
import {RNText} from '../Theme/theme';
import {SpinnerSecond} from '.';
import {colors} from '../Theme/Colors';
import ImagePath from '../../assets/ImagePath';

const Button = ({
  children,
  activeOpacity,
  containerStyle,
  titleStyle,
  disabled,
  onPress,
  isSecond,
  variant,
  style,
  useGradient,
  buttonStyle,
  showImage,
  ...rest
}: BProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const linearColor = useGradient ? ['#CE3700', '#C40069'] : ['white', 'white'];
  const handlePress = async () => {
    if (isLoading) {
      setIsLoading(true);
      onPress();
      if (!disabled) {
        setIsLoading(true);
        onPress();
      } else {
        console.log('---');
      }
    }
    setIsLoading(true);
    try {
      await onPress();
      setIsLoading(false);
    } catch (error) {
      console.error('Error occurred:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
    <TouchableOpacityView
      style={[styles.buttonStyle, containerStyle, disabled && {opacity: 0.6}]}
      activeOpacity={disabled && 0.6}
      onPress={handlePress}
      {...rest}>
      <LinearGradient
        style={[
          style,
          {
            // flex: 1,
            // height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: useGradient ? 0 : 1,
            borderColor: useGradient ? 'transparent' : colors.dimWhite,
            // borderRadius: 18,
          },
        ]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={linearColor}>
        {isLoading ? (
          <SpinnerSecond
            style={{
              position: 'absolute',
            }}
          />
        ) : (
          <RNText
            style={[
              useGradient ? styles.text : styles.text2,
              disabled && styles.disabledText,
            ]}
            children={children}
            variant={'buttonText'}
          />
        )}
      </LinearGradient>
    </TouchableOpacityView>
    {/* <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={linearColor}
        style={{
          paddingVertical:5,
          paddingHorizontal:13,
          borderRadius:20,
          marginLeft:5,
        }}>
        {showImage ? (
          <>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Image style={{tintColor:'white',height:8,width:8}}source={ImagePath.tabWallet} />
              <RNText style={{marginLeft: 5}} variant={'callNow'}>Book Now</RNText>
            </View>
          </>
        ) : null}
      </LinearGradient> */}
    </>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 36,
    borderRadius: 18,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  text2: {
    color: colors.thinBlack,
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  disabledText: {
    color: '#ffffff',
  },
});

export {Button};
