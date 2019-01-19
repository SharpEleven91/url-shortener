import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Fade from '@material-ui/core/Fade'
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
class Result extends Component {
    render() {
        return (
          <Fade in={true}>
            <Typography component="h4" variant="h4" gutterBottom> {this.props.result} </Typography>
          </Fade>
        )
  }
}

export default withStyles(styles)(Result);