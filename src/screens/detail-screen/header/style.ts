import { StyleSheet } from "react-native";
import ScreenRatio from "../../../components/constants/ScreenRatio";
import colors from "../../../components/constants/colors";
const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:"8%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%",
        // position:"absolute",
        zIndex:2
    },
    count:{
        width:20,
        height:20,
        borderRadius:20,
        backgroundColor:"#F9B023",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        elevation:5,
        top:"20%",
        left:"24%"
    },
    number:{
        fontSize:14,
        fontWeight:"800",
        color:"#fff"
    },
    cartText:{
        fontSize:20,
        fontWeight:"700",
        color:colors.black
    },
    backButton:{
        height:40,
        width:40,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f2f2f2",
        // elevation:4
    }
});

export default styles