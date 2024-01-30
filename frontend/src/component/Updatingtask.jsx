import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Formtask from "./Formtask";

const Updatingtask = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const taskid = id;
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`/update/${taskid}`, data, {
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
      title={"Update"}
      data={data}
      setData={setData}
      handleSubmit={handleSubmit}
    />
  );
};

export default Updatingtask;
