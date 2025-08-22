
import Loading from '@/app/loading';
import ProductDetailsClient from '@/components/ProductDetailsClient';
import { Suspense } from 'react';

export default async function ProductDetails({ params }) {

  const { slug } = await params;
  const data = await fetch(`https://dummyjson.com/products/${slug}`);
  const singleProduct = await data.json();

  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <ProductDetailsClient singleProduct={singleProduct} />
      </Suspense>
    </div>
  )
}
