import { TypesApiLoginResponse } from "@/types/api"
import { TypesRandomUserMeResponse } from "@/types/randomUserMe";
import storage from "@/lib/storage"

const wait = (ms:number)=>new Promise((res)=>setTimeout(res,ms))

const api = {

    async login({}:{mobile:string}):Promise<TypesApiLoginResponse>{

        // to show loading states
        await wait(1000)

        const response:TypesRandomUserMeResponse = await fetch('https://randomuser.me/api/?results=1&nat=us').then(a=>a.json())

        const user = {
            name: response?.results?.[0]?.name?.first+' '+response?.results?.[0]?.name?.last,
            email: response?.results?.[0]?.email || '',
            picture: response?.results?.[0]?.picture?.large || '',
        }

        storage.set('user.name',user.name)
        storage.set('user.email',user.email)
        storage.set('user.picture',user.picture)

        return user
    },

    async logout():Promise<void>{

        storage.remove('user.name')
        storage.remove('user.email')
        storage.remove('user.picture')

    },

}

export default api
