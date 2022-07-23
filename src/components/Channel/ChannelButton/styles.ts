import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '98%',
    borderWidth: 1,
    height: SIZES.size_74,
    backgroundColor: COLORS.DARK_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.size_10,
    borderRadius: SIZES.size_10,
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: COLORS.WHITE,
    fontSize: SIZES.size_14,
  },
  currentShow: {
    color: COLORS.WHITE,
  },
  channelLogo: {
    width: SIZES.size_40,
    alignSelf: 'center',
  },
});

export default styles;
