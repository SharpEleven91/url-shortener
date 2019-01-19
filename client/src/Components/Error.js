import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
class Error extends Component {
  render() {
    return (
      <Fade in={this.props.checked} timeout={{ enter: 1700, exit: 1700 }}>
        <Typography color="error" component="h3" variant="h3" gutterBottom>
          {" "}
          Invalid URL{" "}
        </Typography>
      </Fade>
    );
  }
}

export default Error;
