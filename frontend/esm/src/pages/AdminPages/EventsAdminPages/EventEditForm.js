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

const EventEditForm = (props) => {
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
    capacity: "",
    startDate: "",
    endDate: null,
    entryFee: 0,
  };
  if (value) {
    f = value;
    console.log("f value: ", f);
  }
  const [event, setEvent] = useState({
    _id: f._id,
    title: f.title,
    fee: f.entryFee,
    description: f.description,
    capacity: f.capacity,
    startDate: moment(f.startDate).format("YYYY-MM-DD HH:mm:ss"),
    endDate: moment(f.endDate).format("YYYY-MM-DD HH:mm:ss"),
  });

  const onIdChange = (e) => setEvent({ ...event, _id: e.target.value });
  const onTitleChange = (e) => setEvent({ ...event, title: e.target.value });
  const onDescriptionChange = (e) =>
    setEvent({ ...event, description: e.target.value });
  const onCapacityChange = (e) =>
    setEvent({ ...event, capacity: e.target.value });
  const onFeeChange = (e) => setEvent({ ...event, entryFee: e.target.value });
  const onStartDateChange = (e) =>
    setEvent({ ...event, startDate: e.target.value });
  const onEndDateChange = (e) =>
    setEvent({ ...event, endDate: e.target.value });

  // const handleSubmit = () => {}
  // Handle submit and reset
  const handleSubmit = () => {
    //Validate
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
    event.club = value._id;
    console.log(event);

    // POST REQUEST
    axios
      .put(`${configData.SERVER_URL}/api/v1/events/${event._id}`, event, {
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
  const handleReset = (e) => {
    // console.log("reset btn : ",e)
    setEvent({
      title: "",
      description: "",
      capacity: "",
      startDate: "",
      endDate: "",
      entryFee: "",
    });
  };

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
              setEvent(newValue);
              console.log("new value from drop dwn", newValue);
              // props.selected_event(newValue);
            }}
          />
        </div>
      </Paper>

      <Paper className=" mx-auto flex flex-col px-20 gap-y-4 w-5/6 md:w-1/2">
        <h2 className="text-3xl mb-3 pt-3 ">Edit Event</h2>
        <div className="hidden">
          <TextField
            variant="standard"
            onChange={onIdChange}
            value={event._id}
            label={"id"} //optional
          />
        </div>
        <div className="scale-75 md:scale-100">
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
                handleReset();
                return;
              }
              setValue(newValue);
              // setEvent({ ...event, club: newValue._id });
              console.log("new value from drop dwn", newValue._id);
              // props.selected_event(newValue);
            }}
          />
        </div>

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
          InputLabelProps={{ shrink: true }}
          type="number"
          variant="standard"
          onChange={onCapacityChange}
          value={event.capacity}
          label={"Capacity"}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          type="number"
          variant="standard"
          onChange={onFeeChange}
          value={event.entryFee}
          label={"Fee"}
        />
        <TextField
          type="datetime"
          variant="standard"
          InputLabelProps={{ shrink: true }}
          onChange={onStartDateChange}
          value={event.startDate}
          label={"Start Date"}
        />
        <TextField
          type="datetime"
          InputLabelProps={{ shrink: true }}
          variant="standard"
          onChange={onEndDateChange}
          value={event.endDate}
          label={"End Date"}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Paper>
    </div>
  );
};

export default EventEditForm;
