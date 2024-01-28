import React from "react";
import img from "../assets/icons8.png";

const Header = () => {
  return (
    <div className="flex justify-between p-3">
      <img src={img} alt="" />
      <div className="bg-black text-white align-middle flex justify-center px-2  py-0 rounded-xl">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
