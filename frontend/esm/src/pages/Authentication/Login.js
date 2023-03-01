// React Imports
import React, { useContext, useRef } from "react";
import { Navigate, NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

// Assets
import bg from "../../assets/images/bg.jpg";

//Configs
import configData from "../../config.json";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const LoginSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const inputData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(inputData);
    let token = 123;
    axios
      .post(`${configData.SERVER_URL}/api/v1/auth/login`, inputData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        ctx.login(data.data.token);
        navigate("/");
        console.log("data : ", data.data.token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      {ctx.isLoggedIn && <Navigate to="/events" replace={true} />}
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
        <div className={bgClass}>
          <div
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
            className={imageClass}
          >
            {/* <img className="object-fill h-96" src={bg}/> */}
          </div>
          <div className={upperClass}>
            <div className="space-x-1 text-sm text-center text-lg font-semibold">
              Sign In
            </div>

            <div className="mt-10 ">
              <form onSubmit={LoginSubmitHandler}>
                <div className="space-y-4">
                  <div className="flex flex-col text-left">
                    <div className=" ml-0.5 mb-1 mt-1 text-gray-700  text-base md:text-md">
                      Email
                    </div>
                    <input
                      className="h-8 w-full p-1 text-gray-700 placeholder-gray-600  outline-none border-0 border-b-2
                      border-b-blue-200   "
                      required
                      ref={emailInputRef}
                    ></input>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className=" ml-0.5 mb-1 mt-1 text-gray-700 text-base md:text-md">
                      Password
                    </div>
                    <input
                      type="password"
                      className="h-8 w-full p-1 text-gray-700 placeholder-gray-600  outline-none border-0 border-b-2
                    border-b-blue-200  "
                      required
                      ref={passwordInputRef}
                    ></input>
                  </div>
                  <div className="h-3"></div>
                  <button className={btnClass} type="submit">
                    Login
                  </button>
                  <div className="space-x-1 text-sm text-center text-md">
                    New to ESM?
                    <NavLink
                      to="/sign-up"
                      className="font-semibold text-blue-500"
                    >
                      {" "}
                      Sign Up
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const imageClass =
  "bg-red-300 md:h-96 md:my-auto md:w-64 md:rounded-tl-lg md:rounded-bl-lg md:rounded-none rounded-b-lg rounded-none md:block hidden p-0 md:scale-110";

const bgClass =
  "h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col md:flex-row md:justify-center items-center shadow shadow-lg flex-col items-center opacity-100 ";
const btnClass =
  "w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg";
const upperClass =
  "bg-white h-96 p-6 md:h-96 md:my-auto w-64 rounded rounded-lg md:rounded-bl-0 md:rounded-none md:rounded-tr-lg md:rounded-br-lg my-auto md:scale-110";
export default Login;
