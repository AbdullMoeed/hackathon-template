'use client'

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar/Navbar";
import { client } from "@/sanity/lib/client"; // Make sure you've set up your sanity client

// Define the structure of a product
// app/products/page.tsx mein update karen
interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product interface

  useEffect(() => {
    const query = `*[_type == "product"] {
      _id,
      productName,
      category,
      price,
      "imageUrl": image.asset->url,
      description,
      status
    }`;

    client
      .fetch<Product[]>(query) // Specify the expected return type
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex sm:flex-col md:flex-row">
        <Sidebar />
        <div className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.imageUrl}
              tag={product.status}
              name={product.productName}
              category={product.category}
              price={`₹${product.price}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;













