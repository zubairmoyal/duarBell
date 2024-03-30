import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RNText} from '../../Theme/theme';
import {colors} from '../../Theme/Colors';
import ProfileGranter from '../../../assets/Image/profileGranter.svg';
import Service3 from '../../../assets/Image/service3.svg';
import Users2 from '../../../assets/Image/users2.svg';
import Info from '../../../assets/Image/info.svg';
import Starr from '../../../assets/Image/starr.svg';

const data = [
  {id: '1', image: <Starr />, title: 'Rating & Review'},
  {id: '2', image: <ProfileGranter />, title: 'Profile Granter'},
  {id: '3', image: <Service3 />, title: 'Manage Service'},
  {id: '4', image: <Users2 />, title: 'Manage Staff'},
  {
    id: '5',
    image: <Service3 />,
    title: 'Active Plan',
    icon: <Info />,
    text: 'Diamond / Validity Monthly',
  },
];

const ActivePlans = () => {
  const transformedData = [];
  for (let i = 0; i < data.length; i += 2) {
    const row = data.slice(i, i + 2);
    transformedData.push(row);
  }
  const RenderItem = ({item}: any) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 25,}}>
        {item.map(({id, image, title, icon, text}: any) => (
          <View
            key={id}
            style={{flex: 1, alignItems: 'center', marginHorizontal: 8}}>
            {image}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <RNText
                style={{marginTop: 14}}
                textAlign="center"
                variant={'commonText'}>
                {title}
              </RNText>
              <View
                style={{
                  marginTop: 12,
                  marginLeft: 2,
                }}>
                {icon}
              </View>
            </View>
            <RNText variant={'CallHistoryDate'}>{text}</RNText>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={transformedData}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ActivePlans;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 12,
    borderRadius: 8,
    marginBottom: 7,
    elevation: 3,
    marginTop: 15,
    paddingTop:25
  },
});
