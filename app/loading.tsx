"use client"

import { type FC, useState, useEffect } from "react"
import Image from "next/image"

const NikeLoadingPage: FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("/Images/jordan-logo.PNG")
  const [imageError, setImageError] = useState<string | null>(null)

  useEffect(() => {
    // Check if the image exists
    fetch(imageSrc)
      .then((res) => {
        if (!res.ok) throw new Error(`Image not found (${res.status})`)
      })
      .catch((err) => {
        console.error("Error loading image:", err)
        setImageError(err.message)
        // Fallback to a placeholder if the image fails to load
        setImageSrc("/Images/jordan-logo.PNG")
      })
  }, [imageSrc])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-24 h-24 mb-8 relative">
        {imageError ? (
          <div className="text-red-500 text-sm">{imageError}</div>
        ) : (
          <Image
            src={imageSrc || "/Images/jordan-logo.PNG"}
            alt="Nike Logo"
            width={96}
            height={96}
            className="animate-pulse"
            priority
            onError={() => setImageError("Failed to load image")}
          />
        )}
      </div>
      <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin"></div>
    </div>
  )
}

export default NikeLoadingPage

