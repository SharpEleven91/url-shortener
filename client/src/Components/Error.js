import React from "react";
import { Typography, Fade } from "@material-ui/core/Typography";
const Error = (props) => {
  return (
    <Fade in={props.checked} timeout={{ enter: 1700, exit: 1700 }}>
      <Typography color="error" component="h3" variant="h3" gutterBottom>
        {" "}
        Invalid URL{" "}
      </Typography>
    </Fade>
  );
}

export default Error;
