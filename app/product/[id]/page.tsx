
import Navbar from "@/app/Navbar/Navbar"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import AddToCartButton from "./AddToCartButton"

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

// export async function generateStaticParams() {
//   const products = await client.fetch<{ _id: string }[]>(`*[_type == "product"] { _id }`)
//   return products.map((product) => ({
//     id: product._id,
//   }))
// }

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const products = await client.fetch<{ _id: string }[]>(`*[_type == "product"] { _id }`)
  return products.map((product) => ({
    id: product._id,
  }))
}


// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const { id } = params

//   const product = await client.fetch<Product | null>(`*[_type == "product" && _id == $id][0]`, { id })

//   if (!product) {
//     return (
//       <div>
//         <h1>Product Not Found</h1>
//         <p>We could not find the product you are looking for.</p>
//       </div>
//     )
//   }

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const product = await client.fetch<Product | null>(
    `*[_type == "product" && _id == $id][0]`,
    { id }
  )

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>We could not find the product you are looking for.</p>
      </div>
    )
  }


//   const imageUrl = product.image ? urlFor(product.image).url() : null

//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-8 mt-12 mb-16">
//         <div className="flex-shrink-0 w-full md:w-1/2">
//           {imageUrl ? (
//             <Image
//               src={imageUrl || "/placeholder.svg"}
//               alt={product.productName}
//               className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
//               width={300}
//               height={300}
//             />
//           ) : (
//             <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
//               <span className="text-gray-500">No image available</span>
//             </div>
//           )}
//         </div>

//         <div className="flex-1 text-left font-sans max-w-lg">
//           <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
//           <p className="text-gray-700 text-sm leading-6 mb-6">{product.description}</p>
//           <p className="text-gray-700 text-sm mb-4">
//             <span className="font-semibold">Colour Shown:</span> {product.colors.join(", ")}
//           </p>
//           <p className="text-gray-700 text-sm mb-6">
//             <span className="font-semibold">Style:</span> DM9652-102
//           </p>
//           <p className="text-xl font-semibold text-gray-800 mb-4">${product.price}</p>

//           {product.inventory <= 5 && product.inventory > 0 && (
//             <p className="text-red-600 font-semibold mb-4">Only {product.inventory} left</p>
//           )}
//           {product.inventory === 0 && <p className="text-red-600 font-semibold mb-4">Not available</p>}

//           <AddToCartButton product={product} />
//         </div>
//       </div>
//     </>
//   )
// }


const imageUrl = product.image ? urlFor(product.image).url() : null

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-8 mt-12 mb-16">
        <div className="flex-shrink-0 w-full md:w-1/2">
          {imageUrl ? (
            <Image
              src={imageUrl || "/placeholder.svg"}
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
          <p className="text-gray-700 text-sm leading-6 mb-6">{product.description}</p>
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
  )
}













// import Navbar from "@/app/Navbar/Navbar"
// import Image from "next/image"
// import { client } from "@/sanity/lib/client"
// import { urlFor } from "@/sanity/lib/image"
// import AddToCartButton from "./AddToCartButton"

// interface Product {
//   _id: string
//   productName: string
//   image: {
//     asset: {
//       _ref: string
//     }
//   }
//   description: string
//   colors: string
//   price: number
//   inventory: number
// }

// export async function generateStaticParams() {
//   const products = await client.fetch<{ _id: string }[]>(`*[_type == "product"] { _id }`)
//   return products.map((product) => ({
//     id: product._id,
//   }))
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const { id } = params

//   const product = await client.fetch<Product | null>(`*[_type == "product" && _id == $id][0]`, { id })

//   if (!product) {
//     return (
//       <div>
//         <h1>Product Not Found</h1>
//         <p>We could not find the product you are looking for.</p>
//       </div>
//     )
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-8 mt-12 mb-16">
//         <div className="flex-shrink-0 w-full md:w-1/2">
//           <Image
//             src={urlFor(product.image).url() || "/placeholder.svg"}
//             alt={product.productName}
//             className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
//             width={300}
//             height={300}
//           />
//         </div>

//         <div className="flex-1 text-left font-sans max-w-lg">
//           <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
//           <p className="text-gray-700 text-sm leading-6 mb-6">{product.description}</p>
//           <p className="text-gray-700 text-sm mb-4">
//             <span className="font-semibold">Colour Shown:</span> {product.colors}
//           </p>
//           <p className="text-gray-700 text-sm mb-6">
//             <span className="font-semibold">Style:</span> DM9652-102
//           </p>
//           <p className="text-xl font-semibold text-gray-800 mb-4">${product.price}</p>

//           {product.inventory <= 5 && product.inventory > 0 && (
//             <p className="text-red-600 font-semibold mb-4">Only {product.inventory} left</p>
//           )}
//           {product.inventory === 0 && <p className="text-red-600 font-semibold mb-4">Not available</p>}

//           <AddToCartButton inventory={product.inventory} />
//         </div>
//       </div>
//     </>
//   )
// }








// // Import necessary libraries
// import Navbar from "@/app/Navbar/Navbar";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image"; // Import the Sanity image URL helper (if using @sanity/image-url)
// import Link from "next/link";

// // Define the static paths using `generateStaticParams`
// export async function generateStaticParams() {
//   const products = await client.fetch(`*[_type == "product"] { _id }`);
//   return products.map((product: { _id: string }) => ({
//     id: product._id, // Make sure to match the dynamic route param name
//   }));
// }

// // Define the dynamic page component
// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { id } = await params;

//   // Fetch the product data from Sanity
//   const product = await client.fetch(`*[_type == "product" && _id == $id][0]`, {
//     id,
//   });

//   // Handle missing product case
//   if (!product) {
//     return (
//       <div>
//         <h1>Product Not Found</h1>
//         <p>We could not find the product you are looking for.</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-8 mt-12 mb-16">
//         {/* Image Section */}
//         <div className="flex-shrink-0 w-full md:w-1/2">
//           {/* Use urlFor helper to get the image URL */}
//           <Image
//             src={urlFor(product.image).url()} // Use the correct image URL field
//             alt={"product.title"}
//             className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
//             width={300}
//             height={300}
//           />
//         </div>

//         {/* Text Section */}
//         <div className="flex-1 text-left font-sans max-w-lg">
//           {/* Product Title */}
//           <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>

//           {/* Product Description */}
//           <p className="text-gray-700 text-sm leading-6 mb-6">
//             {product.description}
//           </p>

//           <p className="text-gray-700 text-sm mb-4">
//             <span className="font-semibold">Colour Shown:</span>{" "}
//             {product.colors}
//           </p>
//           <p className="text-gray-700 text-sm mb-6">
//             <span className="font-semibold">Style:</span> DM9652-102
//           </p>
//           {/* Product Price */}
//           <p className="text-xl font-semibold text-gray-800 mb-4">
//             ${product.price}
//           </p>

        

//           {/* Stylish Button */}
//           <Link
//             href="/ShoppingCart"
//             className="inline-block px-8 py-3 bg-black text-white font-semibold text-sm rounded-full shadow-lg hover:bg-gray-950 transition-all duration-300 transform hover:scale-105"
//           >
//             Add To Cart
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
