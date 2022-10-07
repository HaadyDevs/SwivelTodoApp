import {Text} from 'react-native';
import React from 'react';
import {LOGO_DARK_TEXT, LOGO_LIGHT_TEXT} from '../../styles/typography';

export default function LogoTitle({isLight, title}) {
  return (
    <Text style={isLight ? LOGO_LIGHT_TEXT : LOGO_DARK_TEXT}>{title}</Text>
  );
}
