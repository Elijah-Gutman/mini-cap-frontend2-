import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

export function CartedProductsIndexPage() {
  const cartedProducts = useLoaderData();
  const navigate = useNavigate();

  // Function to handle the "Buy Now" action
  const handleBuyNow = async () => {
    try {
      // Make the API request to mark carted products as "purchased"
      await axios.post("/orders.json", {}); // Adjust the endpoint if necessary
      alert("Purchased!");
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      console.error("Error purchasing items:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Shopping Cart ({cartedProducts.length} total)
        </h1>
        <div className="space-y-4">
          {cartedProducts.map((cartedProduct) => (
            <div key={cartedProduct.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold text-gray-800">{cartedProduct.product.name}</h2>
              <p className="text-gray-600">
                <span className="font-medium">Quantity:</span> {cartedProduct.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleBuyNow}
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

// import { useLoaderData } from "react-router-dom";

// export function CartedProductsIndexPage() {
//   const cartedProducts = useLoaderData();

//   return (
//     <div>
//       <h1>Shopping Cart ({cartedProducts.length} total)</h1>
//       {cartedProducts.map((cartedProduct) => (
//         <div key={cartedProduct.id}>
//           <h2>{cartedProduct.product.name}</h2>
//           <p>Quantity: {cartedProduct.quantity}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
