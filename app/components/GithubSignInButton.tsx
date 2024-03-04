"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GithubIcon from '@/public/github.svg'
import { signIn } from 'next-auth/react'

export default function GithubSignInButton() {
    return (
        <Button onClick={() => signIn('github')} variant="outline" size="icon">
            <Image 
                src={GithubIcon}
                alt="Github"
                width={28}
                height={28}
            />
        </Button>
    )
}