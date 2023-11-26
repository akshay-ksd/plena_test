import { StyleSheet } from "react-native";
import ScreenRatio from "../../../components/constants/ScreenRatio";
import colors from "../../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:"10%",
        // backgroundColor:"#f2f2f2",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:0
    },
    box:{
        width:"95%",
        height:"90%",
        backgroundColor:colors.secondary,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    },
    header:{
        width:"100%",
        height:"10%",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:"#000"
    },
    itemBox:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%",
        
    },
    item:{
        fontSize:16,
        color:"gray",
        fontWeight:"400"
    },
    total:{
        fontSize:14,
        fontWeight:"bold",
        color:colors.white
    },
    buy:{
        width:"40%",
        height:"70%",
        backgroundColor:colors.white,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    buyText:{
        fontSize:14,
        fontWeight:"700",
        color:colors.secondary
    }
});

export default styles