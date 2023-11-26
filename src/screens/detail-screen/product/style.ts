import { StyleSheet } from "react-native";
import colors from "../../../components/constants/colors";
import ScreenRatio from "../../../components/constants/ScreenRatio";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
    },
    imageBox:{
        width:"100%",
        height:"50%",
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        width:"100%",
        height:"90%"
    },
    description:{
        width:"100%",
        // height:"20%",
        paddingHorizontal:"1%",
        backgroundColor:"#fff",
        height:130
    },
    productName:{
        fontSize:18,
        fontWeight:"600",
        color:colors.black
    },
    subtitle:{
        fontSize:14,
        fontWeight:"400",
        color:"gray"
    },
    center:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        height:"100%"
    },
    main:{
        height:"100%",
        width:"100%"
    },
    brandName:{
        fontSize:28,
        fontWeight:"600",
        color:colors.black
    },
    description1:{
        fontSize:12,
        color:"gray",
        marginTop:"2%"
    },
    rating:{
        right:"32%",
        top:"5%"
    },
    priceView:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginTop:"5%"
    },
    percentage:{
        fontSize:14,
        fontWeight:"400",
        color:"white"
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
        color:colors.secondary,
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
        paddingHorizontal:"8%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:"5%"
    },
    details:{
        // height:"80%",
        paddingVertical:"5%",
        marginLeft:"5%",
        paddingRight:"5%",
        width:"100%"
    },
    imageContainer:{
        width:"100%",
        height:ScreenRatio.height/3,
        backgroundColor:"red"
    },
    save:{
        position:"absolute",
        top:"18%",
        zIndex:100,
        width:"100%",
        alignItems:"flex-end",
        paddingHorizontal:"5%"
    },
    isSave:{
        width:50,
        height:50,
        borderRadius:20,
        backgroundColor:"rgba(255,255,255,0.8)",
        alignItems:"center",
        justifyContent:"center"
    },
    off:{
        width:100,
        height:33,
        borderRadius:20,
        backgroundColor:colors.secondary,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:"5%"
    },
    buyNow:{
        width:150,
        height:60,
        backgroundColor:colors.secondary,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
    },
    buyText:{
        fontSize:14,
        fontWeight:'400',
        color:colors.white
    },
    detailsText:{
        fontSize:14,
        fontWeight:"400",
        color:"#000",
        marginTop:"10%",
        marginLeft:"10%"
    }
});

export default styles