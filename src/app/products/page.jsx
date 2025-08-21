import Image from "next/image";
import Link from "next/link";
import {Pagination, PaginationItem, PaginationCursor} from "@heroui/react";

export default async function Products() {
  const data = await fetch("https://dummyjson.com/products?limit=12");
  const { products } = await data.json();

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
        {
          products.map(product =>
            <div key={product.id} className="">
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
                <h5>{product?.price}</h5>
                <p>Rating: {product?.rating}</p>
                <Link href={`products/${product?.id}`}>
                  <button className="px-6 py-1.5 border-2 border-sky-600 rounded-full cursor-pointer mt-2">Buy Now</button>
                  </Link>
              </div>
            </div>
          )
        }

        
        <Pagination initialPage={1} total={10} />
      </div>
    </div>
  )
}
