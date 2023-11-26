import { StyleSheet } from "react-native";
import colors from "../../../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:120,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        backgroundColor:"white",
    },
    value:{
        fontSize:14,
        fontWeight:"600",
        color:"#000"
    },
    addButton:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:"#fff",
        width:120
    },
    subButton:{
        width:40,
        height:40,
        backgroundColor:"#f2f2f2",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40,
    },
    countText: {
        fontSize: 16,
        color: 'black',
        fontWeight: "700"
    },
});

export default styles