import React, { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { flash } from "react-universal-flash";
import AuthContext from "../../store/auth-context";
import configData from "../../config.json";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import { useParams } from "react-router-dom";

const UserRegPage = () => {
  let params = useParams();
  let eventId = params.eventId;
  console.log(params);

  const ctx = useContext(AuthContext);
  const [eventData, setEventData] = useState("");
  const [userData, setUserData] = useState("");
  const [reg, setReg] = useState({
    name: "",
    email: "",
    roll: "",
    phone: "",
  });

  const onTitleChange = (e) => setReg({ ...reg, title: e.target.value });
  const onNameChange = (e) => setReg({ ...reg, name: e.target.value });
  const onEmailChange = (e) => setReg({ ...reg, email: e.target.value });
  const onRollChange = (e) => setReg({ ...reg, roll: e.target.value });
  const onPhoneChange = (e) => setReg({ ...reg, phone: e.target.value });

  useState(() => {
    axios
      .get(`${configData.SERVER_URL}/api/v1/events/${params.eventId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        setEventData(d);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.eventId]);

  // Handle submi and reset
  const handleSubmit = () => {
    //Validate
    console.log("trying to submit...");
    if (reg.name === "") {
      flash(1000, "error", "enter name");
      return;
    }
    if (reg.email === "") {
      flash(1000, "error", "enter email");
      return;
    }
    if (reg.phone === "") {
      flash(1000, "error", "enter phone number");
      return;
    }
    if (reg.phone && reg.phone.length > 0 && reg.phone.startsWith("0")) {
      flash(1000, "error", "phone number starts with zero ");
      return;
    }
    if (reg.phone && reg.phone.length > 0 && !(reg.phone.length > 9)) {
      flash(1000, "error", "phone number length too short");
      return;
    }
    console.log(reg);

    //POST REQUEST
    // axios
    //   .post(`${configData.SERVER_URL}/api/v1/regEvent/`, event, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + ctx.token,
    //     },
    //   })
    //   .then((data) => {
    //     let d = data.data.data;
    //     // props.changeOye();
    //     if (d) {
    //       console.log(d);
    //     }
    //     // ctx.setOffline(false);
    //   })
    //   .catch((err) => {
    //     // ctx.setOffline(true);
    //     console.log("No internet connection", err);
    //   });
  };

  useState(() => {
    axios
      .get(`${configData.SERVER_URL}/api/v1/auth/getMe`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        console.log("data : ", d);
        setReg({
          name: d.name,
          email: d.email,
          roll: "",
          phone: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.eventId]);

  // const handleSubmit = () => {};
  const handleReset = () => {
    setReg({
      name: "",
      email: "",
      roll: "",
      phone: "",
    });
  };
  return (
    <div className="h-screen w-full bg-blue-300 p-2">
      <p className="text-3xl p-3 underline text-black ">{eventData?.title}</p>
      <Paper className="mx-auto flex flex-col px-20 gap-y-4 w-5/6 md:w-1/2">
        <h2 className="text-3xl mb-3 pt-3  ">Register for Event</h2>
        <TextField
          // fullWidth
          variant="standard"
          onChange={onTitleChange}
          value={eventData?.title}
          label={"Event"} //optional
          disabled
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          variant="standard"
          onChange={onNameChange}
          value={reg.name}
          label={"Name"} //optional
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          variant="standard"
          onChange={onEmailChange}
          value={reg.email}
          label={"Email"} //optional
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="number"
          variant="standard"
          onChange={onRollChange}
          value={reg.roll}
          label={"Roll Number (optional)"}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          type="number"
          variant="standard"
          onChange={onPhoneChange}
          value={reg.phone}
          label={"Phone Number"}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Paper>
    </div>
  );
};

export default UserRegPage;
