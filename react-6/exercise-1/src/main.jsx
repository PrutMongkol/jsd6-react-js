import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";

import App from "./App";
import Login from "./Login";
import Signup from "./Signup";
import Error from "./Error";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  // insert your path here
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
