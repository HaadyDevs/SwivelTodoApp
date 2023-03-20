import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';


// Set data to Async storag 
export const setLocalData = async (key, value) => {
  try {
    const jsonConvert = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonConvert).then(result => true);
  } catch (e) {
    console.log('Save Error ' + e.toString());
    crashlytics().recordError(error);
    return Error(e.toString());
  }
};

// Get data from Async storage
export const getLocalData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Fetch Error ' + e.toString());
    crashlytics().recordError(error);
    return Error(e.toString());
  }
};
