export function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">The Future StartUp Takeover!</h1>
        <p className="text-lg text-gray-600 mb-6">Create and share your favorite products with the world.</p>
        <a
          href="/products"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Explore Products
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
        {/* Discover Products Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://www.cflowapps.com/wp-content/uploads/2023/06/purchs_prcss.jpg"
            alt="Discover Products"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Discover Products</h3>
            <p className="text-gray-600 mb-4">Explore a wide variety of products from around the world.</p>
            <a
              href="/products"
              className="px-4 py-2 text-indigo-500 border border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Share Your Products Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://oceanwp.org/wp-content/uploads/2016/10/product-share-image.png"
            alt="Share Your Products"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Share Your Products</h3>
            <p className="text-gray-600 mb-4">
              Got a product worth sharing? Upload your creations and inspire others in the community.
            </p>
            <a
              href="/Signup"
              className="px-4 py-2 text-indigo-500 border border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Join the Community Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://www.mindful.org/content/uploads/Finding-community-where-you-least-expect-it.jpg"
            alt="Join the Community"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Join the Community</h3>
            <p className="text-gray-600 mb-4">
              Become a part of our vibrant community. Create an account to save your favorite products.
            </p>
            <a
              href="/signup"
              className="px-4 py-2 text-indigo-500 border border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-200"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
