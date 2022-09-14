import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ViewProducts = () => {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] =useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/api/product").then((res) => {
      console.log(res.data.products);
      setProduct(res.data.products);
    });
  }, []);


  return (
    
<div>
      {product.map((products) => (
        <ProductCard
          image={products.image}
          title={products.title}
          description={products.description}
          price={products.price}
          key={products.id}
        />
      ))}
    </div>
  );
};
export default ViewProducts;