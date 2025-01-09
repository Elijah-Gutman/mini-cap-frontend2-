export function ProductsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => {
      event.target.reset();
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name of product
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter product name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="image_url">
              Image URL
            </label>
            <input
              id="image_url"
              name="image_url"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter image URL"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter product price"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="description">
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter product description"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="supplier_id">
              Supplier ID
            </label>
            <input
              id="supplier_id"
              name="supplier_id"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter supplier ID"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-400"
          >
            Add New Product
          </button>
        </form>
      </div>
    </div>
  );
}
