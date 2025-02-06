import Link from "next/link"
import { ProductCarousel } from "./ProductCarousel"

const mensProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short-Sleeve Running Top",
    price: 3895,
    image: "/Images/men-tshirt.png",
  },
  {
    id: 2,
    name: "Nike Dri-FIT Challenger",
    description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: 2495,
    image: "/Images/men-shorts.png",
  },
  {
    id: 3,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Long-Sleeve Running Top",
    price: 4295,
    image: "/Images/men-tshirt.png",
  },
  {
    id: 4,
    name: "Nike Dri-FIT Challenger",
    description: "Men's 20cm (approx.) Versatile Shorts",
    price: 2695,
    image: "/Images/men-shorts.png",
  },
]

const womensProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long-Sleeve Running Top",
    price: 5295,
    image: "/Images/women-tshirt.png",
  },
  {
    id: 2,
    name: "Nike Fast",
    description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: 3795,
    image: "/Images/women-trouser.png",
  },
  {
    id: 3,
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Short-Sleeve Running Top",
    price: 4795,
    image: "/Images/women-tshirt.png",
  },
  {
    id: 4,
    name: "Nike Epic Fast",
    description: "Women's Mid-Rise Running Leggings",
    price: 3995,
    image: "/Images/women-trouser.png",
  },
]

export function GearUp() {
  return (
    <section className="py-12 px-4 md:px-6">
      <h1 className="text-2xl font-bold mb-8">Gear Up</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/Products"><ProductCarousel title="Men's" products={mensProducts} className="md:pr-4" /></Link>
        <Link href="/Products"><ProductCarousel title="Women's" products={womensProducts} className="md:pl-4" /></Link>
      </div>
    </section>
  )
}




