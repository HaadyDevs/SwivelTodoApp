import {View, Text} from 'react-native';
import React from 'react';
import {ERROR_MESSAGE, PAGE_TITLE} from '../../styles/typography';

export default function ErrorText({title}) {
  return <Text style={ERROR_MESSAGE}>{title}</Text>;
}
