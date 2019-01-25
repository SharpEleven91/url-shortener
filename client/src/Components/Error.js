import React from "react";
import { Typography, Fade } from "@material-ui/core";

export default function Error(props) {
  return (
    <Fade in={props.checked} timeout={{ enter: 1700, exit: 1700 }}>
      <Typography
        data-testid="error-display"
        color="error"
        component="h3"
        variant="h3"
        gutterBottom
      >
        {" "}
        Invalid URL{" "}
      </Typography>
    </Fade>
  );
}
