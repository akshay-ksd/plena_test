import { StyleSheet } from "react-native";
import colors from "../../../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"8%",
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        width:120,
        height:45,
        borderRadius:10,
        backgroundColor:colors.primary,
        marginHorizontal:5,
        elevation:3,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:14,
        fontWeight:"600",
        color:colors.white
    }
});

export default styles