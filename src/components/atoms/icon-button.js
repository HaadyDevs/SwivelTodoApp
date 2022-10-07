import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function IconButton({onClick, iconName, iconColor, iconSize}) {
  return (
    <TouchableOpacity onPress={() => onClick()}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}
