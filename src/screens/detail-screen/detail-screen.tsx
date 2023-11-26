import { View, Text } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './style'
import { useRoute } from '@react-navigation/native';
import Header from './header/header';
import ProductDetails from './product/product';
import BuyNowButton from './buy-now-button/buy-now-button';
import PaymentModel from '../../components/template/payment-model/payment-model';
const DetailsScreen: FC<any> = (props) => {
    const route = useRoute();
    const [payment,setPayment] = useState(false)
    const { item }:any = route.params;
    return (
        <View style={styles.container}>
            <Header/>
            <ProductDetails item={item} initiateBuy={()=>setPayment(!payment)}/>
            {/* <BuyNowButton showPaymentMode={()=>setPayment(!payment)}/> */}
            {
                payment && (
                    <PaymentModel showPaymentMode={()=>setPayment(!payment)}/>
                )
            }
        </View>
    )
}

export default DetailsScreen