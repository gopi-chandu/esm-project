import React, { useRef, useState } from "react";
import TextInputUI from "./TextInputUI";

const ProfileForm = (props) => {
  let club = props?.user?.club?.title;
  console.log(club);
  const nameRef = useRef();
  const [edit, setEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit === true) {
      // post the request
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
      <button className={editClass} onClick={editHandler}>
        Edit
      </button>
      <TextInputUI
        label="Name"
        sendRef={nameRef}
        edit={edit}
        name={props.user.name}
      ></TextInputUI>
      <TextInputUI
        label="Email"
        edit={false}
        name={props.user.email}
      ></TextInputUI>
      <TextInputUI
        label="Role"
        edit={false}
        name={props.user.role}
      ></TextInputUI>
      {club && (
        <TextInputUI label="Club" edit={false} name={club}></TextInputUI>
      )}

      <button className={btnClass} type="submit">
        Update
      </button>

    </form>
  );
};

export default ProfileForm;

const btnClass =
  "mt-2 w-1/2 p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
const editClass =
  " ml-40 w-1/6 p-2 mb-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-sml bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
{
  /* <div className="flex flex-row w-full gap-x-2 text-lg">
        <div className="p-1 bg-blue-400 rounded-lg ">Name</div>
        <input className="focus:outline-none rounded-lg " ref={nameRef}></input>
      </div> */
}
