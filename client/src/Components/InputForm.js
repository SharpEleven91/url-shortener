import React, { Component } from "react";
import SubmitButton from "./Submit";
import URLInput from "./URLInput";

class InputForm extends Component {
  render() {
    return (
      <div className="inputgroup">
        <URLInput
          handleChange={this.props.handleChange}
          handleKeyPress={this.props.handleKeyPress}
        />
        <SubmitButton onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

export default InputForm;
