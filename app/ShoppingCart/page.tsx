import Image from "next/image"
import { Heart, Trash2 } from "lucide-react"
import Navbar from "../Navbar/Navbar"
import Link from "next/link"

export default function ShoppingCart() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-10 py-4 sm:py-8 max-w-7xl ">
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
            {/* Product 1 */}
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-24 h-48 sm:h-24 relative">
                  <Image
                    src="/Images/pcard10.png"
                    alt="Nike Dri-FIT ADV TechKnit Ultra"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:mb-0">
                    <div>
                      <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                      <p className="text-sm text-gray-600">Mens Short-Sleeve Running Top</p>
                      <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                    </div>
                    <p className="text-sm mt-2 sm:mt-0">MRP: ₹ 3,895.00</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
                    <div className="flex gap-4 text-sm mb-2 sm:mb-0">
                      <div>
                        <span className="text-gray-600">Size</span>
                        <span className="ml-2">L</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Quantity</span>
                        <span className="ml-2">1</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add to favorites">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Remove item">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-24 h-48 sm:h-24 bg-gray-100 rounded-md"></div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:mb-0">
                    <div>
                      <h3 className="font-medium">Nike Air Max 97 SE</h3>
                      <p className="text-sm text-gray-600">Mens Shoes</p>
                      <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                    </div>
                    <p className="text-sm mt-2 sm:mt-0">MRP: ₹ 16,995.00</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
                    <div className="flex gap-4 text-sm mb-2 sm:mb-0">
                      <div>
                        <span className="text-gray-600">Size</span>
                        <span className="ml-2">8</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Quantity</span>
                        <span className="ml-2">1</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add to favorites">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Remove item">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="md:col-span-1">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-medium mb-4">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-medium">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
              <Link href="/CheckoutForm"><button className="w-[90%] bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base">
                Member Checkout
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

