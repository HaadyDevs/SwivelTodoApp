import {getLocalData, setLocalData} from '../../services/localstorageService';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  ERASE_TODOS,
  GET_TODOS,
} from './constants';

export const AddTodo = todo => async (dispatch, getState) => {
  const {content, date} = todo;
  const {todos} = getState();
  let newState = {};

  let isExistingDate = todos.find(
    todo =>
      new Date(todo.title).toDateString() == new Date(date).toDateString(),
  );

  if (isExistingDate) {
    todos
      .find(
        todo =>
          new Date(todo.title).toDateString() == new Date(date).toDateString(),
      )
      ['data'].push(content);

    newState = todos;
  } else {
    newState = [
      ...todos,
      {
        title: date,
        data: [content],
      },
    ];
  }
  setLocalData('todos', newState);

  console.log('ADDEDD STATE ' + JSON.stringify(newState));

  dispatch({
    type: ADD_TODO,
    payload: newState,
  });
};

export const DeleteTodo = (date, todoIndex) => async (dispatch, getState) => {
  const {todos} = getState();
  let newState = {};

  const updatedArray = todos
    .find(
      todo =>
        new Date(todo.title).toDateString() == new Date(date).toDateString(),
    )
    ['data'].filter((_, index) => {
      return index !== todoIndex;
    });

  if (updatedArray.length == 0) {
    const indexOfTodo = todos.findIndex(todo => {
      return (
        new Date(todo.title).toDateString() == new Date(date).toDateString()
      );
    });

    todos.splice(indexOfTodo, 1);
  } else {
    todos.find(
      todo =>
        new Date(todo.title).toDateString() == new Date(date).toDateString(),
    )['data'] = updatedArray;
  }

  console.log('UPDATED DETELED ARRAY IS ' + JSON.stringify(updatedArray));

  newState = todos;

  console.log('DELETED DATA IS ' + JSON.stringify(newState));

  setLocalData('todos', newState);

  dispatch({
    type: DELETE_TODO,
    payload: newState,
  });
};

export const EditTodo = editData => async (dispatch, getState) => {
  const {content, date, index} = editData;
  const {todos} = getState();
  let newState = {};

  todos.find(
    todo =>
      new Date(todo.title).toDateString() == new Date(date).toDateString(),
  )['data'][index] = content;

  setLocalData('todos', todos);

  dispatch({
    type: EDIT_TODO,
    payload: todos,
  });
};

export const FetchTodos = () => async dispatch => {
  const getTodoData = await getLocalData('todos');
  if (getTodoData != null) {
    dispatch({
      type: GET_TODOS,
      payload: getTodoData,
    });
  }
};

export const EraseTodos = () => async dispatch => {
  setLocalData('todos', null);
  dispatch({
    type: ERASE_TODOS,
    payload: [],
  });
};
