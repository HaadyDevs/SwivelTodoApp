import {View, Text} from 'react-native';
import React from 'react';
import {PAGE_SUBTITLE} from '../../styles/typography';

export default function PageSubtitle({title}) {
  return <Text style={PAGE_SUBTITLE}>{title}</Text>;
}
