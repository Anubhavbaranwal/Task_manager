import React from "react";

const Formtask = ({ title, data, setData, handleSubmit }) => {
  const handlechange = (e) => {
    let name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <center className=" backdrop-blur-md ">
      <div className="w-1/3  bg-white bg-opacity-50">
        <form
          action=""
          className="shadow-2xl py-10 px-4 rounded-xl z-30"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl justify-center flex my-5">{title}</h1>
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
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
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
    </center>
  );
};

export default Formtask;
