import React from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import {RNText} from '../Theme/theme';

interface ErrorTextProps {
  title: string;
  isError: boolean | string;
  style?: TextStyle;
}

const ErrorText = ({title, isError, style}: ErrorTextProps) => {
  return isError ? (
    <View style={styles.emptyView}>
      <RNText variant={'commonText'}>{title}</RNText>
    </View>
  ) : (
    <View style={styles.emptyView} />
  );
};
const styles = StyleSheet.create({
  LoginFailPara: {
    textAlign: 'center',
  },
  emptyView: {
    height: 30,
    marginTop: 15,
  },
});

export {ErrorText};
