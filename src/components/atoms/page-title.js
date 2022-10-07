import {View, Text} from 'react-native';
import React from 'react';
import {PAGE_TITLE} from '../../styles/typography';

export default function PageTitle({title}) {
  return <Text style={PAGE_TITLE}>{title}</Text>;
}
