// import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react'
// import Navbar from '../Navbar/Navbar'
// export default function Help() {
//   return (
//     <>
//     <Navbar />
  
//     <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
//       {/* Main Content */}
//       <div className="flex-1">
//         <h1 className="text-2xl font-bold mb-6">
//           WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
//         </h1>
        
//         <div className="space-y-6">
//           <p className="text-gray-700">
//             We want to make buying your favourite Nike shoes and gear online fast and easy and we accept the following payment options
//           </p>
          
//           <p className="text-gray-700">
//             Visa Mastercard Diners Club Discover American Express Visa Electron Maestro
//           </p>
          
//           <p className="text-gray-700">
//             If you enter your PAN information at checkout you will be able to pay for your order with PayTM or a local credit or debit card.
//           </p>
          
//           <p className="text-gray-700">Apple Pay</p>
          
//           <p className="text-gray-700">
//             <span className="font-medium">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you re not already a Member{' '}
//             <a href="#" className="underline">
//               join us
//             </a>{' '}
//             today.
//           </p>

//           <div className="flex gap-4 pt-4">
//             <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
//               JOIN US
//             </button>
//             <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
//               SHOP NIKE
//             </button>
//           </div>

//           <div className="pt-8">
//             <h2 className="text-xl font-bold mb-4">FAQs</h2>
            
//             <div className="space-y-6">
//               <div>
//                 <h3 className="font-medium mb-2">Does my card need international purchases enabled?</h3>
//                 <p className="text-gray-700">
//                   Yes we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
//                 </p>
//                 <p className="text-gray-700 mt-2">
//                   Please note some banks may charge a small transaction fee for international orders.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-medium mb-2">Can I pay for my order with multiple methods?</h3>
//                 <p className="text-gray-700">
//                   No payment for Nike orders cant be split between multiple payment methods.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-medium mb-2">What payment method is accepted for SNKRS orders?</h3>
//                 <p className="text-gray-700">
//                   You can use any accepted credit card to pay for your SNKRS order.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-medium mb-2">Why dont I see Apple Pay as an option?</h3>
//                 <p className="text-gray-700">
//                   To see Apple Pay as an option in the Nike App or on Nike.com you will need to use a compatible Apple device running the latest OS be signed in to your iCloud account and have a supported card in your Wallet. Additionally youll need to use Safari to use Apple Pay on Nike.com.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="pt-6">
//             <p className="text-sm mb-2">Was this answer helpful?</p>
//             <div className="flex gap-2">
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 👍
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded">
//                 👎
//               </button>
//             </div>
//           </div>

//           <div className="pt-6">
//             <h3 className="text-sm text-gray-500 mb-2">RELATED</h3>
//             <div className="space-y-2">
//               <a href="#" className="block text-sm underline">
//                 WHAT ARE NIKES DELIVERY OPTIONS?
//               </a>
//               <a href="#" className="block text-sm underline">
//                 HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Sidebar */}
//       <div className="md:w-80 space-y-8">
//         <h2 className="text-2xl font-bold">CONTACT US</h2>
        
//         <div className="space-y-8">
//           <div className="flex items-start gap-4">
//             <Phone className="w-6 h-6" />
//             <div>
//               <p className="font-medium">000 800 919 0566</p>
//               <p className="text-sm text-gray-600">
//                 Products & Orders: 24 hours a day
//                 <br />7 days a week
//               </p>
//               <p className="text-sm text-gray-600 mt-2">
//                 Company Info & Enquiries: 07:30 -
//                 <br />16:30, Monday - Friday
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <MessageSquare className="w-6 h-6" />
//             <div>
//               <p className="text-sm text-gray-600">
//                 24 hours a day
//                 <br />7 days a week
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <Mail className="w-6 h-6" />
//             <div>
//               <p className="text-sm text-gray-600">
//                 We will reply within
//                 <br />five business days
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <MapPin className="w-6 h-6" />
//             <div>
//               <p className="font-medium">STORE LOCATOR</p>
//               <p className="text-sm text-gray-600">
//                 Find Nike retail stores near you
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }


'use client'

import { Search } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Navbar from '../Navbar/Navbar'

