import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../Theme/Colors';
import {RNText} from '../Theme/theme';
import Cross_OutLine from '../../assets/Image/cross_outline.svg';
import DropDown from './DropDown';
import {Button} from '.';

const CancelBookingModal = ({modalVisible, setModalVisible}: any) => {
  const [verifyItem, setVerifyItem] = useState('');
  const onHandle = (item: any) => {
    setVerifyItem(item.label);
    // item => {
    //   setValue(item.value);
    //   setIsFocus(false);
    // }
  };

  const onClick = () => {
    console.log('click');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalContainer}>
        <View
          style={styles.main}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              alignItems: 'flex-end',
            }}>
            <Cross_OutLine />
          </TouchableOpacity>
          <RNText
            variant={'SizeForteen'}>
            Are you sure? you want to cancel {'\n'} this booking!
          </RNText>
          <View style={styles.border} />
          <RNText style={{marginTop: 23}} variant={'buttonTextSemi'}>
            Note:
            <RNText variant={'commonText'}>
              5% Cancellation charge will be deducted if the booking is
              cancelled after one hours.
            </RNText>
          </RNText>
          <RNText style={{marginTop: 23}} variant={'commonText'}>
            Cancel reason
          </RNText>
          <DropDown onChange={onHandle} />
          <View
            style={{
              marginTop: 23,
            }}>
            <RNText variant={'idVerifyInput2'}>Message (Optional)</RNText>
            <TextInput
              cursorColor={colors.gray}
              multiline={true}
              placeholder="Enter message"
              placeholderTextColor={colors.richBlack}
              style={styles.input}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 170,
            }}>
            <Button
              onPress={onClick}
              activeOpacity={0.5}
              children="Confirm"
              useGradient={true}
              style={{
                height: 35,
                borderRadius: 18,
                flex: 1,
              }}
            />
            <TouchableOpacity
              style={{
                marginTop: 5,
              }}>
              <RNText
                style={{textDecorationLine: 'underline'}}
                variant={'eidtProfileCancel'}>
                Cancel
              </RNText>
            </TouchableOpacity>
            {/* <RNText textAlign="center" variant={'categoryText2'}>
            14 Minutes 33 Second
          </RNText>
          <TouchableOpacity
            style={{
              marginTop: 5,
            }}>
            <RNText
              style={{textDecorationLine: 'underline'}}
              variant={'eidtProfileCancel'}>
              Back
            </RNText>
          </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CancelBookingModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  main:{
    width:"93%",
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    height:650
  },
  border: {
    borderWidth: 0.5,
    borderColor: colors.gray3,
    marginTop: 23,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray3,
    height: 107,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 12,
  },
});
