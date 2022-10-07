import {View, Text} from 'react-native';
import {React, useState} from 'react';
import VerticalSpace from '../../components/atoms/vertical-spacer';
import ProfilePic from '../../components/atoms/profile-picture';
import styles from './style';
import {BODY_SUBTITLE_TEXT, PROFILE_NAME} from '../../styles/typography';
import ProfileTile from '../../components/molecules/profile-tile';
import {BLACK, RED_TEXT} from '../../styles/colors';
import ChangeNameModal from '../../components/organisms/changeName-modal';

export default function ProfileUI(props) {
  console.log('Recieved Data ' + JSON.stringify(props.userData));
  return (
    <View style={styles.container}>
      <VerticalSpace height={40} />
      <View style={styles.pageContainer}>
        <View style={styles.profileArea}>
          <VerticalSpace height={40} />
          <ProfilePic imageUri={props.userData.imageUri} />
          <VerticalSpace height={10} />
          <Text style={PROFILE_NAME}>{props.userData.username}</Text>
          <Text style={BODY_SUBTITLE_TEXT}>{props.userData.email}</Text>
        </View>
        <VerticalSpace height={50} />
        <ProfileTile
          title={'Change Name'}
          textColor={BLACK}
          onPress={() => props.onUsernameChange(props.userData.email)}
        />
        <VerticalSpace height={30} />
        <ProfileTile
          title={'Change Picture'}
          textColor={BLACK}
          onPress={() => props.onPicChanged()}
        />
        <VerticalSpace height={30} />
        <ProfileTile
          title={'Sign Out'}
          textColor={RED_TEXT}
          onPress={() => props.onSignOutPressed()}
        />
        <ChangeNameModal
          isNameModalVisible={props.isUsernameModalVisible}
          toggleNameModal={props.onUsernameChange}
          username={props.userData.username}
        />
      </View>
    </View>
  );
}
