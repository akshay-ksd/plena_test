import { useState } from 'react';
import Instance from '../../../../provider/Instence';
import { get_products } from '../../../../provider/endpoints';
const useGetAllProducts = () => {

  const [loading,setLoading] = useState(true);

  const getAllProduct = async () => {
    
    let response = false;
    try {
      let res = await Instance.get(get_products)
      response = res?.data;
      setLoading(false)
    } catch (err) {
      console.log('err', err);
      response = false;
      setLoading(false)
    }
    return response;
  };

  return [loading,getAllProduct];
};

export default useGetAllProducts;
