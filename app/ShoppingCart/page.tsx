"use client"

import Image from "next/image"
import { Heart, Trash2, Plus, Minus } from "lucide-react"
import Navbar from "../Navbar/Navbar"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { cartItemsAtom, removeFromCartAtom, updateQuantityAtom, subtotalAtom } from "../Atoms/cartAtoms"
import { urlFor } from "@/sanity/lib/image"
import { useRouter } from "next/navigation"

// Image Component (unchanged)
const CartItemImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-full sm:w-24 h-48 sm:h-24 relative">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt || "Product Image"}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
  )
}

export default function ShoppingCart() {
  const [cartItems] = useAtom(cartItemsAtom)
  const removeFromCart = useSetAtom(removeFromCartAtom)
  const updateQuantity = useSetAtom(updateQuantityAtom)
  const subtotal = useAtomValue(subtotalAtom)
  const router = useRouter()

  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
  }

  const handleIncreaseQuantity = (id: string) => {
    const item = cartItems.find((item) => item.id === id)
    if (item) {
      updateQuantity({ id, quantity: item.quantity + 1 })
    }
  }

  const handleDecreaseQuantity = (id: string) => {
    const item = cartItems.find((item) => item.id === id)
    if (item && item.quantity > 1) {
      updateQuantity({ id, quantity: item.quantity - 1 })
    }
  }

  const handleCheckout = () => {
    router.push("/CheckoutForm")
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-10 py-4 sm:py-8 max-w-7xl">
        {/* Free Delivery Banner */}
        <div className="bg-gray-50 p-4 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm mb-2 sm:mb-0">
            <span className="font-medium">Free Delivery</span>
            <br />
            <span className="text-gray-600">Applies to orders of ₹ 14,000.00 or more.</span>
          </div>
          <button className="text-sm underline self-start sm:self-auto">View details</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Cart Section */}
          <div className="md:col-span-2">
            <h1 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Bag</h1>

            <div className="space-y-4 sm:space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Use CartItemImage */}
                    <CartItemImage src={urlFor(item.image.asset._ref).url()} alt={item.name} />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:mb-0">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.color}</p>
                        </div>
                        <p className="text-sm mt-2 sm:mt-0">MRP: ₹ {item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
                        <div className="flex gap-4 text-sm mb-2 sm:mb-0">
                          <div>
                            <span className="text-gray-600">Size</span>
                            <span className="ml-2">{item.size}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-600 mr-2">Quantity</span>
                            <button onClick={() => handleDecreaseQuantity(item.id)} className="p-1 bg-gray-200 rounded">
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button onClick={() => handleIncreaseQuantity(item.id)} className="p-1 bg-gray-200 rounded">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add to favorites">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="md:col-span-1">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-medium mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery & Handling</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹ {subtotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  Member Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
























// "use client";

// import Image from "next/image";
// import { Heart, Trash2, Plus, Minus } from "lucide-react";
// import Navbar from "../Navbar/Navbar";
// import Link from "next/link";
// import { useAtom, useAtomValue, useSetAtom } from "jotai";
// import {
//   cartItemsAtom,
//   removeFromCartAtom,
//   updateQuantityAtom,
//   subtotalAtom,
// } from "../Atoms/cartAtoms";
// import { urlFor } from "@/sanity/lib/image";

// // Image Component
// const CartItemImage = ({ src, alt }: { src: string; alt: string }) => {
//   return (
//     <div className="w-full sm:w-24 h-48 sm:h-24 relative">
//       <Image
//         src={src || "/placeholder.svg"} // Placeholder for missing images
//         alt={alt || "Product Image"}
//         layout="fill"
//         objectFit="cover"
//         className="rounded-md"
//       />
//     </div>
//   );
// };

// export default function ShoppingCart() {
//   const [cartItems] = useAtom(cartItemsAtom);
//   const removeFromCart = useSetAtom(removeFromCartAtom);
//   const updateQuantity = useSetAtom(updateQuantityAtom);
//   const subtotal = useAtomValue(subtotalAtom);

//   const handleRemoveItem = (id: string) => {
//     removeFromCart(id);
//   };

//   const handleIncreaseQuantity = (id: string) => {
//     const item = cartItems.find((item) => item.id === id);
//     if (item) {
//       updateQuantity({ id, quantity: item.quantity + 1 });
//     }
//   };

//   const handleDecreaseQuantity = (id: string) => {
//     const item = cartItems.find((item) => item.id === id);
//     if (item && item.quantity > 1) {
//       updateQuantity({ id, quantity: item.quantity - 1 });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-10 py-4 sm:py-8 max-w-7xl">
//         {/* Free Delivery Banner */}
//         <div className="bg-gray-50 p-4 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <div className="text-sm mb-2 sm:mb-0">
//             <span className="font-medium">Free Delivery</span>
//             <br />
//             <span className="text-gray-600">
//               Applies to orders of ₹ 14,000.00 or more.
//             </span>
//           </div>
//           <button className="text-sm underline self-start sm:self-auto">
//             View details
//           </button>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
//           {/* Main Cart Section */}
//           <div className="md:col-span-2">
//             <h1 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Bag</h1>

//             <div className="space-y-4 sm:space-y-6">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="bg-white shadow rounded-lg p-4">
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     {/* Use CartItemImage */}
//                     <CartItemImage
//                       src={urlFor(item.image.asset._ref).url()} // Sanity image utility
//                       alt={item.name}
//                     />
//                     <div className="flex-1">
//                       <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:mb-0">
//                         <div>
//                           <h3 className="font-medium">{item.name}</h3>
//                           <p className="text-sm text-gray-600">{item.color}</p>
//                         </div>
//                         <p className="text-sm mt-2 sm:mt-0">
//                           MRP: ₹ {item.price.toFixed(2)}
//                         </p>
//                       </div>
//                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
//                         <div className="flex gap-4 text-sm mb-2 sm:mb-0">
//                           <div>
//                             <span className="text-gray-600">Size</span>
//                             <span className="ml-2">{item.size}</span>
//                           </div>
//                           <div className="flex items-center">
//                             <span className="text-gray-600 mr-2">Quantity</span>
//                             <button
//                               onClick={() => handleDecreaseQuantity(item.id)}
//                               className="p-1 bg-gray-200 rounded"
//                             >
//                               <Minus className="h-4 w-4" />
//                             </button>
//                             <span className="mx-2">{item.quantity}</span>
//                             <button
//                               onClick={() => handleIncreaseQuantity(item.id)}
//                               className="p-1 bg-gray-200 rounded"
//                             >
//                               <Plus className="h-4 w-4" />
//                             </button>
//                           </div>
//                         </div>
//                         <div className="flex gap-2">
//                           <button
//                             className="p-2 hover:bg-gray-100 rounded-full"
//                             aria-label="Add to favorites"
//                           >
//                             <Heart className="h-5 w-5" />
//                           </button>
//                           <button
//                             onClick={() => handleRemoveItem(item.id)}
//                             className="p-2 hover:bg-gray-100 rounded-full"
//                             aria-label="Remove item"
//                           >
//                             <Trash2 className="h-5 w-5" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Summary Section */}
//           <div className="md:col-span-1">
//             <div className="bg-white shadow rounded-lg p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium mb-4">Summary</h2>
//               <div className="space-y-4">
//                 <div className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>₹ {subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Estimated Delivery & Handling</span>
//                   <span>Free</span>
//                 </div>
//                 <div className="border-t pt-4 flex justify-between font-medium">
//                   <span>Total</span>
//                   <span>₹ {subtotal.toFixed(2)}</span>
//                 </div>
//                 <Link href="/CheckoutForm">
//                   <button className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base">
//                     Member Checkout
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }










