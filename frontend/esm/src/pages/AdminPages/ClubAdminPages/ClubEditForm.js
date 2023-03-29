import React, { useContext, useState } from "react";
import moment from "moment/moment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { flash } from "react-universal-flash";
import AuthContext from "../../../store/auth-context";
import configData from "../../../config.json";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";

const ClubEditForm = (props) => {
  const [value, setValue] = useState(props.events[0]);
  let n = props.events.length;
  for (let i = 0; i < n; i++) {
    props.events[i].label = props.events[i].title;
  }
  const ctx = useContext(AuthContext);

  let f = {
    _id: "",
    title: "",
    description: "",
  };
  if (value) {
    f = value;
    console.log("f value: ", f);
  }
  const [club, setClub] = useState({
    _id: f._id,
    title: f.title,
    description: f.description,
  });
  const handleSubmit = () => {
    if (club.title === "") {
      flash(1000, "error", "enter title");
      return;
    }
    if (club.description === "") {
      flash(1000, "error", "enter description");
      return;
    }
    console.log(club);

    // POST REQUEST
    axios
      .put(`${configData.SERVER_URL}/api/v1/clubs/${club._id}`, club, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        if (d) {
          flash(1000, "success", "Successfully Modified");
          console.log("data posted succesfully");
          console.log(d);
        }
      })
      .catch((err) => {
        // ctx.setOffline(true);
        console.log("No internet connection", err);
      });
  };
  const handleReset = () => {};
  const onTitleChange = (e) => setClub({ ...club, title: e.target.value });
  const onDescriptionChange = (e) =>
    setClub({ ...club, description: e.target.value });
  return (
    <div>
      <Paper className="mt-10 w-5/6 md:w-1/2 mx-auto ">
        <div className="scale-75 md:scale-100">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={props.events}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Pick an event to edit" />
            )}
            // onChange={props.selected_event}
            onChange={(event, newValue) => {
              if (newValue === null) {
                handleReset();
                return;
              }
              setValue(newValue);
              setClub(newValue);
              console.log("new value from drop dwn", newValue);
              // props.selected_event(newValue);
            }}
          />
        </div>
      </Paper>
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
    </div>
  );
};

export default ClubEditForm;
