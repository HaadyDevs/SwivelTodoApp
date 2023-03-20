import {setLocalData} from '../../services/localstorageService';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  ERASE_TODOS,
  GET_TODOS,
} from '../actions/constants';

//Todo Reducers
export default todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...action.payload];
    case GET_TODOS:
      return [...action.payload];
    case DELETE_TODO:
      return [...action.payload];
    case EDIT_TODO:
      return [...action.payload];
    case ERASE_TODOS:
      return [];
    default:
      return state;
  }
};
