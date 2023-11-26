import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './style'
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated'
import Ripple from "react-native-material-ripple";
import Icons from "react-native-vector-icons/Ionicons"
import colors from '../../constants/colors';
import LottieView from 'lottie-react-native';
import useCartStore from '../../../provider/zustand/useCartStore';
const PaymentModel: FC<any> = ({ showPaymentMode,clearCart }) => {
    const Press = Animated.createAnimatedComponent(Pressable)
    const [mode, setMode] = useState(0)
    const [success, setSuccess] = useState(false)
    const removeCart = useCartStore((state: any) => state.removeCart)

    const changeMode = (m: number) => {
        setTimeout(() => {
            setMode(m)
        }, 500);
    }

    const paymentSuccess = () => {
        setSuccess(true)
        setTimeout(() => {
            showPaymentMode()
        }, 1300);
        if(clearCart){
            removeCart()
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => showPaymentMode()} activeOpacity={0.2}>
            {
                success ?
                    <LottieView source={require('../../../../assets/image/success.json')} autoPlay style={{ height: 100, marginBottom: "40%" }} duration={1000} />
                    :
                    <Press style={styles.box}  >
                        <Ripple style={styles.mode} onPress={() => changeMode(0)}>
                            <Text style={styles.modeText}>COD</Text>
                            <Icons name={"checkbox"} color={mode == 0 ? colors.secondary : colors.white} size={24} />
                        </Ripple>
                        <Ripple style={styles.mode} onPress={() => changeMode(1)} >
                            <Text style={styles.modeText}>G-PAY</Text>
                            <Icons name={"checkbox"} color={mode == 1 ? colors.secondary : colors.white} size={24} />
                        </Ripple>
                        <Ripple style={styles.mode} onPress={() => changeMode(2)}>
                            <Text style={styles.modeText}>PHONE PAY</Text>
                            <Icons name={"checkbox"} color={mode == 2 ? colors.secondary : colors.white} size={24} />
                        </Ripple>
                        <Ripple style={styles.mode} onPress={() => changeMode(3)}>
                            <Text style={styles.modeText}>PAYTM</Text>
                            <Icons name={"checkbox"} color={mode == 3 ? colors.secondary : colors.white} size={24} />
                        </Ripple>
                        <Ripple style={styles.payment} onPress={paymentSuccess}>
                            <Text style={styles.processText}>Process</Text>
                        </Ripple>
                    </Press>
            }

        </TouchableOpacity>
    )
}

export default PaymentModel