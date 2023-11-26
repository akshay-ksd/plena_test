import { View, Text, ActivityIndicator } from 'react-native'
import React, { FC, useLayoutEffect, useState } from 'react'
import styles from './style'
import { SliderBox } from "react-native-image-slider-box";
import ScreenRatio from '../../../components/constants/ScreenRatio';
import colors from '../../../components/constants/colors';
import useGetProductDetails from '../api/useGetProductDetails';
import Ripple from "react-native-material-ripple"
import { AirbnbRating } from 'react-native-ratings';
import Icons from "react-native-vector-icons/Ionicons"
import AddButton from '../add-button/add-button';
import { check_is_in_cart } from '../../../provider/cart-store';
import useCartStore from '../../../provider/zustand/useCartStore';
import { useIsFocused } from '@react-navigation/native';
import { add_or_remove_saved_data, check_is_saved } from '../../../provider/saved-store';
import PaymentModel from '../../../components/template/payment-model/payment-model';
import Animated, { FadeInUp } from 'react-native-reanimated';
const ProductDetails: FC<any> = ({ item,initiateBuy }) => {
    const [details, setDetails] = useState<any>({})
    const [getProductDetails, loading]: any = useGetProductDetails()
    const originalPrice = parseFloat(item?.price); // Assuming 'price' is the original price
    const discountPercentage = parseFloat(item?.discountPercentage);
    const [value, setValue] = useState(check_is_in_cart(item?.id) ? check_is_in_cart(item?.id) : 0)
    const updateCart = useCartStore((state: any) => state.updateCount)
    const isFocused = useIsFocused()
    const [isSave, setIsSave] = useState(check_is_saved(item?.id) ? true : false)
    const Slider = Animated.createAnimatedComponent(SliderBox)

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
    useLayoutEffect(() => {

        get_details()
    }, [])

    useLayoutEffect(() => {
        if (isFocused) {
            setValue(check_is_in_cart(item?.id) ? check_is_in_cart(item?.id) : 0)
            setIsSave(check_is_saved(item?.id) !== undefined ? true : false)

        }

    }, [isFocused])

    const get_details = async () => {
        const data = await getProductDetails(item?.id)
        if (data) {
            setDetails(data)
        } else {
            setDetails(item)
        }
    }

    const updateValue = (value: number) => {
        setValue(value)
        updateCart(value, item)
    }

    const buyNow =()=> {
        initiateBuy()
    }

    return (
        <View style={styles.container}>
            {
                loading ?
                    <View style={styles.center}>
                        <ActivityIndicator />
                    </View>
                    :

                    <>
                        <View style={styles.description}>
                            <View style={styles.main}>
                                <Ripple style={styles.details}>
                                    <Animated.Text style={styles.brandName} entering={FadeInUp.duration(500).delay(100)}>{item?.brand}</Animated.Text>
                                    <Animated.View style={styles.rating} entering={FadeInUp.duration(500).delay(300)}>
                                        <AirbnbRating
                                            count={6}
                                            defaultRating={parseFloat(item?.rating)}
                                            size={15}
                                            showRating={false}
                                            selectedColor={colors.primary}
                                            isDisabled
                                        />
                                    </Animated.View>

                                    <Animated.Text style={styles.stock} entering={FadeInUp.duration(500).delay(3500)}>Only {item?.stock} Left</Animated.Text>
                                </Ripple>
                            </View>
                        </View>
                        <View style={styles.save}>
                            <Ripple style={styles.isSave} onPress={() => {
                                setIsSave(!isSave)
                                add_or_remove_saved_data(item?.id)
                            }}>
                                <Icons name={isSave ? "heart" : "heart-outline"} size={20} color={isSave?"red":"black"} />
                            </Ripple>
                        </View>
                        <SliderBox
                            images={item?.images}
                            style={{ height: ScreenRatio.height / 4 }}
                            resizeMode={"contain"}
                            dotStyle={{ backgroundColor: colors.primary }}
                            entering={FadeInUp.duration(500).delay(0)}
                        />

                        <View style={styles.description}>
                            <View style={styles.main}>
                                <Ripple style={styles.details}>
                                    <Animated.View style={styles.priceView} entering={FadeInUp.duration(500).delay(400)}>
                                        <Text style={styles.price}>₹{calculateDiscountedPrice()}</Text>
                                        <View style={styles.off}>
                                            <Text style={styles.percentage}>{discountPercentage}% OFF</Text>
                                        </View>
   
                                    </Animated.View>
                                </Ripple>

                                <Animated.View style={styles.addButton} entering={FadeInUp.duration(500).delay(600)}>
                                    <AddButton value={value} updateValue={updateValue} />
                                    <Ripple style={styles.buyNow} onPress={buyNow}>
                                        <Text style={styles.buyText}>Buy Now</Text>
                                    </Ripple>
                                </Animated.View>
                                <Animated.Text style={styles.detailsText} entering={FadeInUp.duration(500).delay(700)}>Details</Animated.Text>
                                <Animated.Text style={[styles.detailsText,{marginTop:2,color:"gray"}]} entering={FadeInUp.duration(500).delay(800)}>{item?.description}</Animated.Text>
                            </View>
                        </View>
                    </>
            }

        </View>
    )
}

export default ProductDetails