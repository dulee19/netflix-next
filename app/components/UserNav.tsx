"use client"

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { signOut } from 'next-auth/react'

// From Supabase
const avatarUrl = 'https://zoncbfbbxkpnpoluhmue.supabase.co/storage/v1/object/public/user-image/avatar.png'

const UserNav = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
                <Avatar className='w-10 h-10 rounded-sm'>
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback className='rounded-sm'>Jo</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                    <p className='text-sm font-medium leading-none'>Dusan</p>
                    <p className='text-xs leading-none text-muted-foreground'>adusan53@gmail.com</p>
                </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => signOut()}>
                Sign Out
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav