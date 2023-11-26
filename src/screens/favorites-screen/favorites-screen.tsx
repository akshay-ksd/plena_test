import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles from './style'
import ProductList from './product-list/product-list'
const FavoritesScreen = () => {
  const listRef:any = useRef()
  
  return (
    <View style={styles.container}>
      <ProductList ref={listRef}/>
    </View>
  )
}

export default FavoritesScreen