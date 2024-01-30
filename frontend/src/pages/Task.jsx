import React from "react";
import Card from "../component/Card";

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
      <div className="w-full flex justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Task;
