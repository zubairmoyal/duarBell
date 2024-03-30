import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RNText} from '../../Theme/theme';
import ImagePath from '../../../assets/ImagePath';
import {colors} from '../../Theme/Colors';
import {AirbnbRating} from 'react-native-ratings';
import CommonButton from '../../Common/CommonButton';
import LinearGradient from 'react-native-linear-gradient';

const ProviderProfileDetailItem = () => {
  const [days, setDays] = React.useState([
    {day: 'MON', isSelected: false},
    {day: 'TUE', isSelected: false},
    {day: 'WED', isSelected: false},
    {day: 'THU', isSelected: false},
    {day: 'FRI', isSelected: false},
    {day: 'SAT', isSelected: false},
    {day: 'SUN', isSelected: false},
  ]);

  const handleDaySelect = day => {
    setDays(
      days.map(currentDay =>
        currentDay.day === day
          ? {...currentDay, isSelected: !currentDay.isSelected}
          : currentDay,
      ),
    );
  };
  const linearColor = ['#CE3700', '#C40069'];
  return (
    <View
      style={{
        paddingHorizontal: 12,
        paddingVertical: 10,
      }}>
      <RNText variant={'provideDetails'}>Service Available Day</RNText>
      <View style={styles.dayContainer}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={day.isSelected ? styles.selectedDay : styles.unselectedDay}
            onPress={() => handleDaySelect(day.day)}>
            <LinearGradient
              style={[
                day.isSelected ? styles.selectedDay1 : styles.unselectedDay1,
              ]}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              colors={day?.isSelected ? linearColor : ['#ffffff', '#ffffff']}>
              <Text
                style={
                  day.isSelected
                    ? styles.selectedDayText
                    : styles.unselectedDayText
                }>
                {day.day}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
      {/* <RNText variant={'provideDetails2'}>MON TUE WED THU FRI SAT SUN</RNText> */}
      <RNText style={{marginTop: 12}} variant={'provideDetails'}>
        Service Available Day
      </RNText>
      <RNText variant={'provideDetails2'}>10:00 AM to 05:00 PM</RNText>
      <RNText style={{marginTop: 12}} variant={'provideDetails'}>
        Age
      </RNText>
      <RNText variant={'provideDetails3'}>33 years</RNText>
      <RNText style={{marginTop: 12}} variant={'provideDetails'}>
        Experience
      </RNText>
      <RNText variant={'provideDetails3'}>2 years</RNText>
      <RNText style={{marginTop: 12}} variant={'provideDetails'}>
        Language
      </RNText>
      <RNText variant={'provideDetails3'}>Hindi, English,Assamese</RNText>
      <RNText style={{marginTop: 12}} variant={'provideDetails'}>
        Service Location
      </RNText>
      <RNText variant={'provideDetails3'}>
        bakharapara,Bongaigaon,Assam,783380
      </RNText>
      <RNText style={{marginTop: 12}} variant={'provideDetails'}>
        Service charts
      </RNText>
      <RNText style={{marginTop: 12}} variant={'provideDetails'}>
        Service Location
      </RNText>
      <RNText
        style={{
          textAlign: 'left',
        }}
        variant={'provideDetails3'}>
        Description Plumber description portfolio Plumber description portfolio
        Plumber description portfolio Plumber description portfolio Plumber
        description portfolio Plumber description portfolio Plumber description
        portfolio Plumber description portfolio Plumber description portfolio
        Plumber description portfolio Plumber description portfolio Plumber
        description portfolio Plumber description portfolio Plumber description
        portfolio Plumber description portfolio Plumber description portfolio
        Plumber description
      </RNText>
      <View style={styles.imageview}>
        <RNText style={{fontWeight: '900'}} variant={'commonText'}>
          Images
        </RNText>
        <Image source={ImagePath.arrow} />
      </View>
      <View style={styles.imageview}>
        <RNText style={{fontWeight: '900'}} variant={'commonText'}>
          Videos
        </RNText>
        <Image source={ImagePath.arrow} />
      </View>
      <RNText
        style={{fontWeight: '900', marginVertical: 14}}
        variant={'commonText'}>
        Profile Granter
      </RNText>
      <View style={[styles.name, colors.shadow]}>
        <Image style={{width: 39, height: 39}} source={ImagePath.Userprofile} />
        <View>
          <RNText variant={'provideDetails2'}>Jay Dev</RNText>
          <RNText variant={'provideDetails'}>Plumber</RNText>
        </View>
      </View>
      <RNText style={{marginTop: 14}} variant={'provideDetails2'}>
        XamakAMlam’s other services
      </RNText>

      <View style={styles.serviceview}>
        <Image style={{width: 68, height: 49}} source={ImagePath.serviceMan} />
        <RNText
          style={{fontWeight: '900', marginLeft: 18}}
          variant={'callHistoryText'}>
          House Rent
        </RNText>
      </View>
      <RNText
        style={{
          fontWeight: '100',
        }}
        variant={'commonText'}>
        Review / Ratings
      </RNText>

      <View style={styles.reviewView}>
        <Image source={ImagePath.symbols_star} />
        <RNText variant={'sortByText3'}> 4.0 |</RNText>
        <RNText variant={'sortByText3'}>{'  '}1 Reviews</RNText>
      </View>

      <View style={styles.userVIew}>
        <Image style={{width: 36, height: 36}} source={ImagePath.tabUser} />
        <View style={{marginLeft: 18}}>
          <RNText variant={'commonText'}>Mintu Ray</RNText>
          <View style={{alignItems: 'flex-start'}}>
            <AirbnbRating
              reviews={['']}
              reviewSize={0}
              showRating={false}
              count={5}
              defaultRating={5}
              selectedColor={colors.orange4}
              size={10}
              // unSelectedColor={colors.charcoal}
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
          <RNText style={{}} variant={'provideDetails'}>
            Nice plumber service ......thanks
          </RNText>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <CommonButton
          nonStyle={true}
          Calltext={'Call Now'}
          isShow={true}
          style={undefined}
        />
      </View>
    </View>
  );
};

export default ProviderProfileDetailItem;

const styles = StyleSheet.create({
  imageview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '20%',
    marginTop: 18,
  },
  name: {
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 10,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 154,
    height: 62,
  },
  serviceview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  reviewView: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 16,
    height: 30,
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userVIew: {
    marginVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -4,
  },
  selectedDay: {
    backgroundColor: colors.orange4,
    borderRadius: 24,
    marginRight: 5,
    width: 35,
    height: 24,
    justifyContent: 'center',
  },
  unselectedDay: {
    backgroundColor: colors.white,
    borderRadius: 24,
    marginRight: 5,
    width: 35,
    height: 24,
    justifyContent: 'center',
  },
  selectedDay1: {
    borderRadius: 24,
    marginRight: 5,
    width: 35,
    height: 24,
    justifyContent: 'center',
  },
  unselectedDay1: {
    borderRadius: 24,
    marginRight: 5,
    width: 35,
    height: 24,
    justifyContent: 'center',
  },
  selectedDayText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 10,
    textAlign: 'center',
  },
  unselectedDayText: {
    color: '#161616',
    fontWeight: '600',
    fontSize: 10,
    textAlign: 'center',
  },
});
