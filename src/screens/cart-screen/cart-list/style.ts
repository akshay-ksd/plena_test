import { StyleSheet } from "react-native";
import ScreenRatio from "../../../components/constants/ScreenRatio";
import colors from "../../../components/constants/colors";
const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:"92%"
    },
    center:{
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        width:"100%",
    },
    noCart:{
        fontSize:20,
        fontWeight:"800",
        color:colors.secondary
    }
});

export default styles