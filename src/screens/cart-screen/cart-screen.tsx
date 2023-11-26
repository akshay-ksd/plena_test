import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Header from './molecules/header/header'
import CartList from './cart-list/cart-list'
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <CartList/>
    </View>
  )
}

export default CartScreen