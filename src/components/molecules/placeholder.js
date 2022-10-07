import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlaceholderText from '../atoms/placeholder-text';

export default function Placeholder({
  iconName,
  iconSize,
  placeholderText,
  iconColor,
  textSize,
  textColor,
  marginTop,
}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: marginTop,
      }}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <PlaceholderText
        text={placeholderText}
        textColor={textColor}
        textSize={textSize}
      />
    </View>
  );
}
