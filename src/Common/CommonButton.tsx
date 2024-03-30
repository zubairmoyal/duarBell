import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RNText } from '../Theme/theme'
import ImagePath from '../../assets/ImagePath'
import { colors } from '../Theme/Colors'
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../Navigation/NavigationService'
import { NAVIGATION_CALLHISTORY } from '../Navigation/routes'

const CommonButton = ({isShow,Calltext,style,nonStyle,onpress}) => {
  const linearColor = ['#CE3700', '#C40069'] 

  return (
    <View style={{alignItems: 'center', flexDirection: 'row',}}>
            <TouchableOpacity onPress={()=>NavigationService.navigate(NAVIGATION_CALLHISTORY)}
              style={[nonStyle ?styles.defaultButton2 : styles.defaultButton, style]}>
              <Image style={[nonStyle ? styles.img : undefined,{tintColor: 'white'}]} source={ImagePath.phone} />
              <RNText style={[nonStyle ? styles.txt : undefined,{marginLeft: 5}]} variant={nonStyle ?'myBookingButtonText' :'callNow'}>
                {Calltext}
              </RNText>
            </TouchableOpacity>
            {isShow ? 
            <TouchableOpacity 
            onPress={onpress}
             style={[nonStyle ?styles.gradientVIew2 :styles.gradientVIew, style]}
            >
            <LinearGradient 
             style={[nonStyle ?styles.gradientButton2 :styles.gradientButton]}
            
            
            start={{x: 0, y: 0.5}}

             end={{x: 1, y: 0.5}}
             colors={linearColor} >
              <Image style={[nonStyle ? styles.img : undefined,{tintColor: 'white',width:10,height:10  }]} source={ImagePath.tabWallet}/>
                <RNText style={[nonStyle ? styles.txt : undefined,{marginLeft: 5}]} variant={nonStyle ?'myBookingButtonText' :'callNow'}>
                Book Now
                </RNText>
             </LinearGradient>
             </TouchableOpacity>
             :null}

          </View>
  )
}

export default CommonButton

const styles = StyleSheet.create({
  defaultButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.limeGreen,
    // marginRight: 10,
  },
  defaultButton2: {
    width:98,
    height:24,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: colors.limeGreen,
    marginRight: 10,
  },
  gradientVIew:{
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  gradientVIew2:{
    width:98,
    height:24,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
  },
  gradientButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  gradientButton2: {
    width:98,
    height:24,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
  },
  img:{
    width:10,
    height:10
  },
  txt:{

  },
})