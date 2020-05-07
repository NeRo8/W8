import {StyleSheet} from 'react-native';

import {fonts} from '../../constants';
import {scaledSize} from '../../constants/globalStyles';

export default StyleSheet.create({
  categoryItemContainer: {
    marginVertical: scaledSize(31),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonTitle: {
    fontFamily: fonts.robotoBold,
    fontSize: scaledSize(16),
  },
  buttonStyle: {
    backgroundColor: 'black',
    height: scaledSize(53),
  },
  buttonContainer: {
    marginVertical: scaledSize(10),
  },
});
