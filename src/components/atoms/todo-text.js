import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BODY_TEXT} from '../../styles/typography';

export default function TodoText({text}) {
  return <Text style={BODY_TEXT}>{text}</Text>;
}
