import { useState } from "react";
import Body from "./pages/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addingtask from "./component/Addingtask";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Addingtask />,
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
