"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React, { useState } from 'react'

interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    release: number;
    age: number;
    duration: number
}

const PlayVideoModel = ({ changeState, overview, state, title, release, age, duration, youtubeUrl }: iAppProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
        <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{overview}</DialogDescription>
                <div className="flex gap-x-2 items-center">
                    <p>{release}</p>
                    <p className='border py-0.5 px-1 border-gray-200 rounded'>{age}+</p>
                    <p>{duration}h</p>
                </div>
            </DialogHeader>
            <iframe src={youtubeUrl} height={250} className='w-full'></iframe>
        </DialogContent>
    </Dialog>
  )
}

export default PlayVideoModel