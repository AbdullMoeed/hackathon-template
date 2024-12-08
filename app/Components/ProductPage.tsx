import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar/Navbar";

const ProductPage: React.FC = () => {
  const products = [
    {
      image: "/Images/pcard1.png",
      tag: "Just In",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: "₹10,795.00",
    },
    {
      image: "/Images/pcard2.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard3.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard4.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard5.png",
      tag: "Promo Exclusion",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard6.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard7.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard8.png",
      tag: "Just In",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: "₹10,795.00",
    },
    {
      image: "/Images/pcard9.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard10.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard11.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard12.png",
      tag: "Promo Exclusion",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard1.png",
      tag: "Just In",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: "₹10,795.00",
    },
    {
      image: "/Images/pcard2.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard3.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard4.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard5.png",
      tag: "Promo Exclusion",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard6.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard7.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard8.png",
      tag: "Just In",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: "₹10,795.00",
    },
    {
      image: "/Images/pcard9.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard10.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard11.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard12.png",
      tag: "Promo Exclusion",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard3.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard4.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard5.png",
      tag: "Promo Exclusion",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard6.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard7.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard8.png",
      tag: "Just In",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: "₹10,795.00",
    },
    {
      image: "/Images/pcard9.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    {
      image: "/Images/pcard10.png",
      tag: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: "₹4,995.00",
    },
    // Add more products...
  ];

  return (
    <>
    <Navbar />
    
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            tag={product.tag}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductPage;
