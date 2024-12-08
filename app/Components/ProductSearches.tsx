import React from 'react';
import ProductGrid from './ProductGrid';

const products = [
  {
    heading: 'Best Seller',
    title: 'Product 1',
    category: 'Category 1',
    color: 'Red',
    price: 49.99,
  },
  {
    heading: 'New Arrival',
    title: 'Product 2',
    category: 'Category 2',
    color: 'Blue',
    price: 29.99,
  },
  {
    heading: 'Discounted',
    title: 'Product 3',
    category: 'Category 3',
    color: 'Green',
    price: 76.99,
  },
  // Add more products as needed
];

function ProductSearches() {
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

export default ProductSearches;
