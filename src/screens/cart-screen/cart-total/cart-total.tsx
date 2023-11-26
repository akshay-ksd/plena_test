import { View, Text } from 'react-native'
import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import styles from './style'
import { get_all_cart } from '../../../provider/cart-store'
import Ripple from "react-native-material-ripple"
import useCartStore from '../../../provider/zustand/useCartStore'
const CartTotal:FC<any> = ({openPayment}) => {
    const [cart,setCart] = useState(0)
    const count = useCartStore((state: any) => state.cart)
    const isUpdate = useCartStore((state: any) => state.count)
    useLayoutEffect(()=>{
        let data =  get_all_cart();  
        if(data.length){
            setCart(calculateCartTotal(data))
        } 
    },[count,isUpdate])

    function calculateCartTotal(cartData:any) {
        // Ensure cartData is an array
        if (!Array.isArray(cartData)) {
          console.error('Invalid cart data. Expected an array.');
          return 0;
        }
      
        // Calculate the total price
        const totalPrice = cartData.reduce((total, item) => {
          const discountedPrice = item.price * (1 - item.discountPercentage / 100);
          return total + discountedPrice * item.value; // Multiply by quantity (item.value)
        }, 0);
      
        return totalPrice.toFixed(2); // Return the total price rounded to two decimal places
      }
      
  return (
    <View style={styles.container}>
      <Ripple style={styles.box} onPress={()=>openPayment()}>
            <Text style={styles.total}>Total:₹{cart}</Text>
            <View style={styles.buy}>
                <Text style={styles.buyText}>BUY</Text>
            </View>
      </Ripple>
    </View>
  )
}

export default CartTotal