import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH, scale } from '@/utils';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    height: SCREEN_HEIGHT,
    resizeMode: 'contain'
  },
  wrapperContent: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    flex: 1
  },
  containerLinearGradient: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: scale(16)
  },
  titleBody: {
    color: COLORS.WHITE,
    fontSize: scale(22),
    lineHeight: scale(26)
  }
});

export default styles;
