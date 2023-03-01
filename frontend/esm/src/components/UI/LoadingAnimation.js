import React from "react";

const LoadingAnimation = () => {
  let size = 100;
  return (
    <div className="h-screen w-screen flex">
      <div className=" h-80 w-80  flex items-center mx-auto">
        <div className="text-center mx-auto flex-center h-10">
          <div
            style={{ width: `${size}px`, height: `${size}px` }}
            className="animate-spin"
          >
            <div
              className="h-full w-full border-4 border-t-red-500
     border-b-red-700 rounded-[50%]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
