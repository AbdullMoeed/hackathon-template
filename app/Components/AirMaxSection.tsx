'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductCardAirMax } from './ProductCardAirMax'
import { useRef, useState, useEffect } from "react"
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
}

const AirMax: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const query = `*[_type == "product" && category == "Men's Shoes"] {
      _id,
      productName,
      category,
      price,
      "imageUrl": image.asset->url,
      status
    }`;

    client
      .fetch<Product[]>(query)
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return <AirMaxSection products={products} />;
};

interface AirMaxSectionProps {
  products: Product[];
}

const AirMaxSection: React.FC<AirMaxSectionProps> = ({ products }) => {
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
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <ProductCardAirMax
              productName={product.productName}
              category={product.category}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AirMax;







