import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ProductsEdit } from "./Productsedit";

export function ProductsEditPage() {
  const currentProduct = useLoaderData();
  const navigate = useNavigate();
  const handleUpdate = (product, params) => {
    console.log("handleUpdate", product);
    axios.patch("http://localhost:3000/products/" + product.id + ".json", params).then((response) => {
      console.log(response);
      navigate("/products");
    });
  };
  return (
    <main className="container">
      <ProductsEdit product={currentProduct} onUpdate={handleUpdate} />
    </main>
  );
}
