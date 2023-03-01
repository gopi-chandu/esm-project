// React Imports
import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

// Remove the button soon
import Button from "../../components/UI/Button";
// Assets
import bg from "../../assets/images/bg.jpg";
//context api
import AuthContext from "../../store/auth-context";
import { useContext } from "react";


//Configs
import configData from "../../config.json";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    // TODO: validate the logic
    // send request
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post(`${configData.SERVER_URL}/api/v1/auth/register`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        ctx.login(data.data.token);
        console.log("data : ", data.data.token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <div className="h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col md:flex-row md:justify-center items-center shadow shadow-lg flex-col items-center opacity-100  ">
        <div
          style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
          className="bg-red-300 md:h-96 md:my-auto md:w-64 md:rounded-tl-lg md:rounded-bl-lg md:rounded-none rounded-b-lg rounded-none md:block hidden p-0 md:scale-110"
        >
          {/* <img className="object-fill h-96" src={bg}/> */}
        </div>
        <div className="bg-white h-fit p-6 md:h-96 md:my-auto w-64 rounded rounded-lg md:rounded-bl-0 md:rounded-none md:rounded-tr-lg md:rounded-br-lg my-auto md:scale-110">
          <div className="space-x-1 text-sm text-center text-lg font-semibold">
            Sign Up
          </div>

          <div className="mt-2 ">
            <form onSubmit={submitHandler}>
              <div className="space-y-4">
                <div className="flex flex-col text-left">
                  <div className=" ml-0.5 m-0 text-gray-700  text-base md:text-md">
                    User Name
                  </div>
                  <input
                    className="h-8 w-full p-1 text-gray-700 placeholder-gray-600  outline-none border-0 border-b-2
                      border-b-blue-200 "
                    ref={nameRef}
                  ></input>
                </div>
                <div className="flex flex-col text-left">
                  <div className=" ml-0.5 m-0 text-gray-700  text-base md:text-md">
                    Email
                  </div>
                  <input
                    className="h-8 w-full p-1 text-gray-700 placeholder-gray-600  outline-none border-0 border-b-2
                      border-b-blue-200 "
                    ref={emailRef}
                  ></input>
                </div>
                <div className="flex flex-col text-left">
                  <div className=" ml-0.5 m-0 text-gray-700 text-base md:text-md">
                    Password
                  </div>
                  <input
                    type="password"
                    className="h-8 w-full p-1 text-gray-700 placeholder-gray-600  outline-none border-0 border-b-2
                    border-b-blue-200  "
                    ref={passwordRef}
                  ></input>
                </div>
                <div className="flex flex-col text-left">
                  <div className=" ml-0.5 m-0 text-gray-700 text-base md:text-md">
                    Confirm Password
                  </div>
                  <input
                    type="password"
                    className="h-8 w-full p-1 text-gray-700 placeholder-gray-600  outline-none border-0 border-b-2
                    border-b-blue-200  "
                    ref={confirmPasswordRef}
                  ></input>
                </div>
                <Button>Sign Up</Button>
                <div className="space-x-1 text-sm text-center text-md">
                  already have an account?
                  <NavLink to="/login" className="font-semibold text-blue-500">
                    Sign In
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
