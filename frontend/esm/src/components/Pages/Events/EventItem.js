import React from "react";
import Button from "../../UI/Button";

const EventItem = () => {
  return (
    <React.Fragment>
      {/* mx-auto max-w-md w-full sm:w-1/2 lg:w-1/3 py-6 px-3 cursor-pointer transform duration-500 hover:-translate-y-1 */}
      <div className="m-2 p-3 mb-2 w-80 h-100 mx-autocursor-pointer transform duration-500 hover:-translate-y-1 flex flex-col">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="w-full bg-red-200">
            <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/26a13d14dd8849a6d7ad2655cd9c270e91190387432e6ee139096da7bec65cd4._RI_V_TTW_.png"></img>
          </div>
          <div>
            {/* bottom content */}
            <div className="p-2 text-left m-3 ">
              <p className="text-xl font-bold">EVENT NAME</p>
              <p className="text-md">Description about the event Lorem</p>
              <p className="text-md">Capacity : 100</p>
              <p className="text-xl">Price : $12</p>
            </div>
            <div className="text-right m-4">
              <p className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg">
                Click to Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventItem;
