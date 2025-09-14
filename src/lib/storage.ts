import { TypesStorageKeys } from "@/types/storage"


const storage = {
    isAvailable(){
        return typeof window !== 'undefined'
    },
    set(key:TypesStorageKeys,value:string){
        if(!this.isAvailable()) return;
        return localStorage.setItem(key,value)
    },
    remove(key:TypesStorageKeys){
        if(!this.isAvailable()) return;
        return localStorage.removeItem(key)
    },
    get(key:TypesStorageKeys){
        if(!this.isAvailable()) return '';
        return localStorage.getItem(key)
    }
}

export default storage
