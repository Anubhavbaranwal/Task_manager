import axios from "axios";
import React, { useState } from "react";
import img from "../assets/20945760.jpg";
import profile from "../assets/profile_4945750.png";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5643/api/v1/Login", data, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response);
        setData({
          email: "",
          password: "",
        });
        alert("Login Succefully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="flex m-4">
      <div className="w-1/2 items-center flex justify-center ">
        <img
          src={img}
          alt="login page image"
          className="flex justify-center  w-4/5"
        />
      </div>
      <div className=" w-1/2 flex flex-col justify-center ">
        <h1 className="text-[#7D97F4] justify-center flex text-5xl my-6 gap-x-1">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className=" items-center flex flex-col p-2 gap-y-4  "
        >
          <input
            type="text"
            placeholder="email"
            name="email"
            className="w-1/2 h-10 rounded-md p-2 bg-[#1a1a1a] my-4"
            value={data.email}
            onChange={handlechange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="w-1/2 h-10 text-white  rounded-md p-2 bg-[#1a1a1a] my-2"
            value={data.password}
            onChange={handlechange}
          />
          <button
            type="submit"
            className="my-4 rounded-xl bg-[#7D97F4] w-1/3 p-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
