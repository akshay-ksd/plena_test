import { StyleSheet } from "react-native";
import ScreenRatio from "../../constants/ScreenRatio";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:ScreenRatio.width/2,
        alignItems:"center",
        justifyContent:'center',
        flexDirection:"row",
        marginTop:"5%"
    },
    shimmer:{
        height:"100%",
        width:"90%",
        margin:5,
        borderRadius:5,
    }
});
export default styles