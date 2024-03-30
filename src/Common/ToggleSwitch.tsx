import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Toggle from 'react-native-toggle-element';
import {RNText} from '../Theme/theme';
import {colors} from '../Theme/Colors';
import ImagePath from '../../assets/ImagePath';
import {useDispatch} from 'react-redux';
import {setIsAuth} from '../Slice/LoginService/AuthSlice';

const ToggleSwitch = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const dispatch = useDispatch();

  const onHandle = () => {
    setToggleValue(prevState => !prevState);
    dispatch(setIsAuth(!toggleValue));
  };

  return (
    <View style={styles.main}>
      <Toggle
        value={toggleValue}
        onPress={onHandle}
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
        trackBar={styles.trackbar}
        trackBarStyle={styles.trackbarStyle}
        thumbStyle={styles.thumbstyle}
        thumbActiveComponent={
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              tintColor={colors.white}
              source={ImagePath.tabUser}
            />
          </View>
        }
        thumbInActiveComponent={
          <View style={styles.thumbViewImage}>
            <Image
              style={styles.image}
              tintColor={colors.white}
              source={ImagePath.tabUser}
            />
          </View>
        }
      />
    </View>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    //   flex: 1,
  },
  trackbar: {
    width: 70,
    height: 100,
  },
  trackbarStyle: {
    width: 40,
    height: 20,
    backgroundColor: colors.vermilion,
  },
  thumbstyle: {
    width: 23,
    height: 23,
    backgroundColor: colors.vermilion,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 15,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbViewImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 10, height: 10, marginTop: 5},
});
