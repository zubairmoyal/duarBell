import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RNText } from '../Theme/theme'
import ImagePath from '../../assets/ImagePath'
import { colors } from '../Theme/Colors'
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../Navigation/NavigationService'
import { NAVIGATION_CALLHISTORY } from '../Navigation/routes'

const CommonButton = ({isShow,Calltext}) => {
  const linearColor = ['#CE3700', '#C40069'] 

  return (
    <View style={{alignItems: 'center', flexDirection: 'row',}}>
            <TouchableOpacity onPress={()=>NavigationService.navigate(NAVIGATION_CALLHISTORY)}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
                justifyContent: 'center',
                backgroundColor: colors.limeGreen,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Image style={{tintColor: 'white'}} source={ImagePath.phone} />
              <RNText style={{marginLeft: 5}} variant={'callNow'}>
                {Calltext}
              </RNText>
            </TouchableOpacity>
            {isShow ? 
            <TouchableOpacity 
             style={{
              paddingVertical: 5,
              paddingHorizontal: 15,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 20,
            }}
            >
            <LinearGradient 
             style={{
              paddingVertical: 5,
              paddingHorizontal: 15,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 20,}}
            
            
            start={{x: 0, y: 0.5}}

             end={{x: 1, y: 0.5}}
             colors={linearColor} >
              <Image style={{tintColor: 'white',width:10,height:10  }} source={ImagePath.tabWallet}/>
                <RNText style={{marginLeft: 5}} variant={'callNow'}>
                Book Now
                </RNText>
             </LinearGradient>
             </TouchableOpacity>
             :null}

          </View>
  )
}

export default CommonButton

const styles = StyleSheet.create({})