import { create } from 'zustand'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

const useCartStore = create((set) => ({
    cart: 0,
    count:0,
    updateCount: (count: number, item: any) => {
        const data: string | undefined = storage.getString('cart')
        let cart: any[] = [];
        if (data) {
            cart = JSON.parse(data);

            const index = cart.findIndex((x: any) => x.id == item?.id);

            if (index == -1) {
                item.value = count
                cart.push(item);
                set((state: any) => ({ cart: cart.length }));
            } else {
                if (count > 0) {
                    cart[index].value = count;
                } else {
                    cart.splice(index, 1)
                    set((state: any) => ({ cart: cart.length }));
                }
            }
        } else {
            item.value = count
            cart.push(item);
            set((state: any) => ({ cart: cart.length }));
        }

        storage.set('cart',JSON.stringify(cart))
        set((state: any) => ({ count: state.count+1 }));
    },
    loadCart:() =>{
        const data: string | undefined = storage.getString('cart')

        if(data){
            let cart = JSON.parse(data)
            set((state: any) => ({ cart: cart.length }));
        }
        set((state: any) => ({ count: state.count+1 }));
    },
    removeCart:() => {
        storage.delete('cart')
        set((state: any) => ({ cart: 0 }));
        set((state: any) => ({ count: state.count+1 }));
    }
}));

export default useCartStore