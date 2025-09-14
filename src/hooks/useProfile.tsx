import { useRouter } from 'next/navigation'
import storage from "@/lib/storage";
import { TypesApiUser } from "@/types/api";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

const loginRequiredRoutes = ['/dashboard']

export default function useProfile() {

    const router = useRouter()
    const [user, setUser] = useState<TypesApiUser>({ name: '', email: '', picture: '' })
    const path = usePathname()

    useEffect(() => {
        if (!storage.isAvailable()) return;

        const hasUsername = storage.get('user.name')
        const isPathForbidden = loginRequiredRoutes.includes(path)

        if (!hasUsername && isPathForbidden) {
            router.push('/login')
            return;
        }
        setUser({
            name: storage.get('user.name') || '',
            email: storage.get('user.email') || '',
            picture: storage.get('user.picture') || ''
        })
    }, [router,path])

    return {
        user,
        isLoggedIn: user.name?.length > 0
    }

}



