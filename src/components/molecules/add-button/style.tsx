import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        width:37,
        height:37,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:37,
        backgroundColor:colors.secondary,
    },
    value:{
        fontSize:14,
        fontWeight:"600",
        color:"white"
    },
    addButton:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:"#fff",
        width:120
    },
    subButton:{
        width:37,
        height:37,
        backgroundColor:"#f1f1f1",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:37,
    },
    countText: {
        fontSize: 16,
        color: 'black',
        fontWeight: "700"
    },
});

export default styles