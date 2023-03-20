import {getLocalData, setLocalData} from '../../services/localstorageService';
import {
  ADD_PIC,
  CHANGE_NAME,
  GET_USER,
  LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from './constants';
import auth from '@react-native-firebase/auth';

// Change the image of the user to provided image
export const ChangePicture = imageUri => (dispatch, getState) => {
  const {user} = getState();
  user.imageUri = imageUri;

  setLocalData('user', user);

  dispatch({
    type: ADD_PIC,
    payload: user,
  });
};

// Change the username of the user to provided image
export const ChangeUsername = username => (dispatch, getState) => {
  const {user} = getState();
  user.username = username;

  setLocalData('user', user);

  dispatch({
    type: CHANGE_NAME,
    payload: user,
  });
};


export const SignOut = () => async (dispatch, getState) => {
  setLocalData('user', null);

  dispatch({
    type: LOGOUT,
    payload: {},
  });
};

// Get user data from local storage
export const GetUserData = () => async (dispatch, getState) => {
  const userData = await getLocalData('user');
  if (userData != null) {
    dispatch({
      type: GET_USER,
      payload: userData,
    });
  }
};

// Login user using Firebase sign in method
export const Login = credentials => async (dispatch, getState) => {
  crashlytics().log('User Signed in');
  dispatch({type: LOADING, payload: null});
  try {
    await auth()
    .signInWithEmailAndPassword(credentials.username, credentials.password)
    .then(user => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user.user.email,
      });
    })
    .catch(error => {
      crashlytics().recordError(error);
      dispatch({
        type: LOGIN_FAILED,
        payload: null,
      });
    });
  } catch (error) {
    crashlytics().recordError(error);
    dispatch({
      type: LOGIN_FAILED,
      payload: null,
    });
  }
  
};
