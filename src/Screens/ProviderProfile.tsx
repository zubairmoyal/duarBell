import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppSafeAreaView, Button} from '../Common';
import CommonHeader from '../Common/CommonHeader';
import CommonScrollVIew from '../Common/CommonScrollVIew';
import ImagePath from '../../assets/ImagePath';
import {SliderBox} from 'react-native-image-slider-box';
import {colors} from '../Theme/Colors';
import {RNText} from '../Theme/theme';
import ProviderProfileItem from './User/ProviderProfileItem';

const images = [ImagePath.homeImage, ImagePath.homeImage, ImagePath.homeImage];
const ProviderProfile = () => {
  const [formData, setFormData] = useState({
    Username: 'Pritam',
    BusinessName: 'Prinkz Balmazuum',
    Fullname: 'Pritam Saha',
    Gender: 'Male',
    Language: 'Hindi,English,Assamese',
  });
  const renderCustomItem = ({item, index}: any) => {
    return (
      <View
        style={{
          width: '92.8%',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          marginTop: -5,
        }}>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          source={ImagePath.banner2}
        />
      </View>
    );
  };
  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  return (
    <AppSafeAreaView style={{marginBottom:150}}>
      <CommonHeader />
      <CommonScrollVIew>
        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 13,
            borderRadius: 9,
            elevation: 3,
            marginBottom: 2,
          }}>
          <View>
            <SliderBox
              images={images}
              onCurrentImagePressed={(index: any) =>
                console.warn(`image ${index} pressed`)
              }
              autoplay
              //   activeOpacity={1}
              resizeMethod={'resize'}
              resizeMode={'cover'}
              // paginationBoxVerticalPadding={-40}
              dotColor="transparent"
              inactiveDotColor="transparent"
              dotStyle={null}
              renderItem={renderCustomItem}
            />
          </View>
          <View
            style={{
              padding: 10,
              borderRadius: 9,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image source={ImagePath.Userprofile} />
              <View
                style={{
                  flex: 0.9,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RNText variant={'categoryText2'}>Pinkz Balmazuum</RNText>
                  <Image source={ImagePath.verified} />
                </View>
                <RNText variant={'sortByText'}>Plumber</RNText>
                <RNText variant={'sortByText2'}>
                  Joined - 04 December 2023
                </RNText>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            marginTop: 18,
            marginHorizontal: 13,
            padding: 12,
            borderRadius: 9,
            marginBottom: 3,
            elevation: 3,
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
            }}>
            <Image source={ImagePath.edit} />
          </TouchableOpacity>

          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'notificationText'}>
            Username
          </RNText>

          <TextInput
            cursorColor={colors.gray}
            style={styles.input}
            value={formData?.Username}
            onChangeText={(text: any) => handleInputChange('Username', text)}
          />
          <View>
            <RNText
              style={{
                marginTop: 20,
              }}
              variant={'notificationText'}>
              Business Name
            </RNText>

            <TextInput
              cursorColor={colors.gray}
              style={styles.input}
              value={formData?.BusinessName}
              onChangeText={(text: any) =>
                handleInputChange('BusinessName', text)
              }
            />
            <View
              style={{alignSelf: 'flex-end', position: 'absolute', bottom: 25}}>
              <RNText variant={'providerVerify'}>Verified</RNText>
            </View>
          </View>
          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'notificationText'}>
            Fullname
          </RNText>

          <TextInput
            cursorColor={colors.gray}
            style={styles.input}
            value={formData?.Fullname}
            onChangeText={(text: any) => handleInputChange('Fullname', text)}
          />
          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'notificationText'}>
            Gender
          </RNText>

          <TextInput
            cursorColor={colors.gray}
            style={styles.input}
            value={formData?.Gender}
            onChangeText={(text: any) => handleInputChange('Gender', text)}
          />
          <RNText
            style={{
              marginTop: 20,
            }}
            variant={'notificationText'}>
            Language
          </RNText>

          <TextInput
            cursorColor={colors.gray}
            style={styles.input}
            value={formData?.Language}
            onChangeText={(text: any) => handleInputChange('Language', text)}
          />
          <View
            style={{
              marginBottom: 12,
              marginTop: 20,
            }}>
            <RNText variant={'notificationText'}>Date of Birth</RNText>
            <RNText variant={'eidtProfileInputText'}>01/12/2005</RNText>
          </View>
        </View>
        <View
            style={{
              flex:1,
            }}>
           <ProviderProfileItem />
          </View>
          <Button children='LOGOUT' useGradient={true} style={styles.button} />
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ProviderProfile;

const styles = StyleSheet.create({
  input: {
    height: 35,
    color: colors.black,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray2,
    marginLeft: -3,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 4,
  },
  button:{
    flex:1,
    borderRadius:18,
    height:35,
     marginHorizontal:13,
     marginTop:40,
    }
});
