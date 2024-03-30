import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RNText} from '../../Theme/theme';
import {TouchableOpacityView} from '../../Common';

const Timer = ({ onTimerEnd }) => {
  const initialMinutes = 0; //28
  const initialSeconds = 3;  //24
  const initialTime = initialMinutes * 0 + initialSeconds;
  const [timeElapsed, setTimeElapsed] = useState(initialTime);
  const linearColor = ['#CE3700', '#C40069'];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeElapsed(prevTime => {
  //       if (prevTime > 0) {
  //         return prevTime - 1;
  //       } else {
  //         clearInterval(timer);
  //         if (onTimerEnd) {
  //           x();
  //         }
  //         return 0;
  //       }
  //     });
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [timeElapsed, initialTime,onTimerEnd]);

  // const formatTime = time => {
  //   const minutes = Math.floor((time % 3600) / 60);
  //   const seconds = time % 60;
  //   return `${minutes} Minutes ${seconds} Seconds`;
  // };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          setTimeout(() => { // Call onTimerEnd after 3 seconds
            if (onTimerEnd) {
              onTimerEnd();
            }
          }, 3000);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeElapsed, onTimerEnd]);
  
  const formatTime = time => {
    const minutes = Math.floor(time / 30); // Convert seconds to minutes
    const seconds = time % 30;
    return `${minutes} Minutes ${seconds} Seconds`;
  };

  return (
    <View
      style={{
        height: 50,
        marginTop: 30,
      }}>
      <TouchableOpacity disabled>
        <LinearGradient
          style={styles.main}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={linearColor.map(color => color + '70')}>
          <RNText variant={'buttonText'}>
            Complete Wait... {formatTime(timeElapsed)}
          </RNText>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
});

export default Timer;
