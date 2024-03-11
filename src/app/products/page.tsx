import Link from "next/link";
export default function products() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product list</h1>
      <h2>
        <Link href="products/1">product1</Link>
      </h2>
      <h2>
        <Link href="products/2">product2</Link>
      </h2>
      <h2>
        <Link href="products/3">product3</Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`} replace>
          product {productId}
        </Link>
      </h2>
    </>
  );
}
