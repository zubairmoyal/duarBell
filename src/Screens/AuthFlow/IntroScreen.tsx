import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import ImagePath from '../../../assets/ImagePath';
import {AppSafeAreaView, Button} from '../../Common';
import {RNText} from '../../Theme/theme';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_LOGIN} from '../../Navigation/routes';

const {width} = Dimensions.get('window');

const IntroScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialScroll, setInitialScroll] = useState(true);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      setCurrentIndex(Math.floor(value / width));
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);
  useEffect(() => {
    if (initialScroll) {
      setInitialScroll(false);
    }
  }, [currentIndex, initialScroll]);

  const slides = [
    {
      title: 'Slide 1',
      images: ImagePath.Intro1,
      dis: 'Welcome To Dourbell, Best services solutions platform for your needs, save time and effort, On-Demand services, Verified',
    },
    {
      title: 'Slide 2',
      images: ImagePath.Intro2,
      dis: 'Business listings, Booking, anytime anywhere, Nearby location and others location, Hire ecpert, Consultant, Join Now!',
    },
  ];
  const handleDotPress = index => {
    setCurrentIndex(index);
    scrollX.setValue(index * width);
  };
  const position = Animated.divide(scrollX, width);

  const onNavigate = () => {
    NavigationService.navigate(NAVIGATION_LOGIN);
  };

  return (
    <AppSafeAreaView style={styles.container}>
      <View
        style={{
          width: 200,
          height: 58,
          alignItems: 'center',
          marginTop: 80,
        }}>
        <Image source={ImagePath.DourBellLgo} />
      </View>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {slides.map((slide, index) => (
          <View key={index} style={styles.slideContainer}>
            <Image source={slide.images} />
            <RNText
              style={{
                textAlign: 'center',
                marginTop: 40,
              }}
              variant={'commonText'}>
              {slide.dis}
            </RNText>
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.pagination}>
        {slides.map((_, index) => {
          const opacity = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dot,
                {
                  opacity,
                  backgroundColor:
                    index === currentIndex ? 'transparent' : 'transparent',
                },
              ]}
              onPress={() => handleDotPress(index)}>
              {index === currentIndex && (
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 7,
                    backgroundColor: '#CD310B',
                  }}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <Button
      useGradient={true}
      style={{
        flex:1,
          height:36,
          width:345,
          borderRadius:18
      }}
        onPress={onNavigate}
        containerStyle={{
          marginBottom: 30,
          marginHorizontal: 50,
        }}
        children="GET STARTED"
      />
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#CD310B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default IntroScreen;
