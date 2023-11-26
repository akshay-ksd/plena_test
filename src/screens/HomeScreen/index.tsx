import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles from './styles'
import Header from './molecules/header/header'
import ProductList from './product-list/product-list'
const Home = () => {
  const listRef:any = useRef()
  const onChangeText =(t:string)=>{
    listRef.current.searchProduct(t)
  }
  return (
    <View style={styles.container}>
      <Header onChangeText={onChangeText}/>
      <ProductList ref={listRef}/>
    </View>
  )
}

export default Home