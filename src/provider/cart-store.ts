import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

export const get_all_cart =()=>{
    const cart:string|undefined = storage.getString('cart') // 'Marc'
    if(cart){
        let c = JSON.parse(cart);
        return c
    }else{
        return []
    }
}

export const check_is_in_cart =(id:number)=>{
    const data:string|undefined = storage.getString('cart') // 'Marc'
    if(data){
        let cart:any[] = JSON.parse(data);
        let isExist:any =  cart.find((x:any)=>x?.id == id)?.value;
        return isExist
    }else{
        return false
    }
}