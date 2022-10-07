import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import VerticalSpace from '../../components/atoms/vertical-spacer';
import PrimaryOutlineButton from '../../components/atoms/primary-outline-button';
import {useState} from 'react';
import AddTodoModal from '../../components/organisms/addTodo-modal';
import PageTitle from '../../components/atoms/page-title';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import TodoList from '../../components/organisms/todo-list';
import {useEffect} from 'react';
import {FetchTodos} from '../../redux/actions/todoActions';
import EditTodoModal from '../../components/organisms/edit-todo-modal';
import {PRIMARY, WHITE} from '../../styles/colors';
import RoundedButton from '../../components/atoms/rounded-button';

export default function TodoUI(props) {
  return (
    <View style={styles.container}>
      <VerticalSpace height={40} />
      <View style={styles.pageContainer}>
        <PageTitle title={'ToDos'} />
        <VerticalSpace height={25} />
        <TodoList
          listData={props.todoData}
          toggleEditModal={props.toggleEditModal}
        />

        <AddTodoModal
          isAddModalVisible={props.isAddModalVisible}
          toggleAddModal={props.toggleAddModal}
        />
        <EditTodoModal
          editContent={props.editData}
          isEditModalVisible={props.isEditModalVisible}
          toggleEditModal={props.toggleEditModal}
        />
      </View>
      <RoundedButton onPress={() => props.toggleAddModal()} />
    </View>
  );
}
