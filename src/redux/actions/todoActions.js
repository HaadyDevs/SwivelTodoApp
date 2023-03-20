import {getLocalData, setLocalData} from '../../services/localstorageService';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  ERASE_TODOS,
  GET_TODOS,
} from './constants';

// Add Todo under existing date if there is already a todo for that date. Or add to a new date
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

// Delete Todo under existing date if there is more than 1 todo for that date. Or delete the entire date
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
  newState = todos;
  setLocalData('todos', newState);

  dispatch({
    type: DELETE_TODO,
    payload: newState,
  });
};

// Edit todo by finding it with specific todo id
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

// Fetch all the todos from local data
export const FetchTodos = () => async dispatch => {
  const getTodoData = await getLocalData('todos');
  if (getTodoData != null) {
    dispatch({
      type: GET_TODOS,
      payload: getTodoData,
    });
  }
};

// Erase all todos
export const EraseTodos = () => async dispatch => {
  setLocalData('todos', null);
  dispatch({
    type: ERASE_TODOS,
    payload: [],
  });
};
