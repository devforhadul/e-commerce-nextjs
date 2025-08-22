'use client';

import Image from "next/image";
import Link from "next/link";

export default function TopProductCard({product}) {
    
    return (
        <div className='mb-5'>
            <div className="w-full bg-gray-100 rounded-md  mb-3">
                <Image
                    src={product.images[0]}
                    alt="Picture of the author"
                    width={250}
                    height={250}
                    className="mx-auto"
                />
            </div>
            <div className="space-y-1">
                <h4 className="text-lg font-semibold">{product?.title}</h4>
                <h5 className="text-lg font-bold text-green-700">{product?.price} $</h5>
                <p>Rating: {product?.rating}</p>
                <Link href={`products/${product?._id}`}>
                    <button className="px-6 py-1.5 border-2 border-green-900 hover:bg-green-900 hover:text-white transition-all  rounded-full cursor-pointer mt-2">Buy Now</button>
                </Link>
            </div>
        </div>
    )
}
