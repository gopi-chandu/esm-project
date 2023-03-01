import React, { useRef, useState } from "react";
import TextInputUI from "../profilepage/TextInputUI";
import TextAreaUI from "../profilepage/TextAreaUI";
import DateTimePicker from "react-datetime-picker";
import NumberInput from "../profilepage/NumberInput";
// Add photo

const ArticleForm = (props) => {
  const titleRef = useRef();
  const contentRef = useRef();
  //   photo too
  const [edit, setEdit] = useState(false);

  const [value, onChange] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit === true) {
      // post the request
    }
    console.log(titleRef.current.value);
    console.log(contentRef.current.value);
    setEdit(false);
  };
  const editHandler = (event) => {
    event.preventDefault();
    setEdit(!edit);
    console.log(edit);
  };
  // for content box
  const [state, setState] = useState(props.name);
  return (
    <div className="h-fit w-full bg-blue-300 p-2 mx-auto rounded-lg shadow shadow-xs">
      <form onSubmit={handleSubmit}>
        <div className="bg-blue-400 text-2xl mb-5 w-fit h-fit p-2 m-3 mx-auto rounded">
          <p>Add Article</p>
        </div>
        <button className={editClass} onClick={editHandler}>
          Edit
        </button>
        <TextInputUI
          label="Title of the post"
          sendRef={titleRef}
          edit={edit}
          name=""
        ></TextInputUI>
        <div className="m-1 p-1 pr-2 mb-2 justify-between flex flex-row w-full gap-x-2 text-lg">
          <div className="p-1 bg-blue-400 rounded-lg h-10 ">{props.label}</div>
          <textarea
            className="m-0 w-full  focus:outline-none rounded-lg h-40"
            disabled={props.edit ? false : true}
            ref={props.sendRef}
            value={state}
            onChange={(event) => {
              setState(event.target.value);
            }}
          ></textarea>
        </div>
        <button className={btnClass} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;

const btnClass =
  "mt-2 w-1/2 p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
const editClass =
  " ml-40 w-1/6 p-2 mb-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-sml bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg ml-60";
