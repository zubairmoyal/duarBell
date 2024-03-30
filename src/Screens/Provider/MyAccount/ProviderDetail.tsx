import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppSafeAreaView, Button} from '../../../Common';
import CommonHeader from '../../../Common/CommonHeader';
import CommonScrollVIew from '../../../Common/CommonScrollVIew';
import {colors} from '../../../Theme/Colors';
import ImagePath from '../../../../assets/ImagePath';
import {Image} from 'react-native-svg';
import {RNText} from '../../../Theme/theme';
import ImagePickerComponent from '../../../Common/ImagePickerComponent';

const ProviderDetail = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImagePath, setSelectedImagePath] = useState('');

  const handlePress = (index:number) => {
    setSelectedIndex(index);
  };


  const handleImageSelect = imagePath => {
    setSelectedImagePath(imagePath);
  };

const handleVideoSelect = () => {

}

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
        <View style={[styles.first, colors.shadow]}>
          <>
          <View style={styles.container}>
            {renderButton(0, 'Reviews')}
            {renderButton(1, 'Pending reviews')}
            {renderButton(2, 'House Rent')}
          </View>
          {selectedIndex === 0 && (
              <View style={styles.ContantView}>
                <RNText variant={'callHistoryText'}>Description</RNText>
                <Button children='Add Details' useGradient={true} style={{
                  width:97,
                  height:20,
                   borderRadius:11,
                   marginLeft:-3
                   }} />
                
                <View
                style={styles.imageView}>
                <View>
                  <RNText style={{fontWeight: '700'}} variant={'myBookingDate'}>
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
                <ImagePickerComponent picker={true} onImageSelect={handleImageSelect} />
              </View>


              <View
                style={styles.imageView}>
                <View>
                  <RNText style={{fontWeight: '700'}} variant={'myBookingDate'}>
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
                <ImagePickerComponent picker={false} onVideoSelect={handleVideoSelect} />
              </View>


              </View>
            )}
          </>
        </View>
      </CommonScrollVIew>
    </AppSafeAreaView>
  );
};

export default ProviderDetail;

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
  ContantView: {
    marginTop: 15,
    alignItems:'flex-start'
  },
  container: {
    // flex: 1,
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  bottomSlide: {
    paddingBottom: 8,
  },
  imageView:{
    flexDirection: 'row',
    backgroundColor: colors.fadeGray,
    height: 45,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 22,
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
  }
});
