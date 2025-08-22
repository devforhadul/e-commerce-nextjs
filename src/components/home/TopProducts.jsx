import dbConnect from '@/lib/dbconnecton'
import React from 'react'
import TopProductCard from '../card/TopProductCard';

export default async function TopProducts() {
  const topProduct = await dbConnect('products').find({}).sort({ rating: -1 }).toArray();
  const toJsonconver = (doc) => {
    return JSON.parse(JSON.stringify(doc));
  }
  return (
    <div className='my-10'>
      <div className='mb-5 flex'>
        <p className='text-2xl font-bold '>Top Rated Products</p>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {toJsonconver(topProduct).slice(0, 8).map(product =>
          <TopProductCard key={product._id} product={product} />
        )}
      </div>

    </div>
  )
}
