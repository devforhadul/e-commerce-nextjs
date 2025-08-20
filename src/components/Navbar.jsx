"use client";
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const { data } = useSession();


    return (
        <nav className='shadow-sm'>
            <div className='w-11/12 mx-auto'>
                <div className='flex justify-between items-center py-3'>
                    <div><h4 className='text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500'>Creative Shop</h4></div>
                    <menu className='hidden md:block'>
                        <ul className='flex gap-3 items-center text-lg'>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/products'}>Products</Link></li>
                            <li><Link href={'/dashboard'}>Dahboard</Link></li>
                        </ul>
                    </menu>
                    <div className='flex'>
                        {data?.user?.email} <br />
                        {
                            data ? (
                                <button onClick={() => signOut()} className='py-2 px-4 bg-sky-600 rounded-sm text-white cursor-pointer'>LogOut</button>
                            ) : (
                                <button onClick={() => signIn()} className='py-2 px-4 bg-sky-600 rounded-sm text-white cursor-pointer'>Login</button>
                            )
                        }
                    </div>
                </div>
            </div>

        </nav>
    )
}
