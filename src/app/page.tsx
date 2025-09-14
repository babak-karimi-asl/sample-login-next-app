"use client"

import { Button } from "@/components/ui/button";
import useProfile from "@/hooks/useProfile";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {

  const profile = useProfile()

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ul className="font-mono list-inside  text-sm/6 text-center sm:text-left">
          <li className=" tracking-[-.01em]">
            this is a sample project by Babak Karimi Asl.
          </li>
          <li className="tracking-[-.01em]">
            it has a login page and a dashboard page.
          </li>
          <li className="tracking-[-.01em]">
            click button below to see.
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href={profile.isLoggedIn ? "/dashboard" : "/login"}>
            <Button>
              Click Here To {profile.isLoggedIn ? ' Go To Dashboard ' : ' Login '}
            </Button>
          </Link>
        </div>
      </main>

    </div>
  );
}
