// "use client"

// import { useState, useEffect } from "react"
// import { Heart, ShoppingCart, Search, Menu } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { client } from "@/sanity/lib/client"
// import { useAtomValue } from "jotai"
// import { cartItemsAtom } from "../Atoms/cartAtoms"

// type Product = {
//   _id: string
//   productName: string
//   price: number
//   image: {
//     asset: {
//       url: string
//     }
//   }
//   category: string
//   colors: string[]
//   status: string
//   inventory: number
//   description: string
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isSearchOpen, setIsSearchOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [products, setProducts] = useState<Product[]>([])
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
//   const [isLoading, setIsLoading] = useState(true)

//   const cartItems = useAtomValue(cartItemsAtom)
//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true)
//         const query = `*[_type == "product"]{
//           _id,
//           productName,
//           price,
//           "image": image.asset->url,
//           category,
//           colors,
//           status,
//           inventory,
//           description
//         }`
//         const data = await client.fetch<Product[]>(query)
//         setProducts(data)
//       } catch (error) {
//         console.error("Error fetching products:", error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value.toLowerCase()
//     setSearchQuery(query)

//     const filtered = products.filter(
//       (product) =>
//         product.productName.toLowerCase().includes(query) ||
//         product.category.toLowerCase().includes(query) ||
//         product.colors.some((color) => color.toLowerCase().includes(query)) ||
//         product.status.toLowerCase().includes(query) ||
//         product.description.toLowerCase().includes(query),
//     )
//     setFilteredProducts(filtered)
//   }

//   const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//   }

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
//   const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

//   return (
//     <header className="w-full text-black sticky top-0 z-50">
//       {/* Top Bar */}
//       <div className="h-[48px] bg-[#F5F5F5] flex items-center justify-between px-6 text-xs font-light">
//         {/* Left */}
//         <div className="flex items-center gap-4">
//           <Link href="/">
//             <Image src="/Images/nike-logo.PNG" alt="Jordan logo" width={20} height={20} />
//           </Link>
//         </div>
//         {/* Center */}
//         <button className="text-gray-600 text-xs font-bold">Skip to main content</button>
//         {/* Right */}
//         <div className="flex gap-3 text-gray-600 text-sm hidden sm:flex">
//           <Link href="/FindStore" className="hover:underline">
//             Find a Store
//           </Link>
//           <span>|</span>
//           <Link href="/Help" className="hover:underline">
//             Help
//           </Link>
//           <span>|</span>
//           <Link href="/JoinUs" className="hover:underline">
//             Join Us
//           </Link>
//           <span>|</span>
//           <Link href="/Login" className="hover:underline">
//             Sign In
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Navbar */}
//       <nav className="w-full h-[55px] flex items-center justify-between px-6 border-b border-gray-300">
//         {/* Left Logo */}
//         <div>
//           <Link href="/">
//             <Image src="/Images/jordan-logo.PNG" alt="Nike logo" width={40} height={40} />
//           </Link>
//         </div>

//         {/* Center Links */}
//         <ul className="flex space-x-8 text-sm font-medium hidden md:flex">
//           <li>
//             <Link href="/Products" className="hover:underline">
//               New & Featured
//             </Link>
//           </li>
//           <li>
//             <Link href="/men" className="hover:underline">
//               Men
//             </Link>
//           </li>
//           <li>
//             <Link href="/women" className="hover:underline">
//               Women
//             </Link>
//           </li>
//           <li>
//             <Link href="/kids" className="hover:underline">
//               Kids
//             </Link>
//           </li>
//           <li>
//             <Link href="/sale" className="hover:underline">
//               Sale
//             </Link>
//           </li>
//           <li>
//             <Link href="/SnkrsRoute" className="hover:underline">
//               SNKRS
//             </Link>
//           </li>
//         </ul>

//         {/* Right Search and Icons */}
//         <div className="flex items-center gap-6">
//           {/* Search Box for Large Screens */}
//           <div className="relative w-[183px] hidden sm:block">
//             <form onSubmit={handleSearchSubmit}>
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="w-full h-[33px] pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
//               />
//               <Search className="absolute left-3 top-2 text-gray-400" size={18} />
//             </form>
//             {searchQuery && (
//               <div className="absolute top-full left-0 w-full bg-white p-4 shadow-md mt-2 rounded-md z-10">
//                 {isLoading ? (
//                   <p className="text-sm text-gray-500">Loading products...</p>
//                 ) : filteredProducts.length === 0 ? (
//                   <p className="text-sm text-gray-500">No products found</p>
//                 ) : (
//                   <ul className="space-y-2 max-h-[300px] overflow-y-auto">
//                     {filteredProducts.map((product) => (
//                       <li key={product._id}>
//                         <Link href={`/product/${product._id}`}>
//                           <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
//                             <div className="relative w-10 h-10">
//                               <Image
//                                 src={product.image?.asset?.url || "/placeholder.svg" || "/placeholder.svg"}
//                                 alt={product.productName || "Placeholder"}
//                                 fill
//                                 className="object-cover rounded"
//                                 sizes="40px"
//                               />
//                             </div>
//                             <div className="flex-1">
//                               <span className="text-sm text-gray-800 block">{product.productName}</span>
//                               <span className="text-xs text-gray-600 block">{product.category}</span>
//                             </div>
//                             <span className="text-sm font-semibold text-gray-600">${product.price.toFixed(2)}</span>
//                           </div>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Mobile Search Icon */}
//           <div className="sm:hidden">
//             <button onClick={toggleSearch}>
//               <Search className="text-gray-700 hover:text-black cursor-pointer" />
//             </button>
//           </div>

