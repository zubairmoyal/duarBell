import {
    Image,
    ImageBackground,
    StyleSheet,
    Switch,
    TouchableOpacity,
    View,
  } from 'react-native';
  import {AppSafeAreaView, KeyBoardAware} from '.';
  import ImagePath from '../../assets/ImagePath';
  import {RNText} from '../Theme/theme';
  import {Children, useState} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import ToggleElement from 'react-native-toggle-element';
  import ToggleSwitch from './ToggleSwitch';
  import NavigationService from '../Navigation/NavigationService';
  import { NAVIGATION_CALL_LOG_SCREEN,  NAVIGATION_MESSAGE_SCREEN, NAVIGATION_NOTIFICATION_SCREEN, NAVIGATION_SEARCH_SCREEN } from '../Navigation/routes';
  
  const CommonHeaderOne = ({showLocation = true, screen}:any) => {
    const isLocationVisible = screen === 'true';
  
    const images = [
      ImagePath.Message,
      ImagePath.Notifications,
      ImagePath.DuarbellCall,
      ImagePath.DuarBellSrarch,
    ];
    const screenNames = [
      NAVIGATION_MESSAGE_SCREEN,
      NAVIGATION_NOTIFICATION_SCREEN,
      NAVIGATION_CALL_LOG_SCREEN,
      NAVIGATION_SEARCH_SCREEN,
    ];
    const handlePress = (index:any) => {
      const screenName = screenNames[index];
      NavigationService.navigate(screenName);
    };
  
    return (
      <>
        <AppSafeAreaView style={{paddingHorizontal: 12, paddingBottom: 8}}>
          <View style={styles.main}>
            <Image source={ImagePath.DourBellHeader} />
            <Image source={ImagePath.DuarBellMenu} />
          </View>
          <View style={screen ? styles.locationMain : styles.locationMain2}>
            {isLocationVisible && (
              <View style={styles.location}>
                <Image source={ImagePath.Location} />
                <RNText variant={'commonText'}>{'  '}paltanBazar</RNText>
              </View>
            )}
            <View style={styles.icon}>
              {images?.map((element, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => handlePress(index)}>
                    <Image key={index} source={element} />
                    </TouchableOpacity>
                );
              })}
            </View>
            <ToggleSwitch />
          </View>
        </AppSafeAreaView>
        <LinearGradient
          style={{
            height: 110,
          }}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={['#E851A1', '#FB7C0A']}
        />
      </>
    );
  };
  
  export default CommonHeaderOne;
  
  const styles = StyleSheet.create({
    main: {
      marginTop: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    locationMain: {
      marginTop: 12,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    locationMain2: {
      marginTop: 12,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 0.6,
    },
    icon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 0.4,
    },
    containerToggle: {
      width: 30,
      height: 20,
      borderRadius: 15,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageToggle: {
      width: 12,
      height: 12,
    },
  });
  