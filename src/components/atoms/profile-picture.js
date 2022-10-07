import {StyleSheet, TouchableHighlight, Image} from 'react-native';
import React from 'react';
import {PROFILE} from '../../assets/images';

export default function ProfilePic({imageUri}) {
  return imageUri ? (
    <Image source={{uri: imageUri}} style={styles.profileImg} />
  ) : (
    <Image source={PROFILE} style={styles.profileImg} />
  );
}

const styles = StyleSheet.create({
  profileImg: {
    height: 150,
    width: 150,
    overflow: 'hidden',
    borderRadius: 80,
  },
});
