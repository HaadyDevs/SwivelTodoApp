import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FetchTodos} from '../../redux/actions/todoActions';
import TodoUI from './todoUI';

export default function TodosScreen() {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editData, setEditData] = useState({});
  const todoData = useSelector(state => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchTodos());
  }, []);

  const toggleAddModal = () => setAddModalVisible(!isAddModalVisible);

  const toggleEditModal = editData => {
    setEditData(editData);
    console.log('Setting Edit Data ' + JSON.stringify(editData));
    setEditModalVisible(!isEditModalVisible);
  };

  return (
    <TodoUI
      todoData={todoData}
      toggleAddModal={toggleAddModal}
      toggleEditModal={toggleEditModal}
      editData={editData}
      isAddModalVisible={isAddModalVisible}
      isEditModalVisible={isEditModalVisible}
    />
  );
}
