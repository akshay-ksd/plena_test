import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import { Rating, AirbnbRating } from 'react-native-ratings';
import colors from '../../../../components/constants/colors';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import Icons from "react-native-vector-icons/Ionicons"
import AddButton from '../add-button/add-button';
import { add_or_remove_saved_data } from '../../../../provider/saved-store';
import Animated, { FadeOutLeft, SlideOutLeft, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
interface productType {
  index: number;
  item: any;
  updateCount: (value: number, id: number, item: any) => void;
  isSave: (value: boolean, id: number) => void
}

const ProductSingleList: FC<productType> = ({ index, item, updateCount, isSave }) => {
  // Parse the values as numbers
  const originalPrice = parseFloat(item?.price); // Assuming 'price' is the original price
  const discountPercentage = parseFloat(item?.discountPercentage); // Assuming 'discountPercentage' is the discount percentage
  const navigation: any = useNavigation()

  const translateX = useSharedValue(0)

  function calculateDiscountedPrice() {
    if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
      // Handle invalid input values
      return "Invalid input values";
    }

    // Calculate the discount amount
    const discountAmount = (originalPrice * discountPercentage) / 100;

    // Calculate the discounted price
    const discountedPrice = originalPrice - discountAmount;

    return discountedPrice.toFixed(2); // Assuming you want the result to have two decimal places
  }

  const openDetailScreen = () => {
    navigation.navigate("DetailsScreen", { item })
  }

  const updateValue = (value: number) => {
    if (value == 0) {
      translateX.value = withTiming(-ScreenRatio.width, { duration: 600 })
      setTimeout(() => {
        translateX.value = 0
      }, 1000);
    }
    updateCount(value, index, item)
  }

  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }]
    }
  })



  return (
    <View style={styles.container} >
      <Animated.View style={[styles.box, AnimatedStyle]}>
        <Image style={styles.image} source={{ uri: item?.thumbnail }} resizeMode="contain" />
        <View style={styles.main}>
          <Text style={styles.brandName}>{item?.brand}</Text>
          <View style={styles.priceView}>
            {/* <Text style={styles.originalPrice}>₹{item?.price}</Text> */}
            <Text style={styles.price}>₹{calculateDiscountedPrice()}</Text>
          </View>
        </View>
        <AddButton value={item?.value} updateValue={updateValue} />
      </Animated.View>
    </View>
  );
};

export default ProductSingleList;
