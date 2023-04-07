import React, { useContext, useEffect, useRef, useState } from "react";
import configDate from "../../config.json";
import "./ChatPage.css";
import io from "socket.io-client";
import Chat from "./Chat";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import configData from "../../config.json";
import AuthContext from "../../store/auth-context";
import axios from "axios";

const socket = io.connect(configDate.SERVER_URL);
const ChatPage = () => {
  const [username, setUsername] = useState("");
  const [userObject, setUserObject] = useState({});
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  // Use useEffect to fetch the details of user and make him join
  const ctx = useContext(AuthContext);
  useEffect(() => {
    let userDetails;
    axios
      .get(`${configData.SERVER_URL}/api/v1/auth/getme`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        console.log("data : ", d);
        setUsername(d.name);
        setUserObject(d);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-blue-300 h-screen w-screen">
      <div className="App ">
        {!showChat ? (
          <div className="joinChatContainer1 ">
            {/* <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            /> */}

            <div className="h-fit w-full pt-10">
              <Paper className="w-5/6 md:w-1/2 mx-auto ">
                <h3 className="text-2xl pb-10 mt-0 pt-10 pt-5">Join A Chat</h3>
                <input
                  className="pb-10"
                  type="text"
                  placeholder="John..."
                  // onChange={(event) => {
                  //   setUsername(event.target.value);
                  // }}
                  hidden
                />
                <div className="px-10 ">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Pick an channel to join chat room"
                      />
                    )}
                    // onChange={props.selected_event}
                    onChange={(event, newValue) => {
                      if (newValue === null) {
                        // handleReset();
                        return;
                      }
                      setRoom(newValue);
                      // setValue(newValue);
                      // setClub(newValue);
                      // console.log("new value from drop dwn", newValue);
                      // props.selected_event(newValue);
                    }}
                  />
                </div>
                <button
                  className="bg-blue-700 rounded-lg m-3 text-white px-20 py-3"
                  onClick={joinRoom}
                >
                  Join A Room
                </button>
              </Paper>
            </div>
          </div>
        ) : (
          <Chat
            socket={socket}
            username={username}
            room={room}
            user={userObject}
          />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
const options = [

  "What's Happening RIGHT NOW",

  "GDSC",

  "CSEA",
  
  "ECEA",

  "CodeChef Chapter - NITAP",

  "Training & Placement Cell",

  "Praayatnam",

  "Dhwani (Music Club)",

  "Dance and Dramatics",

  "Painting and Photography",

  "Literary and Debate",

  "Entrepreneurship and Innovation Cell",

  "Shreshta",

  "AI and Robotics",

  "Graphics Cafe",

  "Nature and Value Education",

  "Magazine",

  "Task Force",

  "Physical Education",

  "Shilpi (Model Making Lobby)",

  "E-Yantra (Drones and Electric Vehicles)",

  "Brindavanam (Horticultural Designs)",

  "Chitram (Short Films and Movies)",
  
  "Education",
  
  "Movies & TV Series",
  
  "Misc."

];
