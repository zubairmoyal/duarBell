import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNText} from '../../Theme/theme';
import React = require('react');
import ImagePath from '../../../assets/ImagePath';
import {colors} from '../../Theme/Colors';
import {Button} from '../../Common';
import NavigationService from '../../Navigation/NavigationService';
import {NAVIGATION_ADD_STAFF} from '../../Navigation/routes';
import Timer from './Timer';

const OptionItem = ({id}: any) => {
  const [selectedOption, setSelectedOption] = React.useState('user');
  const [accpeted, setAccepted] = React.useState(false);
  const [bookingConfirmed, setBookingConfirmed] = React.useState(false);
  const [cancelled, setCancelled] = React.useState(false);
  const [reject, setReject] = React.useState(false);
  const [completeed, setCompleted] = React.useState(false);

  const [confirm, setConfirm] = React.useState(false);
  const [showTimer, setShowTimer] = React.useState(true);


  const onAccept = () => {
    setAccepted(true);
  };

  const onBookingConfirmed = () => {
    // setBookingConfirmed(false);
    setCancelled(true);
    // setConfirm(false);

  };
  const onReject = () => {
    setReject(true);
  };


  const handleTimerEnd = () => {
    setShowTimer(false);
  };

  const onComplete = () => {
    setCompleted(true);
  };

  const onReview = () => {};

  const onConfirm = () => {
    setConfirm(true);
    // setCancelled(false);
  };

  // React.useEffect(() => {
  //   if (bookingConfirmed) {
  //     setTimeout(() => {
  //       setShowTimer(true);
  //     }, 5000);
  //   }
  // }, [bookingConfirmed]);

  return (
    <>
      <View style={styles.status}>
        <View>
          <RNText variant={'notificationText'}>Booking Task Status</RNText>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 14, alignItems: 'center'}}>
        <Image
          style={{marginRight: 5, width: 15, height: 15}}
          source={ImagePath.ei_check}
        />
        <RNText
          variant={'myBookingAttach2'}
          style={{
            color: colors.darkOrange,
          }}>
          Upcoming Schedule
        </RNText>
      </View>
      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        {accpeted || reject ? (
          <Image
            style={{marginRight: 5, width: 15, height: 15}}
            source={ImagePath.ei_check}
          />
        ) : (
          <View style={styles.circle} />
        )}
        <RNText
          variant={'myBookingAttach2'}
          style={{
            color: accpeted || reject ? colors.darkOrange : colors.charcoal,
          }}>
          Approved
        </RNText>
      </View>

      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        {bookingConfirmed || cancelled ? (
          <Image
            style={{marginRight: 5, width: 15, height: 15}}
            source={ImagePath.ei_check}
          />
        ) : (
          <View style={styles.circle} />
        )}
        <RNText
          variant={'myBookingAttach2'}
          style={{
            color:
              bookingConfirmed || cancelled
                ? colors.darkOrange
                : colors.charcoal,
          }}>
          Reject/Cancelled
        </RNText>
      </View>

      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        {!showTimer || confirm ? (
          <Image
            style={{marginRight: 5, width: 15, height: 15}}
            source={ImagePath.ei_check}
          />
        ) : (
          <View style={styles.circle} />
        )}
        <RNText
          variant={'myBookingAttach2'}
          style={{
            color: !showTimer || confirm ? colors.darkOrange : colors.charcoal,
          }}>
          Booking Confirmed
        </RNText>
      </View>

      <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
        {completeed ? (
          <Image
            style={{marginRight: 5, width: 15, height: 15}}
            source={ImagePath.ei_check}
          />
        ) : (
          <View style={styles.circle} />
        )}
        <RNText
          variant={'myBookingAttach2'}
          style={{
            color: completeed ? colors.darkOrange : colors.charcoal,
          }}>
          Completed
        </RNText>
      </View>
      {completeed ? (
        <RNText style={{marginLeft: 19}} variant={'searchInputText'}>
          at: 10 January 2024, 10:38 AM
        </RNText>
      ) : null}
      {!accpeted && !reject ? (
        <View style={styles.buttonView}>
          <Button
            onPress={onReject}
            useGradient={true}
            children="Reject"
            style={{
              width: 107,
              height: 27,
              borderRadius: 18,
            }}
          />
          <TouchableOpacity onPress={onAccept} style={styles.acceptView}>
            <RNText variant="loginText2">Accept</RNText>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{marginTop: bookingConfirmed ? 10 : 15}}>
          {bookingConfirmed ? null : (
            <RNText style={{fontWeight: '800'}} variant="commonText">
              Work Staff
            </RNText>
          )}
          {confirm ? null : bookingConfirmed ? null : id === '1' ? null : (
            <Button
              onPress={() => NavigationService.navigate(NAVIGATION_ADD_STAFF)}
              children="Add Staff"
              useGradient={true}
              containerStyle={{
                alignSelf: 'flex-start',
              }}
              style={{
                width: 93,
                height: 19,
                borderRadius: 11,
              }}
            />
          )}
          {/* {bookingConfirmed ? null : (
            <Button
              onPress={() => NavigationService.navigate(NAVIGATION_ADD_STAFF)}
              children="Add Staff"
              useGradient={true}
              containerStyle={{
                alignSelf: 'flex-start',
              }}
              style={{
                width: 93,
                height: 19,
                borderRadius: 11,
              }}
            />
          )} */}
          {id === '1' ? (
            <View
              style={
                {
                  // marginTop: 15,
                }
              }>
              {/* <RNText
                style={{fontWeight: '800', marginLeft: 3}}
                variant="commonText">
                Work Staff
              </RNText> */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image
                  style={{width: 59, height: 59}}
                  source={ImagePath.Userprofile}
                />
                <View
                  style={{
                    marginLeft: 16,
                  }}>
                  <RNText style={{fontWeight: '800'}} variant="callHistoryText">
                    XamakAMlam
                  </RNText>
                  <RNText variant="sortByText">Plumber</RNText>
                  <RNText variant={'planText'}>0 years Old</RNText>
                </View>
              </View>
            </View>
          ) : null}

          {cancelled ? (
            <>
              {confirm ? null : (
                <>
                  <RNText
                    style={{marginVertical: 18}}
                    variant={'buttonTextSemi'}>
                    Please confirmed your Booking!
                  </RNText>
                  <RNText variant={'notificationText'}>
                    Note: Once you confirmed the booking status you cannot
                    cancel this booking anymore.
                  </RNText>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '75%',
                      marginTop: 16,
                    }}>
                    <TouchableOpacity
                      onPress={onConfirm}
                      style={styles.messageButton}>
                      <RNText variant={'buttonText'}>Confirm</RNText>
                    </TouchableOpacity>
                    <Button
                      onPress={onReject}
                      useGradient={true}
                      children="Reject"
                      style={{
                        width: 107,
                        height: 27,
                        borderRadius: 18,
                      }}
                    />
                  </View>
                </>
              )}
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: bookingConfirmed ? 10 : 18,
                }}>
                <Image
                  style={{width: 59, height: 59}}
                  source={ImagePath.Userprofile}
                />
                <View
                  style={{
                    marginLeft: 16,
                  }}>
                  <RNText style={{fontWeight: '800'}} variant="callHistoryText">
                    XamakAMlam
                  </RNText>
                  <RNText variant="sortByText">Plumber</RNText>
                  <RNText variant={'planText'}>0 years Old</RNText>
                </View>
              </View> */}
              {confirm ? (
                <>{showTimer ? <Timer onTimerEnd={handleTimerEnd} /> : null}</>
              ) : // <Button
              //   onPress={onComplete}
              //   children="Complete"
              //   useGradient={true}
              //   containerStyle={{
              //     marginTop: 30,
              //   }}
              //   style={{
              //     flex: 1,
              //     height: 35,
              //     borderRadius: 18,
              //   }}
              // />
              id === '1' ? null : cancelled ? null : (
                
                <>
                  <RNText
                    style={{marginVertical: 8}}
                    variant={'buttonTextSemi'}>
                    Please confirmed your Booking!
                  </RNText>
                  <RNText variant={'notificationText'}>
                    Note: Once you confirmed the booking status you cannot
                    cancel this booking anymore.
                  </RNText>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '75%',
                      marginTop: 16,
                    }}>
                    <TouchableOpacity
                      onPress={onConfirm}
                      style={styles.messageButton}>
                      <RNText variant={'buttonText'}>Confirm</RNText>
                    </TouchableOpacity>
                    <Button
                      onPress={onReject}
                      useGradient={true}
                      children="Reject"
                      style={{
                        width: 107,
                        height: 27,
                        borderRadius: 18,
                      }}
                    />
                  </View>
                </>
              )}
              {showTimer ? null /* (
                <Timer onTimerEnd={handleTimerEnd} />
              ) */ : (
                <>
                  {completeed ? (
                    <View
                      style={{
                        marginTop: 15,
                      }}>
                      <Button
                        onPress={onReview}
                        children="Reviews"
                        useGradient={true}
                        containerStyle={{
                          marginTop: id ? 30 : 45,
                        }}
                        style={{
                          flex: 1,
                          height: 35,
                          borderRadius: 18,
                        }}
                      />
                    </View>
                  ) : (
                    <Button
                      onPress={!showTimer ? onComplete : undefined}
                      children={!showTimer ? 'Complete' : 'Completed'}
                      useGradient={true}
                      disabled={!showTimer ? false : true}
                      containerStyle={{
                        marginTop: id ? 30 : 45,
                      }}
                      style={{
                        flex: 1,
                        height: 35,
                        borderRadius: 18,
                      }}
                    />
                  )}
                  {!showTimer ? null : (
                    <RNText
                      style={{marginTop: 13, marginLeft: 4}}
                      variant={'commonText'}>
                      Waiting for your client approved!
                    </RNText>
                  )}
                </>
              )}
            </>
          ) : (
            <Button
              onPress={onBookingConfirmed}
              children="Booking Confirmed"
              useGradient={true}
              containerStyle={{
                marginTop: id ? 30 : 45,
              }}
              style={{
                flex: 1,
                height: 35,
                borderRadius: 18,
              }}
            />
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
  },
  button: {
    height: 21,
    width: 81,
    borderRadius: 12,
    backgroundColor: colors.limeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 12,
  },
  acceptView: {
    width: 107,
    height: 27,
    borderRadius: 18,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 11,
    height: 11,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.charcoal,
    marginRight: 5,
    marginLeft: 3,
  },
  messageButton: {
    height: 27,
    width: 107,
    borderRadius: 18,
    backgroundColor: colors.limeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
});

export default OptionItem;
