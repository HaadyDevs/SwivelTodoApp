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
import {ChangeUsername} from '../../redux/actions/userActions';

export default function ChangeNameModal({
  isNameModalVisible,
  toggleNameModal,
  username,
}) {
  const [name, setName] = useState(null);
  const dispatch = useDispatch();

  return (
    <Modal isVisible={isNameModalVisible}>
      <View style={styles.container}>
        <View style={styles.row}>
          <PageSubtitle title={'Edit Name'} />
          <Icon
            name="close"
            size={30}
            color={GRAY_DARK}
            onPress={() => toggleNameModal('')}
          />
        </View>
        <VerticalSpace height={20} />
        <PrimaryTextField
          initialValue={username}
          onChange={text => setName(text)}
          placeholder={'Username'}
        />
        <VerticalSpace height={40} />
        <PrimaryButton
          title={'Save'}
          onPress={() => {
            let finalName = name ? name : username;
            dispatch(ChangeUsername(finalName));
            toggleNameModal(null);
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
