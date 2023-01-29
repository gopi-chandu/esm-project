import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import bg from "../../assets/images/bg.jpg";

const Login = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
        <div className="h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col md:flex-row md:justify-center items-center shadow shadow-lg flex-col items-center opacity-100  ">
          <div
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
            className="bg-red-300 md:h-96 md:my-auto md:w-64 md:rounded-tl-lg md:rounded-bl-lg md:rounded-none rounded-b-lg rounded-none md:block hidden p-0 md:scale-110"
          >
            {/* <img className="object-fill h-96" src={bg}/> */}
          </div>
          <div className="bg-white h-96 p-6 md:h-96 md:my-auto w-64 rounded rounded-lg md:rounded-bl-0 md:rounded-none md:rounded-tr-lg md:rounded-br-lg my-auto md:scale-110">
            <div className="space-x-1 text-sm text-center text-lg font-semibold">
              Sign In
            </div>

            <div className="mt-10 ">
              <form>
                <div className="space-y-4">
                  <div className="flex flex-col text-left">
                    <div className=" ml-0.5 mb-1 mt-1 text-gray-700  text-base md:text-md">
                      Email
                    </div>
                    <input
                      className="h-8 w-full p-1 text-gray-700 placeholder-gray-600  outline-none border-0 border-b-2
                      border-b-blue-200   "
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
                    ></input>
                  </div>
                  <div className="h-3"></div>
                  <Button>Sign In</Button>
                  <div className="space-x-1 text-sm text-center text-md">
                    New to ESM?
                    <a className="font-semibold text-blue-500"> Sign Up</a>
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

export default Login;
