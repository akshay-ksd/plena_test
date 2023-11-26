import React, { useState } from 'react'
import Instance from '../../../provider/Instence';
import { get_product_details } from '../../../provider/endpoints';

const useGetProductDetails = () => {
    const [loading,setLoading] = useState(true)
    const getProductDetails =async(id:number)=>{
        let response = false;
        try {
          let res = await Instance.get(`${get_product_details}${id}`)
          response = res?.data;
          setLoading(false)
        } catch (err) {
          // console.log('err', err);
          response = false;
          setLoading(false)
        }
        return response;
    };

    return [getProductDetails,loading]
}

export default useGetProductDetails