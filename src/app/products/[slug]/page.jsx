
import Image from 'next/image';
import React from 'react'

export default async function ProductDetails({ params }) {

  const { slug } = await params;
  const data = await fetch(`https://dummyjson.com/products/${slug}`);
  const singleProduct = await data.json();
  console.log(singleProduct);
  return (
    <div>
      <div className="p-4 flex flex-col md:flex-row gap-6 bg-white rounded-lg">

        {/* Product Image */}
        <div className="flex-1 relative w-full h-80 md:h-[400px]">
          <Image
            src={singleProduct.images[0]}
            alt={singleProduct.title}
            fill
            className="rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{singleProduct.title}</h2>
            <p className="text-gray-600 mb-4">{singleProduct.description}</p>
            <p className="text-yellow-500 mb-2">⭐ {singleProduct.rating || "N/A"}</p>
            <p className="text-xl font-bold mb-4">${singleProduct.price}</p>
          </div>

          {/* Quantity + Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Quantity */}
            <div className="flex items-center border rounded-md overflow-hidden">
              <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300">-</button>
              <span className="px-4 py-1">{singleProduct.quantity || 1}</span>
              <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+</button>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Buy Now
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
