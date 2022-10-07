import {Text} from 'react-native';
import React from 'react';
import {LOGO_DARK_TEXT, LOGO_LIGHT_TEXT} from '../../styles/typography';
import {PLACEHOLDER_TEXT} from '../../styles/colors';

export default function PlaceholderText({text, textSize, textColor}) {
  return (
    <Text style={[PLACEHOLDER_TEXT, {fontSize: textSize, color: textColor}]}>
      {text}
    </Text>
  );
}
