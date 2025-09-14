
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import api from '@/lib/api'

export default function FormsLogout() {
    const router = useRouter()

    async function onLogout() {
        await api.logout()
        router.push('/login')
    }

    return (
        <Button onClick={onLogout} >
            Logout
        </Button>
    )
}