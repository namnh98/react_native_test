import { StyleSheet } from 'react-native';
import { scale } from '@/utils';
import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: scale(16)
  },
  imageLeft: {
    resizeMode: 'contain'
  },
  buttonLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(24),
    height: scale(24)
  },
  titleHeader: {
    fontSize: scale(24),
    color: COLORS.BLACK_DEFAULT
  }
});

export default styles;
