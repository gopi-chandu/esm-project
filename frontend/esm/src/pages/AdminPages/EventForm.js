import React, { useRef, useState } from "react";
import TextInputUI from "../profilepage/TextInputUI";
import TextAreaUI from "../profilepage/TextAreaUI";
import DateTimePicker from "react-datetime-picker";
import NumberInput from "../profilepage/NumberInput";
// Add photo
const EventForm = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  //   photo too
  const [edit, setEdit] = useState(false);

  const [value, onChange] = useState(new Date());

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
    <div className="h-fit w-108 bg-blue-300 p-2 mx-auto rounded-lg shadow shadow-xs">
      <form onSubmit={handleSubmit}>
        <div className="bg-blue-400 text-2xl mb-5 w-fit h-fit p-2 m-3 mx-auto rounded">
          <p>Add an Event</p>
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
        <NumberInput
          label="Capacity"
          sendRef={descriptionRef}
          edit={edit}
          name=""
        ></NumberInput>
        <NumberInput
          label="Fee"
          sendRef={descriptionRef}
          edit={edit}
          name=""
        ></NumberInput>
        {/* start date , end date,capacity, fee, */}
        <div className="flex flex-row m-2 gap-x-5 justify-between">
          <div className="p-1 bg-blue-400 rounded-lg h-10 ">Start Date</div>
          <div className="bg-blue-300 w-fit rounded p-3">
            <DateTimePicker onChange={onChange} value={value} />
          </div>
        </div>
        <div className="flex flex-row m-2 gap-x-5 justify-between">
          <div className="p-1 bg-blue-400 rounded-lg h-10 ">End Date</div>
          <div className="bg-blue-300 w-fit rounded p-3">
            <DateTimePicker onChange={onChange} value={value} />
          </div>
        </div>

        <button className={btnClass} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default EventForm;

const btnClass =
  "mt-2 w-1/2 p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
const editClass =
  " ml-40 w-1/6 p-2 mb-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-sml bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg ml-60";
