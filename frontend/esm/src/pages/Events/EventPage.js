import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// temporary import
import { data } from "../../assets/seed/data";
import AuthContext from "../../store/auth-context";

//Configs
import configData from "../../config.json";
const EventPage = () => {
  let params = useParams();
  // const [isLoading, setIsLoading] = useState(true);
  // call the database from here , wait for it to return
  // display result

  // get the user using api request
  const ctx = useContext(AuthContext);
  let e;
  const [eventData, setEventData] = useState("");
  useEffect(() => {
    //make api call , use the params to get the id

    console.log("params :", params);
    let userDetails;
    axios
      .get(`${configData.SERVER_URL}/api/v1/events/${params.eventId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        ctx.setOffline(false);
        setEventData(d);
      })
      .catch((err) => {
        ctx.setOffline(true);
        console.log("No internet connection", err);
        let data = localStorage.getItem("events");
        let arr = JSON.parse(data);
        console.log("Arrr::::::",arr)
        let f;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i]._id === params.eventId) {
            console.log("Array number found");
            f = arr[i];
          }
        }
        console.log("F data ", f);
        setEventData(f);
      });
    // remove time out just before deploying
    //   setTimeout(() => {
    //     // setIsLoading(false);

    //     console.log("data : ", userData);
    //   }, 500);
    // })
  }, []);

  // let e = data.filter((e) => e.id == params.eventId);
  // e = e[0];
  // console.log(e);
  let url =
    "http://localhost:5000/uploads/events/no-event.jpg";

  return (
    <div className="w-full h-full ">
      <p className="text-3xl p-3 underline text-white">{eventData?.title}</p>

      <div className="h-screen flex flex-col items-center md:flex-row justify-center gap-x-10 bg-blue-400 md:items-start items-start p-4 justify-center">
        {/* left */}
        <div className="scale-110">
          <img
            className="object-cover h-60 mr-0 m-3 md:mt-10  md:w-100 w-80  shadow-xl rounded-lg overflow-hidden transform duration-500 hover:-translate-y-1 "
            src={url}
          ></img>
        </div>

        <div className="h-fit w-fit mx-20 md:mx-0 md:h-80 bg-blue-300 rounded-lg mt-4 p-3">
          {/* right */}

          <div className="flex flex-row gap-2 ">
            <p className="bg-white font-semibold p-1 m-1 ml-2 mb-0 rounded text-xl "></p>
            <p className="mt-1 text-2xl font-semibold">{eventData?.title}</p>
          </div>
          <div className="flex flex-col gap-2 justify-between ">
            <p className="font-semibold bg-white w-fit  p-1 m-2 mt-4 rounded  mb-0 ">
              Description{" "}
            </p>
            <p className="ml-2 text-left">{eventData?.description}</p>
          </div>
          <div className="flex flex-row gap-2  mb-0 ">
            <p className="bg-white w-fit  p-1 m-1 rounded font-semibold">
              Capacity
            </p>
            <p className="mt-1">{eventData?.capacity}</p>
          </div>
          <div className="flex flex-row gap-2  mb-0 ">
            <p className="bg-white w-fit p-1 m-1 rounded font-semibold">
              Entry fee
            </p>
            <p className="mt-1">
              {"$ "}
              {eventData?.entryFee}
            </p>
          </div>
          <div className="w-40 ml-auto mr-0 text-left m-1 transform duration-500 hover:bg-green-400 hover:shadow-xl p-3 pl-4 bg-green-300 rounded rounded-lg shadow shadow-md">
            <p className="font-semibold">Register Now !!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
