import { Paper } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import SendIcon from "@mui/icons-material/Send";
import configData from "../../config.json";
import AuthContext from "../../store/auth-context";
import axios from "axios";
function Chat({ socket, username, room, user }) {
  const [currentMessage, setCurrentMessage] = useState("");
  // f3tch messages list here and inititlaize
  // in the sendMessage fn write post call to database
  const [messageList, setMessageList] = useState([]);

  // Use Effect to load all messages from database , also store the messages in database , ie post them
  const ctx = useContext(AuthContext);
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      let msg = {
        room: room,
        author: user.name,
        // find this
        user: user._id,
        msg: currentMessage,
        timeH: String(new Date(Date.now()).getHours()),
        timeM: String(new Date(Date.now()).getMinutes()),
      };
      console.log(msg);
      await socket.emit("send_message", msg);
      setMessageList((list) => [...list, msg]);
      setCurrentMessage("");
    }
  };
  // FOR each message on recieve
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  // SET INITIAL MESSAGES
  useEffect(() => {
    let messages;
    axios
      .get(`${configData.SERVER_URL}/api/v1/message/${room}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        console.log("data : ", d);
        setMessageList(d);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="chat-window rounded-lg mx-auto w-5/6 md:w-1/2 p-2">
      <Paper>
        <div className="chat-header p-2 text-black text-2xl">
          <div className="rounded-lg  h-10 w-full">
            <p>{room} - Live Chat </p>
          </div>
        </div>
        <div className="chat-body h-96 border-2 border-gray-300">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
              return (
                <div
                  className="message "
                  // id={"you"}
                  id={username === messageContent.author ? "other" : "you"}
                >
                  <div>
                    <div className="message-content ">
                      <p>{messageContent.msg}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">
                        {messageContent.timeH + " : " + messageContent.timeM}
                      </p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer ">
          <input
            className="rounded-lg"
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={sendMessage} className="w-20">
            <SendIcon></SendIcon>
          </button>
        </div>
      </Paper>
    </div>
  );
}

export default Chat;
