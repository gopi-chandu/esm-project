import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

const EventItem = (props) => {
  let e = props.data;
  const ctx=useContext(AuthContext);
  // console.log("e : ", e);
  return (
    <React.Fragment key={props.forKey}>
      {/* mx-auto max-w-md w-full sm:w-1/2 lg:w-1/3 py-6 px-3 cursor-pointer transform duration-500 hover:-translate-y-1 */}
      <div className="m-2 p-3 mb-2 w-80 md:w-80 h-100 mx-autocursor-pointer transform duration-500 hover:-translate-y-1 flex flex-col">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
          <div className="w-full bg-blue-200">
            {/* <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/26a13d14dd8849a6d7ad2655cd9c270e91190387432e6ee139096da7bec65cd4._RI_V_TTW_.png"></img> */}
            <img src="http://localhost:5000/uploads/events/no-event.jpg" ></img>
          </div>
          <div>
            {/* bottom content */}
            <div className="p-2 text-left m-3 ">
              <p className="text-xl font-bold">{e?.title}</p>
              <div className="h-40">
                <p className="text-md mt-1 ">{e?.description}</p>
              </div>
              <p className="text-md mt-1">Capacity : {e?.capacity}</p>
              <p className="text-xl mt-1">Price : Rs {e?.entryFee}</p>
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
