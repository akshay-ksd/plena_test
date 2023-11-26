import { View, Text, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import { Rating, AirbnbRating } from 'react-native-ratings';
import colors from '../../../../components/constants/colors';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import Icons from "react-native-vector-icons/Ionicons"
import AddButton from '../../../../components/molecules/add-button/add-button';
import { add_or_remove_saved_data } from '../../../../provider/saved-store';
import Animated, { FadeInUp, SlideInUp } from 'react-native-reanimated';
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
    updateCount(value, index, item)
  }



  return (
    <Pressable style={styles.container} onPress={openDetailScreen}>
      <Animated.View style={styles.box} entering={FadeInUp.duration(1000).delay(index * 50)}>
        <View style={styles.save}>
          <Ripple style={styles.fav} onPress={() => {
            isSave(!item?.isSave, index)
            add_or_remove_saved_data(item?.id)
          }}>
            <Icons name={item?.isSave ? "heart" : "heart-outline"} size={20} color={item?.isSave?"red":"#000"} />
          </Ripple>
        </View>
        <Image style={styles.image} source={{ uri: item?.thumbnail }} resizeMode="contain" />
        <View style={styles.detailsView}>
          <Text style={styles.brandName}>₹{calculateDiscountedPrice()}</Text>
          <Text style={styles.description} numberOfLines={1}>{item?.brand}</Text>
          <View style={styles.bView}>
            <AddButton value={item?.value} updateValue={updateValue} />
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default ProductSingleList;
