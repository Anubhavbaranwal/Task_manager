import { useState } from "react";
import Body from "./pages/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addingtask from "./component/Addingtask";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import Task from "./pages/Task";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Updatingtask from "./component/Updatingtask";

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
        {
          path: "/update/:id",
          element: <Updatingtask />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={approuter} />
    </Provider>
  );
}

export default App;
