import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
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
        return (
            <Typography component="h2" variant="h1" gutterBottom> {this.props.result} </Typography>
        )
  }
}

export default withStyles(styles)(URLInput);