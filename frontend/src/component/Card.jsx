import axios from "axios";
import React, { useEffect, useState } from "react";
import Addingtask from "./Addingtask";
import { useDispatch, useSelector } from "react-redux";
import { addfunc } from "../Store/dataSlice";
import Updatingtask from "./Updatingtask";
import { Link, useNavigate } from "react-router-dom";

const Card = () => {
  const [dataArray, setDataArray] = useState([]);
  const dispatch = useDispatch();
  const add = useSelector((store) => store?.task?.add);
  const navigate = useNavigate();
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
  const handleadd = () => {
    return dispatch(addfunc());
  };
  const deleteit = (id) => {
    try {
      const response = axios.delete(`/delete/${id}`);
      data();
    } catch (error) {
      console.error(error);
      // Handle error (show an alert, log, etc.)
    }
  };
  return (
    <div className={add ? "" : " backdrop-blur-md"}>
      
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
                  <Link to={`/update/${data?._id}`}>
                    <button className=" m-2 bg-green-500 px-3 py-1 rounded-lg">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="m-2 px-3 py-1 rounded-lg bg-red-500"
                    onClick={() => deleteit(data._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        <div
          className=" border rounded-xl text-center border-black p-2 mx-4 w-56 h-64 flex flex-col justify-center"
          onClick={handleadd}
        >
          Add Task
        </div>
      </div>
    </div>
  );
};

export default Card;
