import {StyleSheet} from 'react-native';
import ScreenRatio from '../../components/constants/ScreenRatio';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    backgroundColor:colors.white
  },
  center:{
    alignItems:"center",
    justifyContent:"center"
  }
});

export default styles;