//           {/* Icons */}
//           <Heart className="text-gray-700 hover:text-black cursor-pointer" />
//           <Link href="/ShoppingCart" className="relative">
//             <ShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
//             {totalQuantity > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                 {totalQuantity}
//               </span>
//             )}
//           </Link>
//         </div>

//         {/* Hamburger Menu for Small Screens */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu}>
//             <Menu className="text-gray-700" size={24} />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-[#F5F5F5] p-4">
//           <ul className="space-y-3 text-center">
//             <li>
//               <Link href="/Products" className="block text-sm hover:underline">
//                 New & Featured
//               </Link>
//             </li>
//             <li>
//               <Link href="/men" className="block text-sm hover:underline">
//                 Men
//               </Link>
//             </li>
//             <li>
//               <Link href="/women" className="block text-sm hover:underline">
//                 Women
//               </Link>
//             </li>
//             <li>
//               <Link href="/kids" className="block text-sm hover:underline">
//                 Kids
//               </Link>
//             </li>
//             <li>
//               <Link href="/sale" className="block text-sm hover:underline">
//                 Sale
//               </Link>
//             </li>
//             <li>
//               <Link href="/snkrs" className="block text-sm hover:underline">
//                 SNKRS
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Mobile Search Box */}
//       {isSearchOpen && (
//         <div className="sm:hidden absolute top-[103px] left-0 w-full bg-white p-4 shadow-md z-10">
//           <form onSubmit={handleSearchSubmit}>
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="w-full h-[33px] pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
//             />
//             <Search className="absolute left-7 top-6 text-gray-400" size={18} />
//           </form>
//           {isLoading ? (
//             <p className="mt-2 text-sm text-gray-500">Loading products...</p>
//           ) : (
//             <ul className="mt-2 space-y-2 max-h-[300px] overflow-y-auto">
//               {filteredProducts.length === 0 ? (
//                 <li className="text-sm text-gray-500">No products found</li>
//               ) : (
//                 filteredProducts.map((product) => (
//                   <li key={product._id}>
//                     <Link href={`/product/${product._id}`}>
//                       <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
//                         <div className="relative w-10 h-10">
//                           <Image
//                             src={product.image?.asset?.url || "/placeholder.svg"}
//                             alt={product.productName || "Placeholder"}
//                             fill
//                             className="object-cover rounded"
//                             sizes="40px"
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <span className="text-sm text-gray-800 block">{product.productName}</span>
//                           <span className="text-xs text-gray-600 block">{product.category}</span>
//                         </div>
//                         <span className="text-sm font-semibold text-gray-600">${product.price.toFixed(2)}</span>
//                       </div>
//                     </Link>
//                   </li>
//                 ))
//               )}
//             </ul>
//           )}
//         </div>
//       )}
//     </header>
//   )
// }












"use client"

