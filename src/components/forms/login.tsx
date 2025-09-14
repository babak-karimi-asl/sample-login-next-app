"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import validate from "@/lib/validate"
import { useEffect } from "react"
import { useForm, SubmitHandler } from 'react-hook-form';
import api from "@/lib/api"
import { useRouter } from 'next/navigation'
import useProfile from "@/hooks/useProfile"
import Link from 'next/link'

type Inputs = {
  mobile: string
}

export default function FormsLogin() {

  const router = useRouter()

  const profile = useProfile()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setFocus
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await api.login({ mobile: data.mobile })
    router.push('/dashboard')
  }

  useEffect(() => {
    if (profile.isLoggedIn) {
      router.push('/dashboard')
    }
    setFocus('mobile')
  }, [setFocus, profile.isLoggedIn, router])

  return (

    <Card className="w-[300px] max-w-[95vw]">
      <CardHeader>
        <CardDescription>
          Please enter your Iran mobile number below to login to your account.
        </CardDescription>
        <hr />
        <Link href="/" className="text-sky-700 underline text-xs" >&lt;- or back to home</Link>
      </CardHeader>
        <CardContent>
          <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)} >
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="text" inputMode="numeric"
              autoComplete="off"
              placeholder="09xxxxxxxxx"
              {...register('mobile', { validate: validate.iranMobileNumber })}
              error={errors.mobile}
            />
            <Button type="submit" className="w-full " disabled={!!errors.mobile || isSubmitting || isSubmitSuccessful} loading={isSubmitting}>
              {isSubmitting ? 'Logging In...' : isSubmitSuccessful ? 'Redirecting...' : 'Login'}
            </Button>
          </form>
        </CardContent>
    </Card>

  )
}
