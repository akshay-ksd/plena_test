import { StyleSheet } from "react-native";
import colors from "../../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:150,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.secondary
    },
    value:{
        fontSize:14,
        fontWeight:"600",
        color:colors.secondary
    },
    addButton:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:"#fff",
        width:150,
        borderWidth:0
    },
    subButton:{
        width:50,
        height:"100%",
        backgroundColor:"#f2f2f2",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
    },
    countText: {
        fontSize: 16,
        color: 'black',
        fontWeight: "700"
    },
});

export default styles