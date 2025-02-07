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

