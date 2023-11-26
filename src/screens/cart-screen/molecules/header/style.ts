import { StyleSheet } from "react-native";
import ScreenRatio from "../../../../components/constants/ScreenRatio";
import colors from "../../../../components/constants/colors";
const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:"8%",
        flexDirection:"row",
        alignItems:"center",
        // justifyContent:"space-between",
        paddingHorizontal:"5%"
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
    cartText:{
        fontSize:16,
        fontWeight:"400",
        color:colors.black,
        marginLeft:"10%"
    },
    backButton:{
        width:40,
        height:40,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f1f1f1"
    }
});

export default styles