
"use client"

import { useSetAtom } from "jotai"
import { addToCartAtom, type CartItem } from "@/app/Atoms/cartAtoms"
import { useState, useEffect } from "react"

interface Product {
  _id: string
  productName: string
  price: number
  image: {
    asset: {
      _ref: string
    }
  }
  description: string
  colors: string[]
  inventory: number
  styleCode?: string
}

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useSetAtom(addToCartAtom)
  const [buttonState, setButtonState] = useState<"default" | "adding" | "added">("default")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (buttonState === "added") {
      timer = setTimeout(() => setButtonState("default"), 2000)
    }
    return () => clearTimeout(timer)
  }, [buttonState])

  const handleAddToCart = () => {
    if (product.inventory <= 0) return

    setButtonState("adding")
    const cartItem: CartItem = {
      id: product._id,
      name: product.productName,
      price: product.price,
      quantity: quantity,
      image: product.image,
      size: "M", // Default size, you might want to make this dynamic
      color: product.colors[0] || "", // Using the first color in the array
    }
    addToCart(cartItem)
    setButtonState("added")
  }

  const getButtonText = () => {
    switch (buttonState) {
      case "adding":
        return "Adding..."
      case "added":
        return "Added to Cart!"
      default:
        return product.inventory > 0 ? "Add To Cart" : "Out of Stock"
    }
  }

  const getButtonClass = () => {
    const baseClass =
      "inline-block px-8 py-3 font-semibold text-sm rounded-full shadow-lg transition-all duration-300 transform"
    switch (buttonState) {
      case "adding":
        return `${baseClass} bg-yellow-500 text-white cursor-not-allowed`
      case "added":
        return `${baseClass} bg-green-500 text-white`
      default:
        return product.inventory > 0
          ? `${baseClass} bg-black text-white hover:bg-gray-950 hover:scale-105`
          : `${baseClass} bg-gray-300 text-gray-500 cursor-not-allowed`
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center border rounded">
        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="px-4 py-1">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => Math.min(product.inventory, prev + 1))}
          className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
          disabled={quantity >= product.inventory}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className={getButtonClass()}
        disabled={product.inventory <= 0 || buttonState !== "default"}
        aria-label={getButtonText()}
      >
        {getButtonText()}
      </button>
    </div>
  )
}




//final

// "use client"

// import { useSetAtom } from "jotai"
// import { addToCartAtom, type CartItem } from "@/app/Atoms/cartAtoms"
// import { useState, useEffect } from "react"

// interface AddToCartButtonProps {
//   product: {
//     _id: string
//     productName: string
//     price: number
//     image: {
//       asset: {
//         _ref: string
//       }
//     }
//     colors: string[]
//     inventory: number
//   }
// }

// export default function AddToCartButton({ product }: AddToCartButtonProps) {
//   const addToCart = useSetAtom(addToCartAtom)
//   const [buttonState, setButtonState] = useState<"default" | "adding" | "added">("default")

//   useEffect(() => {
//     let timer: NodeJS.Timeout
//     if (buttonState === "added") {
//       timer = setTimeout(() => setButtonState("default"), 2000)
//     }
//     return () => clearTimeout(timer)
//   }, [buttonState])

//   const handleAddToCart = () => {
//     setButtonState("adding")
//     const cartItem: CartItem = {
//       id: product._id,
//       name: product.productName,
//       price: product.price,
//       quantity: 1,
//       image: product.image,
//       size: "M", // Default size, you might want to make this dynamic
//       color: product.colors[0] || "", // Using the first color in the array
//     }
//     addToCart(cartItem)
//     setButtonState("added")
//   }

//   const getButtonText = () => {
//     switch (buttonState) {
//       case "adding":
//         return "Adding..."
//       case "added":
//         return "Added to Cart!"
//       default:
//         return product.inventory > 0 ? "Add To Cart" : "Out of Stock"
//     }
//   }

//   const getButtonClass = () => {
//     const baseClass =
//       "inline-block px-8 py-3 font-semibold text-sm rounded-full shadow-lg transition-all duration-300 transform"
//     switch (buttonState) {
//       case "adding":
//         return `${baseClass} bg-yellow-500 text-white cursor-not-allowed`
//       case "added":
//         return `${baseClass} bg-green-500 text-white`
//       default:
//         return product.inventory > 0
//           ? `${baseClass} bg-black text-white hover:bg-gray-950 hover:scale-105`
//           : `${baseClass} bg-gray-300 text-gray-500 cursor-not-allowed`
//     }
//   }

//   return (
//     <button
//       onClick={handleAddToCart}
//       className={getButtonClass()}
//       disabled={product.inventory <= 0 || buttonState !== "default"}
//     >
//       {getButtonText()}
//     </button>
//   )
// }









// "use client"

// import { useSetAtom } from "jotai"
// import { addToCartAtom, type CartItem } from "@/app/Atoms/cartAtoms"

// interface AddToCartButtonProps {
//   product: {
//     _id: string
//     productName: string
//     price: number
//     image: {
//       asset: {
//         _ref: string
//       }
//     }
//     colors: string[]
//     inventory: number
//   }
// }

// export default function AddToCartButton({ product }: AddToCartButtonProps) {
//   const addToCart = useSetAtom(addToCartAtom)

//   const handleAddToCart = () => {
//     const cartItem: CartItem = {
//       id: product._id,
//       name: product.productName,
//       price: product.price,
//       quantity: 1,
//       image: product.image,
//       size: "M", // Default size, you might want to make this dynamic
//       color: product.colors[0] || "", // Using the first color in the array
//     }
//     addToCart(cartItem)
//   }

//   return (
//     <button
//       onClick={handleAddToCart}
//       className="inline-block px-8 py-3 bg-black text-white font-semibold text-sm rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-950"
//       disabled={product.inventory <= 0}
//     >
//       {product.inventory > 0 ? "Add To Cart" : "Out of Stock"}
//     </button>
//   )
// }























// "use client"

// import Link from "next/link"

// interface AddToCartButtonProps {
//   inventory: number
// }

// export default function AddToCartButton({ inventory }: AddToCartButtonProps) {
//   return (
//     <Link
//       href="/ShoppingCart"
//       className={`inline-block px-8 py-3 bg-black text-white font-semibold text-sm rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
//         inventory === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-950"
//       }`}
//       onClick={(e) => inventory === 0 && e.preventDefault()}
//       aria-disabled={inventory === 0}
//     >
//       Add To Cart
//     </Link>
//   )
// }

