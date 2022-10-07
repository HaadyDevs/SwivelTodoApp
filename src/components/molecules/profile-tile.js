import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BLACK, GRAY_MEDIUM, PRIMARY} from '../../styles/colors';
import {PRIMARY_BUTTON_TEXT} from '../../styles/typography';

export default function ProfileTile({title, onPress, textColor}) {
  return (
    <TouchableOpacity style={styles.tileContainer} onPress={onPress}>
      <Text style={[PRIMARY_BUTTON_TEXT, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: GRAY_MEDIUM,
    borderRadius: 12,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
