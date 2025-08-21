import Image from 'next/image'
import React from 'react'


export default function HeroSection() {
  return (
    <div>
      <div className='grid grid-cols-2 items-center justify-center bg-pink-100 py-10 rounded-md mt-2 lg:mt-4'>
        <div className='ml-5 lg:ml-15 space-y-5'>
          <h3 className='sm:text-xl lg:text-3xl font-bold text-green-900'>Grab up to 50% of Selected headphones</h3>
          <button type="button" className="text-white bg-green-900 hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-900 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button>
        </div>
        <div className='flex justify-end lg:mr-15 mr-5'>
          <Image src="/images/headphone_with_girl.jpg" className='rounded-lg' alt="" width={400} height={400} />
        </div>
      </div>
    </div>
  )
}
