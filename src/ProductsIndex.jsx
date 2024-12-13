export function ProductsIndex({ products, onShow }) {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">All Products ({products.length} total)</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.primary_image_url} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Price:</span> ${product.price}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Description:</span> {product.description}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Tax:</span> ${product.tax}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Total Price:</span> ${product.total}
                </p>
                <button
                  onClick={() => onShow(product)}
                  className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
                >
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
