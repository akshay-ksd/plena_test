import { View, Text, FlatList } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './style'
import colors from '../../../../components/constants/colors'
import Ripple from "react-native-material-ripple"

const CategoryList: FC<any> = ({ data,selectedCat }) => {
    const [activeIndex,setActiveIndex] = useState(0)
    const renderItem = ({ item, index }: any) => {
        const changeCategory =(i:number,category:string)=>{
            setActiveIndex(i)
            selectedCat(category)
        }
        return (
            <Ripple style={[styles.box,{backgroundColor:activeIndex == index?colors.secondary:colors.white}]} onPress={()=>changeCategory(index,item)}>
                <Text style={[styles.title,{color:activeIndex == index?colors.white:"#000"}]}>{item}</Text>
            </Ripple>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                contentContainerStyle={{alignItems:"center"}}
            />
        </View>
    )
}

export default CategoryList