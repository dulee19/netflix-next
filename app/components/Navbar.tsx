"use client"

import React from 'react'
import Link from 'next/link'
import Logo from '@/public/netflix_logo.svg'
import Image from 'next/image'
import { links } from '@/constants'
import { usePathname } from 'next/navigation'
import { Bell, SearchIcon } from 'lucide-react'
import UserNav from './UserNav'

const Navbar = () => {
    const pathName = usePathname()

  return (
    <header>
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8">
            <div className="flex items-center">
                <Link href="/home" className='w-32'>
                    <Image src={Logo} alt="Logo" />
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link, index) => (
                        <li key={index}>
                           {pathName === link.href ? (
                            <Link href={link.href} className='text-white font-semibold text-sm underline'>{link.name}</Link>
                           ) : (
                            <Link className='text-gray-300 font-normal text-sm' href={link.href}>{link.name}</Link>
                           )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-x-8">
                <SearchIcon className='w-6 h-6 text-gray cursor-pointer' />
                <Bell className='w-6 h-6 text-gray-300' />
                <UserNav />
            </div>
        </nav>
    </header>
  )
}

export default Navbar