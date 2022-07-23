import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async ({key, value}) => {
  try {
    console.log('storeData', {value, key});
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const getData = async key => {
  try {
    console.log('getData', {key});
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export default {storeData, getData};
