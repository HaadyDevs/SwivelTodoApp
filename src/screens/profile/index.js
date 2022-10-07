import {React, useState, useEffect} from 'react';

import {launchImageLibrary} from 'react-native-image-picker';
import ProfileUI from './profileUi';
import {
  ChangePicture,
  GetUserData,
  SignOut,
} from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {EraseTodos} from '../../redux/actions/todoActions';

export default function ProfileScreen({navigation}) {
  const [usernameModalVisible, setUsernameModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserData());
  }, []);

  const userData = useSelector(state => state.user);
  console.log('User Data is ' + JSON.stringify(userData));

  const onProfilePicChange = async () => {
    const imageResponse = await launchImageLibrary(imageSelectionOptions);
    const selectedImageUri = imageResponse.assets[0].uri;
    dispatch(ChangePicture(selectedImageUri));
  };

  const toggleUsernameModal = username =>
    setUsernameModalVisible(!usernameModalVisible);

  const onUsernameChanged = async username => {
    toggleUsernameModal(username);
  };

  const signOut = () => {
    dispatch(SignOut());
    dispatch(EraseTodos());
    navigation.replace('/login');
  };

  return (
    <ProfileUI
      onPicChanged={onProfilePicChange}
      toggleUsername={toggleUsernameModal}
      isUsernameModalVisible={usernameModalVisible}
      onUsernameChange={onUsernameChanged}
      onSignOutPressed={signOut}
      userData={userData}
    />
  );
}

const imageSelectionOptions = {
  selectionLimit: 1,
  mediaType: 'photo',
  includeBase64: false,
};
