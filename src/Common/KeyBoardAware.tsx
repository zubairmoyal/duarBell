import React from "react";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { StyleSheet } from "react-native";
import { colors } from "../Theme/Colors";
import { KeyBoardAwareProps } from "../Types/Index";

const KeyBoardAware = ({ children, style, ...props }: KeyBoardAwareProps) => {
  return (
    <KeyboardAwareScrollView
      {...props}
      keyboardShouldPersistTaps="handled"
      style={[styles.whiteBackgroundWithPadding, style]}
      contentContainerStyle={styles.flexGrow}
      showsVerticalScrollIndicator={false}>
      {children}
    </KeyboardAwareScrollView>
  );
};
export { KeyBoardAware };
 const styles = StyleSheet.create({
    whiteBackground: {
      flex: 1,
      backgroundColor: colors.white,
    },
    whiteBackgroundWithPadding: {
      // flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: 12,
    },
    flexGrow: {
      flexGrow: 1,
    },
    flexDirectionRow: {
      flexDirection: "row",
    },
    center: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  });
