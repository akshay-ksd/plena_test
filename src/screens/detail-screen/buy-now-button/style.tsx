import { StyleSheet } from "react-native";
import colors from "../../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"10%",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:0
    },
    button:{
        width:"85%",
        height:"70%",
        backgroundColor:colors.primary,
        borderRadius:5,
        // elevation:5,
        alignItems:"center",
        justifyContent:"center"
    },
    buyText:{
        fontSize:20,
        fontWeight:"800",
        color:colors.white
    }
});

export default styles