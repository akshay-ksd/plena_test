import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Ripple from "react-native-material-ripple"
import Animated, { FadeInDown } from 'react-native-reanimated'
const BuyNowButton:FC<any> = ({showPaymentMode}) => {
  return (
    <Animated.View style={styles.container} entering={FadeInDown.duration(1000)}>
      <Ripple style={styles.button} onPress={()=>showPaymentMode()}>
        <Text style={styles.buyText}>Buy Now</Text>
      </Ripple>
    </Animated.View>
  )
}

export default BuyNowButton