import axios from "axios";
import AuthContext from "../../store/auth-context";
import React, { useContext, useEffect, useRef, useState } from "react";

import configData from "../../config.json";

import DateTimePicker from "react-datetime-picker";
import EventAddForm from "./EventsAdminPages/EventAddForm";
import EventEditForm from "./EventsAdminPages/EventEditForm";

const EventPageAdmin = () => {
  // add club
  // edit club from list
  // delete club from list
  const ctx = useContext(AuthContext);

  const [curEvent, setCurEvent] = useState("");
  const [clubData, setClubData] = useState("");
  const [eventData, setEventData] = useState("");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [fee, setFee] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [photo, setPhoto] = useState("");

  const [oye, setOye] = useState("");
  // Fetch the list
  useEffect(() => {
    axios
      .get(`${configData.SERVER_URL}/api/v1/clubs/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        console.log(d);
        // ctx.setOffline(false);
        setClubData(d);
      })
      .catch((err) => {
        ctx.setOffline(true);
        console.log("No internet connection", err);
      });
  },[]);

  useEffect(() => {
    axios
      .get(`${configData.SERVER_URL}/api/v1/events/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        console.log(d);
        // ctx.setOffline(false);
        setEventData(d);
      })
      .catch((err) => {
        ctx.setOffline(true);
        console.log("No internet connection", err);
      });
  },[]);
  //   DELETE EVENT
  const deleteHandler = (element) => {
    // delete the club

    console.log("Element : ", element._id);
    axios
      .delete(`${configData.SERVER_URL}/api/v1/events/${element._id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data;
        console.log(d);
        setOye(!oye);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   photo too
  const [edit, setEdit] = useState(true);
  const [file, setFile] = useState("");

  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const contentEditHandler = (ele) => {
    console.log(ele);
    setId(ele._id);
    setStartDate(ele.startDate);
    setEndDate(ele.endDate);
    setDescription(ele.description);
    setName(ele.title);
    setCapacity(ele.capacity);
    setFee(ele.fee);
    setFee(ele.photo);
    //_id:// send id in url
    const event = {
      title: name,
      description: description,
      capacity: capacity,
      entryFee: fee,
      startDate: startDate,
      endDate: endDate,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("POST");
    if (edit === true) {
      // post the request
    }
    const event = {
      title: name,
      description: description,
      capacity: capacity,
      entryFee: fee,
      startDate: startDate,
      endDate: endDate,
    };

    axios
      .put(`${configData.SERVER_URL}/api/v1/events/${id}`, event, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        if (d) {
          console.log(d);
        } else {
          alert("not succesfull");
        }
        setOye(!oye);
      })
      .catch((err) => {
        ctx.setOffline(true);
        console.log("No internet connection", err);
      });
    // setEdit(false);
  };

  // for photo
  const handleUploadInput = (e) => {
    setFile(e.target.files[0]);
    let formData = new FormData();
    formData.append("file", file);
    console.log(`${configData.SERVER_URL}/api/v1/events/${id}/photo`);
    axios
      .put(`${configData.SERVER_URL}/api/v1/events/${id}/photo`, formData, {
        headers: {
          "x-device-id": "stuff",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        console.log("Successfully posted ... ", data);
        // window.location.reload(false);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="bg-blue-200">
      <EventAddForm clubs={clubData}></EventAddForm>
      <EventEditForm key={0} events={eventData} clubs={clubData}></EventEditForm>
    </div>
  );
};

const btnClass =
  "mt-2 w-1/2 p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
const editClass =
  " ml-40 w-1/6 p-2 mb-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-sml bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg ml-60";
export default EventPageAdmin;
