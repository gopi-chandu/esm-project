import React from "react";

const Card = (props) => {
  return (
    <div className="flex h-screen text-gray-900 ">
      <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-70  shadow shadow-lg">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
