import React, { useRef, useState } from "react";
import TextInputUI from "../profilepage/TextInputUI";
import TextAreaUI from "../profilepage/TextAreaUI";

const ClubForm = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  //   photo too
  const [edit, setEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit === true) {
      // post the request
    }
    console.log(nameRef.current.value);
    console.log(descriptionRef.current.value);
    setEdit(false);
  };
  const editHandler = (event) => {
    event.preventDefault();
    setEdit(!edit);
    console.log(edit);
  };
  return (
    <div className="h-fit w-96 bg-blue-300 p-2 mx-auto rounded-lg shadow shadow-xs">
      <form onSubmit={handleSubmit}>
        <div className="bg-blue-400 text-2xl mb-5 w-fit h-fit p-2 m-3 mx-auto rounded">
          <p>Add a Club</p>
        </div>
        <button className={editClass} onClick={editHandler}>
          Edit
        </button>
        <TextInputUI
          label="Name"
          sendRef={nameRef}
          edit={edit}
          name=""
        ></TextInputUI>
        <TextAreaUI
          label="Description"
          sendRef={descriptionRef}
          edit={edit}
          name=""
        ></TextAreaUI>

        <button className={btnClass} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default ClubForm;

const btnClass =
  "mt-2 w-1/2 p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
const editClass =
  " ml-40 w-1/6 p-2 mb-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-sml bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg ml-60";
