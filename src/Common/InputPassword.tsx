import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {AppText, FIFTEEN, SEMI_BOLD, TouchableOpacityView, TWELVE} from '.';
import {InputProps} from '../Types/Index';
import {colors} from '../Theme/Colors';
import {RNText} from '../Theme/theme';

const InputPassword = ({
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
  showHidePress,
  secureTextEntry,
  errorText,
  ...props
}: InputProps) => {
  const [secureText, setSecureText] = useState(true);

  const toggleSecureEntry = () => {
    setSecureText(prevState => !prevState);
  };
  return (
    <>
      <View style={[containerStyle]}>
        <RNText variant={'commonText'}>{label}</RNText>

        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            secureTextEntry={secureText}
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
                alignItems:'center'
              },
            ]}
            value={value}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            onSubmitEditing={onSubmitEditing}
            keyboardType={keyboardType}
            ref={component => {
              assignRef && assignRef(component);
            }}
          />
          <TouchableOpacity
            onPress={toggleSecureEntry}
            style={{paddingHorizontal: 10,paddingTop:10}}>
            <RNText variant="commonText">
              {secureText ? 'Show' : 'Hide'}
            </RNText>
          </TouchableOpacity>
        </View>
      </View>
      {isError ? (
        <AppText type={TWELVE} style={styles.validateMsg}>
          {errorText}
        </AppText>
      ) : (
        <></>
      )}
    </>
  );
};

export {InputPassword};
const styles = StyleSheet.create({
  NameLabel: {
    marginTop: 16,
    lineHeight: 21,
    marginBottom: 8,
  },
  inputF: {
    height: 48,
    paddingVertical: 10,
    fontFamily: 'fontFamily',
    flex: 4,
  },
  inputContainer: {
    height: 48,
    borderBottomWidth: 1,
    borderColor: colors.gray2,
    fontFamily: 'Poppins-regular',
    backgroundColor: colors.white,
    marginTop: 1,
    fontWeight: '300',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  showHide: {
    flex: 1,
  },
  showHideText: {
    lineHeight: 20,
    paddingTop: 17,
  },
  validateMsg: {
    lineHeight: 21,
  },
});
