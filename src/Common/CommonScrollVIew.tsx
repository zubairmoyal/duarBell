import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../../assets/ImagePath';

export interface CommonScrollViewProps {
  children?: any;
}

const CommonScrollVIew = ({children}: CommonScrollViewProps) => {
  const [scrollViewTop, setScrollViewTop] = useState(0);

  useEffect(() => {}, [scrollViewTop]);

  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const {y} = contentOffset;
    if (y > 0) {
      setScrollViewTop(1);
    } else {
      setScrollViewTop(0);
    }
    // setScrollViewTop(y > 0 ? 0 : 0);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <ImageBackground
          style={{height: 78,width:"100%"}}
          source={ImagePath.CommonBackgroundImage}></ImageBackground>
      </View>
      <View style={{marginTop: scrollViewTop == 1 ? 0 : 26}}>
        <ScrollView
          onScroll={handleScroll}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          // stickyHeaderIndices={[0]}
        >
          {children}
        </ScrollView>
      </View>
    </View>
    // <ScrollView
    //   onScroll={handleScroll}
    //   scrollEventThrottle={16}
    //   showsVerticalScrollIndicator={false}
    //   stickyHeaderIndices={[-1]}
    //   contentContainerStyle={{
    //     flexGrow:1,
    //   }}
    //   style={{
    //     top: scrollViewTop,
    //     zIndex: 999,
    //   }}>
    //     <View style={[styles.header, { marginTop: scrollViewTop }]}>
    //      <LinearGradient
    //   style={{
    //     height: 78,
    //   }}
    //   start={{x: 0, y: 0.5}}
    //   end={{x: 1, y: 0.5}}
    //   colors={['#E851A1', '#FB7C0A']}
    // />

    //     </View>
    //     <View style={{marginTop:-55}}>
    //   {children}
    //   </View>
    // </ScrollView>
  );
};

export default CommonScrollVIew;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // marginTop:8
    // zIndex: 999, // Adjust the height of the header as needed
  },
});
