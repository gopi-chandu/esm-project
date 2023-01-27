import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Login = () => {
  return (
    // bg-gradient-to-r from-red-500 to-red-300

    <Card>
      <div className="space-y-2">
        <div className="h-40 w-40 ml-20 content-center">
          <div>LOGO COMES HERE</div>
        </div>
        <div>
          <p className="text-2xl font-medium text-center md:text-2xl ">
            Welcome Back !
          </p>
        </div>
        <div>
          <div className="space-x-1 text-sm text-center md:text-lg">
            New to ESM?
            <a className="font-semibold text-blue-500"> Sign Up</a>
          </div>
        </div>
        <div className="mt-10">
          <form>
            <div className="space-y-4">
              <div className="flex flex-col text-left">
                <div className=" ml-0.5 mb-1 mt-1 text-gray-700 ">Email</div>
                <input className="h-8 w-full p-3 text-gray-700 placeholder-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:"></input>
              </div>
              <div className="flex flex-col text-left">
                <div className=" ml-0.5 mb-1 mt-1 text-gray-700 ">Password</div>
                <input
                  type="password"
                  className="h-8 w-full p-3 text-gray-700 placeholder-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:"
                ></input>
              </div>
              <Button>Sign In</Button>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default Login;
