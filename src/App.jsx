import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import { ProductsIndexPage } from "./ProductsIndexPage";
// import { ProductsPage } from "./ProductsPage";  // changing to display only on indexpage
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { ProductsEditPage } from "./ProductsEditPage";
import { CartedProductsIndexPage } from "./CartedProductsIndexPage";
import { OrdersIndexPage } from "./OrdersIndexPage";
import { OrdersShowPage } from "./OrdersShowPage";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://demo-mini-capstone-api-fo7c.onrender.com";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () => axios.get("/products.json").then((response) => response.data),
      },
      {
        path: "/products/new",
        element: <ProductsNewPage />,
      },
      {
        path: "/carted_products",
        element: <CartedProductsIndexPage />,
        loader: () => axios.get("/carted_products.json").then((response) => response.data),
      },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/products/:id/edit",
        element: <ProductsEditPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/orders",
        element: <OrdersIndexPage />,
        loader: () => axios.get("/orders.json").then((response) => response.data),
      },
      {
        path: "/orders/:id",
        element: <OrdersShowPage />,
        loader: ({ params }) => axios.get(`/orders/${params.id}.json`).then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
