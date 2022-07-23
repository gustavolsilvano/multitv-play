import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
  },
  loginContainer: {
    width: '80%',
    height: SIZES.size_280,
    backgroundColor: COLORS.BRAND,
    borderRadius: SIZES.size_12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: SIZES.size_50,
  },
});

export default styles;
