import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<{
  id: string;
  image: string;
  name: string;
  price: string;
  category?: string;
  status?: string;
  tag?: string;
  colors?: string[];
  inventory?: number;
}> = ({ id, image, name, price, category, status }) => (
  <Link href={`/product/${id}`}>
    <div className="block border rounded shadow-md p-4 cursor-pointer hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded"
        width={450}
        height={450}
      />
      <h2 className="text-lg font-semibold mt-2 truncate">{name}</h2>
      <p className="text-gray-500">{category}</p>
      <p className="text-lg font-bold text-green-600 mt-2">{price}</p>
      {status && (
        <p
          className={`text-sm mt-1 ${
            status === "In Stock" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  </Link>
);

export default ProductCard;

// import Link from "next/link";

// const ProductCard: React.FC<{
//   id: string;
//   image: string;
//   name: string;
//   price: string;
//   category?: string;
//   status?: string;
//   colors?: string[];
//   inventory?: number;
// }> = ({ id, image, name, price }) => (
//   <Link href={`/products/${id}`} passHref>
//     <div className="block border rounded shadow-md p-4 cursor-pointer">
//       <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
//       <h2 className="text-lg font-semibold">{name}</h2>
//       <p className="text-lg font-bold text-green-600">{price}</p>

//     </div>
//   </Link>
// );

// export default ProductCard;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface ProductCardProps {
//   image: string;
//   name: string;
//   category: string;
//   price: string;
//   tag?: string;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ image, name, category, price, tag }) => {
//   return (
//     <Link href="/ProductNavigate"><div className="border rounded-lg shadow-sm hover:shadow-md transition p-4">

//       <Image
//         src={image}
//         alt={name}
//         className="w-full h-48 object-cover rounded-md mb-4"
//         width={100}
//         height={100}
//       />
//       {tag && <span className="text-sm text-red-500 font-medium">{tag}</span>}
//       <h3 className="text-gray-800 font-semibold text-lg">{name}</h3>
//       <p className="text-gray-500 text-sm">{category}</p>
//       <p className="text-gray-900 font-bold mt-2">{price}</p>
//     </div>
//     </Link>
//   );
// };

// export default ProductCard;
