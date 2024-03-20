import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { SpinnerProps } from "../Types/Index";
import { colors } from "../Theme/Colors";

const SpinnerSecond = ({ style }: SpinnerProps) => {
  return (
    <View style={[styles.spinnerStyle, style]}>
      <ActivityIndicator size={'small'} color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:'rgba(255, 0, 0, 0.0)',
  },
});

export { SpinnerSecond };
