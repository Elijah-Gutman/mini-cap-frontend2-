import { useLoaderData, Link } from "react-router-dom";

export function OrdersIndexPage() {
  const orders = useLoaderData();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Orders</h1>
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-700">Order #{order.id}</h2>
              <Link to={`/orders/${order.id}`} className="text-indigo-500 hover:underline font-medium">
                View Order Information
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
