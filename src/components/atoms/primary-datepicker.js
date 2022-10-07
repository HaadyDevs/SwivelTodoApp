import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PLACEHOLDER_TEXT, GRAY_MEDIUM, WHITE, BLACK} from '../../styles/colors';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

export default function PrimaryDatePicker({onDateSelected, placeholder}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setOpen(true);
        }}>
        <TextInput
          placeholder={placeholder}
          editable={false}
          value={moment(date).format('DD MMM YYYY')}
          selectTextOnFocus={false}
          placeholderColor={PLACEHOLDER_TEXT}
          style={styles.loginFormTextInput}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={newDate => {
          setOpen(false);
          setDate(newDate);
          onDateSelected(newDate);
          console.log('Setting datee ' + newDate.toString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginFormTextInput: {
    fontFamily: 'Poppins-Regular',
    height: 58,
    width: '100%',
    fontSize: 16,
    borderRadius: 5,
    color: BLACK,
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
    backgroundColor: WHITE,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});
