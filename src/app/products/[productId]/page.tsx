export default function productDetails({ params }: { params: { productId: string } }) {
  return (
    <>
      <h1>product details {params.productId}</h1>
    </>
  );
}
