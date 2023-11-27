import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { FC, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import styles from '../styles'
import useGetAllProducts from '../api_hooks/use-get-all-products/useGetAllProducts'
import ProductSingleList from '../molecules/product-single-list/product-single-list'
import { SimpleRecycler } from 'react-native-simple-recyclerlistview';
import colors from '../../../components/constants/colors'
import ScreenRatio from '../../../components/constants/ScreenRatio'
import { RefreshControl } from 'react-native-gesture-handler';
import { check_is_saved } from '../../../provider/saved-store'
import useCartStore from '../../../provider/zustand/useCartStore'
import { check_is_in_cart } from '../../../provider/cart-store'
import { useIsFocused } from '@react-navigation/native'
import { FlashList } from "@shopify/flash-list";
import CategoryList from '../molecules/category-list/category-list'
import Loader from '../../../components/template/loader/loader'
const ProductList: FC<any> = (props, ref) => {
  const [loading, getAllProduct]: any = useGetAllProducts()
  const [category, setCategory] = useState<any>([])
  const recyclerRef = useRef<SimpleRecycler>(null);
  const [ListData, setListData] = useState([]);

  const products = useRef<any>([])

  const isFocused = useIsFocused()

  const updateCart = useCartStore((state: any) => state.updateCount)
  const loadCart = useCartStore((state: any) => state.loadCart)

  useEffect(() => {
    if (isFocused) {
      get_product()
      loadCart()

      if(global.selecteCat){
        console.log("global.selecteCat",global.selecteCat)
        selectedCat(global.selecteCat)
        global.selecteCat = undefined
      }
    }
  }, [isFocused])

  const get_product = async () => {
    if (products.current.length == 0) {
      let data = await getAllProduct();
      products.current = data?.products
      data = data?.products.map((item: any, index: number) => ({ ...item, value: check_is_in_cart(item?.id) ? check_is_in_cart(item?.id) : 0, isSave: check_is_saved(item?.id) == undefined ? false : true, id: index }));
      let uniqueCategories = Array.from(new Set(data.map((product: any) => product.category)));
      uniqueCategories.unshift("All")
      setCategory(uniqueCategories)
      recyclerRef?.current?.loadDataFromApi(data);
      global.category = uniqueCategories;
    } else {
      products.current = products.current?.map((item: any, index: number) => ({ ...item, value: check_is_in_cart(item?.id) ? check_is_in_cart(item?.id) : 0, isSave: check_is_saved(item?.id) == undefined ? false : true, id: index }));
      recyclerRef?.current?.loadDataFromApi(products.current);
    }
  }

  useImperativeHandle(ref, () => ({
    searchProduct: (t: string) => {
      searchByBrand(t)
    }
  }))

  function searchByBrand(searchTerm: string) {
    if (!Array.isArray(products.current)) {
      console.error('Invalid cart data. Expected an array.');
      return [];
    }

    // Use filter to find items with the specified brandName
    const searchResults = products.current.filter(item => item.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    recyclerRef?.current?.loadDataFromApi(searchResults);
    // return searchResults;
    // Ensure cartData is an array

  }

  const onRefresh = () => {

  };

  const updateCount = (value: number, id: number, item: any) => {
    // let newData:any = Object.assign([],ListData);

    // newData[id].value = value;
    // setListData(newData)
    recyclerRef?.current?.updateCount(value, id)
    setTimeout(() => {
      updateCart(value, item)
    }, 10);
  }

  const isSave = (value: boolean, id: number) => {
    recyclerRef?.current?.isSave(value, id)
    // let newData:any = Object.assign([],ListData);

    // newData[id].isSave = value;
    // setListData(newData)
    // recyclerRef?.current?.updateCount(value, id)
    // setTimeout(() => {
    //   updateCart(value, item)
    // }, 10);
  }

  const selectedCat = (category: string) => {
    if (category == "All") {
      products.current = products.current?.map((item: any, index: number) => ({ ...item, value: check_is_in_cart(item?.id) ? check_is_in_cart(item?.id) : 0, isSave: check_is_saved(item?.id) == undefined ? false : true, id: index }));
      recyclerRef?.current?.loadDataFromApi(products.current);
    } else {
      products.current = products.current?.map((item: any, index: number) => ({ ...item, value: check_is_in_cart(item?.id) ? check_is_in_cart(item?.id) : 0, isSave: check_is_saved(item?.id) == undefined ? false : true, id: index }));
      const data = products.current
      recyclerRef?.current?.loadDataFromApi(data);
    }
  }

  return (
    <View style={styles.container}>
      <CategoryList data={category} selectedCat={selectedCat} />
      {loading ? (
        <View style={styles.center}>
          <Loader/>
          <Loader/>
          <Loader/>
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
          renderFooter={() => (
            <View>
              <View style={{ height: 300 }} />
            </View>
          )}
        />
      )}
    </View>
  )
}

export default forwardRef(ProductList)
