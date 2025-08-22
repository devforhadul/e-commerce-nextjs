"use client";

import { CirclePlus } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

export default function Dashborad() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Link href={'/dashboard/add-product'}>
                <button className='py-2 px-3 bg-blue-600 text-white cursor-pointer rounded-sm'><CirclePlus className='inline mr-1' />Add Product</button>
            </Link>
        </div>
    )
}
