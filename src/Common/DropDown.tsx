import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../Theme/Colors';
import {RNText} from '../Theme/theme';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DropDown = ({onChange}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const renderItem = item => {
    return (
      <View
        style={{
          width: '90%',
          marginHorizontal: 15,
          paddingVertical: 5,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGray,
          marginTop:10
        }}>
        <RNText variant={'idVerifyInput'}>{item.label}</RNText>
      </View>
    );
  };

  return (
    <View style={{backgroundColor:colors.white,borderRadius:8,borderWidth:1,borderColor:colors.gray3,marginTop:10}}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={[styles.inputSearchStyle, {paddingRight: 0}]}
        data={data}
        maxHeight={250}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : ''}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: 32,
    borderColor: colors.gray2,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 10,
    color: colors.richBlack,
    fontWeight: '400',
    fontFamily: 'Poppins-Medium',
  },
  selectedTextStyle: {
    fontSize: 10,
    color: colors.richBlack,
    fontWeight: '400',
    fontFamily: 'Poppins-Medium',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
});
