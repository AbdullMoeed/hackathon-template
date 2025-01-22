import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '@/sanity/lib/client';

interface ProductDetails {
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await client.fetch(`*[_type == "product"]{ _id }`);
  const paths = products.map((product: { _id: string }) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0] {
      productName,
      price,
      description,
      "imageUrl": image.asset->url
    }`,
    { id }
  );

  return { props: { product } };
};

const ProductDetailPage: React.FC<{ product: ProductDetails }> = ({ product }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.productName}</h1>
      <img src={product.imageUrl} alt={product.productName} className="w-full h-auto my-4" />
      <p className="text-lg font-semibold">Price: ₹{product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;




// 'use client';

// import React from "react";
// import { useRouter } from "next/router";
// import { client } from "@/sanity/lib/client";

// interface ProductDetails {
//   _id: string;
//   productName: string;
//   category: string;
//   price: number;
//   description: string;
//   status: string;
//   imageUrl: string;
// }

// const ProductDetailPage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get the dynamic ID from the route

//   const [product, setProduct] = React.useState<ProductDetails | null>(null);

//   React.useEffect(() => {
//     if (id) {
//       const query = `*[_type == "product" && _id == $id][0] {
//         _id,
//         productName,
//         category,
//         price,
//         "imageUrl": image.asset->url,
//         description,
//         status
//       }`;

//       client
//         .fetch<ProductDetails>(query, { id })
//         .then((data) => setProduct(data))
//         .catch((error) => console.error("Error fetching product:", error));
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">{product.productName}</h1>
//       <img
//         src={product.imageUrl}
//         alt={product.productName}
//         className="w-full h-auto my-4"
//       />
//       <p className="text-lg">Category: {product.category}</p>
//       <p className="text-lg">Price: ₹{product.price}</p>
//       <p className="text-lg">{product.description}</p>
//       <p className={`text-sm mt-2 ${product.status === "In Stock" ? "text-green-500" : "text-red-500"}`}>
//         Status: {product.status}
//       </p>
//     </div>
//   );
// };

// export default ProductDetailPage;
