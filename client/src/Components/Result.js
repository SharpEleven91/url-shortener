import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import { Replay } from "@material-ui/icons";
import { CheckCircle } from "@material-ui/icons";
import { Assignment } from "@material-ui/icons";
import Clipboard from "react-clipboard.js";

export default function Result(props) {
  const [copySuccess, setCopySuccess] = useState(false);

    return (
      <Fade in={true}>
        <div>
          <Typography component="h4" variant="h4" gutterBottom>
            {" "}
            {props.result}{" "}
          </Typography>
          <IconButton onClick={props.reset}>
            <Replay fontSize="large" />
          </IconButton>
          <Clipboard
            style={{ border: "none", background: "none" }}
            data-clipboard-text={props.result}
            onSuccess={setCopySuccess(true)}
          >
            <IconButton>
              {copySuccess ? (
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
