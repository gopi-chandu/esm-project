
import ClubAddForm from "./ClubAdminPages/ClubAddForm";
import ClubEditForm from "./ClubAdminPages/ClubEditForm";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import React, { useContext, useEffect, useRef, useState } from "react";
import configData from "../../config.json";

const ClubPageAdmin = () => {
    const ctx = useContext(AuthContext);
    const [clubData, setClubData] = useState("");
    useEffect(() => {
        axios
          .get(`${configData.SERVER_URL}/api/v1/clubs/`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + ctx.token,
            },
          })
          .then((data) => {
            let d = data.data.data;
            console.log(d);
            // ctx.setOffline(false);
            setClubData(d);
          })
          .catch((err) => {
            ctx.setOffline(true);
            console.log("No internet connection", err);
          });
      },[]);
  return (
    <div>
      <ClubAddForm></ClubAddForm>
      <ClubEditForm key={0} events={clubData}></ClubEditForm>
    </div>
  );
};

export default ClubPageAdmin;
