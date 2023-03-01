import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import Button from "../../components/UI/Button";
import ProfileForm from "./ProfileForm";

//Configs
import configData from "../../config.json";

const ProfilePage = () => {
  //States
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState("");

  //Refs
  const nameRef = useRef();
  const emailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefualt();
  };

  // get the user using api request
  const ctx = useContext(AuthContext);

  // get the user data and store it here
  const [userData, setUserData] = useState("");
  useEffect(() => {
    //make api call , use token get the profile
    // display it
    // console.log("ctx token ", ctx.token);
    let userDetails;
    axios
      .get(`${configData.SERVER_URL}/api/v1/auth/getme`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        console.log("data123 : ", userData);
        let d = data.data.data;
        d.photo = d.photo.trim();
        ctx.setOffline(false);
        setUserData(d);
        // remove time out just before deploying
        setTimeout(() => {
          setIsLoading(false);

          console.log("data : ", userData);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        ctx.setOffline(true);
      });
  }, []);
  let mystyle={
    width: "100%",
    height: "100%", 
    // object-fit: "contain"
};
  // profile content
  let profileContent = (
    <div className="w-full h-full bg-grey-300">
      <p className="text-3xl p-3 underline">Profile</p>

      <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-x-10">
        <div className=" mt-3 h-80 w-80 bg-white rounded-lg overflow-hidden items-center justify-center  ">
          <img style={mystyle}
            className="w-80 mx-auto my-auto object-cover"
            // src="http://localhost:5000/uploads/events/no-event.jpg"
            src="http://localhost:5000/uploads/profile/no-photo.jpg"
            // src={`${configData.SERVER_URL}/uploads/profile/` + userData.photo}
            alt="image"
          ></img>
        </div>

        <div className="h-fit md:w-96 md:h-80 bg-blue-300 rounded-lg mt-4 p-3 mb-40">
          <ProfileForm user={userData}></ProfileForm>
        </div>
      </div>
    </div>
  );

  return (
    <div className={bgClass}>
      {/* <LoadingAnimation></LoadingAnimation> */}
      {isLoading && <LoadingAnimation></LoadingAnimation>}
      {!isLoading && profileContent}
    </div>
  );
};
const bgClass =
  "h-full h-fit bg-gradient-to-r from-blue-500 to-blue-300 md:justify-center items-center opacity-100 ";

export default ProfilePage;
