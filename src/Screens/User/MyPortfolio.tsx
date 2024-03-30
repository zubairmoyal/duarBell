import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppSafeAreaView, Button} from '../../Common';
import CommonHeader from '../../Common/CommonHeader';
import CommonScrollVIew from '../../Common/CommonScrollVIew';
import {colors} from '../../Theme/Colors';
import {RNText} from '../../Theme/theme';
import ImagePickerComponent from '../../Common/ImagePickerComponent';
import CancelBookingModal from '../../Common/CancelBookingModal';

const MyPortfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImagePath, setSelectedImagePath] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

  const handleImageSelect = imagePath => {
    setSelectedImagePath(imagePath);
  };

  const handleVideoSelect = () => {};

  const onModel = () => {
    setModalVisible(true);
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
    <>
      <AppSafeAreaView>
        <CommonHeader />
        <CommonScrollVIew>
          <View style={[styles.main, colors.shadow]}>
            <View style={styles.container}>
              {renderButton(0, 'Bridal Mackup')}
              {renderButton(1, 'Cake Seller')}
              {renderButton(2, 'House Rent')}
            </View>
            {selectedIndex === 0 && (
              <View
                style={{
                  marginTop: 15,
                  alignItems: 'flex-start',
                }}>
                <RNText variant={'callHistoryText'}>Description</RNText>
                <Button
                  onPress={onModel}
                  containerStyle={{}}
                  textStyle={{
                    fontWeight: '600',
                    fontSize: 10,
                    lineHeight: 15,
                    marginTop: 2,
                  }}
                  children="Add Details"
                  useGradient={true}
                  style={{
                    width: 93,
                    height: 18,
                    borderRadius: 11,
                    marginLeft: -3,
                  }}
                />
                <View style={styles.imageView}>
                  <View>
                    <RNText
                      style={{fontWeight: '700'}}
                      variant={'myBookingDate'}>
                      Upload Image
                    </RNText>
                    <RNText
                      style={{
                        width: 200,
                      }}
                      numberOfLines={1}
                      variant={'planText'}>
                      {/* {selectedImagePath */}
                      {/* ? selectedImagePath:  */}
                      pdf, xls, png, jpg, doc
                      {/* } */}
                    </RNText>
                  </View>
                  <ImagePickerComponent
                    picker={true}
                    onImageSelect={handleImageSelect}
                  />
                </View>
                <View style={styles.imageView}>
                  <View>
                    <RNText
                      style={{fontWeight: '700'}}
                      variant={'myBookingDate'}>
                      Upload Video
                    </RNText>
                    <RNText
                      style={{
                        width: 200,
                      }}
                      numberOfLines={1}
                      variant={'planText'}>
                      {/* {selectedImagePath */}
                      {/* ? selectedImagePath:  */}
                      mp4
                      {/* } */}
                    </RNText>
                  </View>
                  <ImagePickerComponent
                    picker={false}
                    onVideoSelect={handleVideoSelect}
                  />
                </View>
              </View>
            )}
          </View>
        </CommonScrollVIew>
      </AppSafeAreaView>
      <CancelBookingModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default MyPortfolio;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 12,
    paddingVertical: 18,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    height: 570,
    elevation: 6,
    marginBottom: 10,
    borderRadius: 8,
  },
  container: {
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  bottomSlide: {
    paddingBottom: 8,
  },
  imageView: {
    flexDirection: 'row',
    backgroundColor: colors.fadeGray,
    height: 45,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 22,
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
});
