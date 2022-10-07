import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {BODY_SUBTITLE_TEXT, BODY_TITLE_TEXT} from '../../styles/typography';
import ShowLocationModal from '../../components/organisms/showLocation-modal';
import FloorPlanUi from './floorPlanUi';
import {useEffect} from 'react';

export default function FloorPlanScreen() {
  const [isLocationToggle, setisLocationToggle] = useState(false);
  const [location, setLocation] = useState(null);

  const toggleLocationModal = () => setisLocationToggle(!isLocationToggle);

  useEffect(() => {
    if (location != null) {
      toggleLocationModal();
    }
  }, [location]);

  const handlePress = evt => {
    setLocation({x: evt.nativeEvent.pageX, y: evt.nativeEvent.pageY});
  };

  return (
    <FloorPlanUi
      handlePress={handlePress}
      location={location}
      toggleLocationModal={toggleLocationModal}
      isLocationToggle={isLocationToggle}
    />
  );
}
