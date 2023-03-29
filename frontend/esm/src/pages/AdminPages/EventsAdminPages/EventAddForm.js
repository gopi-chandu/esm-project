import React, { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { flash } from "react-universal-flash";
import AuthContext from "../../../store/auth-context";
import configData from '../../../config.json'
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";

const EventAddForm = (props) => {
  console.log(props.clubs)
  let n = props.clubs.length;
  for (let i = 0; i < n; i++) {
    props.clubs[i].label = props.clubs[i].title;
  }
  const [value, setValue] = useState(props.clubs[0]);
  const ctx = useContext(AuthContext);
  const [event, setEvent] = useState({
    title: "",
    description: "",
    capacity: "",
    startDate: "",
    endDate: null,
    fee: "",
  });

  const onTitleChange = (e) => setEvent({ ...event, title: e.target.value });
  const onDescriptionChange = (e) =>
    setEvent({ ...event, description: e.target.value });
  const onCapacityChange = (e) =>
    setEvent({ ...event, capacity: e.target.value });
  const onFeeChange = (e) => setEvent({ ...event, fee: e.target.value });
  const onStartDateChange = (e) =>
    setEvent({ ...event, startDate: e.target.value });
  const onEndDateChange = (e) =>
    setEvent({ ...event, endDate: e.target.value });

  // Handle submi and reset
  const handleSubmit = () => {
    //Validate
    console.log("trying to submit...")
    if (value=== "") {
      flash(1000, "error", "pick a club");
      return;
    }
    if (event.title === "") {
      flash(1000, "error", "enter title");
      return;
    }
    if (event.description === "") {
      flash(1000, "error", "enter description");
      return;
    }
    if (event.capacity === "") {
      flash(1000, "error", "enter capacity");
      return;
    }
    if (event.fee === "") {
      flash(1000, "error", "enter Fee");
      return;
    }
    if (event.startDate === "") {
      flash(1000, "error", "enter Start Date");
      return;
    }
    if (event.startDate === "") {
      flash(1000, "error", "enter end Date");
      return;
    }
    //start date < end date
    if (event.startDate >= event.endDate) {
      flash(1000, "error", "Incorrect date range");
      return;
    }
    event.club=value._id;
    console.log(event);

    //POST REQUEST
    axios
      .post(`${configData.SERVER_URL}/api/v1/events/`, event, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        // props.changeOye();
        if (d) {
          console.log(d);
          flash(1000, "success", "Successfully Added");
        }
        // ctx.setOffline(false);
      })
      .catch((err) => {
        // ctx.setOffline(true);
        console.log("No internet connection", err);
      });
  };
  const handleReset = () => {
    setEvent({
      title: "",
      description: "",
      capacity: "",
      startDate: "",
      endDate: null,
      fee: "",
    });
    
  };
  return (
    <Paper className="mx-auto flex flex-col px-20 gap-y-4 w-5/6 md:w-1/2">
      <h2 className="text-3xl mb-3 pt-3 ">Add Event</h2>
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={props.clubs}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Pick a Club" />
          )}
          // onChange={props.selected_event}
          onChange={(event, newValue) => {
            if (newValue === null) {
              handleReset()
              return;
            }
            setValue(newValue);
            console.log("new value from drop dwn",newValue._id);
          }}
        />
      <TextField
        // fullWidth
        variant="standard"
        onChange={onTitleChange}
        value={event.title}
        label={"Title"} //optional
      />
      <TextField
        variant="standard"
        onChange={onDescriptionChange}
        value={event.description}
        label={"Description"} //optional
      />
      <TextField
        type="number"
        variant="standard"
        onChange={onCapacityChange}
        value={event.capacity}
        label={"Capacity"}
      />
      <TextField
        type="number"
        variant="standard"
        onChange={onFeeChange}
        value={event.fee}
        label={"Fee"}
      />
      <TextField
        type="date"
        variant="standard"
        InputLabelProps={{ shrink: true }}
        onChange={onStartDateChange}
        value={event.startDate}
        label={"Start Date"}
      />
      <TextField
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="standard"
        onChange={onEndDateChange}
        value={event.endDate}
        label={"End Date"}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};
export default EventAddForm;
