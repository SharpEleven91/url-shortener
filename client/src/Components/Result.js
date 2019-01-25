import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';
import { Typography, Fade, IconButton } from "@material-ui/core";
import { Replay, CheckCircle, Assignment } from "@material-ui/icons";


const Result = (props) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const textRef = useRef(props.result);
  const TextResult = () => (
    <input id="hidden" ref={textRef} value={props.result} readOnly/>
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
        <Typography data-testid="result" variant="h4" gutterBottom>
          {props.result}
        </Typography>
        <IconButton data-testid="reset-button" onClick={props.reset}>
          <Replay fontSize="large" />
        </IconButton>
        <IconButton data-testid="copy-button" onClick={handleChange}>
          {copySuccess ? (
            <CheckCircle data-testid="successful-copy" fontSize="large" />
          ) : (
            <Assignment data-testid="not-copied" fontSize="large" />
          )}
        </IconButton>
      </div>
    </Fade>
  );
}

Result.propTypes = {
  result: PropTypes.string,
  reset: PropTypes.func,
}

export default Result