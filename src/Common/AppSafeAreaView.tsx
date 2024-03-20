import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppSafeAreaViewProps } from "../Types/Index";
import { colors } from "../Theme/Colors";

const AppSafeAreaView = ({
  children,
  style,
  statusColor,
}: AppSafeAreaViewProps) => {
  return Platform.OS === "ios" ? (
    <View style={[{ flex: 1 }, style]}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: statusColor ? statusColor : statusColor,
        }}
      />
      <SafeAreaView
        edges={["right", "left"]}
        style={{
          flex: 1,
        }}>
        {children}
      </SafeAreaView>
    </View>
  ) : (
    <View style={[{backgroundColor: statusColor, }, style]}>
      <StatusBar
        backgroundColor={statusColor ? statusColor : '#E9ECEF'}
        barStyle="dark-content"
      />
      {children}
    </View>
  );
};

export { AppSafeAreaView };
