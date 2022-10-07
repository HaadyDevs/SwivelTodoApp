import React from 'react';

import styles from './style';
import {
  Alert,
  Image,
  Keyboard,
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  View,
} from 'react-native';
import PrimaryButton from '../../components/atoms/primary-button';
import PrimaryTextField from '../../components/atoms/primary-textfield';
import LogoTitle from '../../components/atoms/logo-title';
import {PRIMARY} from '../../styles/colors';
import {SUBTITLE_TEXT} from '../../styles/typography';
import VerticalSpace from '../../components/atoms/vertical-spacer';
import {useEffect} from 'react';
import ErrorText from '../../components/atoms/error-text';
import {useState} from 'react';
import LoginUI from './loginUi';
import {useDispatch, useSelector} from 'react-redux';
import {Login} from '../../redux/actions/userActions';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setisError] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  useEffect(() => {
    if (userData.isLoggedIn) {
      setisError(false);
      navigation.replace('/home');
    } else {
      if (userData.isError) {
        setisError(true);
      }
    }
  });

  const onLoginPress = async () => {
    if (username != '' && password != '') {
      dispatch(Login({username: username, password: password}));
    } else {
      setisError(true);
    }
  };

  return (
    <LoginUI
      onLoginPress={onLoginPress}
      isLoading={userData.isLoading}
      setUsername={setUsername}
      setPassword={setPassword}
      isError={isError}
    />
  );
}
