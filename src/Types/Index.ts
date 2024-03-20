import {
    GestureResponderEvent,
    StyleProp,
    TextInputProps,
    TextProps,
    TextStyle,
    TouchableOpacityProps,
    ViewStyle,
  } from "react-native";
  import { LegacyRef, ReactNode } from "react";
  import { KeyboardAwareScrollViewProps } from "@codler/react-native-keyboard-aware-scroll-view";
  
  export interface CheckboxProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    value: boolean;
    checkbox?: boolean;
    style?: StyleProp<ViewStyle> | undefined;
    disabled?: boolean;
  }
  
  export interface TextPropsTemp extends TextProps {
    type?: string;
    weight?: string;
    color?: string;
    children?: any;
    line?: string;
    numberOfLines?: number
    style?: StyleProp<ViewStyle> | undefined;
  }
  
  export interface AppSafeAreaViewProps {
    children?: any;
    style?: StyleProp<ViewStyle> | undefined;
    statusColor?: string;
  }
  
  export interface BProps extends TouchableOpacityProps {
    activeOpacity?: number;
    children: string;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    disabled?: boolean;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    isSecond?: boolean;
    variant?:string;
    style?: ViewStyle;
    useGradient?:any;
    buttonStyle?:any;
    showImage?:boolean;
  }
  
  export interface SpinnerProps {
    style?: ViewStyle;
  }
  
  export interface TouchableOpacityViewProps extends TouchableOpacityProps {
    children?: ReactNode;
    isGesture?: boolean;
  }
  
  export interface ToolbarProps {
    title: string;
    subtitle?: string;
  }
  export interface ToolbarImageProps {
    title: string;
    subtitle?: string;
    // icon: Source | number;
  }
  
  export interface InputProps extends TextInputProps {
    label?: string;
    value: string;
    containerStyle?: ViewStyle;
    labelStyle?: TextStyle;
    inputStyle?: ViewStyle;
    isError?: boolean;
    assignRef?: LegacyRef<T> | undefined;
    showHidePress?: ((event: GestureResponderEvent) => void) | undefined;
    errorText?: string;
    isRequired?: boolean;
    placeholder?: Object;
    onFocus?: any;
    onBlur?: any;
    onChangeText?: any;
    onEndEditing?: any;
    keyboardType?: any;
    onSubmitEditing?: any;
    secureTextEntry?: any;
    secureText?:any;
  
  }
  export interface CountryInputProps extends TextInputProps {
    label?: string;
    value: string;
    containerStyle?: ViewStyle;
    labelStyle?: TextStyle;
    inputStyle?: ViewStyle;
    isError?: boolean;
    assignRef?: LegacyRef<T> | undefined;
    showHidePress?: ((event: GestureResponderEvent) => void) | undefined;
    errorText?: string;
    visible?: boolean;
    // onSelectCountry(country: Country): void;
    isPhoneNotValid?: any;
  }
  
  export interface KeyBoardAwareProps extends KeyboardAwareScrollViewProps {
    children: ReactNode;
    style?: ViewStyle;
  }
  
  export interface ButtonValidationProps {
    isFocused: boolean;
    title: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    disabled?: boolean;
    bottomText?: string;
    isTextDisabled?: boolean;
  }
  
  export interface ToolbarValidationProps {
    isFocused: boolean;
    title: string;
    subtitle: string;
    // icon?: Source | number;
  }
  
  export interface ToolbarBottomSheetProps {
    title: string;
    onPressClose: ((event: GestureResponderEvent) => void) | undefined;
  }
  