import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BODY_TEXT, DATE_HEADER} from '../../styles/typography';

export default function DateHeader({text}) {
  return <Text style={DATE_HEADER}>{text}</Text>;
}
