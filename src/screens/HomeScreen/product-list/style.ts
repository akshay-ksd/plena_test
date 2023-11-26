import { StyleSheet } from "react-native";
import ScreenRatio from "../../../components/constants/ScreenRatio";
const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:"92%"
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    }
});

export default styles