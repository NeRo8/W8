import {Dimensions, StyleSheet, Platform} from 'react-native';
import fonts from './fonts';
import colors from './colors';

const {width, height} = Dimensions.get('window');

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 375;
const baseHeight = 812;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = size => Math.ceil(size * scale);

const globalStyles = StyleSheet.create({
  robotoRegular16: {
    fontFamily: fonts.robotoRegular,
    fontSize: scaledSize(16),
  },
  robotoRegBold24: {
    fontFamily: fonts.robotoBold,
    fontSize: scaledSize(24),
  },
  sfContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: Platform.OS === 'android' ? scaledSize(20) : 0,
  },
  blockContainer: {
    flex: 1,
    padding: scaledSize(20),
    backgroundColor: colors.BACKGROUND,
  },
  titleStyle: {
    fontFamily: fonts.robotoRegular,
    fontSize: scaledSize(16),
    color: colors.TITLE,
  },
  headerTitle: {
    fontFamily: fonts.robotoRegular,
    fontSize: scaledSize(14),
    color: colors.TITLE,
    marginBottom: 20,
  },
});

export default globalStyles;
