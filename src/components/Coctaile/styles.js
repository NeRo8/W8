import {StyleSheet} from 'react-native';

import globalStyles, {scaledSize} from '../../constants/globalStyles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaledSize(20),
  },
  thumbStyle: {
    height: scaledSize(100),
    width: scaledSize(100),
  },
  titleStyle: {
    ...globalStyles.titleStyle,
    marginHorizontal: scaledSize(20),
  },
});
