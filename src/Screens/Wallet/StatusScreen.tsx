import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../Theme/Colors';
import {RNText} from '../../Theme/theme';

const StatusScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (index: any) => {
    setSelectedIndex(index);
  };

  const renderButton = (index: any, text: any) => (
    <TouchableOpacity
      onPress={() => handlePress(index)}
      style={[
        styles.bottomSlide,
        {
          borderBottomWidth: selectedIndex === index ? 1 : 0,
          borderBottomColor:
            selectedIndex === index ? colors.orange : colors.black,
          marginHorizontal: index === 1 ? 12 : 0,
        },
      ]}>
      <RNText variant={selectedIndex === index ? 'loginHere' : 'commonText'}>
        {text}
      </RNText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {renderButton(0, 'Accept/Reject')}
        {renderButton(1, 'On my way')}
        {renderButton(2, 'Arrived')}
      </View>

      {selectedIndex === 0 && (
        <View style={styles.ContantView}>
          <RNText variant={'commonText'}>Contant Coming Soon</RNText>
        </View>
      )}
      {selectedIndex === 1 && (
        <View style={styles.ContantView}>
          <RNText variant={'commonText'}>Contant Coming Soon</RNText>
        </View>
      )}
      {selectedIndex === 2 && (
        <View style={styles.ContantView}>
          <RNText variant={'commonText'}>Contant Coming Soon</RNText>
        </View>
      )}
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 21,
    marginHorizontal: 12,
    borderRadius: 9,
    marginBottom: 5,
    elevation: 3,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ContantView: {
    marginTop: 15,
  },
  bottomSlide: {
    paddingBottom: 8,
  },
});