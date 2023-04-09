import { Paper } from "@mui/material";
import React from "react";

//Configs
import configData from "../../config.json";

const About = () => {
  let e = "";
  let url1=`${configData.SERVER_URL}/uploads/dev/varma2.jpeg`;
  let url2=`${configData.SERVER_URL}/uploads/dev/gopi.jpg`;
  return (
    <div className="w-full h-full bg-blue-300">
        <div className="bg-blue-500 h-20">
            <p className="text-3xl pt-3">About us</p>
        </div>
      <div className="bg-blue-300 flex flex-col md:flex-row px-auto mx-auto justify-between md:px-64 px-20">
        <div className="m-2 p-3 mb-2 w-80 md:w-80 h-100 mx-autocursor-pointer transform duration-500 hover:-translate-y-1 flex flex-col">
          {/* photo */}
          <div className="bg-white shadow-xl rounded-t-lg overflow-hidden flex flex-col h-fit">
            <div className="bg-blue-200">
              <img
                className="object-cover "
                src={url1}
              ></img>
            </div>
          </div>
          {/* Bottom */}
          <div className="bg-white rounded-b-lg">
            {/* bottom content */}
            <div className="p-2 text-left m-3 ">
              <p className="text-xl font-bold">
                {"Indukuri Sai Karthik Varma"}
              </p>
              <p className="text-md mt-1">{"CSE"}</p>
              <p className="text-md mt-1">{"Roll No : 420143"}</p>
              <p className="text-md mt-1">
                {"email : 420143@student.nitandhra.ac.in"}
              </p>
            </div>
          </div>
        </div>

        {/* ME */}
        <div className="m-2 p-3 mb-2 w-80 md:w-80 h-100 mx-autocursor-pointer transform duration-500 hover:-translate-y-1 flex flex-col">
          {/* photo */}
          <div className="bg-white shadow-xl rounded-t-lg overflow-hidden flex flex-col h-fit">
            <div className="bg-blue-200">
              <img
                className="object-cover "
                src={url2}
              ></img>
            </div>
          </div>
          {/* Bottom */}
          <div className="bg-white rounded-b-lg">
            {/* bottom content */}
            <div className="p-2 text-left m-3 ">
              <p className="text-xl font-bold">
                {"Sirisetti Gopi Chandu"}
              </p>
              <p className="text-md mt-1">{"CSE"}</p>
              <p className="text-md mt-1">{"Roll No : 420237"}</p>
              <p className="text-md mt-1">
                {"email : 420237@student.nitandhra.ac.in"}
              </p>
            </div>
            <div className="text-right m-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
