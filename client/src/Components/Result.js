import React, { useState, useRef } from "react";
import { Typography, Fade, IconButton } from "@material-ui/core/Typography";
import { Replay, CheckCircle, Assignment } from "@material-ui/icons";


const Result = (props) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const textRef = useRef(props.result);
  const TextResult = () => (
    <input id="hidden" ref={textRef} value={props.result}/>
  );
  const handleChange = () => {
    if (document.execCommand && !copySuccess) {
      textRef.current.select();
      document.execCommand("copy");
      setCopySuccess(true);
    }
  };
  return (
    <Fade in={true}>
      <div>
        <TextResult />
        <Typography variant="h4" gutterBottom>
          {props.result}
        </Typography>
        <IconButton onClick={props.reset}>
          <Replay fontSize="large" />
        </IconButton>
        <IconButton onClick={handleChange}>
          {copySuccess ? (
            <CheckCircle fontSize="large" />
          ) : (
            <Assignment fontSize="large" />
          )}
        </IconButton>
      </div>
    </Fade>
  );
}

export default Result