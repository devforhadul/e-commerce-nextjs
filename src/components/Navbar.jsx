"use client";

import { CircleUserRound } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar() {
    const { data } = useSession();
    const pathName = usePathname();

    const publicMenus = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
    ];

    const privateMenus = [
        { name: "Dashboard", path: "/dashboard" },
    ];

    const handleLogout = () => {
        const confiramtion = window.confirm("Are you sure want to logout?")
        if (confiramtion) {
            signOut();
        } else {
            console.log("Cancle logout");
        }
    }

    return (
        <nav className='shadow-sm'>
            <div className='w-11/12 mx-auto'>
                <div className='flex justify-between items-center py-3'>
                    <div>
                        <Link href={'/'}>
                            <h4 className='text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500'>Creative Shop</h4>
                        </Link>
                    </div>
                    <menu className='hidden md:block'>
                        <ul className='flex gap-3 items-center text-lg'>
                            {publicMenus.map((menu, idx) => {
                                const isActive = pathName === menu?.path;
                                return (
                                    <Link
                                        href={menu?.path}
                                        key={idx}
                                        className={`px-1 py-1 rounded ${isActive ? "bg-white text-blue-600 font-bold" : "hover:text-blue-500"
                                            }`}>
                                        {menu?.name}
                                    </Link>)
                            })}
                            {data &&
                            privateMenus.map((menu, idx) => {
                                const isActive = pathName === menu?.path;
                                return (
                                    <Link
                                        href={menu?.path}
                                        key={idx}
                                        className={`px-1 py-1 rounded ${isActive ? "bg-white text-blue-600 font-bold" : "hover:text-blue-500"
                                            }`}>
                                        {menu?.name}
                                    </Link>)
                            })}
                        </ul>
                    </menu>
                    <div className='flex'>
                        
                        {
                            data ? (
                                <>
                                    {/* <CircleUserRound size={30} /> */}
                                    <button onClick={handleLogout} className='py-2 px-4 bg-green-700 rounded-sm text-white cursor-pointer'>LogOut</button>
                                </>
                            ) : (
                                // <CircleUser />
                                <button onClick={() => signIn()} className='py-2 px-4 bg-green-700 rounded-sm text-white cursor-pointer'>Login</button>

                            )
                        }
                    </div>
                </div>
            </div>

        </nav>
    )
}
