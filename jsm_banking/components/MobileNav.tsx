'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


import React from 'react'

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger><Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" /> </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">

                    <Link href="/" className="cursor-pointer items-center flex gap-1 px-4" >
                        <Image src="/icons/logo.svg" width={34} height={34} alt="FinFlow Logo" />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinFlow</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex flex-col gap-6 h-full pt-16 text-white">
                                {sidebarLinks.map((item) => {
                                    // For Navigating Current Page from Sidebar Code
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full',
                                                // Here is backgroud effect of SideBar buttoon
                                                { 'bg-bank-gradient': isActive })}>
                                                
                                                    <Image
                                                        src={item.imgURL}
                                                        alt='item.label'
                                                        width={20}
                                                        height={20}
                                                        className={cn({
                                                            'brightness-[3] invert-0': isActive
                                                        })}
                                                    />
                                                
                                                <p className={cn('text-16 font-semibold text-black-2', {
                                                    '!text-white': isActive
                                                })}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                USER
                            </nav>
                        </SheetClose>
                        Footer
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav