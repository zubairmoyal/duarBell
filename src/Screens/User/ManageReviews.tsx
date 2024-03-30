import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../Theme/Colors';
import {RNText} from '../../Theme/theme';
import {AppSafeAreaView} from '../../Common';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import CommonHeader from '../../Common/CommonHeader';
import ImagePath from '../../../assets/ImagePath';
import {AirbnbRating} from 'react-native-ratings';

const ManageReviews = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handlePress = (index: any) => {
    setSelectedIndex(index);
  };

  const renderButton = (index: any, text: any) => (
    <TouchableOpacity
      onPress={() => handlePress(index)}
      style={[
        styles.bottomSlide,
        {
          borderBottomWidth: selectedIndex === index ? 1 : 0,
          borderBottomColor:
            selectedIndex === index ? colors.orange : colors.black,
          marginHorizontal: index === 1 ? 12 : 0,
        },
      ]}>
      <RNText variant={selectedIndex === index ? 'loginHere' : 'commonText'}>
        {text}
      </RNText>
    </TouchableOpacity>
  );
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setSelectedRating(i)}>
          <Image
            source={ImagePath.symbols_star}
            style={{
              width: 12,
              height: 12,
              tintColor: i <= selectedRating ? 'gold' : colors.charcoal,
            }}
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={[styles.first, colors.shadow]}>
          <View>
            <View style={styles.container}>
              {renderButton(0, 'Reviews')}
              {renderButton(1, 'Pending reviews')}
            </View>

            {selectedIndex === 0 && (
              <View style={styles.ContantView}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={ImagePath.Userprofile} />
                  <View style={{marginLeft: 20}}>
                    <View style={{alignItems: 'flex-start'}}>
                      <RNText variant={'categoryText2'}>Uttam Ray</RNText>
                      <AirbnbRating
                        reviews={['']}
                        reviewSize={0}
                        showRating={false}
                        count={5}
                        defaultRating={3}
                        size={14}
                        unSelectedColor={colors.charcoal}
                        isDisabled
                        // starImage={ImagePath.symbols_star}
                        starContainerStyle={{
                          marginLeft: -4,
                        }}
                        ratingContainerStyle={{
                          marginTop: 0,
                          paddingTop: 0,
                        }}
                      />
                    </View>
                    <RNText style={{marginTop: 7}} variant={'commonText'}>
                      Nice service thanks
                    </RNText>
                  </View>
                </View>
              </View>
            )}
            {selectedIndex === 1 && (
              <View style={styles.ContantView}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={ImagePath.Userprofile} />
                  <View style={{marginLeft: 20,alignItems:'flex-start'}}>
                    <RNText variant={'categoryText2'}>Uttam Ray</RNText>
                    <AirbnbRating
                        reviews={['']}
                        reviewSize={0}
                        showRating={false}
                        count={5}
                        defaultRating={3}
                        size={14}
                        unSelectedColor={colors.charcoal}
                        isDisabled
                        // starImage={ImagePath.symbols_star}
                        starContainerStyle={{
                          marginLeft: -4,
                        }}
                        ratingContainerStyle={{
                          marginTop: 0,
                          paddingTop: 0,
                        }}
                      />
                    <RNText style={{marginTop: 7}} variant={'commonText'}>
                      Nice service thanks
                    </RNText>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <RNText variant={'buttonText'}>Publish</RNText>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.7} style={styles.button2}>
                    <RNText variant={'buttonText'}>Reject</RNText>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ManageReviews;

const styles = StyleSheet.create({
  first: {
    backgroundColor: colors.white,
    padding: 21,
    marginHorizontal: 12,
    borderRadius: 9,
    marginBottom: 10,
    elevation: 3,
    height: 550,
  },
  container: {
    // flex: 1,
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  ContantView: {
    marginTop: 15,
  },
  bottomSlide: {
    paddingBottom: 8,
  },
  button: {
    height: 27,
    borderRadius: 18,
    backgroundColor: colors.limeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 98,
  },
  button2: {
    height: 27,
    borderRadius: 18,
    backgroundColor: colors.redpink,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 95,
    marginLeft: 12,
  },
});
