

import Navbar from "@/app/Navbar/Navbar"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import AddToCartButton from "./AddToCartButton"
import Image from "next/image"

interface Product {
  _id: string
  productName: string
  image: {
    asset: {
      _ref: string
    }
  }
  description: string
  colors: string[]
  price: number
  inventory: number
}


export async function generateStaticParams(): Promise<{ id: string }[]> {
  const products = await client.fetch<{ _id: string }[]>(
    `*[_type == "product"] { _id }`
  );

  return products.map((product) => ({
    id: product._id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await client.fetch<Product | null>(
    `*[_type == "product" && _id == $id][0]`,
    { id }
  );

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>We could not find the product you are looking for.</p>
      </div>
    );
  }

  const imageUrl = product.image ? urlFor(product.image).url() : null;

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-8 mt-12 mb-16">
        <div className="flex-shrink-0 w-full md:w-1/2">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.productName}
              className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              width={300}
              height={300}
            />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>

        <div className="flex-1 text-left font-sans max-w-lg">
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-gray-700 text-sm leading-6 mb-6">
            {product.description}
          </p>
          <p className="text-gray-700 text-sm mb-4">
            <span className="font-semibold">Colour Shown:</span>{" "}
            {product.colors.join(", ")}
          </p>
          <p className="text-gray-700 text-sm mb-6">
            <span className="font-semibold">Style:</span> DM9652-102
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>

          {product.inventory <= 5 && product.inventory > 0 && (
            <p className="text-red-600 font-semibold mb-4">
              Only {product.inventory} left
            </p>
          )}
          {product.inventory === 0 && (
            <p className="text-red-600 font-semibold mb-4">Not available</p>
          )}

          <AddToCartButton product={product} />
        </div>
      </div>
    </>
  );
}



