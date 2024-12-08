import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react'

export default function Help() {
  return (
    <>
    <Navbar />
  
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">
          WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
        </h1>
        
        <div className="space-y-6">
          <p className="text-gray-700">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          
          <p className="text-gray-700">
            Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
          </p>
          
          <p className="text-gray-700">
            If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
          </p>
          
          <p className="text-gray-700">Apple Pay</p>
          
          <p className="text-gray-700">
            <span className="font-medium">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,{' '}
            <a href="#" className="underline">
              join us
            </a>{' '}
            today.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              JOIN US
            </button>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              SHOP NIKE
            </button>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold mb-4">FAQs</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Does my card need international purchases enabled?</h3>
                <p className="text-gray-700">
                  Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                </p>
                <p className="text-gray-700 mt-2">
                  Please note, some banks may charge a small transaction fee for international orders.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Can I pay for my order with multiple methods?</h3>
                <p className="text-gray-700">
                  No, payment for Nike orders can't be split between multiple payment methods.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">What payment method is accepted for SNKRS orders?</h3>
                <p className="text-gray-700">
                  You can use any accepted credit card to pay for your SNKRS order.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Why don't I see Apple Pay as an option?</h3>
                <p className="text-gray-700">
                  To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-sm mb-2">Was this answer helpful?</p>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">
                👍
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                👎
              </button>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-sm text-gray-500 mb-2">RELATED</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm underline">
                WHAT ARE NIKE'S DELIVERY OPTIONS?
              </a>
              <a href="#" className="block text-sm underline">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Sidebar */}
      <div className="md:w-80 space-y-8">
        <h2 className="text-2xl font-bold">CONTACT US</h2>
        
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6" />
            <div>
              <p className="font-medium">000 800 919 0566</p>
              <p className="text-sm text-gray-600">
                Products & Orders: 24 hours a day,
                <br />7 days a week
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Company Info & Enquiries: 07:30 -
                <br />16:30, Monday - Friday
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MessageSquare className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-600">
                24 hours a day
                <br />7 days a week
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-600">
                We'll reply within
                <br />five business days
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6" />
            <div>
              <p className="font-medium">STORE LOCATOR</p>
              <p className="text-sm text-gray-600">
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

