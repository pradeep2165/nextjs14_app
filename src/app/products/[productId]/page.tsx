import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
export default function productDetails({ params }: Props) {
  return (
    <>
      <h1>product details {params.productId}</h1>
    </>
  );
}
