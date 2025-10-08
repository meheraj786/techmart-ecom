import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Products from "./pages/ProductsPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import WishList from "./pages/WishList.jsx";
import AboutPage from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
import MyAccount from "./pages/MyAccountPage.jsx";
import MyDashboard from "./pages/MyDashboard.jsx";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },

      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
      },
      {
        path: "/dashboard",
        element: <MyDashboard />,
        // element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
