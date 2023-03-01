import React from "react";
import { NavLink } from "react-router-dom";

const OfflinePage = () => {
  return (
    <div className={bgClass}>
      <div className="">You are offline , some features may not work.</div>

      {/* <NavLink to="/">
        <div className="bg-yellow-300 h-10 w-20">
          
        </div>
      </NavLink> */}
    </div>
  );
};

export default OfflinePage;

const bgClass =
  "h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col md:flex-row md:justify-center items-center shadow shadow-lg flex-col items-center opacity-100 ";
