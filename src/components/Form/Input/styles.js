import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    height: SIZES.size_40,
    width: '90%',
    marginBottom: SIZES.size_12,
    padding: SIZES.size_4,
  },
  input: {
    color: COLORS.BLACK,
    padding: SIZES.size_4,
    borderRadius: SIZES.size_6,
    borderWidth: 1,
    width: '100%',
    height: SIZES.size_38,
    backgroundColor: 'white',
    paddingLeft: SIZES.size_8,
  },
  errorMessage: {
    color: COLORS.RED,
  },
});

export default styles;
