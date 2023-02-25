import React, { useState } from "react";

const TextAreaUI = (props) => {
  const [state, setState] = useState(props.name);
  return (
    <React.Fragment>
      <div className="m-1 p-1 pr-2 mb-2 justify-between flex flex-row w-full gap-x-2 text-lg">
        <div className="p-1 bg-blue-400 rounded-lg h-10 ">{props.label}</div>
        <textarea
          className="m-0 w-56  focus:outline-none rounded-lg h-40"
          disabled={props.edit ? false : true}
          ref={props.sendRef}
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default TextAreaUI;
