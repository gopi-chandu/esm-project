import React from "react";

const LoadingAnimation = () => {
  let size = 100;
  return (
    <div className=" h-80 w-80 absolute mt-20 mx-auto left-0 right-0 top-0 bottom-0 flex items-center">
      <div className="w-[50%] text-center mx-auto my-auto flex-center h-10">
        <div
          style={{ width: `${size}px`, height: `${size}px` }}
          className="animate-spin"
        >
          <div
            className="h-full w-full border-4 border-t-purple-500
     border-b-purple-700 rounded-[50%]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
