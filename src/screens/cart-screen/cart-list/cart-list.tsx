import { View, Text, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ProductSingleList from '../molecules/product-single-list/product-single-list'
import { SimpleRecycler } from 'react-native-simple-recyclerlistview';
import colors from '../../../components/constants/colors'
import ScreenRatio from '../../../components/constants/ScreenRatio'
import { RefreshControl } from 'react-native-gesture-handler';
import { check_is_saved } from '../../../provider/saved-store'
import useCartStore from '../../../provider/zustand/useCartStore'
import styles from './style';
import { get_all_cart } from '../../../provider/cart-store';
import noCart from "../../../../assets/image/empty_cart.webp";
import CartTotal from '../cart-total/cart-total';
import PaymentModel from '../../../components/template/payment-model/payment-model';
const ProductList = () => {
  const recyclerRef = useRef<SimpleRecycler>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false)
  const updateCart = useCartStore((state: any) => state.updateCount);
  const cart = useCartStore((state: any) => state.cart)
  const [payment, setPayment] = useState(false)

  useEffect(() => {
    let data = get_all_cart();
    data = data?.map((item: any) => ({ ...item, isSave: check_is_saved(item?.id) == undefined ? false : true }));
    recyclerRef?.current?.loadDataFromApi(data);
  }, [cart])

  const onRefresh = () => {

  };

  const updateCount = (value: number, id: number, item: any) => {
    recyclerRef?.current?.updateCount(value, id)
    setTimeout(() => {
      updateCart(value, item)
    }, 10);
  }

  const isSave = (value: boolean, id: number) => {
    recyclerRef?.current?.isSave(value, id)
  }

  return (
    <View style={styles.container}>
      {cart == 0 ? (
        <View style={styles.center}>
          <Image source={noCart} style={{ height: 300, width: 400 }} />
        </View>
      ) : (
        <SimpleRecycler
          ref={recyclerRef}
          rowRenderer={(_type, data, index, _extendedState) => {
            return <ProductSingleList index={index} item={data?.item} updateCount={updateCount} isSave={isSave} />;
          }}
          height={ScreenRatio.height}
          width={ScreenRatio.width}
          emptyText="No Data Found"
          emptyTextStyle={styles.center}
          scrollViewProps={{
            refreshControl: (
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            ),
          }}

          renderFooter={() => (
            <View>
              <View style={{ height: 100 }} />
            </View>
          )}
        />
      )}
      {cart > 0 && (
        <CartTotal openPayment={() => setPayment(true)} />
      )}
      {
        payment && (
          <PaymentModel showPaymentMode={() => setPayment(!payment)} clearCart={true} />
        )
      }
    </View>
  )
}

export default ProductList