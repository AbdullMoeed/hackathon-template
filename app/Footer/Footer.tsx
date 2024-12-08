import { Twitter, Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">FIND A STORE</li>
              <li className="hover:text-gray-400 cursor-pointer">BECOME A MEMBER</li>
              <li className="hover:text-gray-400 cursor-pointer">SIGN UP FOR EMAIL</li>
              <li className="hover:text-gray-400 cursor-pointer">SEND US FEEDBACK</li>
              <li className="hover:text-gray-400 cursor-pointer">STUDENT DISCOUNTS</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2 text-[#7E7E7E]">
              <li className="font-semibold text-white">GET HELP</li>
              <li className="hover:text-gray-400 cursor-pointer">Order Status</li>
              <li className="hover:text-gray-400 cursor-pointer">Delivery</li>
              <li className="hover:text-gray-400 cursor-pointer">Returns</li>
              <li className="hover:text-gray-400 cursor-pointer">Payment Options</li>
              <li className="hover:text-gray-400 cursor-pointer">
                Contact Us On Nike.com Inquiries
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                Contact Us On All Other Inquiries
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-2 text-[#7E7E7E]">
              <li className="font-semibold text-white">ABOUT NIKE</li>
              <li className="hover:text-gray-400 cursor-pointer">News</li>
              <li className="hover:text-gray-400 cursor-pointer">Careers</li>
              <li className="hover:text-gray-400 cursor-pointer">Investors</li>
              <li className="hover:text-gray-400 cursor-pointer">Sustainability</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <span>📍</span>
            <span>India</span>
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>

          {/* Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              Guides
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Sale
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Nike Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
