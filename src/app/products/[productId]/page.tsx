import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
export default function productDetails({ params }: Props) {
  return (
    <>
      <h1>product details {params.productId}</h1>
    </>
  );
}
