import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 80,
    position: 'relative',
  },
  middleContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  defaultThumb: {
    position: 'absolute',
    left: '50%',
    top: SIZES.ten,
    borderWidth: 4,
    height: 60,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: COLORS.black

  },
  mainBlock: {
    borderRightWidth: 3,
    borderColor: '#979797',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  lastBlock: {
    borderRightWidth: 0,
  },
  subBlock: {
    height: 50,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: COLORS.secondary,
    paddingHorizontal: 10
  },
  subBlockLine: {
    borderRightWidth: 1,
    borderColor: '#979797',
    height: '100%',
  },
  blocksContainer: {
    flexDirection: 'row',
  },
});

export default styles;