import { useState, useEffect } from "react"
import { Heart, ShoppingCart, Search, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { useAtomValue } from "jotai"
import { cartItemsAtom } from "../Atoms/cartAtoms"

type Product = {
  _id: string
  productName: string
  price: number
  image: {
    asset: {
      url: string
    }
  }
  category: string
  colors: string[]
  status: string
  inventory: number
  description: string
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const cartItems = useAtomValue(cartItemsAtom)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const query = `*[_type == "product"]{
          _id,
          productName,
          price,
          "image": image.asset->url,
          category,
          colors,
          status,
          inventory,
          description
        }`
        const data = await client.fetch<Product[]>(query)
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.colors.some((color) => color.toLowerCase().includes(query)) ||
        product.status.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query),
    )
    setFilteredProducts(filtered)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <header className="w-full text-black sticky top-0 z-50">
      {/* Top Bar */}
      <div className="h-[48px] bg-[#F5F5F5] flex items-center justify-between px-6 text-xs font-light">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/Images/nike-logo.PNG" alt="Jordan logo" width={20} height={20} />
          </Link>
        </div>
        {/* Center */}
        <button className="text-gray-600 text-xs font-bold hidden sm:block">Skip to main content</button>
        {/* Right */}
        <div className="flex gap-3 text-gray-600  sm:flex">
          <Link href="/FindStore" className="hover:underline">
            Find a Store
          </Link>
          <span>|</span>
          <Link href="/Help" className="hover:underline">
            Help
          </Link>
          <span>|</span>
          <Link href="/JoinUs" className="hover:underline">
            Join Us
          </Link>
          <span>|</span>
          <Link href="/Login" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="w-full h-[55px] flex items-center justify-between px-6 border-b border-gray-300">
        {/* Left Logo */}
        <div>
          <Link href="/">
            <Image src="/Images/jordan-logo.PNG" alt="Nike logo" width={40} height={40} />
          </Link>
        </div>

        {/* Center Links */}
        <ul className="flex space-x-8 text-sm font-medium hidden md:flex">
          <li>
            <Link href="/Products" className="hover:underline">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline">
              Men
            </Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline">
              Women
            </Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/Products" className="hover:underline">
              Sale
            </Link>
          </li>
          <li>
            <Link href="/SnkrsRoute" className="hover:underline">
              SNKRS
            </Link>
          </li>
        </ul>

        {/* Right Search and Icons */}
        <div className="flex items-center gap-6">
          {/* Search Box for Large Screens */}
          <div className="relative w-[183px] hidden sm:block">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full h-[33px] pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Search className="absolute left-3 top-2 text-gray-400" size={18} />
            </form>
            {searchQuery && (
              <div className="absolute top-full left-0 w-full bg-white p-4 shadow-md mt-2 rounded-md z-10">
                {isLoading ? (
                  <p className="text-sm text-gray-500">Loading products...</p>
                ) : filteredProducts.length === 0 ? (
                  <p className="text-sm text-gray-500">No products found</p>
                ) : (
                  <ul className="space-y-2 max-h-[300px] overflow-y-auto">
                    {filteredProducts.map((product) => (
                      <li key={product._id}>
                        <Link href={`/product/${product._id}`}>
                          <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
                            <div className="relative w-10 h-10">
                              <Image
                                src={product.image?.asset?.url || "/placeholder.svg" || "/placeholder.svg"}
                                alt={product.productName || "Placeholder"}
                                fill
                                className="object-cover rounded"
                                sizes="40px"
                              />
                            </div>
                            <div className="flex-1">
                              <span className="text-sm text-gray-800 block">{product.productName}</span>
                              <span className="text-xs text-gray-600 block">{product.category}</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-600">${product.price.toFixed(2)}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Mobile Search Icon */}
          <div className="sm:hidden">
            <button onClick={toggleSearch}>
              <Search className="text-gray-700 hover:text-black cursor-pointer" />
            </button>
          </div>

          {/* Icons */}
          <Heart className="text-gray-700 hover:text-black cursor-pointer" />
          <Link href="/ShoppingCart" className="relative">
            <ShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <Menu className="text-gray-700" size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F5F5] p-4">
          <ul className="space-y-3 text-center">
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                New & Featured
              </Link>
            </li>
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                Men
              </Link>
            </li>
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                Women
              </Link>
            </li>
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                Kids
              </Link>
            </li>
            <li>
              <Link href="/Products" className="block text-sm hover:underline">
                Sale
              </Link>
            </li>
            <li>
              <Link href="/snkrs" className="block text-sm hover:underline">
                SNKRS
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Search Box */}
      {isSearchOpen && (
        <div className="sm:hidden absolute top-[103px] left-0 w-full bg-white p-4 shadow-md z-10">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full h-[33px] pl-10 pr-4 text-sm text-gray-700 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Search className="absolute left-7 top-6 text-gray-400" size={18} />
          </form>
          {isLoading ? (
            <p className="mt-2 text-sm text-gray-500">Loading products...</p>
          ) : (
            <ul className="mt-2 space-y-2 max-h-[300px] overflow-y-auto">
              {filteredProducts.length === 0 ? (
                <li className="text-sm text-gray-500">No products found</li>
              ) : (
                filteredProducts.map((product) => (
                  <li key={product._id}>
                    <Link href={`/product/${product._id}`}>
                      <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
                        <div className="relative w-10 h-10">
                          <Image
                            src={product.image?.asset?.url || "/placeholder.svg"}
                            alt={product.productName || "Placeholder"}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm text-gray-800 block">{product.productName}</span>
                          <span className="text-xs text-gray-600 block">{product.category}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600">${product.price.toFixed(2)}</span>
                      </div>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}
    </header>
  )
}
