import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalData = async (key, value) => {
  try {
    const jsonConvert = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonConvert).then(result => true);
  } catch (e) {
    console.log('Save Error ' + e.toString());
    return Error(e.toString());
  }
};

export const getLocalData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Fetch Error ' + e.toString());
    return Error(e.toString());
  }
};
