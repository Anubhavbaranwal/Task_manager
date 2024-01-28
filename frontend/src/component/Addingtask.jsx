import axios from "axios";
import React, { useRef, useState } from "react";
import qs from "qs";

const Addingtask = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const handlechange = (e) => {
    let name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  // Import the 'qs' library for query string formatting

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = qs.stringify({
      title: data.title,
      description: data.description,
    });

    try {
      const response = await axios.post(
        "http://localhost:5643/api/v1/add",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response);
      setData({
        title: "",
        description: "",
      });
      alert("Data added successfully");
    } catch (error) {
      console.error(error);
      // Handle error (show an alert, log, etc.)
    }
  };

  return (
    <div className="w-1/3  backdrop-blur-md bg-white bg-opacity-50">
      <form
        action=""
        className="shadow-2xl py-10 px-4 rounded-xl z-30"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl justify-center flex my-5">Add Task</h1>
        <div className="my-3 flex flex-col ">
          <label htmlFor="title" className="text-2xl">
            {" "}
            Title
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handlechange}
            placeholder="Title for task"
            className="w-full h-[40px] rounded-md border border-black px-2 my-3"
          />
        </div>
        <div className="my-3 flex flex-col ">
          <label htmlFor="decription" className="text-2xl">
            {" "}
            Description
          </label>
          <textarea
            name="decription"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="border rounded-lg border-black px-2 my-3 py-2"
            id="description"
            cols="25"
            rows="10"
            placeholder="Description for the task"
          ></textarea>
        </div>
        <button
          type="Submit "
          className="flex justify-center w-full border rounded-lg border-black hover:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addingtask;
