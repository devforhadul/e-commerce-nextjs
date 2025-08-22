
import Loading from '@/app/loading';
import ProductDetailsClient from '@/components/ProductDetailsClient';
import dbConnect from '@/lib/dbconnecton';
import { ObjectId } from 'mongodb';
import { Suspense } from 'react';

export default async function ProductDetails({ params }) {
  const { slug } = await params;
  const singleProduct = await dbConnect('products').findOne({ _id: new ObjectId(slug) });
  const toJsonconver = (doc) => {
    return JSON.parse(JSON.stringify(doc));
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ProductDetailsClient singleProduct={toJsonconver(singleProduct)} />
      </Suspense>
    </div>
  )
}
