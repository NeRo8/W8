import {Dimensions, StyleSheet} from 'react-native';
import fonts from './fonts';

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
  robotoRegular24: {
    fontFamily: fonts.robotoRegular,
    fontSize: scaledSize(16),
    fontWeight: '800',
  },
});

export default globalStyles;
