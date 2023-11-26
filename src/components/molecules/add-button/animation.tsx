import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import Icons from "react-native-vector-icons/Ionicons"
import colors from '../../constants/colors';
import Ripple from 'react-native-material-ripple';
import { TouchableOpacity } from 'react-native';
const ICON_SIZE = 20;

const clamp = (value: number, min: number, max: number) => {
    'worklet';
    return Math.min(Math.max(value, min), max);
};

const BUTTON_WIDTH = 130;
interface buttonType {
    value: number;
    updateValue: (value: number) => void
}
const AddButton: FC<buttonType> = ({ value, updateValue }) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const RipplePress = Animated.createAnimatedComponent(Ripple)

    const [count, setCount] = useState(value);

    const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 0.3;

    useEffect(()=>{
        setCount(value)

    },[])

    // wrapper function
    const incrementCount = useCallback(() => {
        // external library function
        updateValue(value+1)
        setCount((currentCount) => currentCount + 1);
    }, [count]);

    const decrementCount = useCallback(() => {
        let c = value - 1
        if(c !== 0){
            updateValue(value-1)
        }else[
            updateValue(0)
        ]
        setCount((currentCount) => currentCount - 1);
       
    }, [count]);

    const resetCount = useCallback(() => {
        setCount(0)
        updateValue(0)
    }, [count]);

    const onPanGestureEvent =
        useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
            onActive: (event) => {
                translateX.value = clamp(
                    event.translationX,
                    -MAX_SLIDE_OFFSET,
                    MAX_SLIDE_OFFSET
                );

                translateY.value = clamp(event.translationY, 0, MAX_SLIDE_OFFSET);
            },
            onEnd: () => {
                if (translateX.value === MAX_SLIDE_OFFSET) {
                    // Increment
                    runOnJS(incrementCount)();
                } else if (translateX.value === -MAX_SLIDE_OFFSET) {
                    // Decrement
                    runOnJS(decrementCount)();
                } else if (translateY.value === MAX_SLIDE_OFFSET) {
                    runOnJS(resetCount)();
                }

                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            },
        });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
            ],
        };
    }, []);

    const rPlusMinusIconStyle = useAnimatedStyle(() => {
        const opacityX = interpolate(
            translateX.value,
            [-MAX_SLIDE_OFFSET, 0, MAX_SLIDE_OFFSET],
            [0.4, 0.8, 0.4]
        );

        const opacityY = interpolate(
            translateY.value,
            [0, MAX_SLIDE_OFFSET],
            [1, 0]
        );

        return {
            opacity: opacityX * opacityY,
        };
    }, []);

    const rCloseIconStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateY.value,
            [0, MAX_SLIDE_OFFSET],
            [0, 0.8]
        );

        return {
            opacity,
        };
    }, []);

    const rButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value * 0.1,
                },
                { translateY: translateY.value * 0.1 },
            ],
        };
    }, []);

    return (
        <>
            {
                value!== 0 ?
                    <Animated.View style={[styles.button, rButtonStyle]}>
                        <Animated.View style={rPlusMinusIconStyle}>
                            <Ripple onPress={decrementCount} style={styles.press}>
                                <Icons name={"remove"} color={"#fff"} size={20} />
                            </Ripple>
                        </Animated.View>
                        <Animated.View style={rCloseIconStyle}>
                            <Icons name={"remove"} color={"#fff"} size={20} />
                        </Animated.View>
                        <Animated.View style={rPlusMinusIconStyle}>
                            <Ripple onPress={incrementCount} style={styles.press}>
                                <Icons name={"add"} color={"#fff"} size={20} />
                            </Ripple>
                        </Animated.View>
                        <View
                            style={{
                                ...StyleSheet.absoluteFillObject,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <PanGestureHandler onGestureEvent={onPanGestureEvent}>
                                <Animated.View style={[styles.circle, rStyle]}>
                                    <Text style={styles.countText}>{value}</Text>
                                </Animated.View>
                            </PanGestureHandler>
                        </View>
                    </Animated.View>
                    :
                    <Ripple style={styles.button} onPress={incrementCount}>
                        <Text style={[styles.countText, { color: "#fff" }]}>Add</Text>
                    </Ripple>
            }

        </>

    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: BUTTON_WIDTH,
        backgroundColor: colors.secondary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    countText: {
        fontSize: 16,
        color: 'black',
        fontWeight: "700"
    },
    circle: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderRadius: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4
    },
    press:{
        flexGrow:1,
        alignItems:"center",
        justifyContent:"center"
    }
});