import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import colors from '../../constants/colors';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={styles.shimmer}
                // shimmerColors={[colors.white,colors.secondary]}
            
            />
             <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={styles.shimmer}
                // shimmerColors={[colors.white,colors.secondary]}
            />
        </View>
    )
}

export default Loader