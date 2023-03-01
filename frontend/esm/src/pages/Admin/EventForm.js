import React, { useRef, useState } from "react";
import TextInputUI from "../profilepage/TextInputUI";
import TextAreaUI from "../profilepage/TextAreaUI";
import axios from "axios";

//Configs
import configData from "../../config.json";

const EventForm = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const [edit, setEdit] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      title: nameRef.current.value,
      description: descriptionRef.current.value,
    };
    if (edit === true) {
      // post the request
      axios
        .post(`${configData.SERVER_URL}/api/v1/clubs/`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          console.log("Successfully posted ... ");
        })
        .catch((err) => console.log(err));
    }
    console.log(nameRef.current.value);
    setEdit(false);
  };
  const editHandler = (event) => {
    event.preventDefault();
    setEdit(!edit);
    console.log(edit);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <button className={editClass} onClick={editHandler}>
        Edit
      </button> */}
      <p className="text-3xl m-2 mb-3">Create a club</p>
      <TextInputUI
        label="Club Name"
        sendRef={nameRef}
        edit={edit}
        name=""
      ></TextInputUI>
      <TextAreaUI
        label="description"
        sendRef={descriptionRef}
        edit={edit}
        name=""
      ></TextAreaUI>
      <button className={btnClass} type="submit">
        Create
      </button>
    </form>
  );
};

export default EventForm;

const btnClass =
  "mt-2 w-1/2 p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
const editClass =
  " ml-40 w-1/6 p-2 mb-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-sml bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
