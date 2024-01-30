import { useState } from "react";
import Body from "./pages/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addingtask from "./component/Addingtask";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import Task from "./pages/Task";

function App() {
  axios.defaults.baseURL = "http://localhost:5643/api/v1";
  axios.defaults.withCredentials = true;
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Task />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
