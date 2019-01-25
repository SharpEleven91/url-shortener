import React from "react";
import SubmitButton from "./Submit";
import URLInput from "./URLInput";

const InputForm = (props) => {
  return (
    <div className="inputgroup">
      <URLInput
        handleChange={props.handleChange}
        handleKeyPress={props.handleKeyPress}
      />
      <SubmitButton onSubmit={props.onSubmit} />
    </div>
  );
}

export default InputForm