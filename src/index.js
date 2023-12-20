import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./pages/errorPage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/ForgotPassword";
import UserLayout from "./components/User/UserLayout";
import DashboardDefault from "./components/DashboardDefault";
import AdminLayout from "./components/Admin/AdminLayout";
import Chart from "./components/Chart";
import Signin from "./pages/Signin";
import Loadable from "./components/Loadable";

const LoadLoginPage = Loadable(lazy(() => import("./pages/Login")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoadLoginPage />, // <Login />
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "",
            element: <DashboardDefault />,
          },
        ],
      },
      {
        path: "/user",
        element: <UserLayout />,
        children: [
          {
            path: "",
            element: <DashboardDefault />,
          },
        ],
      },
    ],
  },
  {
    path: "/test",
    element: <App />,
  },
  {
    path: "/realtimeChart",
    element: <Chart />,
  },
]);

function Root() {
  return (
    // <ScrollTop>
    <>
      <Outlet />
    </>
    // </ScrollTop>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
