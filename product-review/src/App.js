import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import React from "react";
import Adminlogin from "./pages/Admin/Adminlogin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddReview from "./pages/AddReview";

const routerPaths = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/details", element: <Details /> },
  { path: "/Adminlogin", element: <Adminlogin /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/review", element: <AddReview /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routerPaths} />
    </div>
  );
}

export default App;
