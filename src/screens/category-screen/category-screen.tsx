import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Ripple from "react-native-material-ripple"
import colors from '../../components/constants/colors'
const CategoryScreen = () => {
    const [category, setCategory] = useState([])
    const [activeIndex,setIndex] = useState(0)
    const isFocus = useIsFocused()
    const navigation = useNavigation()

    useEffect(() => {
        if (category) {
            setCategory(global.category)
        }
    }, [isFocus])

    const selectIndex = (id:number,item:string)=> {
        setIndex(id)
        global.selecteCat = item

        setTimeout(() => {
            navigation.navigate("Home")
        }, 500);
    }

    const renderItem = ({ item, index }) => {
        return (
            <Ripple style={[styles.box,{backgroundColor:activeIndex == index?colors.secondary:colors.white}]} onPress={()=>selectIndex(index,item)}>
                <Text style={[styles.itemName,{color:activeIndex == index?colors.white:colors.secondary}]}>{item}</Text>
            </Ripple>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList data={category} renderItem={renderItem} numColumns={2} keyExtractor={(_, i) => i.toString()} 
                      contentContainerStyle={{padding:5}}/>
        </View>
    )
}

export default CategoryScreen