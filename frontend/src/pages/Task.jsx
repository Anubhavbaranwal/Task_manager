import React from "react";

const Task = () => {
  const dataArray = [
    {
      title: "Product 1",
      description:
        "This is the description for Product 1. It has some key features and benefits that make it unique and useful.",
    },
    {
      title: "Service A",
      description:
        "Service A provides a range of solutions to meet your needs. From consultations to implementation, we've got you covered.",
    },
    {
      title: "Event XYZ",
      description:
        "Join us for Event XYZ! It's a fantastic opportunity to connect with industry experts, network with peers, and gain valuable insights.",
    },
  ];
  return (
    <div>
      <h1 className="text-black text-4xl underline m-3 flex justify-center">
        Task
      </h1>
      <div className="w-1/3 border rounded-xl border-black p-2">
        <h3>{dataArray[0].title}</h3>
        <p>{dataArray[0].description}</p>
        <div className=" gap-x-4">
          <button className="m-2 bg-green-500 px-2 py-1 rounded-lg">
            edit
          </button>
          <button className="m-2 px-2 py-1 rounded-lg bg-red-500">
            delete
          </button>
        </div>
      </div>
      {/* {
        dataArray && dataArray.map((each)=>{
           <div>
             <h3></h3>
           </div>
        })
       } */}
    </div>
  );
};

export default Task;
