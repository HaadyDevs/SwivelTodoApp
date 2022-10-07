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
import {
  BODY_SUBTITLE_TEXT,
  BODY_TITLE_TEXT,
  PRIMARY_BUTTON_TEXT,
  PROFILE_NAME,
} from '../../styles/typography';

export default function ShowLocationModal({
  location,
  toggleLocationModal,
  islocationModalToggle,
}) {
  return (
    <Modal isVisible={islocationModalToggle}>
      <View style={styles.container}>
        <View style={styles.row}>
          <PageSubtitle title={'Coordinates'} />
          <Icon
            name="close"
            size={30}
            color={GRAY_DARK}
            onPress={() => toggleLocationModal()}
          />
        </View>
        <VerticalSpace height={20} />
        <Text style={[BODY_TITLE_TEXT, {alignSelf: 'center', fontSize: 26}]}>
          X - {location == null ? 0 : location.x.toFixed(2)}
        </Text>
        <Text style={[BODY_TITLE_TEXT, {alignSelf: 'center', fontSize: 26}]}>
          Y - {location == null ? 0 : location.y.toFixed(2)}
        </Text>
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
