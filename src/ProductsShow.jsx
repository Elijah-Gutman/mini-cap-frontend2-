export function ProductsShow({ product, onDestroy, onAddToCart }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    ontimeupdate(product, params, () => event.target.reset());
  };

  const handleShoppingCartSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onAddToCart(params);
    event.target.reset();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto max-w-lg bg-white rounded-lg shadow-md p-6">
        {/* Product Details */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{product.name}</h1>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Price:</span> ${product.price}
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-medium">Description:</span> {product.description}
        </p>

        {/* Update Product Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Update Product</h2>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              defaultValue={product.name}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              defaultValue={Number(product.price).toFixed(2)}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="description">
              Description
            </label>
            <input
              id="description"
              name="description"
              defaultValue={product.description}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-400"
          >
            Update Product
          </button>
        </form>

        {/* Destroy Product Button */}
        <div className="mb-6 text-center">
          <button
            onClick={() => onDestroy(product)}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400"
          >
            Destroy Product
          </button>
        </div>

        {/* Add to Cart Form */}
        <form onSubmit={handleShoppingCartSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Add to Cart</h2>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="quantity">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <input name="product_id" type="hidden" value={product.id} />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}

// export function ProductsShow({ product, onDestroy, onAddToCart }) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const params = new FormData(event.target);
//     ontimeupdate(product, params), () => event.target.reset();
//   };
//   const handleShoppingCartSubmit = (event) => {
//     event.preventDefault();
//     const params = new FormData(event.target);
//     onAddToCart(params);
//     event.target.reset();
//   };
//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>Price: {product.price}</p>
//       <p>Description: {product.description}</p>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name: <input name="name" defaultValue={product.name} type="text" />
//         </div>
//         <div>
//           Price: <input name="price" defaultValue={product.price} type="text" />
//         </div>
//         <div>
//           Description: <input name="description" defaultValue={product.description} type="text" />
//         </div>
//         {/* <button type="submit">Update</button> */}
//       </form>
//       {/* <button onClick={() => onDestroy(product)}>Destroy</button> */}

//       <form onSubmit={handleShoppingCartSubmit}>
//         <div>
//           Quantity: <input name="quantity" type="number" />
//         </div>
//         <input name="product_id" type="hidden" value={product.id} />
//         <button type="submit">Add to cart</button>
//       </form>
//     </div>
//   );
// }
