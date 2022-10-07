import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import PageSubtitle from '../atoms/page-subtitle';
import VerticalSpace from '../atoms/vertical-spacer';
import PrimaryTextField from '../atoms/primary-textfield';
import PrimaryDatePicker from '../atoms/primary-datepicker';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GRAY_DARK, GRAY_MEDIUM} from '../../styles/colors';
import PrimaryButton from '../atoms/primary-button';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo} from '../../redux/actions/todoActions';

export default function AddTodoModal({isAddModalVisible, toggleAddModal}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  return (
    <Modal isVisible={isAddModalVisible}>
      <View style={styles.container}>
        <View style={styles.row}>
          <PageSubtitle title={'Add Todo'} />
          <Icon
            name="close"
            size={30}
            color={GRAY_DARK}
            onPress={() => toggleAddModal()}
          />
        </View>
        <VerticalSpace height={20} />
        <PrimaryTextField
          onChange={text => setContent(text)}
          placeholder={'Todo Content'}
        />
        <VerticalSpace height={10} />
        <PrimaryDatePicker
          placeholder={'Todo Date'}
          onDateSelected={date => setSelectedDate(date)}
        />
        <VerticalSpace height={40} />
        <PrimaryButton
          title={'Add'}
          onPress={() => {
            dispatch(
              AddTodo({
                date: selectedDate,
                content: content,
              }),
            );
            toggleAddModal();
          }}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
