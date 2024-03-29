import axios from "axios";
import React, { useRef, useState } from "react";
import qs from "qs";
import Formtask from "./Formtask";
import { useNavigate } from "react-router-dom";

const Addingtask = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/add", data, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);
      setData({
        title: "",
        description: "",
      });
      navigate("/");
      alert("Data added successfully");
    } catch (error) {
      console.error(error);
      // Handle error (show an alert, log, etc.)
    }
  };
  const title = "Add Task";
  return (
    <Formtask
      title={title}
      data={data}
      setData={setData}
      handleSubmit={handleSubmit}
    />
  );
};

export default Addingtask;
