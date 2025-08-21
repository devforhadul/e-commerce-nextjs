import ProductCard from "@/components/card/ProductCard";
import { Suspense } from "react";
import Loading from "../loading";


export default async function Products() {
  const data = await fetch("https://dummyjson.com/products?limit=12");
  const { products } = await data.json();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
          {
            products.map(product =>
              <ProductCard key={product?.id} product={product} />
            )
          }
        </div>
      </Suspense>
    </div>
  )
}
