import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonHeaderOne from '../../Common/CommonHeaderOne';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {RNText} from '../../Theme/theme';
import {colors} from '../../Theme/Colors';
import GranterList from './GranterList';

const ProfileGranter = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
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
  return (
    <AppSafeAreaView>
      <CommonHeader />
      <CommonScrollVIew>
        <View style={[styles.main, colors.shadow]}>
          <RNText variant={'callHistoryText'}>
            {selectedIndex === 0 ? 'Profile Granter' : 'My Stuff'}
          </RNText>
          <View style={{alignSelf: 'flex-start'}}>
            <Button
              children={selectedIndex === 0 ? 'Add' : 'Add Staff'}
              useGradient={true}
              style={styles.addButton}
            />
          </View>
          <View style={styles.container}>
            {renderButton(0, 'Active Granter')}
            {renderButton(1, 'Pending request')}
          </View>
          {selectedIndex === 0 && (
            <>
              <View style={styles.renderView}>
                <View style={styles.nameView}>
                  <RNText variant={'commonText'}>Name</RNText>
                  <View style={styles.addedView}>
                    <RNText variant={'commonText'}>Added</RNText>
                    <RNText variant={'commonText'}>Status</RNText>
                    <RNText variant={'commonText'}>Action</RNText>
                  </View>
                </View>
              </View>
              <FlatList
                data={new Array(6)?.fill(',')}
                renderItem={() => <GranterList selectedIndex={selectedIndex} />}
              />
            </>
          )}
          {selectedIndex === 1 && (
            <>
              <View style={styles.renderView}>
                <View style={styles.nameView2}>
                  <RNText variant={'commonText'}>Name</RNText>
                  <View style={styles.addedView2}>
                    <RNText variant={'commonText'}>Availability</RNText>
                    <RNText variant={'commonText'}>Status</RNText>
                    <RNText variant={'commonText'}>Action</RNText>
                  </View>
                </View>
              </View>
              <FlatList
                data={new Array(2)?.fill(',')}
                renderItem={() => <GranterList selectedIndex={selectedIndex} />}
              />
            </>
          )}
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ProfileGranter;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 8,
    marginHorizontal: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
  },
  addButton: {
    width: 82,
    height: 20,
    borderRadius: 11,
  },
  container: {
    // flex: 1,
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
  renderView: {
    marginTop: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray3,
    paddingBottom: 8,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.2,
  },
  nameView2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.2,
  },
  addedView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.6,
  },
  addedView2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.7,
    marginLeft: 18,
  },
});
