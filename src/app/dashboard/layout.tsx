"use client"

import Image from "next/image";
import { ReactNode } from "react";
import useProfile from "@/hooks/useProfile";
import FormsLogout from "@/components/forms/logout";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {

    const profile = useProfile()
    /* Had to use normal <img/> because next's <Image/> from external sources of randomuser.me not working on vercel
        even with config fixes
        this cannot access the image when deployed to vercel -> <Image src={profile.user.picture} alt="user avatar" width={128} height={128} className="rounded-full" />
    */
    const UserImage = profile.user.picture ? <img src={profile.user.picture} alt="user avatar" width={128} height={128} className="w-[128px] h-[128px] rounded-full" />:<></>

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Desktop Sidebar */}
            <aside className="hidden w-64 bg-white border-r shadow-sm md:flex flex-col  items-center pt-10 px-3">
                {UserImage}
                <div className="mt-4 text-xl font-bold">{profile.user.name}</div>
                <div className="mt-1 text-sm opacity-80">{profile.user.email}</div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Navbar */}
                <header className="h-14 bg-white border-b flex items-center justify-between pl-4 pr-2 md:px-6 shadow-sm text-sm md:text-base">
                    <div className="flex items-center gap-1 md:gap-4">
                        <Link href="/" className="cursor-pointer underline text-sky-800">Home</Link>
                        <div>/</div>
                        <span className="font-semibold">Dashboard</span>
                    </div>
                    <FormsLogout />
                </header>

                {/* Mobile Sidebar */}
                <div className="flex md:hidden items-center justify-center mt-5">
                    <aside className="flex  flex-col items-center justify-center p-3 sm:p-10   m-2 rounded-lg  bg-white  shadow-md  flex-col ">
                        {UserImage}
                        <div className="mt-4 text-xl font-bold">{profile.user.name}</div>
                        <div className="mt-1 text-sm opacity-80">{profile.user.email}</div>
                    </aside>
                </div>

                {/* Page content */}
                <main className="flex-1 p-6">{profile.isLoggedIn && children}</main>
            </div>
        </div>
    );
}