export default function HelpPage() {
  return (
    < >
    <Navbar />
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="px-12 py-8">
          {/* Header */}
          <h1 className="text-[22px] font-bold mb-6">GET HELP</h1>
          
          {/* Search Bar */}
          <div className="relative mb-12">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full max-w-[600px] h-11 pl-4 pr-10 border border-gray-300 rounded text-[15px]"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Main Content */}
          <div className="flex gap-16">
            {/* Left Column */}
            <div className="flex-1">
              {/* Payment Options Section */}
              <section className="mb-12">
                <h2 className="text-[16px] font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                <div className="space-y-4 text-[14px] leading-[1.5]">
                  <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                  <p className="ml-4">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                  <p className="ml-4">If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                  <p>Apple Pay</p>
                  <p>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.</p>
                  <div className="flex gap-2 pt-2">
                    <button className="bg-black text-white text-[15px] px-6 py-2 rounded-full hover:bg-gray-800">
                      JOIN US
                    </button>
                    <button className="bg-black text-white text-[15px] px-6 py-2 rounded-full hover:bg-gray-800">
                      SHOP NIKE
                    </button>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section className="mb-12">
                <h3 className="text-[14px] font-bold mb-6">FAQs</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[14px] font-bold mb-2">Does my card need international purchases enabled?</h4>
                    <div className="space-y-2 text-[14px]">
                      <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                      <p>Please note, some banks may charge a small transaction fee for international orders.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold mb-2">Can I pay for my order with multiple methods?</h4>
                    <p className="text-[14px]">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold mb-2">What payment method is accepted for SNKRS orders?</h4>
                    <p className="text-[14px]">You can use any accepted credit card to pay for your SNKRS order.</p>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold mb-2">Why don&apos;t I see Apple Pay as an option?</h4>
                    <p className="text-[14px]">To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
                  </div>
                </div>
              </section>

              {/* Feedback Section */}
              <section className="mb-8">
                <p className="text-[14px] mb-3">Was this answer helpful?</p>
                <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
                    👍
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
                    👎
                  </button>
                </div>
              </section>

              {/* Related Section */}
              <section>
                <h3 className="text-[14px] font-bold mb-4">RELATED</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-[14px] underline hover:no-underline">
                    WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                  </Link>
                  <Link href="#" className="block text-[14px] underline hover:no-underline">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </Link>
                </div>
              </section>
            </div>

            {/* Right Column - Contact Section */}
            <div className="w-[300px] border-l border-gray-200 pl-8">
              <h2 className="text-[24px] font-bold mb-8 flex flex-col items-center">CONTACT US</h2>
              
              <div className="space-y-12">
                {/* Phone */}
                <div className="text-center">
                  <div className="mb-4">
                    <Image 
                      src="/Images/help-phone.png"
                      alt="Phone"
                      width={68}
                      height={68}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold">000 800 919 0595</p>
                    <p className="text-[14px]">Products & Orders: 24 hours a day,</p>
                    <p className="text-[14px]">7 days a week</p>
                    <p className="text-[14px]">Company Info & Enquiries: 07:30 -</p>
                    <p className="text-[14px]">16:30, Monday - Friday</p>
                  </div>
                </div>

                {/* Chat */}
                <div className="text-center">
                  <div className="mb-4">
                    <Image 
                      src="/Images/message-help.png"
                      alt="Chat"
                      width={68}
                      height={68}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-[14px]">24 hours a day</p>
                    <p className="text-[14px]">7 days a week</p>
                  </div>
                </div>

                {/* Email */}
                <div className="text-center">
                  <div className="mb-4">
                    <Image 
                      src="/Images/mail-help.png"
                      alt="Email"
                      width={68}
                      height={68}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-[14px]">We&apos;ll reply within</p>
                    <p className="text-[14px]">five business days</p>
                  </div>
                </div>

                {/* Store Locator */}
                <div className="text-center">
                  <div className="mb-4">
                    <Image 
                      src="/Images/location-help.png"
                      alt="Store Locator"
                      width={68}
                      height={68}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold">STORE LOCATOR</p>
                    <p className="text-[14px]">Find Nike retail stores near you</p>
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

