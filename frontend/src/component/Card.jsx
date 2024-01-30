import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [dataArray, setDataArray] = useState([]);
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
    <div className="flex">
      {dataArray &&
        dataArray?.map((data) => {
          return (
            <div className="w-[150%] h-[150%] border rounded-xl border-black p-2 mx-4">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <div className=" gap-x-4">
                <button className="m-2 bg-green-500 px-2 py-1 rounded-lg">
                  edit
                </button>
                <button className="m-2 px-2 py-1 rounded-lg bg-red-500">
                  delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
