import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import { Replay } from "@material-ui/icons";
import { CheckCircle } from "@material-ui/icons";
import { Assignment } from "@material-ui/icons";
import Clipboard from "react-clipboard.js";
class Result extends Component {
  state = {
    copySuccess: false
  };
  copySuccess() {
    this.setState({
      copySuccess: true
    });
  }
  componentWillMount() {
    this.setState({ copySuccess: false });
  }
  render() {
    return (
      <Fade in={true}>
        <div>
          <Typography component="h4" variant="h4" gutterBottom>
            {" "}
            {this.props.result}{" "}
          </Typography>
          <IconButton onClick={this.props.reset}>
            <Replay fontSize="large" />
          </IconButton>
          <Clipboard
            style={{ border: "none", background: "none" }}
            data-clipboard-text={this.props.result}
            onSuccess={this.copySuccess.bind(this)}
          >
            <IconButton>
              {this.state.copySuccess ? (
                <CheckCircle fontSize="large" />
              ) : (
                <Assignment fontSize="large" />
              )}
            </IconButton>
          </Clipboard>
        </div>
      </Fade>
    );
  }
}

export default Result;
