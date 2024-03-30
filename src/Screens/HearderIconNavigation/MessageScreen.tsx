import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {colors} from '../../Theme/Colors';

const MessageScreen = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'pink',
      }}>
      <Text style={{color: 'black'}}>MessageScreen</Text>

      <Toggle
        value={isToggleOn}
        onPress={handleToggle}
        trackBar={{
          width: 59,
        }}
        trackBarStyle={{
          width: 29,
          height: 18,
          backgroundColor: isToggleOn ? colors.vermilion : colors.white,
          borderWidth: 3,
          borderColor: colors.vermilion,
        }}
        thumbStyle={{
          width: isToggleOn ? 13 : 8,
          height: isToggleOn ? 13 : 8,
          backgroundColor: isToggleOn ? colors.white : colors.vermilion,
          marginHorizontal: 2,
          borderRadius: 15,
        }}
      />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
