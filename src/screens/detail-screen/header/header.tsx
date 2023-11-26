import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from "react-native-vector-icons/Ionicons"
import colors from '../../../components/constants/colors'
import useCartStore from '../../../provider/zustand/useCartStore'
import { useNavigation } from '@react-navigation/native';
import Ripple from "react-native-material-ripple"

const Header = () => {
  const count = useCartStore((state:any) => state.cart)
  const navigation:any = useNavigation();
  
  const goToCart =() => {
    navigation.navigate("CartScreen")
  }

  return (
    <View style={styles.container}>
      <Ripple onPress={()=>navigation.goBack()} style={styles.backButton} >
        <Icon name="chevron-back-outline" size={22} color={colors.black}/>
      </Ripple>
      {/* <Text style={styles.cartText}>Cart</Text> */}
      <Ripple onPress={goToCart}>
        <Icon name="bag-outline" size={38} color={"black"}/>
        <View style={styles.count}>
          <Text style={styles.number}>{count}</Text>
        </View>
      </Ripple>
    </View>
  )
}

export default Header