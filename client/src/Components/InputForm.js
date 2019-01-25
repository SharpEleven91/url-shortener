import React from "react";
import PropTypes from 'prop-types';
import SubmitButton from "./Submit";
import URLInput from "./URLInput";

const InputForm = (props) => {
  return (
    <div data-testid="inputForm" className="inputgroup">
      <URLInput
        handleChange={props.handleChange}
        handleKeyPress={props.handleKeyPress}
      />
      <SubmitButton onSubmit={props.onSubmit} />
    </div>
  );
}
InputForm.propTypes = {
  handleChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default InputForm