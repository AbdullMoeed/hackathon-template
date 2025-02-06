"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAtomValue, useSetAtom } from "jotai";
import { cartItemsAtom, subtotalAtom, removeFromCartAtom } from "../Atoms/cartAtoms";
import { urlFor } from "@/sanity/lib/image";

export default function CheckoutForm() {
  const [activeSection, setActiveSection] = useState<"shipping" | "billing" | "payment">("shipping");
  const [isLoading, setIsLoading] = useState(false); // For loading state during payment
  const [showThankYouPopup, setShowThankYouPopup] = useState(false); // For Thank You popup
  const cartItems = useAtomValue(cartItemsAtom);
  const subtotal = useAtomValue(subtotalAtom);
  const removeFromCart = useSetAtom(removeFromCartAtom);
  const router = useRouter();
  const stripe = useStripe(); // Initialize Stripe
  const elements = useElements(); // Initialize Elements

  // Function to validate form fields
  const validateForm = (): boolean => {
    const firstName = (document.querySelector('input[placeholder="First name"]') as HTMLInputElement)?.value;
    const lastName = (document.querySelector('input[placeholder="Last name"]') as HTMLInputElement)?.value;
    const addressLine1 = (document.querySelector('input[placeholder="Address Line 1"]') as HTMLInputElement)?.value;
    const phone = (document.querySelector('input[placeholder="Phone number"]') as HTMLInputElement)?.value;

    if (!firstName || !lastName || !addressLine1 || !phone) {
      alert("Please complete the required fields before proceeding to payment.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (!validateForm()) {
      return;
    }

    // Check if user is on the payment section
    if (activeSection !== "payment") {
      alert("Please proceed to the payment section to complete your order.");
      return;
    }

    if (!stripe || !elements) {
      alert("Stripe is not initialized yet.");
      return;
    }

    setIsLoading(true); // Set loading to true when payment starts

    try {
      // Create PaymentIntent on the server
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(subtotal * 100) }), // Convert to cents
      });

      const { clientSecret } = await response.json();

      // Confirm the payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!, // Get the CardElement
        },
      });

      if (error) {
        alert(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === "succeeded") {
        // Clear cart and show success message
        cartItems.forEach((item) => removeFromCart(item.id));
        setShowThankYouPopup(true); // Show Thank You popup
      }
    } catch (err) {
      console.error("Error during payment:", err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state after payment completes or fails
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 p-6">
        {/* Left Column - Form */}
        <div className="w-full lg:w-3/5 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">How would you like to get your order?</h2>
              <p className="text-gray-600">
                The fastest and most sustainable way to receive your order is choosing Pick-up. You will still be able
                to try on your items and make returns at the pick-up point. If you would prefer to have your order
                delivered to your home, you can select one of our delivery options at checkout.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">Enter your name and address:</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
                  required
                />
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
                  required
                />
                <input
                  type="text"
                  placeholder="Address Line 2 (Optional)"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
                />
                <select className="w-full p-2 border rounded-md focus:outline-none focus:border-black" required>
                  <option value="">Select State/Province</option>
                  <option>SINDH</option>
                  <option>PUNJAB</option>
                </select>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:border-black" required>
                  <option value="">Select Country</option>
                  <option>Pakistan</option>
                </select>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">What is your contact information?</h3>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email (Optional)"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-black"
                  required
                />
              </div>
            </div>

            {/* Section Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveSection("shipping")}
                className={`w-full p-3 rounded-lg ${
                  activeSection === "shipping" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Shipping
              </button>
              {/* <button
                onClick={() => setActiveSection("billing")}
                className={`w-full p-3 rounded-lg ${
                  activeSection === "billing" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Billing
              </button> */}
              <button
                onClick={() => setActiveSection("payment")}
                className={`w-full p-3 rounded-lg ${
                  activeSection === "payment" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Payment
              </button>
            </div>

            {/* Payment Section */}
            {activeSection === "payment" && (
              <div>
                <h2 className="text-lg font-medium text-gray-800">Payment Details</h2>
                <CardElement className="p-2 border rounded-md focus:outline-none focus:border-black" />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full mt-4 p-3 bg-black text-white rounded-lg ${
                    isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800 transition"
                  }`}
                >
                  {isLoading ? "Processing..." : "Place Order"}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-full lg:w-2/5 space-y-4 sticky top-6 self-start">
          <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
          <div className="border border-gray-300 rounded-lg p-4 space-y-4 bg-white shadow-md">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                {/* Product Image */}
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.color}</p>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-lg font-semibold text-gray-800">₹ {item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="space-y-2">
              <div className="flex justify-between text-gray-800">
                <p>Subtotal</p>
                <p>₹ {subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-800">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-bold text-gray-800">
                <p>Total</p>
                <p>₹ {subtotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Popup */}
      {showThankYouPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">Your order has been placed successfully.</p>
            <button
              onClick={() => {
                setShowThankYouPopup(false);
                router.push("/");
              }}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import Navbar from "../Navbar/Navbar"
// import { useAtomValue, useSetAtom } from "jotai"
// import { cartItemsAtom, subtotalAtom, removeFromCartAtom } from "../Atoms/cartAtoms"
// import { urlFor } from "@/sanity/lib/image"

// export default function CheckoutForm() {
//   const [activeSection, setActiveSection] = useState<"shipping" | "billing" | "payment">("shipping")
//   const cartItems = useAtomValue(cartItemsAtom)
//   const subtotal = useAtomValue(subtotalAtom)
//   const removeFromCart = useSetAtom(removeFromCartAtom)
//   const router = useRouter()

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Here you would typically handle the checkout process
//     // For this example, we'll just clear the cart and show an alert
//     cartItems.forEach((item) => removeFromCart(item.id))
//     alert("Thank you for your purchase!")
//     router.push("/")
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50">
//         <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
//             {/* Left Column - Form */}
//             <div className="lg:col-span-3">
//               <div className="space-y-6 bg-white p-6 rounded-lg shadow">
//                 <div>
//                   <h2 className="text-lg font-medium text-gray-900 mb-4">How would you like to get your order?</h2>
//                   <div className="bg-gray-100 p-4 rounded text-sm text-gray-600">
//                     The fastest and most sustainable way to receive your order is choosing Pick-up. You will still be
//                     able to try on your items and make returns at the pick-up point. If you would prefer to have your
//                     order delivered to your home, you can select one of our delivery options at checkout.
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h2 className="text-lg font-medium text-gray-900">Enter your name and address:</h2>
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <div>
//                       <label htmlFor="firstName" className="sr-only">
//                         First name
//                       </label>
//                       <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         required
//                         placeholder="First name"
//                         className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="lastName" className="sr-only">
//                         Last name
//                       </label>
//                       <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         required
//                         placeholder="Last name"
//                         className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="address1" className="sr-only">
//                       Address Line 1
//                     </label>
//                     <input
//                       type="text"
//                       id="address1"
//                       name="address1"
//                       required
//                       placeholder="Address Line 1"
//                       className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="address2" className="sr-only">
//                       Address Line 2
//                     </label>
//                     <input
//                       type="text"
//                       id="address2"
//                       name="address2"
//                       placeholder="Address Line 2"
//                       className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="state" className="sr-only">
//                         State/Province
//                       </label>
//                       <select
//                         id="state"
//                         name="state"
//                         required
//                         className="w-full border-0 border-b border-gray-300 pb-2 text-gray-500 focus:border-gray-900 focus:ring-0"
//                       >
//                        <option value="Sindh">SINDH</option>
//                         <option value="Pubjab">PUNJAB</option>
//                         {/* Add state options here */}
//                       </select>
//                     </div>
//                     <div>
//                       <label htmlFor="country" className="sr-only">
//                         Country
//                       </label>
//                       <select
//                         id="country"
//                         name="country"
//                         required
//                         className="w-full border-0 border-b border-gray-300 pb-2 text-gray-500 focus:border-gray-900 focus:ring-0"
//                       >
//                         <option value="Pakistan">Pakistan</option>
//                         {/* Add more country options if needed */}
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h2 className="text-lg font-medium text-gray-900">What is your contact information?</h2>
//                   <div>
//                     <label htmlFor="email" className="sr-only">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       placeholder="Email"
//                       className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
//                     />
//                     <p className="mt-1 text-xs text-gray-500">We will send your order confirmation here</p>
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="sr-only">
//                       Phone number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       required
//                       placeholder="Phone number"
//                       className="w-full border-0 border-b border-gray-300 pb-2 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
//                     />
//                     <p className="mt-1 text-xs text-gray-500">We will only use this to contact you about your order</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h2 className="text-lg font-medium text-gray-900">Delivery</h2>
//                   <div className="space-y-2">
//                     <button
//                       type="button"
//                       onClick={() => setActiveSection("shipping")}
//                       className={`w-full text-left p-4 rounded-lg border ${
//                         activeSection === "shipping" ? "border-gray-900" : "border-gray-200"
//                       }`}
//                     >
//                       Shipping
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setActiveSection("billing")}
//                       className={`w-full text-left p-4 rounded-lg border ${
//                         activeSection === "billing" ? "border-gray-900" : "border-gray-200"
//                       }`}
//                     >
//                       Billing
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setActiveSection("payment")}
//                       className={`w-full text-left p-4 rounded-lg border ${
//                         activeSection === "payment" ? "border-gray-900" : "border-gray-200"
//                       }`}
//                     >
//                       Payment
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
//                 >
//                   Place Order
//                 </button>
//               </div>
//             </div>

//             {/* Right Column - Order Summary */}
//             <div className="lg:col-span-2">
//               <div className="sticky top-8 bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
//                 <div className="space-y-6">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex gap-4">
//                       <div className="relative h-24 w-24 flex-none">
//                         <Image
//                           src={urlFor(item.image.asset._ref).url() || "/placeholder.svg"}
//                           alt={item.name}
//                           fill
//                           className="object-cover rounded-md"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
//                         <p className="mt-1 text-sm text-gray-500">{item.color}</p>
//                         <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
//                         <p className="mt-1 text-sm font-medium text-gray-900">₹ {item.price.toFixed(2)}</p>
//                       </div>
//                     </div>
//                   ))}

//                   <div className="border-t border-gray-200 pt-4 space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Subtotal</span>
//                       <span className="font-medium text-gray-900">₹ {subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Shipping</span>
//                       <span className="font-medium text-gray-900">Free</span>
//                     </div>
//                     <div className="flex justify-between text-sm font-medium">
//                       <span className="text-gray-900">Total</span>
//                       <span className="text-gray-900">₹ {subtotal.toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }



