import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {RNText} from '../Theme/theme';
import {colors} from '../Theme/Colors';
import Video from 'react-native-video';

export default function ImagePickerComponent({
  onImageSelect,
  onVideoSelect,
  picker,
}: any) {
  const [image, setImage] = React.useState(null);
  const [video, setVideo] = React.useState('');
  console.log(video, 'videovideovideovideo');

  const handleOpenPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        if (onImageSelect) {
          onImageSelect(image.path);
        }
        setImage(image.path);
      })
      .catch(error => {
        console.log('Image picker error:', error);
      });
  };

  const handleOpenVideo = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
      width: 30,
      height: 40,
    })
      .then(Video => {
        if (onVideoSelect) {
          onVideoSelect(Video.path);
        }
        setVideo(Video.path);
      })
      .catch(error => {
        console.log('Image picker error:', error);
      });
  };

  const handleOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log('Camera error:', error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        {picker ? (
          <>
            {image ? (
              <Image source={{uri: image}} style={styles.image} />
            ) : (
              <TouchableOpacity
                onPress={handleOpenPicker}
                style={{
                  width: 68,
                  height: 22,
                  borderRadius: 5,
                  backgroundColor: colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <RNText variant={'commonText'}>Browse</RNText>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <View>
            {video ? (
              <View
                style={{
                  width: 50,
                  height: 40,
                }}>
                <Video
                  style={{width: 50, height: 40}}
                  resizeMode="contain"
                  // controls={true}
                  fullscreen={true}
                  muted={true}
                  posterResizeMode={'contain'}
                  fullscreenOrientation={'all'}
                  hideShutterView={true}
                  source={{uri: video}}
                />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleOpenVideo}
                style={{
                  width: 68,
                  height: 22,
                  borderRadius: 5,
                  backgroundColor: colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <RNText variant={'commonText'}>Browse</RNText>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 40,
    borderRadius: 4,
    // marginVertical: 20,
  },
});
