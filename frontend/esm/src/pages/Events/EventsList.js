import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import axios from "axios";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
// Pages
import EventItem from "../Events/EventItem";
import AuthContext from "../../store/auth-context";

// Data Seeder
// import { data } from "../../../assets/seed/data";

//Configs
import configData from "../../config.json";

const EventsList = () => {
  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  // let content=0;
  let content = "";
  if (data) {
    console.log(data);
    content = data.map((element, index) => {
      let url = "/events/" + element._id;
      return (
        <li key={index} className="list-none">
          <NavLink to={url}>
            <EventItem data={element} forKey={index}></EventItem>
          </NavLink>
        </li>
      );
    });
  }

  // Runs only when the component loads
  useEffect(() => {
    axios.defaults.baseURL = "https://api.example.com";
    axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
    axios
      .get(`${configData.SERVER_URL}/api/v1/events/`)
      .then((data) => {
        ctx.setOffline(false);
        console.log(data.data.data);
        setData(data.data.data);
        setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem("events", JSON.stringify(data.data.data));
          // console.log("data : ", data);
        }, 500);
      })
      .catch((err) => {
        ctx.setOffline(true);
        const data = localStorage.getItem("events");
        console.log("data: ", JSON.parse(data));
        setData(JSON.parse(data));
      });
    // let serverUrl = "http://localhost:5000/api/v1/events/";
    // axios(serverUrl, {
    //   method: "GET",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     mode: "no-cors",
    //   },
    // })
    var networkDataReceived = false;
    //////////////////////////
    /// CACHE TESTING
    // if ("caches" in window) {
    //   caches
    //     .match("/")
    //     .then(function (response) {
    //       if (response) {
    //         return response.json();
    //       }
    //     })
    //     .then(function (data) {
    //       setIsLoading(false);
    //       console.log("From cache", data);
    //       if (!networkDataReceived) {
    //         console.log("!!!");
    //       }
    //     })
    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // }
  }, []);

  return (
    <React.Fragment>
      <div className=" md:text-left text-center   h-30 p-2 text-3xl bg-blue-500 shadow shadow-lg">
        <div className=" flex flex-col md:flex-row md:justify-between justify-center items-center ">
          <p className="w-40 mx-auto bg-white p-2 rounded rounded-lg mb-3 ">
            Events List
          </p>
          <form className="scale-[90px]">
            <div className="md:mr-20 md:mt-4">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>{" "}
              <div className=" relative w-80">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-100">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-0 outline-transparent "
                  placeholder="Events ..."
                  required
                ></input>
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        {}
      </div>
      <div className="mt-10 flex flex-row flex-wrap justify-center">
        {isLoading && <LoadingAnimation></LoadingAnimation>}
        {!isLoading && content}
        {ctx.isOffline && (
          <div className="w-full h-20 bg-red-300">You are offline </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default EventsList;
