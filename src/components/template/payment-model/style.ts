import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        position:"absolute",
        backgroundColor:"rgba(58,58,58,0.6)",
        bottom:0,
        justifyContent:"flex-end"
    },
    box:{
        width:"100%",
        height:"50%",
        backgroundColor:colors.white,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingTop:"5%",
        alignItems:"center"
    },
    mode:{
        width:"90%",
        height:"10%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"10%",
        backgroundColor:"#f1f1f1",
        borderRadius:5,
        marginTop:"5%"
    },
    modeText:{
        fontSize:16,
        fontWeight:"600",
        color:"#000"
    },
    payment:{
        width:"90%",
        height:"15%",
        borderRadius:5,
        backgroundColor:colors.secondary,
        marginTop:"20%",
        alignItems:"center",
        justifyContent:"center"
    },
    processText:{
        fontSize:18,
        fontWeight:"bold",
        color:colors.white
    },
    succesText:{
        fontSize:20,
        fontWeight:"bold",
        color:colors.white
    }
});

export default styles