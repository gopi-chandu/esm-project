import React from "react";

const Button = (props) => {
  return (
    <button
      type="submit"
      className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md: text-lg bg-gradient-to-r from-blue-600 to-blue-400 focus: outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
    >
      {props.children}
    </button>
  );
};

export default Button;
