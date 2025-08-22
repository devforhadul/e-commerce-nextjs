import ProductCard from "@/components/card/ProductCard";
import { Suspense } from "react";
import Loading from "../loading";
import dbConnect from "@/lib/dbconnecton";


export default async function Products() {
  const products = await dbConnect('products').find({}).toArray();
  const toJsonconver = (doc) => {
    return JSON.parse(JSON.stringify(doc));
  }
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
          {
            products.map(product =>
              <ProductCard key={product?.id} product={toJsonconver(product)} />
            )
          }
        </div>
      </Suspense>
    </div>
  )
}
