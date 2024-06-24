'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Siderbar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href = "/" className= "mb-12 cursor-pointer items-center gap-2 flex" >
                <Image src="/icons/logo.svg" width={34} height={34} alt={"FinFlow Logo"} className = "size-[24px]max-xl:size-14"/>
                <h1 className = "sidebar-logo">FinFlow</h1> 
            </Link>

            {sidebarLinks.map((item) => {
                // For Navigating Current Page from Sidebar Code
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                    <Link href={item.route} key={item.label} className={cn('sidebar-link', 
                    // Here is backgroud effect of SideBar buttoon
                    {'bg-bank-gradient': isActive})}>

                        <div className='relative size-6'>
                            <Image
                            src={item.imgURL}
                            alt='item.label'
                            fill
                            className= {cn({
                                'brightness-[3] invert-0': isActive
                            })}
                            />
                        </div>
                        <p className={cn('sidebar-label', {
                            '!text-white': isActive
                        })}>
                            {item.label}
                        </p>
                        
                    </Link>
                )
            } )}

            USER

        </nav>
        USER


    </section>
  )
}

export default Siderbar