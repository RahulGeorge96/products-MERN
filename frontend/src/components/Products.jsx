import  { useEffect, useState } from "react";
import { fetchProducts } from "../api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      setProducts(response.data);
      console.log(response.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
