import React from 'react';

interface ProductProps {
  heading: string;
  title: string;
  category: string;
  color: string;
  price: number;
}

interface ProductGridProps {
  products: ProductProps[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <p className="text-red-600 font-bold text-sm">{product.heading}</p>
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-gray-500">{product.color}</p>
            <p className="font-bold text-lg">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
