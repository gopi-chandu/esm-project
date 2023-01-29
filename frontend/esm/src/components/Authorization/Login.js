import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Login = () => {
  return (
    <React.Fragment>
      <div className="h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex flex-col md:flex-row md:justify-center items-center shadow shadow-lg flex-col items-center">
        <div className="bg-red-300 md:h-96 md:my-auto md:w-64 md:rounded-tl-lg md:rounded-bl-lg md:rounded-none rounded-b-lg rounded-none md:block hidden p-0">
          picture
        </div>
        <div className="bg-white h-96 p-6 md:h-96 md:my-auto w-64 rounded rounded-lg md:rounded-bl-0 md:rounded-none md:rounded-tr-lg md:rounded-br-lg my-auto">
          content
        </div>
      </div>
    </React.Fragment>
  );
  // return (
  //   // bg-gradient-to-r from-red-500 to-red-300
  //   //
  //   <div className="flex h-screen text-gray-900 bg-gradient-to-r from-blue-500 to-blue-300">
  //     {/* w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-90  shadow shadow-lg */}
  //     <div className=" p-8">123</div>
  //     <div className="shadow shadow-lg">
  //       <div>
  //         <div className="space-y-2">
  //           <div className="h-40 w-40 ml-20 content-center">
  //             <div>LOGO COMES HERE</div>
  //           </div>
  //           <div>
  //             <p className="text-2xl font-medium text-center md:text-2xl ">
  //               Welcome Back !
  //             </p>
  //           </div>
  //           <div>
  //             <div className="space-x-1 text-sm text-center md:text-lg">
  //               New to ESM?
  //               <a className="font-semibold text-blue-500"> Sign Up</a>
  //             </div>
  //           </div>
  //           <div className="mt-10">
  //             <form>
  //               <div className="space-y-4">
  //                 <div className="flex flex-col text-left">
  //                   <div className=" ml-0.5 mb-1 mt-1 text-gray-700 ">
  //                     Email
  //                   </div>
  //                   <input className="h-8 w-full p-3 text-gray-700 placeholder-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:"></input>
  //                 </div>
  //                 <div className="flex flex-col text-left">
  //                   <div className=" ml-0.5 mb-1 mt-1 text-gray-700 ">
  //                     Password
  //                   </div>
  //                   <input
  //                     type="password"
  //                     className="h-8 w-full p-3 text-gray-700 placeholder-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:"
  //                   ></input>
  //                 </div>
  //                 <Button>Sign In</Button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Login;
