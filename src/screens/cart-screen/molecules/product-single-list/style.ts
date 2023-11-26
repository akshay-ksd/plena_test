import { StyleSheet } from "react-native";
import ScreenRatio from "../../../../components/constants/ScreenRatio";
import colors from "../../../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width,
        height:ScreenRatio.height/8,
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        width:"100%",
        height:"100%",
        borderRadius:5,
        backgroundColor:"#fff",
        borderBottomWidth:1,
        borderColor:"#d3d3d3",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"2%",
        justifyContent:"space-between"
    },
    image:{
        width:40,
        height:40,
        borderRadius:5,
        marginLeft:10
    },
    details:{
        // height:"80%",
        // paddingVertical:"5%",
        // marginLeft:"5%",
        // paddingRight:"5%",
        width:"100%",
        justifyContent:"center",
    },
    main:{
        // height:"100%",
        width:"50%",
        marginLeft:"5%"
    },
    brandName:{
        fontSize:16,
        fontWeight:"400",
        color:colors.black
    },
    description:{
        fontSize:12,
        color:"gray",
        marginTop:"2%"
    },
    rating:{
        right:"25%",
        top:"5%"
    },
    priceView:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        // marginTop:"5%"
    },
    percentage:{
        fontSize:18,
        fontWeight:"800",
        color:"green"
    },
    originalPrice:{
        fontSize:14,
        fontWeight:"400",
        color:"gray",
        // marginLeft:"3%",
        textDecorationLine:"line-through"
    },
    price:{
        fontSize:12,
        fontWeight:"400",
        color:colors.black,
        marginTop:2
        // marginLeft:"3%",
    },
    stock:{
        fontSize:12,
        fontWeight:"800",
        color:colors.secondary,
        marginTop:"5%"
    },
    addButton:{
        width:"100%",
        height:40,
        paddingLeft:"5%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
});

export default styles