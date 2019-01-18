import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
const styles = theme => ({
  input: {
    display: "none"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200,
    width: 500,
    height: 45
  }
});
class URLInput extends Component {
  render() {
    const inputProps = {
      steps: 300
    };
    const { classes } = this.props;
    return (
      <TextField
        id="urlInput"
        onChange={this.props.handleChange}
        className={classNames(classes.margin, classes.textField)}
        type="url"
        variant="outlined"
        inputProps={inputProps}
      />
    );
  }
}

export default withStyles(styles)(URLInput);
