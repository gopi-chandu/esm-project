import React, { useState } from "react";

const NumberInput = (props) => {
  const [state, setState] = useState(props.name);
  return (
    <React.Fragment>
      <div className="m-1 p-1 pr-2 mb-2 justify-between flex flex-row w-full gap-x-2 text-lg">
        <div className="p-1 bg-blue-400 rounded-lg ">{props.label}</div>
        <input
          type="number"
          pattern="[0-9]*"
          className="p-1 focus:outline-none rounded-lg "
          disabled={props.edit ? false : true}
          ref={props.sendRef}
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        ></input>
      </div>
    </React.Fragment>
  );
};

export default NumberInput;
