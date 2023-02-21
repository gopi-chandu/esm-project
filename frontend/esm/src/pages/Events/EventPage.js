import React from "react";
import { useParams } from "react-router-dom";

// temporary import
import { data } from "../../assets/seed/data";

const EventPage = () => {
  let params = useParams();

  // call the database from here , wait for it to return
  // display result
  //
  console.log(params);
  let e = data.filter((e) => e.id == params.eventId);
  e = e[0];
  console.log(e);
  let url =
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/26a13d14dd8849a6d7ad2655cd9c270e91190387432e6ee139096da7bec65cd4._RI_V_TTW_.png";
  return (
    <div className=" bg-blue-700 mx-auto w-full md:ml-10">
      <div className="flex flex-col md:flex-row m-5 items-start justify-center ">
        {/* left */}
        <div className="">
          <img
            className="h-60 mr-0 md:mt-3 m-3 md:w-100 w-80  shadow-xl rounded-lg overflow-hidden transform duration-500 hover:-translate-y-1 "
            src={url}
          ></img>
        </div>
        {/* right */}
        <div className="ml-3 md:m-3 bg-blue-700 rounded rounded-md shadow-xl md:w-1/2 w-80 md:h-full mt-4 md:mt-3 h-fit flex flex-col rounded rounded-lg space-y-3 text-left p-2 text-md bg-gradient-to-r from-blue-400 to-blue-200 p-3">
          <div className="flex flex-row gap-2 ">
            <p className="bg-white font-semibold p-1 m-1 ml-2 mb-0 rounded text-xl "></p>
            <p className="mt-1 text-2xl font-semibold">{e.name}</p>
          </div>
          <div className="flex flex-col gap-2 justify-between ">
            <p className="font-semibold bg-white w-fit  p-1 m-2 mt-4 rounded  mb-0 ">
              Description{" "}
            </p>
            <p className="ml-2">{e.description}</p>
          </div>
          <div className="flex flex-row gap-2  mb-0 ">
            <p className="bg-white w-fit  p-1 m-1 rounded font-semibold">
              Capacity
            </p>
            <p className="mt-1">{e.capacity}</p>
          </div>
          <div className="flex flex-row gap-2  mb-0 ">
            <p className="bg-white w-fit p-1 m-1 rounded font-semibold">
              Entry fee
            </p>
            <p className="mt-1">{e.price}</p>
          </div>
          <div className="ml-auto mr-0 text-right m-1 transform duration-500 hover:bg-green-400 hover:shadow-xl p-3 bg-green-300 rounded rounded-lg shadow shadow-md">
            <p className="font-semibold">Register Now !!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
