'use client'

import { useState, useCallback } from 'react'
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

interface ProductCarouselProps {
  title: string
  products: Product[]
  className?: string
}

export function ProductCarousel({ title, products, className }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, products.length - 2) : prevIndex - 2
    )
  }, [products.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= products.length ? 0 : prevIndex + 2
    )
  }, [products.length])

  const displayedProducts = products.slice(currentIndex, currentIndex + 2)

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Shop {title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevious}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label={`Previous ${title} products`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label={`Next ${title} products`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayedProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-sm mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{product.description}</p>
            <p className="text-sm">₹{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

