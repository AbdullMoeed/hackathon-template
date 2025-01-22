"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "../Navbar/Navbar"

export default function CheckoutForm() {
  const [activeSection, setActiveSection] = useState<"shipping" | "billing" | "payment">("shipping")

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
          {/* Left Column - Form */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">How would you like to get your order?</h2>
                <div className="bg-gray-50 p-4 rounded text-sm text-gray-600">
                  The fastest and most sustainable way to receive your order is choosing Pick-up. You will still be able
                  to try on your items and make returns at the pick-up point. If you would prefer to have your order
                  delivered to your home, you can select one of our delivery options at checkout. Please note that
                  delivery times may be longer than usual. Learn More
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Enter your name and address:</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Address Line 3"
                    className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select className="w-full border-0 border-b border-gray-300 pb-2 text-gray-500 focus:border-gray-900 focus:ring-0">
                      <option value="">State/Province</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full border-0 border-b border-gray-300 pb-2 text-gray-500 focus:border-gray-900 focus:ring-0">
                      <option value="">India</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                    <span className="text-sm text-gray-600">Save this address to profile</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                    <span className="text-sm text-gray-600">Make this my preferred address</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">What is your contact information?</h2>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                  />
                  <p className="mt-1 text-xs text-gray-500">We will send your order confirmation here</p>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                  />
                  <p className="mt-1 text-xs text-gray-500">We will only use this to contact you about your order</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">What is your RMA?</h2>
                <div>
                  <input
                    type="text"
                    placeholder="RMA"
                    className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    If you have a return merchandise authorization number, enter it here
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Delivery</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveSection("shipping")}
                    className={`w-full text-left p-4 rounded-lg border ${
                      activeSection === "shipping" ? "border-gray-900" : "border-gray-200"
                    }`}
                  >
                    Shipping
                  </button>
                  <button
                    onClick={() => setActiveSection("billing")}
                    className={`w-full text-left p-4 rounded-lg border ${
                      activeSection === "billing" ? "border-gray-900" : "border-gray-200"
                    }`}
                  >
                    Billing
                  </button>
                  <button
                    onClick={() => setActiveSection("payment")}
                    className={`w-full text-left p-4 rounded-lg border ${
                      activeSection === "payment" ? "border-gray-900" : "border-gray-200"
                    }`}
                  >
                    Payment
                  </button>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors">
                Continue
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 flex-none">
                    <Image
                      src="/Images/pcard10.png"
                      alt="Product image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <p className="mt-1 text-sm text-gray-500">Light Blue</p>
                    <p className="mt-1 text-sm text-gray-500">Size: M</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">₹ 2,995</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">₹ 2,995</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-gray-900">Free</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">₹ 2,995</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

