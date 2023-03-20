import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogoTitle from '../../components/atoms/logo-title';
import {PRIMARY, WHITE} from '../../styles/colors';

export default function SplashScreen({navigation}) {

  // Navigate to login screen from splash after timeout
  setTimeout(() => {
    navigation.replace('/login');
  }, 4000);

  return (
    <View style={styles.viewContainer}>
      <LogoTitle title={'Do IT'} isLight={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
