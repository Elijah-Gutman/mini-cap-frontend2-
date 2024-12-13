import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreate = (params, SuccessCallback) => {
    console.log("handleCreate");
    axios.post("/products.json", params).then((response) => {
      console.log(response.data);
      setProducts([...products, response.data]);
      SuccessCallback();
    });
  };

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleUpdate = (product, params, SuccessCallback) => {
    console.log("handleUpdate");
    axios.patch(`/products/${product.id}.json`, params).then((response) => {
      setProducts(
        product.map((p) => {
          if (p.id === response.data.id) {
            return response.data;
          } else {
            return p;
          }
        })
      );
      SuccessCallback();
      setIsProductsShowVisible(false);
    });
  };
  const handleDestroy = (product) => {
    console.log("handleDestroy", product);
    axios.delete(`/products/${product.id}.json`).then(() => {
      setProducts(products.filter((p) => p.id !== product.id));
      setIsProductsShowVisible(false);
    });
  };
  const handleAddToCart = (params) => {
    axios.post("/carted_products.json", params).then((response) => {
      console.log(response);
      setIsProductsShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={() => setIsProductsShowVisible(false)}>
        <ProductsShow
          product={currentProduct}
          onUpdate={handleUpdate}
          onDestroy={handleDestroy}
          onAddToCart={handleAddToCart}
        />
      </Modal>
    </main>
  );
}
