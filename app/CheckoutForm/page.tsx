
"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Navbar from "../Navbar/Navbar"
import { useAtomValue, useSetAtom } from "jotai"
import { cartItemsAtom, subtotalAtom, removeFromCartAtom } from "../Atoms/cartAtoms"
import { urlFor } from "@/sanity/lib/image"

export default function CheckoutForm() {
  const [activeSection, setActiveSection] = useState<"shipping" | "billing" | "payment">("shipping")
  const cartItems = useAtomValue(cartItemsAtom)
  const subtotal = useAtomValue(subtotalAtom)
  const removeFromCart = useSetAtom(removeFromCartAtom)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the checkout process
    // For this example, we'll just clear the cart and show an alert
    cartItems.forEach((item) => removeFromCart(item.id))
    alert("Thank you for your purchase!")
    router.push("/")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
            {/* Left Column - Form */}
            <div className="lg:col-span-3">
              <div className="space-y-6 bg-white p-6 rounded-lg shadow">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">How would you like to get your order?</h2>
                  <div className="bg-gray-100 p-4 rounded text-sm text-gray-600">
                    The fastest and most sustainable way to receive your order is choosing Pick-up. You will still be
                    able to try on your items and make returns at the pick-up point. If you would prefer to have your
                    order delivered to your home, you can select one of our delivery options at checkout.
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-lg font-medium text-gray-900">Enter your name and address:</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="sr-only">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="First name"
                        className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Last name"
                        className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address1" className="sr-only">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      id="address1"
                      name="address1"
                      required
                      placeholder="Address Line 1"
                      className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                    />
                  </div>

                  <div>
                    <label htmlFor="address2" className="sr-only">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      placeholder="Address Line 2"
                      className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className="sr-only">
                        State/Province
                      </label>
                      <select
                        id="state"
                        name="state"
                        required
                        className="w-full border-0 border-b border-gray-300 pb-2 text-gray-500 focus:border-gray-900 focus:ring-0"
                      >
                       <option value="">SINDH</option>
                        <option value="">PUNJAB</option>
                        {/* Add state options here */}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        className="w-full border-0 border-b border-gray-300 pb-2 text-gray-500 focus:border-gray-900 focus:ring-0"
                      >
                        <option value="India">Pakistan</option>
                        {/* Add more country options if needed */}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-lg font-medium text-gray-900">What is your contact information?</h2>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                    />
                    <p className="mt-1 text-xs text-gray-500">We will send your order confirmation here</p>
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Phone number"
                      className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                    />
                    <p className="mt-1 text-xs text-gray-500">We will only use this to contact you about your order</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-lg font-medium text-gray-900">Delivery</h2>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveSection("shipping")}
                      className={`w-full text-left p-4 rounded-lg border ${
                        activeSection === "shipping" ? "border-gray-900" : "border-gray-200"
                      }`}
                    >
                      Shipping
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSection("billing")}
                      className={`w-full text-left p-4 rounded-lg border ${
                        activeSection === "billing" ? "border-gray-900" : "border-gray-200"
                      }`}
                    >
                      Billing
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSection("payment")}
                      className={`w-full text-left p-4 rounded-lg border ${
                        activeSection === "payment" ? "border-gray-900" : "border-gray-200"
                      }`}
                    >
                      Payment
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-2">
              <div className="sticky top-8 bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative h-24 w-24 flex-none">
                        <Image
                          src={urlFor(item.image.asset._ref).url() || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                        <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                        <p className="mt-1 text-sm font-medium text-gray-900">₹ {item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-gray-900">₹ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-gray-900">Free</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">₹ {subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}



