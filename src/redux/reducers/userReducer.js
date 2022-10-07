import {
  ADD_PIC,
  CHANGE_NAME,
  GET_USER,
  LOADING,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/constants';

const userAuthState = {
  imageUri: null,
  username: 'New User',
  email: 'Hahahllk',
  isError: false,
  isLoading: false,
  isLoggedIn: false,
};

export default userReducer = (state = userAuthState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload,
        isLoading: false,
      };
    case LOGIN_FAILED:
      return {...state, isLoggedIn: false, isError: true, isLoading: false};
    case LOADING:
      return {...state, isLoading: true};
    case ADD_PIC:
      return {...action.payload};
    case CHANGE_NAME:
      return {...action.payload};
    case GET_USER:
      return {...action.payload};
    case LOGOUT:
      return userAuthState;
    default:
      return state;
  }
};
