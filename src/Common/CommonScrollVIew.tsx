import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export interface CommonScrollViewProps {
    children?: any;
  }

const CommonScrollVIew = ({children} : CommonScrollViewProps) => {
  const [scrollViewTop, setScrollViewTop] = useState(-55);
//   useEffect(()=> {},[scrollViewTop])

  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const {y} = contentOffset;
    setScrollViewTop(y > 80 ? -78 : -55);
  };
  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[-1]}
      style={{
        top: scrollViewTop,
        zIndex: 999,
      }}>
        {children}
      </ScrollView>
  );
};

export default CommonScrollVIew;

const styles = StyleSheet.create({});
