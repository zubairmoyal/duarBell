import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppSafeAreaView} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {colors} from '../../Theme/Colors';
import {RNText} from '../../Theme/theme';
import ImagePath from '../../../assets/ImagePath';
import {CONTACT_DATA} from '../../Common/DummyData';

const ManageService = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };
  const renderItem = () => {
    return (
      <TouchableOpacity
        //   onPress={onSuMbit}
        activeOpacity={0.7}
        style={styles.container}>
        <View style={styles.one}>
          <View style={styles.renderImage}>
            <Image source={ImagePath.serviceMan} />
          </View>
          <View>
            <RNText variant={'categoryText'}>Mistry</RNText>
            <RNText variant={'categoryText2'}>Plumber</RNText>
          </View>
          <View style={styles.settingVIew}>
            <Image source={ImagePath.setting_fill} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem2 = () => {
    return (
      <TouchableOpacity
        //   onPress={onSuMbit}
        activeOpacity={0.7}
        style={styles.container}>
        <View style={styles.one}>
          <View style={styles.renderImage}>
            <Image source={ImagePath.serviceMan} />
            <RNText
              style={{marginTop: 4, fontWeight: '700'}}
              textAlign="center"
              variant={'myBookingCompleteText'}>
              Live
            </RNText>
          </View>
          <View>
            <RNText variant={'categoryText'}>Mistry</RNText>
            <RNText variant={'categoryText2'}>Plumber</RNText>
          </View>
          <View style={styles.settingVIew}>
            <Image source={ImagePath.setting_fill} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderButton = (index: number, text: any) => (
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
  const ContentRednerItem = ({item, index}: any) => {
    const lastindex = index === CONTACT_DATA.length - 1;

    return (
      <View
        style={{
          marginTop: 15,
          borderBottomWidth: lastindex ? 0 : 1,
          borderBottomColor: colors.lightGray,
          paddingBottom: 10,
        }}>
        <RNText variant={'notificationText'}>{item?.txt}</RNText>
        <RNText variant={'eidtProfileInputText'}>{item?.subtxt}</RNText>
      </View>
    );
  };
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={[styles.main, colors.shadow]}>
          <RNText variant={'callHistoryText'}>Main Service</RNText>

          <View>
            <FlatList data={new Array(1)?.fill('.')} renderItem={renderItem} />
          </View>
          <RNText style={{marginTop: 10}} variant={'callHistoryText'}>
            Other Service
          </RNText>
          <View>
            <FlatList data={new Array(3)?.fill('.')} renderItem={renderItem2} />
          </View>
          <RNText style={{marginTop: 10}} variant={'callHistoryText'}>
            Services Details
          </RNText>
          <View style={styles.rendercontainer}>
            {renderButton(0, 'Plumber')}
            {renderButton(1, 'Cement')}
            {renderButton(2, 'House Rent')}
          </View>
          {selectedIndex === 0 && (
            <View
              style={{
                paddingVertical: 18,
              }}>
              <Image
                style={{
                  alignSelf: 'flex-end',
                }}
                source={ImagePath.edit}
              />
              <FlatList
                data={CONTACT_DATA}
                renderItem={(item, index) => ContentRednerItem(item, index)}
              />
            </View>
          )}
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ManageService;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 8,
    marginHorizontal: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 18,
  },
  renderImage: {
    width: 96,
    borderRadius: 20,
    margin: 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  one: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingVIew: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
  rendercontainer: {
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    marginTop: 18,
  },
  bottomSlide: {
    paddingBottom: 8,
  },
});
