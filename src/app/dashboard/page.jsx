"use client";
import { Button } from '@heroui/button';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

export default function Dashborad() {
    return (
        <div>
            <div>Dashboard</div>
            <Link href={'/dashboard/add-product'}> <CirclePlus className='inline mr-1' />Add Product</Link>
            <Button>Add</Button>

        </div>
    )
}
