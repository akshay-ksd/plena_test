import { StyleSheet } from "react-native";
import ScreenRatio from "../../components/constants/ScreenRatio";
import colors from "../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:'100%',
        backgroundColor:"white"
    },
    box:{
        width:"47%",
        height:ScreenRatio.width/3,
        elevation:3,
        backgroundColor:"#fff",
        margin:5,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    itemName:{
        fontSize:14,
        fontWeight:"600",
        color:colors.secondary
    }
});

export default styles