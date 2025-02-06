

// import Image from "next/image";

// interface ProductCardProps {
//     name: string;
//     category: string;
//     price: string;
//     imageUrl: string;
//   }
  
//   export function ProductCardAirMax({ name, category, price, imageUrl }: ProductCardProps) {
//     return (
//       <div className="w-[300px] flex-shrink-0">
//         <div className="aspect-square bg-[#f5f5f5] rounded-lg mb-4">
//           <Image
//             src={imageUrl}
//             alt={name}
//             className="w-full h-full object-contain p-4"
//             width={100}
//             height={100}
//           />
//         </div>
//         <div className="space-y-1">
//           <h3 className="font-medium text-sm">{name}</h3>
//           <p className="text-sm text-muted-foreground">{category}</p>
//           <p className="font-medium text-sm">₹ {price}</p>
//         </div>
//       </div>
//     );
//   }
  
import Image from "next/image";

interface ProductCardProps {
  productName: string;
  category: string;
  price: number;
  imageUrl: string; // If you want to display the description
}

export function ProductCardAirMax({
  productName,
  category,
  price,
  imageUrl
}: ProductCardProps) {
  return (
    <div className="w-[300px] flex-shrink-0">
      <div className="aspect-square bg-[#f5f5f5] rounded-lg mb-4">
        <Image
          src={imageUrl}
          alt={productName}
          className="w-full h-full object-contain p-4"
          width={100}
          height={100}
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-sm">{productName}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="font-medium text-sm">₹ {price}</p>
       
      </div>
    </div>
  );
}

