import React, { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { flash } from "react-universal-flash";
import AuthContext from "../../../store/auth-context";
import configData from '../../../config.json'
import axios from "axios";

const ClubAddForm = () => {
 const ctx = useContext(AuthContext);
  const [club, setClub] = useState({
    title: "",
    description: "",
  });

  const onTitleChange = (e) => setClub({ ...club, title: e.target.value });
  const onDescriptionChange = (e) =>
    setClub({ ...club, description: e.target.value });

  // Handle submi and reset
  const handleSubmit = () => {
    //Validate
    if (club.title === "") {
      flash(1000, "error", "enter title");
      return;
    }
    if (club.description === "") {
      flash(1000, "error", "enter description");
      return;
    }
    
    console.log(club);

    //POST REQUEST
    axios
      .post(`${configData.SERVER_URL}/api/v1/clubs/`, club, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        // props.changeOye();
        if (d) {
          flash(1000, "success", "Successfully Added");
            console.log("POSTED CLUB")
          console.log(d);
        }
        // ctx.setOffline(false);
      })
      .catch((err) => {
        // ctx.setOffline(true);
        // console.log("No internet connection", err);
      });
  };
  const handleReset = () => {
    setClub({
      title: "",
      description: "",
    });
  };
  return (
    <Paper className="mx-auto flex flex-col px-20 gap-y-4 w-5/6 md:w-1/2">
      <h2 className="text-3xl mb-3 pt-3 ">Add club</h2>
      <TextField
        // fullWidth
        variant="standard"
        onChange={onTitleChange}
        value={club.title}
        label={"Title"} //optional
      />
      <TextField
        variant="standard"
        onChange={onDescriptionChange}
        value={club.description}
        label={"Description"} //optional
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
}

export default ClubAddForm