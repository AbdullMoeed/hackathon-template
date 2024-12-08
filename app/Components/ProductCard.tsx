import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: string;
  tag?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, category, price, tag }) => {
  return (
    <Link href="/ProductNavigate"><div className="border rounded-lg shadow-sm hover:shadow-md transition p-4">
      
      <Image
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      {tag && <span className="text-sm text-red-500 font-medium">{tag}</span>}
      <h3 className="text-gray-800 font-semibold text-lg">{name}</h3>
      <p className="text-gray-500 text-sm">{category}</p>
      <p className="text-gray-900 font-bold mt-2">{price}</p>
    </div>
    </Link>
  );
};

export default ProductCard;
