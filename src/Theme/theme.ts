import { createBox, createText, createTheme } from '@shopify/restyle';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const palette = {};
const typographyStyle = StyleSheet.create({});

const fonts = {
  regular: 'Poppins-Regular',
  bold: 'Poppins-Bold',
  italic: 'Poppins-Italic',
  semiBold: 'Poppins-SemiBold',
  medium: 'Poppins-Medium',
  light: 'Poppins-Light',
  extraLight: 'Poppins-ExtraLight',
  extraBold: 'Poppins-ExtraBold',
  black: 'Poppins-Black',
  thin: 'Poppins-Thin'
};

const theme = createTheme({
  colors: {
    black: '#000000',
    thinBlack: '#444444',
    thinBlack2: '#302F2F',
    white: '#FFFFFF',
    orange: '#CE3405',
    orange2: '#CE3404',
    orange3: '#CC2D11',
    deepPink: '#C71C6C',
    midNightBLue: '#012970',
    orangePeel: '#FA7A0E',
    darkMaroon: '#1C000E',
    dimGray: '#525252',
    gray: '#777777',
    charcoal: '#212529',
    green: '#058305',
    limeGreen:'#008000',
    darkOrange:'#CD3305',
    reddishOrange:'#CE3502',
    darkGray:'#7F7F7F',
    thinGray:'#5D5D5D',
    veryDimGray:'#1D1D1D',
    tangerine:'#F97C0D',
    fireEngineRed:'#FB0202',
    charcoalGray:'#3B3B3B',
    richBlack:'#282828',
    darkGray2:'#353535',
    vermilion:'#CE3503',
    mutedblue:'#005592',
    vividpink :'#E8529E',


  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
  },
  textVariants: {
    commonText: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'black'
    },
    buttonText: {
      fontFamily: fonts.medium,
      fontWeight: '500',
      fontSize: 13,
      lineHeight: 18,
      color: 'white'
    },
    buttonTextSemi: {
      fontFamily: fonts.semiBold,
      fontWeight: '600',
      fontSize: 13,
      lineHeight: 19.5,
      color: 'black'
    },
    buttonTextSemi2: {
      fontFamily: fonts.semiBold,
      fontWeight: '600',
      fontSize: 13,
      lineHeight: 19.5,
      color: 'white'
    },
    loginText: {
      fontFamily: fonts.medium,
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 18,
      color: 'thinBlack'
    },
    loginText2: {
      fontFamily: fonts.medium,
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 18,
      color: 'white'
    },
    inputText: {
      fontFamily: fonts.medium,
      fontWeight: '300',
      fontSize: 11,
      lineHeight: 16.5,
      color: 'thinBlack2'
    },
    inputText2: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 11,
      lineHeight: 16.5,
      color: 'thinBlack2'
    },
    inputGenderText: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 11,
      lineHeight: 16.5,
      color: 'thinBlack2'
    },
    tandc: {
      fontFamily: fonts.medium,
      fontWeight: '300',
      fontSize: 11,
      lineHeight: 16.5,
      color: 'orange'
    },
    loginHere: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'orange2'
    },
    registerNow: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'orange3'
    },
    categoryText: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'deepPink'
    },
    categoryText2: {
      fontFamily: fonts.semiBold,
      fontWeight: '600',
      fontSize: 13,
      lineHeight: 19.5,
      color: 'midNightBLue'
    },
    sortByText: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 10,
      lineHeight: 15,
      color: 'orangePeel'
    },
    sortByText2: {
      fontFamily: fonts.medium,
      fontWeight: '300',
      fontSize: 8,
      lineHeight: 12,
      color: 'darkMaroon'
    },
    callNow: {
      fontFamily: fonts.medium,
      fontWeight: '500',
      fontSize: 7,
      lineHeight: 10.5,
      color: 'white'
    },
    callHistoryText: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'midNightBLue'
    },
    CallHistoryDate: {
      fontFamily: fonts.medium,
      fontWeight: '300',
      fontSize: 11,
      lineHeight: 16.5,
      color: 'dimGray'
    },
    searchInputText: {
      fontFamily: fonts.regular,
      fontWeight: '400',
      fontSize: 10,
      lineHeight: 15,
      color: 'gray'
    },
    bellCoinHistorText: {
      fontFamily: fonts.medium,
      fontWeight: '600',
      fontSize: 10,
      lineHeight: 15,
      color: 'charcoal'
    },
    bellCoinHistorText2: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 8,
      lineHeight: 12,
      color: 'charcoal'
    },
    bellCoinHistorText3: {
      fontFamily: fonts.medium,
      fontWeight: '600',
      fontSize: 10,
      lineHeight: 15,
      color: 'charcoal'
    },
    notificationText: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'dimGray'
    },
    myBookingDate: {
      fontFamily: fonts.regular,
      fontWeight: '300',
      fontSize: 10,
      lineHeight: 15,
      color: 'black'
    },
    myBookingCompleteText: {
      fontFamily: fonts.regular,
      fontWeight: '300',
      fontSize: 10,
      lineHeight: 15,
      color: 'limeGreen'
    },
    myBookingButtonText: {
      fontFamily: fonts.semiBold,
      fontWeight: '500',
      fontSize: 10,
      lineHeight: 15,
      color: 'white'
    },
    myBookingText: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 11,
      lineHeight: 16.5,
      color: 'gray'
    },
    myBookingAttach:{
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 11,
      lineHeight: 16.5,
      color:'darkOrange'
    },
    myAccount:{
      fontFamily: fonts.bold,
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 21,
      color:'midNightBLue'
    },
    eidtProfileInputText:{
      fontFamily: fonts.semiBold,
      fontWeight: '500',
      fontSize: 13,
      lineHeight: 19.5,
      color:'black'
    },
    eidtProfileCancel:{
      fontFamily: fonts.semiBold,
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 18,
      color:'reddishOrange'
    },
    provideDetails:{
      fontFamily: fonts.regular,
      fontWeight: '300',
      fontSize: 12,
      lineHeight: 18,
      color:'darkGray'
    },
    provideDetails2:{
      fontFamily: fonts.semiBold,
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 18,
      color:'charcoal'
    },
    provideDetails3:{
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color:'charcoal'
    },
    provideDetailsProfile:{
      fontFamily: fonts.medium,
      fontWeight: '300',
      fontSize: 11,
      lineHeight: 16.5,
      color:'thinGray'
    },
    provideDetailsProfile2:{
      fontFamily: fonts.medium,
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 18,
      color:'veryDimGray'
    },
    providerVerify:{
      fontFamily: fonts.semiBold,
      fontWeight: '500',
      fontSize: 11,
      lineHeight: 16.5,
      color:'tangerine'
    },
    walletRs:{
      fontFamily: fonts.bold,
      fontWeight: '600',
      fontSize: 10,
      lineHeight: 15,
      color:'green'
    },
    walletRs2:{
      fontFamily: fonts.bold,
      fontWeight: '600',
      fontSize: 10,
      lineHeight: 15,
      color:'fireEngineRed'
    },
    planText:{
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 10,
      lineHeight: 18,
      color:'dimGray'
    },
    profileGranterText:{
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 11,
      lineHeight: 16.5,
      color:'charcoalGray'
    },
    profileGranterHide: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 8,
      lineHeight: 12,
      color: 'black'
    },
    idVerifyInput:{
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 10,
      lineHeight: 15,
      color: 'richBlack'
    },
    idVerifyInput2:{
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'darkGray2'
    },
    managerBookingtext:{
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'vermilion'
    },
    managerBookingtext2:{
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'charcoal'
    },
    managerBookingtextpending:{
      fontFamily: fonts.medium,
      fontWeight: '300',
      fontSize: 8,
      lineHeight: 12,
      color: 'limeGreen'
    },
    toggleText: {
      fontFamily: fonts.medium,
      fontWeight: '400',
      fontSize: 8,
      lineHeight:10,
      color: 'white'
    },
    sizeTwenty: {
      fontFamily: fonts.semiBold,
      fontWeight: '600',
      fontSize: 20,
      lineHeight:30,
      color: 'black'
    },
    SizeForteen: {
      fontFamily: fonts.semiBold,
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 21,
      color: 'black'
    },
    favorite: {
      fontFamily: fonts.medium,
      fontWeight: '500',
      fontSize: 8,
      lineHeight: 12,
      color: 'mutedblue'
    },
    favorite2: {
      fontFamily: fonts.medium,            
      fontWeight: '500',
      fontSize: 8,
      lineHeight: 12,
      color: 'vividpink'
    },
    Size12:{
      fontFamily: fonts.medium,            
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: 'thinBlack2'
    },
    
  },
});

export const Box = createBox(TouchableOpacity);
export const RNText = createText(Text);

export type Theme = typeof theme;
export default theme;
