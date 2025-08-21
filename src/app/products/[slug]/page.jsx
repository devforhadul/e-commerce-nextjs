
import ProductDetailsClient from '@/components/ProductDetailsClient';

export default async function ProductDetails({ params }) {
  
  const { slug } = await params;
  const data = await fetch(`https://dummyjson.com/products/${slug}`);
  const singleProduct = await data.json();

  return (
    <div>
      <ProductDetailsClient singleProduct={singleProduct}/>
    </div>
  )
}
