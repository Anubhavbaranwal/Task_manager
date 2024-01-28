import React from "react";
import Register from "./Register";
import Login from "./Login";
import Task from "./Task";
import Header from "../component/Header";
import Addingtask from "../component/Addingtask";

const Body = () => {
  return (
    <div className=" min-h-screen ">
      {/* <Register /> */}
      {/* <Login /> */}
      <Header />
      <div className="justify-center flex ">
        {/* <Task /> */}
        <Addingtask />
      </div>
    </div>
  );
};

export default Body;
