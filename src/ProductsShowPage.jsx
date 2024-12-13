import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ProductsShow } from "./ProductsShow";
export function ProductsShowPage() {
  const currentProduct = useLoaderData();
  const navigate = useNavigate();
  const handleEdit = (product) => {
    console.log("handleUpdate", product);
    navigate(`/products/${product.id}/edit`);
  };
  const handleDestroy = (product) => {
    console.log("handleDestroy", product);
    axios.delete("http://localhost:3000/products/" + product.id + ".json").then((response) => {
      console.log(response);
      navigate("/products");
    });
  };
  const handleAddToCart = (params) => {
    axios.post("/carted_products.json", params).then((response) => {
      console.log(response);
      navigate("/carted_products");
    });
  };
  return (
    <main className="container">
      <ProductsShow
        product={currentProduct}
        onEdit={handleEdit}
        onDestroy={handleDestroy}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
