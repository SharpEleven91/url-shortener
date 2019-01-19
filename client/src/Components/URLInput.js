import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    margin: 0,
    padding: 0,
    width: 525,
    backgroundColor: "white",
    borderRadius: 11
  },
  cssFocused: {},
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#625772"
    }
  },
  notchedOutline: {}
});
class URLInput extends Component {
  render() {
    const { classes } = this.props;
    return (
      <TextField
        className={classNames(classes.margin, classes.textField)}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
        variant="outlined"
        onChange={this.props.handleChange}
        autoComplete="off"
        id="custom-css-outlined-input"
        onKeyDown={this.props.handleKeyPress}
      />
    );
  }
}

export default withStyles(styles)(URLInput);
