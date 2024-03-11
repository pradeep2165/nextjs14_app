import Link from "next/link";
export default function () {
  return (
    <>
      <h1>Hello wrold</h1>
      <Link href="/products" className="mr-4 text-blue-400">
        product
      </Link>
      <Link href="/blog" className="text-blue-400">
        Blog
      </Link>
    </>
  );
}
