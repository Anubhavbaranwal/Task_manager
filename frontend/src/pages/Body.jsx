import React from "react";
import Register from "./Register";
import Login from "./Login";
import Task from "./Task";
import Header from "../component/Header";
import Addingtask from "../component/Addingtask";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className=" min-h-screen ">
      {/* <Register /> */}
      {/* <Login /> */}
      <Header />
      <div className="justify-center flex w-full">
        {/* <Task /> */}
        {/* <Addingtask /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
