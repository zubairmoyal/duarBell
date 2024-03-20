import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {InputProps} from '../Types/Index';
import {colors} from '../Theme/Colors';
import {RNText} from '../Theme/theme';
import {TouchableOpacityView} from '.';

const Input = ({
  value,
  placeholder,
  onFocus,
  onBlur,
  inputStyle,
  onChangeText,
  onEndEditing,
  keyboardType,
  assignRef,
  isError,
  labelStyle,
  label,
  containerStyle,
  onSubmitEditing,
  errorText,
  isRequired,
  secureTextEntry,
  secureText,
  ...props
}: InputProps) => {
  const importantFields = () => {
    if (isRequired) {
      return <RNText variant={'commonText'}>*</RNText>;
    }
  };
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        isError ? {borderColor: colors.fireEngineRed} : {},
      ]}>
      {label ? (
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <RNText {...props} variant={'inputText'}>
            {label}
          </RNText>
          {importantFields()}
        </View>
      ) : (
        <></>
      )}

      <TextInput
        {...props}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholderTextColor={colors.thinBlack2}
        autoCorrect={false}
        style={[
          styles.inputF,
          inputStyle,
          {
            color: colors.black,
            fontWeight: '300',
            fontSize: 12,
            fontFamily: 'Poppins-regular',
            paddingTop: 20,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        ref={component => {
          assignRef && assignRef(component);
        }}
      />
      {isError && (
        <RNText variant={'commonText'} style={styles.errorText}>
          {errorText}
        </RNText>
      )}
    </View>
  );
};

export {Input};
const styles = StyleSheet.create({
  NameLabel: {
    lineHeight: 21,
    marginBottom: 8,
  },
  inputF: {
    height: 48,
    borderBottomWidth: 1,
    borderColor: colors.gray2,
    fontFamily: 'Poppins-regular',
    backgroundColor: colors.white,
    marginTop: 1,
    fontWeight: '300',
  },
  validateMsg: {
    lineHeight: 21,
  },
  container: {
    marginTop: 16,
  },
  errorText: {
    color: colors.fireEngineRed,
    fontSize: 12,
    marginTop: 5,
  },
  showHide: {
    flex: 1,
    backgroundColor:'red',
    marginTop:50,
    height:400
  },
  showHideText: {
    lineHeight: 21,
  },
});
