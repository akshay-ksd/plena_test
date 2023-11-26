import { StyleSheet } from "react-native";
import ScreenRatio from "../../../../components/constants/ScreenRatio";
import colors from "../../../../components/constants/colors";
const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:"15%",
        backgroundColor:colors.secondary,
        alignItems:"center"
        // flexDirection:"row",
        // alignItems:"center",
        // justifyContent:"space-between",
        // paddingHorizontal:"5%"
    },
    count:{
        width:20,
        height:20,
        borderRadius:20,
        backgroundColor:"#fff",
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
        color:colors.secondary
    },
    searchBox:{
        width:"90%",
        height:"40%",
        backgroundColor: "rgba(58,58,58,0.4)",
        borderRadius:30,
        paddingHorizontal:"5%",
        flexDirection:"row",
        alignItems:"center",
        // justifyContent:"space-between"
    },
    input:{
        fontSize:14,
        fontWeight:"400",
        color:"black",
        marginLeft:"5%"
    },
    topView:{
        width:"100%",
        height:"50%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    },
    name:{
        fontSize:18,
        fontWeight:"500",
        color:colors.white
    }
});

export default styles