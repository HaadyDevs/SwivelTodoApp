import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PRIMARY, WHITE} from '../../styles/colors';
import {PRIMARY_BUTTON_TEXT} from '../../styles/typography';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RoundedButton({onPress}) {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Icon name="add" size={40} color={WHITE} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  roundedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 35,
    right: 20,
    height: 60,
    backgroundColor: PRIMARY,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
