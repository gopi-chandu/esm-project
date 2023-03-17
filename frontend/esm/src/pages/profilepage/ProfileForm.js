import React, { useContext, useRef, useState } from "react";
import TextInputUI from "./TextInputUI";
import TextField from "@mui/material/TextField";
import axios from "axios";
import configData from "../../config.json";
import AuthContext from "../../store/auth-context";

const ProfileForm = (props) => {
  let club = props?.user?.club?.title;
  // console.log(club);
  const nameRef = useRef();
  const photoRef = useRef();
  const [edit, setEdit] = useState(false);
  const [photo, setPhoto] = useState("");

  const [file, setFile] = useState("");
  
  const ctx = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit === true) {
      // post the request
      if (!(photo === "")) {
        console.log("post image");

        console.log(file);
        let formData = new FormData();
        formData.append("file", file);

        axios
          .post(`${configData.SERVER_URL}/api/v1/auth/photo`, formData, {
            headers: {
              "x-device-id": "stuff",
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + ctx.token,
            },
          })
          .then((data) => {
            console.log("Successfully posted ... ", data);
            window.location.reload(false);
          })
          .catch((err) => console.log(err.response.data));
      }
      // post changed name
      if (!(nameRef.current.value === props.user.name)) {
        console.log("update username put");
        let data = {
          name: nameRef.current.value,
        };
        axios
          .put(
            `${configData.SERVER_URL}/api/v1/users/${props.user._id}`,
            data,
            {
              headers: {
                "Content-Type": "'multipart/form-data'",
              },
            }
          )
          .then((data) => {
            console.log("Successfully posted ... ");
          })
          .catch((err) => console.log(err));
      }

      //set image , update fields
    }
    // console.log(nameRef.current.value);
    setEdit(false);
  };
  const editHandler = (event) => {
    event.preventDefault();
    setEdit(!edit);
    // console.log(edit);
  };

  const handleUploadInput = (e) => {
    setPhoto(e.target.value);
    setFile(e.target.files[0]);
    console.log(e.target.files);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className={editClass} onClick={editHandler}>
        Edit
      </button>
      <div hidden={!edit} className="">
        <TextField
          size="small"
          sx={{
            width: 200,
            scale: 50,
          }}
          value={photo}
          label="upload profile picture"
          InputLabelProps={{
            height: 20,
          }}
          // sx={{ m: 1, width: "25ch" }}
          InputProps={{
            fullWidth: true,
            startAdornment: (
              <input
                ref={photoRef}
                className="scale-100 "
                type="file"
                // hidden
                onChange={handleUploadInput}
                name="[name]"
              />
            ),
          }}
        />
      </div>

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
