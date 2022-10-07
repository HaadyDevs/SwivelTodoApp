import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {BODY_SUBTITLE_TEXT, BODY_TITLE_TEXT} from '../../styles/typography';
import ShowLocationModal from '../../components/organisms/showLocation-modal';

export default function FloorPlanUi(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={evt => props.handlePress(evt)}>
      <View style={styles.container}>
        <Text style={BODY_TITLE_TEXT}>Floor Plan Screen</Text>
        <Text style={BODY_SUBTITLE_TEXT}>
          Click on the screen to find the node position
        </Text>
      </View>
      <ShowLocationModal
        location={props.location}
        toggleLocationModal={props.toggleLocationModal}
        islocationModalToggle={props.isLocationToggle}
      />
    </TouchableOpacity>
  );
}
