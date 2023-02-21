import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import Button from "../../components/UI/Button";
import ProfileForm from "./ProfileForm";
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
      .get("http://localhost:5000/api/v1/auth/getme", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ctx.token,
        },
      })
      .then((data) => {
        let d = data.data.data;
        d.photo = d.photo.trim();
        setUserData(d);
        // remove time out just before deploying
        setTimeout(() => {
          setIsLoading(false);

          console.log("data : ", userData);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  // profile content
  let profileContent = (
    <div className="w-full h-full bg-grey-300">
      <p className="text-3xl p-3 underline">Profile</p>

      <div className="flex flex-col items-center md:flex-row justify-center gap-x-10">
        <div className="mt-3 h-80 w-80 bg-white rounded-lg overflow-hidden items-center justify-center ">
          <img
            className="w-80 mx-auto my-auto scale-75"
            // src="http://localhost:5000/uploads/events/no-photo.png"
            src={"http://localhost:5000/uploads/profile/" + userData.photo}
            alt="image"
          ></img>
        </div>

        <div className="h-fit md:w-96 md:h-80 bg-blue-300 rounded-lg mt-4 p-3">
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
  "h-screen bg-gradient-to-r from-blue-500 to-blue-300 md:justify-center items-center opacity-100 ";

export default ProfilePage;
