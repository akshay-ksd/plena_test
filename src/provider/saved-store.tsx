import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

export const add_or_remove_saved_data =(id:number)=>{
    const data:string|undefined = storage.getString('saved') // 'Marc'
    let saved:number[] = []
    if(data){
        saved = JSON.parse(data)
        const isData = saved.findIndex((x:number)=>x == id)
        if(isData !== -1){
            saved.splice(isData,1)
        }else{
            saved.push(id)
        }
    }else{
        saved.push(id)
    }
    storage.set('saved', JSON.stringify(saved))
};


export const check_is_saved =(id:number)=>{
    const data:string|undefined = storage.getString('saved') // 'Marc'
    if(data){
        let saved:number[] = JSON.parse(data);
        let isExist:any =  saved.find((x:number)=>x == id);
        return isExist
    }else{
        return false
    }
}