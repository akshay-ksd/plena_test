import { StyleSheet } from "react-native";
import ScreenRatio from "../../../../components/constants/ScreenRatio";
import colors from "../../../../components/constants/colors";

const styles = StyleSheet.create({
    container:{
        width:ScreenRatio.width/2,
        height:ScreenRatio.height/3.4,
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        width:"93%",
        height:"90%",
        borderRadius:10,
      
        // flexDirection:"row",
        backgroundColor:"#F8F9FB",
        justifyContent:"center"
    },
    image:{
        width:"100%",
        height:"50%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
        // marginTop:"10%",
        
    },
    details:{
        // height:"80%",
        paddingVertical:"5%",
        marginLeft:"5%",
        paddingRight:"5%",
        width:"100%"
    },
    main:{
        height:"100%",
        width:"70%"
    },
    brandName:{
        fontSize:16,
        fontWeight:"600",
        color:colors.black,
        marginTop:"5%"
    },
    description:{
        fontSize:14,
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
        marginTop:"5%"
    },
    percentage:{
        fontSize:18,
        fontWeight:"800",
        color:"green"
    },
    originalPrice:{
        fontSize:16,
        fontWeight:"600",
        color:"gray",
        marginLeft:"3%",
        textDecorationLine:"line-through"
    },
    price:{
        fontSize:16,
        fontWeight:"600",
        color:colors.black,
        marginLeft:"3%",
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
    },
    detailsView:{
        width:"100%",
        height:"50%",
        paddingHorizontal:"5%",
    },
    bView:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"3%"
    },
    save:{
        width:"100%",
        position:"absolute",
        top:0,
        paddingHorizontal:"5%",
        paddingTop:"5%"
    },
    fav:{
        width:35,
        height:35,
        borderRadius:35,
        backgroundColor:"rgba(255,255,255,0.5)",
        alignItems:"center",
        justifyContent:"center",
        zIndex:2,
    }
});

export default styles