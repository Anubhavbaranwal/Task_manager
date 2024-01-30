import axios from "axios";
import React, { useEffect, useState } from "react";
import Addingtask from "./Addingtask";

const Card = () => {
  const [dataArray, setDataArray] = useState([]);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    await axios
      .get("/")
      .then((response) => {
        setDataArray(response.data?.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (dataArray.length == 0) {
    return <h1> Loading.....</h1>;
  }
  return (
    <div className={add ? "" : " backdrop-blur-md"}>
      <center className="fixed w-full -ml-7">
        {!add ? "" : <Addingtask />}
      </center>
      <div className="flex flex-wrap justify-center sm:justify-start w-full mt-4 ">
        {dataArray &&
          dataArray?.map((data) => {
            return (
              <div className="  border rounded-xl my-2 border-black p-2 mx-4 w-56 h-64 flex flex-col justify-between">
                <div>
                  <h3 className="my-2 px-2 font-bold text-2xl">{data.title}</h3>
                  <p className="px-2 text-lg">{data.description}</p>
                </div>
                <div className=" gap-x-4 ">
                  <button className=" m-2 bg-green-500 px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="m-2 px-3 py-1 rounded-lg bg-red-500">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        <div
          className=" border rounded-xl text-center border-black p-2 mx-4 w-56 h-64 flex flex-col justify-center"
          onClick={() => setAdd(!add)}
        >
          Add Task
        </div>
      </div>
    </div>
  );
};

export default Card;
