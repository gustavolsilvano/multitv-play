import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '40%',
    padding: SIZES.size_12,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.size_10,
  },
  label: {
    color: 'white',
  },
});

export default styles;
