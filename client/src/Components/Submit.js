import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 250
  },
  input: {
    display: "none"
  },
  margin: {
    margin: theme.spacing.unit
  }
});
const Submit = (props) => {
  const { classes } = props;
  return (
    <Button
      data-testid="submit-button"
      size="large"
      variant="outlined"
      onClick={props.onSubmit}
      color="inherit"
      className={classes.button}
    >
      {" "}
      MiNiFy{" "}
    </Button>
  );
}

Submit.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(Submit);
