'use client';

import Image from "next/image";
import { useState } from "react";


export default function ProductDetailsClient({singleProduct}) {
    const [quantity, setQuantity] = useState(1);
  return (
    <div className="p-4 flex flex-col md:flex-row gap-6 my-5 bg-white rounded-lg">
        {/* Product Image */}
        <div className="flex-1 w-full h-90">
          <Image
            src={singleProduct.images[0]}
            alt={singleProduct.title}
            width={350}
            height={300}
            sizes='10'
            className="rounded-lg mx-auto"
           
          />
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-center space-y-3">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{singleProduct.title}</h2>
            <p className="text-gray-600 mb-4">{singleProduct.description}</p>
            <p className="text-yellow-500 mb-2">⭐ {singleProduct.rating || "N/A"}</p>
            <p className="text-xl font-bold mb-4">${singleProduct.price}</p>
          </div>

          {/* Quantity */}
          <div className="">
            <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer">-</button>
            <span className="px-4 py-1">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer">+</button>
          </div>

          {/* Quantity + Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-5">
            {/* Buttons */}
            <div className="flex gap-2">
              <button onClick={()=>alert("Cooking now...")} className="px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-700 transition cursor-pointer">
                Buy Now
              </button>
              <button className="px-4 py-2 border-2 border-green-900 text-black  rounded-md  transition-all cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
