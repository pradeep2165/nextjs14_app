export default function ReviewDetails({ params }: { params: { productId: string; reviewId: string } }) {
  return (
    <>
      review {params.reviewId} for product {params.productId}{" "}
    </>
  );
}
