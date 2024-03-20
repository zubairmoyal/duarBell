import {Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppSafeAreaView, Input} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import ImagePath from '../../../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import CommonHeaderOne from '../../Common/CommonHeaderOne';
import {color} from '@shopify/restyle';
import {colors} from '../../Theme/Colors';

const SearchScreen = () => {
  const linearColor = ['#CE3700', '#C40069'];

  return (
    <AppSafeAreaView>
      <CommonHeaderOne />
      <View style={styles.main}>
        <TextInput
          cursorColor={colors.gray}
          style={styles.input}
          placeholder="Search Provider"
          placeholderTextColor={colors.gray}
        />
        <TouchableOpacity style={styles.image}>
        <Image source={ImagePath.mic} />
        </TouchableOpacity>
      </View>
    </AppSafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  main: {
    width: '90%',
    height: 57,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 30,
    borderRadius: 9,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray2,
    borderRadius: 9,
    paddingVertical: 4,
    paddingLeft: 7,
    paddingRight: 25,
    marginHorizontal: 15,
    color: colors.black,
  },
  image: {
    position: 'absolute',
    top: 22,
    right: 20,
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
});
