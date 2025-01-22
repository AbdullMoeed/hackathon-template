
'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductCardAirMax } from './ProductCardAirMax'
import { useRef, useState } from "react"

const products = [
  {
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: "13,995",
    imageUrl: "/Images/shoe1.png"
  },
  {
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: "13,995",
    imageUrl: "/Images/shoe2.png"
  },
  {
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: "16,995",
    imageUrl: "/Images/shoe3.png"
  },
  {
    name: "Nike Air Max 90",
    category: "Women's Shoes",
    price: "12,995",
    imageUrl: "/Images/shoe2.png"
  }
]

export default function AirMaxSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount)
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-[10%]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold ">Best of Air Max</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Shop</span>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-8 h-8 flex items-center justify-center rounded-full border bg-background disabled:opacity-50"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-8 h-8 flex items-center justify-center rounded-full border bg-background disabled:opacity-50"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-hidden scroll-smooth"
      >
        {products.map((product, index) => (
          <ProductCardAirMax key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

