import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Updatingtask = ({ id }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/update/+${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);
      navigate("/");
      alert("updated successfully");
    } catch (error) {
      console.error(error);
      // Handle error (show an alert, log, etc.)
    }
  };
  return (
    <Formtask
      title={Update}
      data={data}
      setData={setData}
      handleSubmit={handleSubmit}
    />
  );
};

export default Updatingtask;
