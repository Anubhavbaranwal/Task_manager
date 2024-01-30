import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [logged, setLogged] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  const handlesubmit = async () => {
    await axios
      .post("/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response);
        setData({
          username: "",
          email: "",
          password: "",
        });
        alert("registered successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-4/5 mx-4 md:w-1/3 my-12 border items-center rounded-xl p-5 ">
      <h1 className=" text-5xl font-semibold text-center text-slate-400">
        Register
      </h1>
      <div className="p-4 mx-5 items-center">
        <label htmlFor="username" className=" text-white font-medium pb-4 pl-1">
          Username
        </label>
        <br />
        <input
          value={data.username}
          onChange={handleInput}
          type="text"
          id="username"
          name="username"
          className="px-2 rounded-lg w-full h-9"
        />
      </div>
      <div className="p-4 mx-5 items-center">
        <label htmlFor="email" className=" text-white font-medium pb-6 pl-1">
          Email
        </label>
        <br />
        <input
          onChange={handleInput}
          type="text"
          id="email"
          value={data.email}
          name="email"
          className="px-2 rounded-lg w-full h-9"
        />
      </div>
      <div className="p-4 mx-5 items-center">
        <label htmlFor="password" className=" text-white font-medium pb-7 pl-1">
          password
        </label>
        <br />
        <input
          onChange={handleInput}
          value={data.password}
          type="text"
          id="password"
          name="password"
          className="rounded-lg w-full h-9"
        />
      </div>
      <button
        className="p-2 mx-11 my-5  w-4/5 rounded-3xl  bg-zinc-600"
        onClick={handlesubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Register;
