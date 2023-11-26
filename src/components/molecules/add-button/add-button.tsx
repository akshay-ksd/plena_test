import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './style';
import Ripple from "react-native-material-ripple"
import colors from '../../constants/colors';
import Icons from "react-native-vector-icons/Ionicons"
import Animated, { ZoomIn } from 'react-native-reanimated';
interface buttonType {
    value: number;
    updateValue: (value: number) => void
}
const AddButton: FC<buttonType> = ({ value, updateValue }) => {
    const Press = Animated.createAnimatedComponent(Ripple)
    const incrementCount = () => {
        updateValue(value+1)
    }

    const decrementCount = () => {
        let c = value - 1
        if(c !== 0){
            updateValue(value-1)
        }else[
            updateValue(0)
        ]
       
    }


    return (
        <>
            {
                value > 0 ?
                    <Animated.View style={[styles.container, styles.addButton]} entering={ZoomIn.duration(500)}>
                        <Ripple style={styles.subButton} onPress={decrementCount}>
                            <Icons name={"remove"} color={"#000"} size={26}/>
                        </Ripple>
                        <View style={[styles.subButton,{backgroundColor:colors.white}]}>
                            <Text style={styles.countText}>{value}</Text>
                        </View>
                        <Ripple style={styles.subButton} onPress={incrementCount}>
                            <Icons name={"add"} color={"#000"} size={26}/>
                        </Ripple>
                    </Animated.View>
                    :
                    <Press style={styles.container} onPress={incrementCount} >
                        <Icons name={"add"} color={colors.white} size={26}/>
                    </Press>
            }
        </>

    )
}

export default AddButton