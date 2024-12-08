import React from 'react'
import { Button } from './Button'

interface ProductCardProps {
  image: string
  title?: string
  description?: string
  showLearnMore?: boolean
  imageClassName?: string
}

export function SRNKCard                                                                                    ({
  image,
  title,
  description,
  showLearnMore = false,
  imageClassName = '',
}: ProductCardProps) {
  return (
    <div className="group flex flex-col h-full">
      <div className={`relative aspect-square overflow-hidden ${imageClassName}`}>
        <img
          src={image}
          alt={title || "Product image"}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col justify-between flex-grow">
        {title && <h3 className="text-sm font-medium">{title}</h3>}
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        {showLearnMore && (
          <div className="mt-auto pt-4">
            <Button className="w-[40%] mx-auto ml-[25%] px-6 bg-black text-white">
              Learn More
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

