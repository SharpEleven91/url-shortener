import React from "react";
import SubmitButton from "./Submit";
import URLInput from "./URLInput";

export default function InputForm(props) {
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
