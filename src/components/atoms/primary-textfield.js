import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {PLACEHOLDER_TEXT, GRAY_MEDIUM, WHITE, BLACK} from '../../styles/colors';
import {TEXTINPUT_TEXT} from '../../styles/typography';

export default function PrimaryTextField({
  placeholder,
  isPassword = false,
  onChange,
  initialValue = '',
}) {
  return (
    <TextInput
      defaultValue={initialValue}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={PLACEHOLDER_TEXT}
      style={styles.loginFormTextInput}
      secureTextEntry={isPassword}
    />
  );
}

const styles = StyleSheet.create({
  loginFormTextInput: {
    ...TEXTINPUT_TEXT,
    height: 58,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
    backgroundColor: WHITE,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});
