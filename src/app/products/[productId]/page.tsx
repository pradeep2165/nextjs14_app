import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading product");
  }
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
