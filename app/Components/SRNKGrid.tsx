import React from 'react'
import { SRNKCard } from './SRNKCard'

export default function SRNKGrid() {
  const products = [
    {
      image: "/Images/snrk1.png",
      showLearnMore: true,
      imageClassName: "bg-gray-200",
    },
    {
      image: "/Images/snrk2.png",
      title: "Air Max 1 'SE-DLX'",
      description: "University Red",
    },
    {
      image: "/Images/snrk2.png",
      title: "Air Max 1",
      description: "Big Bubble",
    },
    {
      image: "/Images/snrk2.png",
      title: "Women's Air Max 1 'SE Original'",
      description: "Big Bubble",
    },
    {
      image: "/Images/snrk3.png",
      showLearnMore: true,
      imageClassName: "bg-[#ff3366]",
    },
    {
      image: "/Images/snrk4.png",
      title: "Air Max 1",
      description: "Corduroy",
      imageClassName: "bg-[#0066cc]",
    },
    {
        image: "/Images/snrk1.png",
        showLearnMore: true,
        imageClassName: "bg-gray-200",
      },
      {
        image: "/Images/snrk2.png",
        title: "Air Max 1 'SE-DLX'",
        description: "University Red",
      },
      {
        image: "/Images/snrk2.png",
        title: "Air Max 1",
        description: "Big Bubble",
      },
      {
        image: "/Images/snrk2.png",
        title: "Women's Air Max 1 'SE Original'",
        description: "Big Bubble",
      },
      {
        image: "/Images/snrk3.png",
        showLearnMore: true,
        imageClassName: "bg-[#ff3366]",
      },
      {
        image: "/Images/snrk4.png",
        title: "Air Max 1",
        description: "Corduroy",
        imageClassName: "bg-[#0066cc]",
      },
      {
        image: "/Images/snrk1.png",
        showLearnMore: true,
        imageClassName: "bg-gray-200",
      },
      {
        image: "/Images/snrk2.png",
        title: "Air Max 1 'SE-DLX'",
        description: "University Red",
      },
      {
        image: "/Images/snrk2.png",
        title: "Air Max 1",
        description: "Big Bubble",
      },
      {
        image: "/Images/snrk2.png",
        title: "Women's Air Max 1 'SE Original'",
        description: "Big Bubble",
      },
      {
        image: "/Images/snrk3.png",
        showLearnMore: true,
        imageClassName: "bg-[#ff3366]",
      },
      {
        image: "/Images/snrk4.png",
        title: "Air Max 1",
        description: "Corduroy",
        imageClassName: "bg-[#0066cc]",
      },
      {
        image: "/Images/snrk1.png",
        showLearnMore: true,
        imageClassName: "bg-gray-200",
      },
      {
        image: "/Images/snrk2.png",
        title: "Air Max 1 'SE-DLX'",
        description: "University Red",
      },
      {
        image: "/Images/snrk2.png",
        title: "Air Max 1",
        description: "Big Bubble",
      },
      {
        image: "/Images/snrk2.png",
        title: "Women's Air Max 1 'SE Original'",
        description: "Big Bubble",
      },
      {
        image: "/Images/snrk3.png",
        showLearnMore: true,
        imageClassName: "bg-[#ff3366]",
      },
      {
        image: "/Images/snrk4.png",
        title: "Air Max 1",
        description: "Corduroy",
        imageClassName: "bg-[#0066cc]",
      },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <SRNKCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            showLearnMore={product.showLearnMore}
            imageClassName={product.imageClassName}
          />
        ))}
      </div>
    </div>
  )
}

