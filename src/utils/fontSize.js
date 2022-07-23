import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = Platform.OS === 'ios' ? SCREEN_WIDTH / 380 : SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}
export const heightPercentageToDP = heightPercent => {
  const elemHeight = parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

// export function normalize(size) {
//   return parseInt(size) * SCREEN_WIDTH * (1.8 - 0.002 * SCREEN_WIDTH) / 400;
// }
