import ProductList from "./ProductGrid";

const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 49.99,
      imageUrl: '/Imanges/product1.png'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      imageUrl: '/Imanges/product2.png'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 76.99,
        imageUrl: '/Imanges/product3.png'
      },
    // Add more products as needed
  ];

function ProductSearches() {
  return (
    <div>
        <ProductList products={products} />
    </div>
  )
}

export default ProductSearches