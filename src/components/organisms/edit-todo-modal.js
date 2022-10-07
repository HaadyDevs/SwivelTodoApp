import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import PageSubtitle from '../atoms/page-subtitle';
import VerticalSpace from '../atoms/vertical-spacer';
import PrimaryTextField from '../atoms/primary-textfield';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GRAY_DARK, GRAY_MEDIUM} from '../../styles/colors';
import PrimaryButton from '../atoms/primary-button';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, EditTodo} from '../../redux/actions/todoActions';
import {useEffect} from 'react';

export default function EditTodoModal({
  isEditModalVisible,
  toggleEditModal,
  editContent,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  return (
    <Modal isVisible={isEditModalVisible}>
      <View style={styles.container}>
        <View style={styles.row}>
          <PageSubtitle title={'Edit Todo'} />
          <Icon
            name="close"
            size={30}
            color={GRAY_DARK}
            onPress={() => toggleEditModal({})}
          />
        </View>
        <VerticalSpace height={20} />
        <PrimaryTextField
          initialValue={editContent.content}
          onChange={text => setContent(text)}
          placeholder={'Todo Content'}
        />
        <VerticalSpace height={40} />
        <PrimaryButton
          title={'Save'}
          onPress={() => {
            let finalContent = content ? content : editContent.content;
            console.log('Edit content is ' + finalContent);
            dispatch(
              EditTodo({
                content: finalContent,
                date: editContent.date,
                index: editContent.index,
              }),
            );
            toggleEditModal({});
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
