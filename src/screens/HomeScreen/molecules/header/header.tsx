import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Icon from "react-native-vector-icons/Ionicons"
import colors from '../../../../components/constants/colors'
import useCartStore from '../../../../provider/zustand/useCartStore'
import { useNavigation } from '@react-navigation/native';
import Ripple from "react-native-material-ripple"
import Icons from "react-native-vector-icons/Ionicons"
const Header: FC<any> = ({ onChangeText }) => {
  const count = useCartStore((state: any) => state.cart)
  const navigation: any = useNavigation();

  const goToCart = () => {
    navigation.navigate("CartScreen")
  }
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      
        <Text style={styles.name}>Hey, Akshay</Text>
        <Ripple onPress={goToCart}>
          <Icon name="bag-outline" size={38} color={colors.white} />
          <View style={styles.count}>
            <Text style={styles.number}>{count}</Text>
          </View>
        </Ripple>
      </View>
      <View style={styles.searchBox}>
        <Icons name={"search"} color={colors.white} size={20} />

        <TextInput placeholder='Search product' placeholderTextColor={"#f1f1f1"} onChangeText={(t) => onChangeText(t)} style={styles.input} />
      </View>
    </View>
  )
}

export default Header